export{Comment}
import{CardComment} from "../../components/CardComment.js"

class Comment{
    constructor(type, target){
        this.type = type;
        this.target = target;
        this.wrapper;
    }

    data = (wrapper) => {
        return {
            content: wrapper.content,
            createdAt: wrapper.createdAt,
            score: wrapper.score,
            image: wrapper.user.image.webp,
            name: wrapper.user.username
        }
    }
    
    create = (wrapper) => {
        this.target.innerHTML += CardComment(this.data(wrapper));
        
    }
}