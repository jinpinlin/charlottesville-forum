from flask import Flask
from flask import request
import io
import os
import sys
# Imports the Google Cloud client library
from google.cloud import vision
from google.cloud.vision import types
from amzsear import AmzSear
import sys
from PIL import Image
import requests
from io import BytesIO
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import base64
import urllib.request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
@app.route("/",methods=['POST'])


# print(os.environ['GOOGLE_APPLICATION_CREDENTIALS'])



#         with urllib.request.urlopen(url) as url:
#             f = io.BytesIO(url.read())
#         img = Image.open(f)
# #         img.show()
#         imgplot = plt.imshow(img)
#         plt.axis('off')
#         plt.show()
#         ans[i] = item

def ImageRecognition():
    content_type = request.headers.get('Content-Type')
    if (content_type.split("/")[0] == 'image'):
        img = "test."+content_type.split("/")[1]
        fp = open("test."+content_type.split("/")[1], "wb")
        fp.write(request.data)
        fp.close()

    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "visionkey.json"
    # Instantiates a client
    client = vision.ImageAnnotatorClient()
    # print(type(img))

    ans = {}

    # The name of the image file to annotate
    file_name = img

    # Loads the image into memory
    with io.open(file_name, 'rb') as image_file:
        content = image_file.read()
    # print(type(content))
    image = types.Image(content=content)
    # print(type(image))
    # Performs label detection on the image file
    response = client.label_detection(image=image)
    # print(type(image))
    labels = response.label_annotations
    safe = response.safe_search_annotation

    image_label = []


    for label in labels:
        # print(label.description)
        image_label.append(str(label.description))


    response = client.safe_search_detection(image=image)
    safe = response.safe_search_annotation
    # Names of likelihood from google.cloud.vision.enums
    likelihood_name = ('UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE',
                        'LIKELY', 'VERY_LIKELY')
    # print('Safe search:')

    # print('adult: {}'.format(likelihood_name[safe.adult]))
    # print('medical: {}'.format(likelihood_name[safe.medical]))
    # print('spoofed: {}'.format(likelihood_name[safe.spoof]))
    # print('violence: {}'.format(likelihood_name[safe.violence]))
    # print('racy: {}'.format(likelihood_name[safe.racy]))

    image_likehood = [str(likelihood_name[safe.adult]), str(likelihood_name[safe.medical]), str(likelihood_name[safe.spoof]),
        str(likelihood_name[safe.violence]),str(likelihood_name[safe.racy])]

    # get object
    image_object = []

    objects = client.object_localization(
        image=image).localized_object_annotations
    # print('Number of objects found: {}'.format(len(objects)))
    for object_ in objects:
        image_object.append(str(object_.name)+" "+str(object_.score))
        # print('\n{} (confidence: {})'.format(object_.name, object_.score))
        # print('Normalized bounding polygon vertices: ')
        # for vertex in object_.bounding_poly.normalized_vertices:
            # print(' - ({}, {})'.format(vertex.x, vertex.y))


    # get best label
    image_best = []
    response = client.web_detection(image=image)
    annotations = response.web_detection

    if annotations.best_guess_labels:
        for label in annotations.best_guess_labels:
            image_best.append(str(label.label))
            # print('\nBest guess label: {}'.format(label.label))
    # get answer
    ans['label'] = image_label
    ans['likehood'] = image_likehood
    safe = "Accepted"
    for i in image_likehood:
        if i != 'VERY_UNLIKELY' and i != 'UNLIKELY':
            safe = 'Image Not Accepted!'
            break
    # print(safe)

    ans['object'] = image_object
    ans['best'] = image_best
    compare = GetItemPrice(str(ans['best'][0]),1)
    # print(ans['object'])
    # print(ans)
    # print(ans['best'])
    result = {}
    result["safe"] = str(safe)
    result["best"] = str(ans["best"][0])
    result["compare"] = compare
    # result = str(result)
    return json.dumps(result)

def GetItemPrice(item = 'ipad', num = 2):
    amz = AmzSear(item)
    ans = {}

    for i in range(0,num):
        item = amz.get(i, default=None, raise_error=True)
        item = item.to_dict()
        # print("Name: "+ str(item['title']))
        # print("Price: "+ str(item['prices']))
        # print(url)
        ans["title"] = str(item["title"])
        ans["prices"] = str(item["prices"])
        ans["url"] = str(item["image_url"])
    return ans





# if __name__ == "__main__":
#     a = 'download.jpeg'
#     b = ImageRecognition(a)
#     print(str(b))
if __name__ == "__main__":
    app.run(host = '0.0.0.0', port = 5000)




