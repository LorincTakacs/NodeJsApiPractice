const PostModel = require('../Model/PostModel');

const getAllPosts = (req, res) => {
    try {
        const posts = PostModel.GetAllPosts();
        res.status(200).json(posts);
    } catch (err) {
        //console.error(err);
        return res.status(500).json({message: "Ismeretlen hiba történt"});
    }
};

const getPostById = (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const post = PostModel.GetPostById(id);
        if (!post) {
            return res.status(404).json({ message: "Keresett post nem található!" });
        }
        res.status(200).json(post);

    } catch(err) {
        //console.error(err);
        return res.status(500).json({message: "Ismeretlen hiba történt"});
    }
}

module.exports = {
    getAllPosts,
    getPostById
}
