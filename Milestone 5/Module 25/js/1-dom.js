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

const placesContainer = document.getElementById("places-container");
placesContainer.classList.add("yellow-bg");
placesContainer.classList.add("text-center");

placesContainer.classList.remove("text-center");
placesContainer.classList.toggle("text-center");

