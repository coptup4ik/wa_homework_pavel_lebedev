import {Ajax} from "../ajax/ajax";

export class CommentsBlock {
    constructor(target) {
        this.target = target;
        this.emptyArray = [];
        Ajax.get(
            (list) => {
                this.renderList(list);
            })
    }


    renderList(list) {
        list.forEach(item => {
            this.createCommentsBlock();
            this.target.appendChild(this.commentBlock);
            this.author.innerText = item.author;
            this.comment.innerText = item.text;
            this.date.innerText = item.date;
        })
    }

    createCommentsBlock() {

        this.commentBlock = document.createElement('DIV');
        this.commentBlock.classList.add('commentsBlock');


        this.author = document.createElement('DIV');
        this.author.classList.add('author');



        this.comment = document.createElement('DIV');

        this.comment.classList.add('comment');


        this.date = document.createElement('DIV');

        this.date.classList.add('date');


        this.commentBlock.appendChild(this.author);
        this.commentBlock.appendChild(this.comment);
        this.commentBlock.appendChild(this.date);


        this.emptyArray.push(this.commentBlock)
    }
}