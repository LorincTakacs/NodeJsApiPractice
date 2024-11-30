const express = require('express');
const router = express.Router();
const postController = require('../Controller/PostController');

/**
 * Predefined routes
 */
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);

module.exports = router;