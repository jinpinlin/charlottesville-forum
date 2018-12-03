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

  var category = "market";

  var PostModel = require('../models/postModel');
  // var findPostInDynamoDB = (table, id) => {
  //   var docClient = new AWS.DynamoDB.DocumentClient();
  //   var params = {
  //       TableName: table,
  //       Key:{
  //           "id": id,
  //       }                                                                                                                                                                                                                                                                                                                                                                                                   
  //   };
  //   docClient.get(params, (err, data) => {
  //       if (err) {
  //           console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
  //       } else {
  //            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
  //       }
  //   }); 
  // }
  // findPostInDynamoDB(table, id);

var getPosts = () => new Promise(
  (resolve, reject) => {
    PostModel.marketPostModel.find().sort({'created': -1}).exec(
      (err, posts) => {
        if (err) reject(err);
        else resolve(posts);
      }
    );
  }
);


// var getPostsCategory = (category, table) => {
//   var docClient = new AWS.DynamoDB.DocumentClient();
//   var params = {
//     TableName: table,
//     KeyConditionExpression: "#cat = :cat",
//       ExpressionAttributeNames:{
//           "#yr": "category"
//       },
//       ExpressionAttributeValues: {
//           ":cat":category
//       }
//     }                                                                                                                                                                                                                                                                                                                                                                                                   
  
//   return docClient.query(params).promise(); 
// }


var getPost = id => new Promise(
  (resolve, reject) => {
    PostModel.marketPostModel.findOne(
      {id: id},
      (err, post) => {
        if (err) reject(err);
        else resolve(post);
      }
    );
  }
);

// var getPost = (id, table) => {
//   var docClient = new AWS.DynamoDB.DocumentClient();
//   var params = {
//       TableName: table,
//       Key:{
//           "id": id,
//       }                                                                                                                                                                                                                                                                                                                                                                                                   
//   };
//   return docClient.get(params).promise(); 
// }

// getPost(id, table).then(
//   data => console.log(data)
// ).catch(
//   err => console.log(err)
// );

var addPost = newPost => new Promise(
    (resolve, reject) => {
      PostModel.marketPostModel.findOne(
        {id: id},
        (err, post) => {
          PostModel.marketPostModel.countDocuments({},
            (err,num) => {
              newPost.id = (+num + 1).toString();
              var mongoPost = new PostModel.marketPostModel(newPost);
              mongoPost.save();
              resolve(newPost);
            });
        }
      );
    }
);


module.exports = {
    getPosts: getPosts,
    getPost: getPost,
    addPost: addPost

}