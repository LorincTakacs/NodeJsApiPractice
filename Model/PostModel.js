const posts = require('./Db/posts');

class Post {

    /**
     * Ctr:
     */
    constructor() {
        this.setCreatedAt(); //default
    }

    /**
     * Getters-setters:
     */    
    set setId(id) {
        this._id = id;
    }

    get getId(){
        return this._id;
    }

    set setTitle(title) {
        this._title = title;
    }

    get getTitle() {
        return this._title;
    }    

    set setHeadline(headline){
        this._headline = headline;
    }

    get getHeadline() {
        return this._headline;        
    }

    set setBody(body) {
        this._body = body;
    }

    get getBody(){
        return this._body;
    }

    set setCreatedAt(createdAt = new Date().toISOString()){
        this._createdAt = createdAt;
    }

    get getCreatedAt(){
        return this._createdAt;
    }

    set setTags(tags=[]) {
        this._tags = tags;
    }

    get getTags() {
        return this._tags;
    }
}

const GetAllPosts = () => {
    
}

const GetPostById = (id) => {

}

module.exports = {
    GetAllPosts,
    GetPostById    
};