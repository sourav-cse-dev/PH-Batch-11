// 1. set an event handler to the button
document.getElementById("btn-post-comment").addEventListener(
    'click',
    function(){
        // 2. Get the text written in the comment text

        const commentContainer = document.getElementById("comment-container"); 
    
        const textBox = document.getElementById("comment-text-box");
        const newComment = textBox.value;
        const newParagraph = document.createElement('p');
        newParagraph.innerText = newComment;
        newParagraph.classList.add('comment')


        commentContainer.appendChild(newParagraph);

        textBox.value = '';


    }
)