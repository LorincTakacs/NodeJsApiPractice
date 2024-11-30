const comments = require('../Db/comments');

class CommentModel {    

    static GetCommentsOnPost(postId){
        return comments.filter(comments => comments.postId === postId);
    }
}


module.exports = CommentModel;