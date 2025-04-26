console.log("external JS file");

function makeYellow() {
    document.body.style.backgroundColor = "yellow";
}

function makeRed() {
    document.body.style.backgroundColor = "red";    
}


const btnMakeBlue =  document.getElementById("btn-make-blue");
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = "blue";
}

const btnMakePurple = document.getElementById("btn-make-purple");
btnMakePurple.onclick = makePurple;
function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// getElementById

document.getElementById("btn-make-green").addEventListener(
    'click', 
    function makeGreen(){
        console.log(999);
        document.body.style.backgroundColor = "green";
})

document.getElementById("btn-make-gold").addEventListener(
    'mouseover',
    function makeGolden(){
        document.body.style.backgroundColor = "goldenrod";
})
