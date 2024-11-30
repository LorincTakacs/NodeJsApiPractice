const posts = require('../Db/posts');

class PostModel {

    static GetAllPosts(){
        return posts;
    }

    static GetPostById(id){
        return posts.find(post => post.id === id);
    }


}

module.exports = PostModel;