export default class Comments {
    constructor(hikeId, content) {
        this.commentId = Date.now(),
        this.content = content,
        this.hikeId = hikeId,
        this.createdDate = new Date()
    }

    showCommentsList() {
        console.log('showcommentslist working');
    }

    getComments() {
        // if() {

        // } else {

        // }
        return this.comments;
    }

    addComment(postName, comment) {
        const newComment = {
            name: postName,
            comment: comment,
            date: new Date()
        };
        this.comments.push(newCommetn);
        writeToLocalStorage(this.type, this.comments);
    }
}

function writeToLocalStorage(key, data){
    window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(key));
}

function renderCommentList() {
    
}