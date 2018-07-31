import "./homework_15.scss";
import {CommentsBlock} from "./components/comments";
import {Ajax} from "./ajax/ajax";


const comments = new CommentsBlock(document.querySelector('.content'));


let btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
    Ajax.post();
});