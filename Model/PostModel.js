const posts = require('../Db/posts');

class PostModel {

    static GetAllPosts(){
        return posts;
    }

    static GetPostById(id){
        return posts.find(post => post.id === id);
    }

    static GetPostByTagNames(tag) {
        return posts.filter(post =>  post.tags.includes(tag));
    }

}

module.exports = PostModel;