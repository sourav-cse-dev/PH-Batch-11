document.getElementById("btn-update-title").addEventListener(
    'click',
    function(){
        console.log("btn clicked");
        const pageTitleElement = document.getElementById('page-title');
        console.log(pageTitleElement);
        pageTitleElement.innerText = "Updated Page Title Text"
    }
)