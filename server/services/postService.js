const sampleData1 = require('../samples/166bfaabf1bc10df.json');
const sampleData2 = require('../samples/166ca5af70615e18.json');

var MARKETPOSTS = [
    {
      'id': '0',
      'title': sampleData2.payload.headers.find(x => x.name === 'Subject').value,
      'desc': sampleData2.snippet,
      'user': sampleData2.payload.headers.find(x => x.name === 'From').value,
      'email': 'test1@test.com',
      'category': 'market',
      'nego': false,
      'imagePaths': [
        'http://media.4rgos.it/i/Argos/5399785_R_Z001A?$Web$&$DefaultPDP570$'
      ],
      'marketItems':
      [
        {
          'itemName': '\u81EA\u884C\u8F66',
          'itemNum': 1,
          'price': 55,
          'image': 'https://img13.360buyimg.com/n1/jfs/t27568/266/313579453/435818/ba562940/5b8e2eefN8e950904.jpg'
        },
        {
          'itemName': '\u81EA\u884C\u8F66',
          'itemNum': 1,
          'price': 55,
          'image': 'https://img13.360buyimg.com/n1/jfs/t27568/266/313579453/435818/ba562940/5b8e2eefN8e950904.jpg'
        }
      ]
    },
    {
      'id':'1',
      'title':'sell the pan',
      'desc':'I want to sell the pan, see the price and fig below',
      'user':'Doug <mmagou2017@gmail.com>',
      'email':'test2@test.com',
      'category':'market',
      'nego':true,
      'imagePaths':
      [
        'http://pic.baike.soso.com/p/20140521/20140521204520-544920324.jpg'
      ],
      'marketItems':
      [
        {
          'itemName': 'pan',
          'itemNum': 1,
          'price': 5,
          'image': 'https://mail.google.com/mail/u/1?ui=2&ik=2957901240&attid=0.1.7.0.1&permmsgid=msg-f:1617215063408365338&th=1671808823ddcf1a&view=att&disp=safe&realattid=f_johydzw82'
        }
      ]
    },
    {
      'id': '2',
      'title': sampleData1.payload.headers.find(x => x.name === 'Subject').value,
      'desc':sampleData1.snippet,
      'user':sampleData1.payload.headers.find(x => x.name === 'From').value,
      'email':'test3@test.com',
      'category':'market',
      'nego': true,
      'imagePaths':
      [
        'http://pic.baike.soso.com/p/20140521/20140521204520-544920324.jpg'
      ],
      'marketItems':
      [
        {
          itemName: undefined,
          itemNum: undefined,
          price: undefined,
          image: 'http://pic.baike.soso.com/p/20140521/20140521204520-544920324.jpg'
        }
      ]
    }
  ];

  var AWS = require('aws-sdk');

  const dynamodb_config_location = '/home/jp_l/.aws/dynamodb_config.json';
  AWS.config.loadFromPath(dynamodb_config_location);
  AWS.config.apiVersions = {
      dynamodb: '2012-08-10',
      };
  AWS.config.update({
      endpoint: 'dynamodb.us-east-1.amazonaws.com'
  });
  var table = "forum_email";
    
  var id = '1675fff8c026b60f';

  var findPostInDynamoDB = (table, id) => {
    var docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
        TableName: table,
        Key:{
            "id": id,
        }                                                                                                                                                                                                                                                                                                                                                                                                   
    };
    docClient.get(params, (err, data) => {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
             console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
    }); 
  }
  findPostInDynamoDB(table, id);


var getPosts = () => new Promise(
    (resolve, reject) => {
        resolve(MARKETPOSTS)
    }
);

var getPost = id => new Promise(
    (resolve, reject) => {
        resolve(MARKETPOSTS.find( post =>  post.id === id));
    }
);

var addPost = newPost => new Promise(
    (resolve, reject) => {
        if(MARKETPOSTS.find( post =>  post.id === newPost.id)){
            reject('Post already exists.');
        }
        else {
            MARKETPOSTS.push(newPost);
            resolve(newPost);
        }
    }
);

module.exports = {
    getPosts: getPosts,
    getPost: getPost,
    addPost: addPost

}