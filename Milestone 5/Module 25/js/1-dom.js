// console.log("Hello from JS");
// console.log(document);
// console.log(document.body.li);
// console.log(document.li);

const sections = document.querySelectorAll("section");
for(let section of sections){
    section.style.border = "2px solid steelblue";
    section.style.marginBottom = "10px";
    section.style.paddingLeft = "10px";
    section.style.borderRadius = "10px";
    section.style.backgroundColor = "lightgray";
}

// const placesContainer = document.getElementById("places-container");
// placesContainer.style.backgroundColor = "yellow";

// const placesContainer = document.getElementById("places-container");
// placesContainer.classList.add("yellow-bg");
// placesContainer.classList.add("text-center");

// placesContainer.classList.remove("text-center");
// placesContainer.classList.toggle("text-center");

// childNode, parentNode, nextSibling, previousSibling

// const placesContainer = document.getElementById("places-container");
// console.log(placesContainer.childNodes); 
// console.log(placesContainer.childNodes[3]); 
// console.log(placesContainer.childNodes[3].childNodes);
// console.log(placesContainer.childNodes[3].childNodes[5]);
// console.log(placesContainer.childNodes[3].childNodes[5].nextSibling);
// console.log(placesContainer.childNodes[3].childNodes[5].previousSibling);

const placesUl = document.querySelector("#places-container ul");
// console.log(placesUl);

// const li = document.createElement("li");
// li.innerText = "Chattogram";
// console.log(li);

// const li2 = document.createElement("li");
// li2.innerText = "Cox's Bazar";
// console.log(li2);

// placesUl.appendChild(li);
// placesUl.appendChild(li2);
// console.log(placesUl.childNodes);

// console.log(placesUl.parentNode);
// console.log(placesUl.parentNode.parentNode);
// console.log(placesUl.parentNode.parentNode.parentNode);
// console.log(placesUl.parentNode.parentNode.parentNode.parentNode);
// console.log(placesUl.parentNode.parentNode.parentNode.parentNode.parentNode);
// console.log(placesUl.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);


