// 1. Where to add
const placesList = document.getElementById('places-list');


// 2. What to add
const li = document.createElement('li');
li.innerText = 'New York City';

// 3. Add the child
placesList.appendChild(li);


const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My Food List";

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Burger';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Pizza';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Shwarma';
ul.appendChild(li3);

section.appendChild(h1);
section.appendChild(ul);
mainContainer.appendChild(section);

const dressSection = document.createElement('section');
dressSection.innerHTML = `
<h1>My Dress List</h1>
<ul>
    <li>Shirt</li>
    <li>Pants</li>
    <li>Jacket</li>
</ul>
`
mainContainer.appendChild(dressSection);