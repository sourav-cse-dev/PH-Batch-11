console.log("external JS file");

const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = "white";
secondSection.style.backgroundColor = "tomato";

// document.querySelector -> first item of matched elements
// document.querySelectorAll -> NodeList

const secondSectionList = document.getElementById("second-section-list");
const li = document.createElement('li');
li.innerText = "My dynamic list item";
secondSectionList.appendChild(li);

const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1>My dynamic section</h1>
    <p>Extra text added inside paragraph</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
`
mainContainer.appendChild(section);