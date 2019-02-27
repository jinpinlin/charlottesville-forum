const uuidv4 = require('uuid/v4');
const AWS = require('aws-sdk');

// const dynamodb_config_location = 'C:\\Users\\jl4sh\\Documents\\charlottesville-forum\\server\\credentials\\aws_config.json';
// AWS.config.loadFromPath(dynamodb_config_location);
AWS.config.apiVersions = {
    dynamodb: '2012-08-10',
    // s3: '2006-03-01'
    };

// var table = "forum_email";

// var id = '1675fff8c026b60f';

// var category = "market";

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

var getPosts = (category, id) => new Promise(
  (resolve, reject) => {
    find_params = {};
    if (category) find_params['category'] = category;
    if (id) find_params['id'] = id;
    console.log(find_params);
    PostModel.basePostModel.find(find_params).sort({ 'created': -1 }).exec(
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


// var getPost = id => new Promise(
//   (resolve, reject) => {
//     PostModel.basePostModel.findOne(
//       { id: id },
//       (err, post) => {
//         if (err) reject(err);
//         else resolve(post);
//       }
//     );
//   }
// );

var getPost = id => PostModel.basePostModel.findOne(
      { id: id });

// var s3 = new AWS.S3();

// id = '15dae937f12f5105'
// prefix_attachment = "EmailsAttachment/";
// prefix_id = id;
// prefix_all=prefix_attachment + prefix_id;
// console.log(prefix_all)

// var params = {
//   Bucket: 'cville-forum', /* required */
//   Prefix: prefix_all
// };
// s3.listObjectsV2(params, (err, data) => {console.log(data.Contents[0]); console.log(err)})

// s3.getSignedUrl('getObject', params, function (err, url) {
//   console.log('The URL is', url);
// });



// for obj in objs:
//     # path, filename = os.path.split(obj.key)
//     ans = 'https://s3.amazonaws.com/cville-forum/' + str(obj.key)
//     print(ans)

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
    PostModel.basePostModel.findOne(
      { id: newPost.id },
      (err, post) => {
        console.log(post);
        PostModel.basePostModel.countDocuments({},
          (err, num) => {
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