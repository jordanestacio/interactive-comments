import {Comment} from "./Comment.js";
// let comment = new Comment;

let requestData = new XMLHttpRequest();
requestData.open("GET", "../../data.json");
requestData.responseType = "json";
requestData.send();

let target = document.querySelector("#comments");

requestData.onload = () => {
    let wrapper = requestData.response;
    for (let i in wrapper.comments) {
        let comment = new Comment("parent", target);
        comment.create(wrapper.comments[i]);

        if(wrapper.comments[i].replies.length > 0){
            for (let index in wrapper.comments[i].replies) {
                let replies = new Comment("child", target);
                replies.create(wrapper.comments[i].replies[index]);
            }
        }
        
    }
}