# Need Gmail credential in json format.

from __future__ import print_function
# import Gmail api
from googleapiclient.discovery import build
from httplib2 import Http
import pymongo
# inserting data in MongoDB 
from pymongo import MongoClient 
# for authentication
from oauth2client import file, client, tools
from oauth2client.file import Storage
# transform the date format
import dateutil.parser
# upload files to S3
import boto3
import os
import json
import re
import sys
from flask import Flask
from flask import request
from flask_cors import CORS
from googleapiclient import errors
import base64
import email
import logging


app = Flask(__name__)
CORS(app)
@app.route("/",methods=['POST'])

# If modifying these scopes, delete the file token.json.

def main():
    """Shows basic usage of the Gmail API.
    Lists the user's Gmail labels.
    
    """
    SCOPES = 'https://www.googleapis.com/auth/gmail.readonly'
    store = file.Storage('./temp/token.json')
    creds = store.get()
    if not creds or creds.invalid:
        flow = client.flow_from_clientsecrets('forum.json', SCOPES)
        creds = tools.run_flow(flow, store)
    service = build('gmail', 'v1', http=creds.authorize(Http()),cache_discovery=False)

    # Call the Gmail API
    results = service.users().labels().list(userId='me').execute()
    labels = results.get('labels', [])

    list_message = ListMessagesMatchingQuery(service,user_id="me", query='CSSS')

    list_message = list_message[0:1]
    length = len(list_message)


    for message_ids in list_message:
        id = message_ids.get('id')
        message = service.users().messages().get(userId='me', id=id,
                                                format='full').execute()
        message = json.dumps(message)
        cwd = os.getcwd()  
        file_name = os.path.join(cwd ,id+".json")
        with open(file_name, 'w') as f:
            f.write(message)
        
        # upload all the emails data to the S3 bucket.
        bucketName = "cvilleforumtest"
        Key = id+".json"
        s3 = boto3.client('s3')
        s3.upload_file(file_name,bucketName, 'EmailsData/{}'.format(Key))
        os.remove(file_name)


        # upload the json file to DynamoDB        
        data = service.users().messages().get(userId='me', id=id,
                                                format='full').execute()   
        id = data['id']

        store_dir = cwd
        url = GetAttachments(service, 'me', id, store_dir)
        
        # DynamoDB don't allow String length equal to 0
        snippet =  data['snippet']
        if data['snippet'] == '':
            snippet = 'None'
        mime_type = data['payload']['mimeType']
        # print(id,'\n',snippet,'\n',mime_type,'\n',history_id,'\n',internal_date)
        len_headers = len(data['payload']['headers'])
        email_from = []
        attachment = False


        # Get the user and email address
        for i in range(0,len_headers):
            if data['payload']['headers'][i]['name'] == 'From':
                email_from = data['payload']['headers'][i]['value'].split('<')
                if len(email_from) > 1:
                    email_name = email_from[0].strip()
                    email_address = email_from[1]
                    email_address = re.sub('>', '', email_address)
                    if email_name == '':
                        email_name = 'None'
                    if email_address == '':
                        email_address = 'None'
                else:
                    email_name = email_from
                    email_address = 'None'


            if data['payload']['headers'][i]['name'] == 'Date':
                email_date = data['payload']['headers'][i]['value']
            if data['payload']['headers'][i]['name'] == 'Subject':
                email_subject = data['payload']['headers'][i]['value']

                
        # print(email_from,'\n',email_date,'\n',email_subject,'\n',email_authentication)
        
        # attachment_ids = {}
        
        if mime_type == "multipart/mixed":
            len_parts = len(data['payload']['parts'])
            if len_parts >= 2:
                attachment = True
                # print(attachment)
                # for i in range(1, len_parts):
                #     if data['payload']['parts'][i]['mimeType'] != ('text/plain' and 'text/html'):
                #         dic = {}
                #         dic["S"] = data['payload']['parts'][i]['body']['attachmentId']
                #         attachment_ids[str(i)] = dic
                #         attachment_number = len(attachment_ids)
                #         print(attachment_number)
                            # attachment_ids.append(data['payload']['parts'][i]['body']['attachmentId'])
        translate = boto3.client(service_name='translate', region_name='us-east-1', use_ssl=True)
        result = translate.translate_text(Text=str(snippet), SourceLanguageCode="zh", TargetLanguageCode="en")
        snippet_en = result.get('TranslatedText')
        result_2 =  translate.translate_text(Text=str(email_subject), SourceLanguageCode="zh", TargetLanguageCode="en")
        email_subject_en = result_2.get('TranslatedText')            

        datestring = re.sub("[\(\[].*?[\)\]]", "", str(email_date))
        yourdate = dateutil.parser.parse(datestring)
        yourdate = yourdate.replace(tzinfo=None)
        yourdate = str(yourdate)
        yourdate = re.sub(" ","T",yourdate)
        email_date = yourdate

        # give the category 
        rides_list = ('ride','drive','rides','windmill','iad')
        renting_list = ('rent','roommates','house','apartments',)
        market_list = ('$','items','sell','selling','purchased',"out of","sale")
        category = 'others'

        category_string =  email_subject_en+" "+snippet_en
        category_string = category_string.lower()
        if any(s in category_string for s in rides_list):
            category = 'rides'
        if any(s in category_string for s in renting_list):
            category = 'renting'
        if any(s in category_string for s in market_list):
            category = 'market'
        Item={
                'id': id,
                'desc': snippet,
                'desc_en' : snippet_en,
                'user': email_name,
                'email': email_address,
                'created': email_date,
                'title': email_subject,
                'title_en': email_subject_en,
                'attachment': attachment,
                'category' : category,
                'imagePaths' : url
        }
        # print(Item)
        #Upload data to DynamoDB 

        # response = table.put_item(
        #     Item={
        #         'id': id,
        #         'desc': snippet,
        #         'desc_en' : snippet_en,
        #         'user': email_name,
        #         'email': email_address,
        #         'created': email_date,
        #         'title': email_subject,
        #         'title_en': email_subject_en,
        #         'attachment': attachment,
        #         'category' : category,
        #         'imagePaths' : url
        #     }
        # )
      
        try: 
            conn = MongoClient("mongodb://kailuo:lk19931214@ds149030.mlab.com:49030/forum_email") 
            # print("Connected successfully!!!") 
        except:   
            print("Could not connect to MongoDB") 
        
        # database 
        db = conn.forum_email
        
        # Created or Switched to collection names: my_gfg_collection 
        collection = db.basepostmodels 
        
        # Insert Data 
        rec_id1 = collection.insert_one(Item) 
        # print("Data inserted with record ids",rec_id1)
        # sys.stdout = sys.stderr = open('log.txt','wt')


        return(str(Item)+'\n'+str(rec_id1))





