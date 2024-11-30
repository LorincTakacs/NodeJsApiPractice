const comments = require('../Db/comments');

class CommentModel {    

    static GetCommentsOnPost(postId){        
        if(!postId){            
            throw new Error("Hiányos kérés!");
        }
        return comments.filter(comments => comments.postId === postId);
    }
}


module.exports = CommentModel;