export {CardComment};

const CardComment = (wrapper) => {
    let comment = `<div class="card gap-1">
        <div class="input-amount vertical bg-light-gray">
            <button class="btn-primary">+</button>
            <span class="text-primary bold">${wrapper.score}</span>
            <button class="btn-primary">-</button>
        </div>
        
        <div class="vertical w-100 gap-05">
            <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                    <img class="mr-1 thumb" src="${wrapper.image}" alt="">
                
                    <span class="text-dark bold mr-1">${wrapper.name}</span>
                    <span>${wrapper.createdAt}</span>
                </div>
                <button class="btn-primary gap-05">
                    <img src="/images/icon-reply.svg" alt=""></img>
                    Reply
                </button>
            </div>
        <span>
            ${wrapper.content}
        </span>
        </div>
    </div>`
    return comment;
}
