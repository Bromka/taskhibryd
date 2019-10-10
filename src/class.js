export class Comments {
    constructor(post) {
        this.postID = post.postTime;
    }
    addCom(authorCom, text) {
        let comments = JSON.parse(localStorage.getItem(this.postID));
        let single = {};
        single.author = authorCom;
        single.text = text;

        if (comments === null) {
            comments = [];
            comments[0] = single;
        } else {
            comments.push(single);
        }


        localStorage.setItem(this.postID, JSON.stringify(comments));

    }
    countComments() {
        let comments = JSON.parse(localStorage.getItem(this.postID));
        var l = 0;
        if (comments) l = comments.length;
        return l;
    }
    getAllPostComments() {
        let comments = JSON.parse(localStorage.getItem(this.postID));
        if (comments) return comments;
    }
    deleteCommenary(comment) {
        let comments = JSON.parse(localStorage.getItem(this.postID));

        for (let i = 0; i < comments.length; i++) {
            if (comments[i].author == comment.author && comments[i].text == comment.text) {
                comments.splice(i, 1);
            }
            localStorage.setItem(this.postID, JSON.stringify(comments));

        }
    }

}
