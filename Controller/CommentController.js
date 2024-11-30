const CommentModel = require('../Model/CommentModel');

const getCommentsOnPost = (req, res) => {
    try {
        const postId = parseInt(req.params.id, 10);
        const comments = CommentModel.GetCommentsOnPost(postId);
        if(!comments || comments.length == 0) {
            return res.status(404).json({message: "Ehhez a posthoz nincs még komment!"});
        }
        res.status(200).json(comments);
    } catch (err) {
        return res.status(500).json({message: "Ismeretlen hiba történt!"});        
    }    
}

module.exports = {
    getCommentsOnPost
}