const express = require('express');
const router = express.Router();
const postService = require('../services/postService');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


router.get('/posts', (req, res) => {
    var category = req.query.category;
    var id = req.query.id;
    postService.getPosts(category, id)
    .then (posts => res.json(posts))
});

router.get('/posts/:id', (req, res) => {
    var id = req.params.id;
    console.log(id)
    postService.getPost(id)
    .then (post => res.json(post))
});

router.post('/posts', jsonParser, (req, res) => {
    postService.addPost(req.body)
    .then( 
        post => {
            res.json(post);
        }, 
        error => {
            res.status(400).send(error);
    })
}
);

module.exports = router;