class Comment {
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

    set setPostId(postId) {
        this._postId = postId;
    }

    get getPostId(){
        return this._postId;
    }

    set setCreatedAt(createdAt = new Date().toISOString()){
        this._createdAt = createdAt;
    }

    get getCreatedAt(){
        return this._createdAt;
    }

    set setAuthor(author) {
        this._author = author;
    }

    get getAuthor() {
        return this._author;
    }

    set setBody(body) {
        this._body = body;
    }

    get getBody(){
        return this._body;
    }


}