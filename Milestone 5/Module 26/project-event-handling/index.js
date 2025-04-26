document.getElementById("btn-update-title").addEventListener(
    'click',
    function(){
        console.log("btn clicked");
        const pageTitleElement = document.getElementById('page-title');
        console.log(pageTitleElement);
        pageTitleElement.innerText = "Updated Page Title Text"
    }
)

document.getElementById("btn-login").addEventListener(
    'click',
    function(){
        console.log('login btn clicked');
        const userInfo = document.getElementById("user-info");
        userInfo.innerText = "User logged in successfully"
    }
)

// set event listener
document.getElementById("btn-update").addEventListener(
    'click',
    function(){
        console.log("Update btn clicked");
        // get the text from the input field
        const inputName = document.getElementById("input-name");
        name = inputName.value;

        const nameField = document.getElementById("name-field").innerText = name;
    }
)