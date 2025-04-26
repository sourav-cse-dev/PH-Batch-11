// 1. set an event handler to the button
document.getElementById("btn-post-comment").addEventListener(
    'click',
    function(){
        // console.log("Post button clicked");

        // 2. get the text written in the comment textarea
        const textBox = document.getElementById("comment-text-box");
        // console.log(textBox);

        // 3. set the text to a new variable
        const newComment = textBox.value;
        // console.log(newComment);

        // 4. get the parent node
        const commentContainer = document.getElementById("comment-container"); 
        // console.log(commentContainer);

        // 5.  create a new paragraph element to hold new comment
        const newParagraph = document.createElement('p');

        // 6. set the text of the new paragraph to the new comment
        newParagraph.innerText = newComment;

        // 7. set the class of the new paragraph to comment
        newParagraph.classList.add('comment')

        // 8. append the new paragraph to the parent comment container
        commentContainer.appendChild(newParagraph);

        // 9. clear the text box after clicking the post button
        textBox.value = '';
    }
)