def ListMessagesMatchingQuery(service, user_id, query=''):
  """List all Messages of the user's mailbox matching the query.

  Args:
    service: Authorized Gmail API service instance.
    user_id: User's email address. The special value "me"
    can be used to indicate the authenticated user.
    query: String used to filter messages returned.
    Eg.- 'from:user@some_domain.com' for Messages from a particular sender.

  Returns:
    List of Messages that match the criteria of the query. Note that the
    returned list contains Message IDs, you must use get with the
    appropriate ID to get the details of a Message.
  """
  try:
    response = service.users().messages().list(userId=user_id,
                                               q=query).execute()
    messages = []
    if 'messages' in response:
      messages.extend(response['messages'])

    while 'nextPageToken' in response:
      page_token = response['nextPageToken']
      response = service.users().messages().list(userId=user_id, q=query,
                                         pageToken=page_token).execute()
      messages.extend(response['messages'])
    
    # print(messages)
    return messages
  except errors.HttpError as error:
    print ('An error occurred: %s' % error)


def ListMessagesWithLabels(service, user_id, label_ids=[]):
  """List all Messages of the user's mailbox with label_ids applied.

  Args:
    service: Authorized Gmail API service instance.
    user_id: User's email address. The special value "me"
    can be used to indicate the authenticated user.
    label_ids: Only return Messages with these labelIds applied.

  Returns:
    List of Messages that have all required Labels applied. Note that the
    returned list contains Message IDs, you must use get with the
    appropriate id to get the details of a Message.
  """
  try:
    response = service.users().messages().list(userId=user_id,
                                               labelIds=label_ids).execute()
    messages = []
    if 'messages' in response:
      messages.extend(response['messages'])

    while 'nextPageToken' in response:
      page_token = response['nextPageToken']
      response = service.users().messages().list(userId=user_id,
                                                 labelIds=label_ids,
                                                 pageToken=page_token).execute()
      messages.extend(response['messages'])

    return messages
  except errors.HttpError as error:
    print ('An error occurred: %s' % error)

