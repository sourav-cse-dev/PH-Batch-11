const loadUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      displayUser(data);
    });
};

// dynamically display loaded data
const displayUser = (users) => {
  //   console.log(users);
  const userContainer = document.getElementById("users"); // catching the html id
  for (let i = 0; i < users.length; i++) {
    // const user = users[i];
    // console.log(user);
    let liElement = document.createElement("li"); // creating dynamic element for html based on catched id
    liElement.innerText = users[i].name; // creating dynamic value for the dynamic element
    userContainer.appendChild(liElement); // display the dynamic element with value in window
  }
  //   for (user of users) {
  //     //   console.log(user);
  //     let liElement = document.createElement("li");
  //     liElement.innerText = user.name;
  //     userContainer.appendChild(liElement);
  //   }
};
