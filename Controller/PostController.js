const PostModel = require('../Model/PostModel');
const validator = require('validator');


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
        if (!post || post.length == 0) {
            return res.status(404).json({ message: "Keresett post nem található!" });
        }
        res.status(200).json(post);

    } catch(err) {
        //console.error(err);
        return res.status(500).json({message: "Ismeretlen hiba történt"});
    }
};

const getPostByTagNames = (req, res) => {
    try {
        let tag = validator.escape(req.params.name);
        const post = PostModel.GetPostByTagNames(tag);
        if (!post || post.length == 0) {
            return res.status(404).json({ message: "Ilyen tag nem létezik!" });
        }
        res.status(200).json(post);
    } catch (err)  {
        return res.status(500).json({message: "Ismeretlen hiba történt"});
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    getPostByTagNames
}
