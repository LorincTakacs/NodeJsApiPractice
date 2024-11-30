const express = require('express');
const router = express.Router();
const commentController = require('../Controller/CommentController');

/**
 * Predefined routes
 */
router.get('/posts/:id/comments', commentController.getCommentsOnPost);

module.exports = router;