"""Get Message with given ID.
"""



def GetMessage(service, user_id, msg_id):
  """Get a Message with given ID.

  Args:
    service: Authorized Gmail API service instance.
    user_id: User's email address. The special value "me"
    can be used to indicate the authenticated user.
    msg_id: The ID of the Message required.

  Returns:
    A Message.
  """
  try:
    message = service.users().messages().get(userId=user_id, id=msg_id).execute()

    # print('Message snippet: %s' % message['snippet'])

    return message
  except errors.HttpError as error:
    print('An error occurred: %s' % error)


def GetMimeMessage(service, user_id, msg_id):
  """Get a Message and use it to create a MIME Message.

  Args:
    service: Authorized Gmail API service instance.
    user_id: User's email address. The special value "me"
    can be used to indicate the authenticated user.
    msg_id: The ID of the Message required.

  Returns:
    A MIME Message, consisting of data from Message.
  """
  try:
    message = service.users().messages().get(userId=user_id, id=msg_id,
                                             format='raw').execute()

    # print('Message snippet: %s' % message['snippet'])

    msg_str = base64.urlsafe_b64decode(message['raw'].encode('ASCII'))

    mime_msg = email.message_from_string(msg_str)

    return mime_msg
  except errors.HttpError as error:
    print('An error occurred: %s' % error)



def GetAttachments(service, user_id, msg_id, store_dir):
    """Get and store attachment from Message with given id.
        Args:
            service: Authorized Gmail API service instance.
            user_id: User's email address. The special value "me"
                can be used to indicate the authenticated user.
            msg_id: ID of Message containing attachment.
            store_dir: The directory used to store attachments.
    """
    url = []    

    try:
        message = service.users().messages().get(userId=user_id, id=msg_id).execute()
        parts = [message['payload']]
        while parts:
            part = parts.pop()
            if part.get('parts'):
                parts.extend(part['parts'])
            if part.get('filename'):
                if 'data' in part['body']:
                    file_data = base64.urlsafe_b64decode(part['body']['data'].encode('UTF-8'))
                    #self.stdout.write('FileData for %s, %s found! size: %s' % (message['id'], part['filename'], part['size']))
                elif 'attachmentId' in part['body']:
                    attachment = service.users().messages().attachments().get(
                        userId=user_id, messageId=message['id'], id=part['body']['attachmentId']
                    ).execute()
                    file_data = base64.urlsafe_b64decode(attachment['data'].encode('UTF-8'))
                    #self.stdout.write('FileData for %s, %s found! size: %s' % (message['id'], part['filename'], attachment['size']))
                else:
                    file_data = None
                if file_data:
                    #do some staff, e.g.
                    name = part['filename']
                    real_name = re.sub(" ", "+", str(name))
                    path = ''.join([store_dir, real_name])
                    with open(path, 'wb') as f:
                        f.write(file_data)
             
                    # upload to S3
                    url_front = "https://s3.amazonaws.com/cvilleforumtest/EmailsAttachment/"

                    bucketName = "cvilleforumtest"
                    Key = msg_id+'_'+str(real_name)
                    new_url = url_front + Key
                    url.append(new_url)
                    s3 = boto3.client('s3')
                    s3.upload_file(path,bucketName, 'EmailsAttachment/{}'.format(Key))

                    os.remove(path)
    except errors.HttpError as error:
        print('An error occurred: %s' % error)
    return url
            

# if __name__ == '__main__':
#     main()
if __name__ == "__main__":
    app.debug= True
    logging.basicConfig(filename = 'error.log', level = logging.DEBUG)
    app.run(host = '0.0.0.0', port = 5001)