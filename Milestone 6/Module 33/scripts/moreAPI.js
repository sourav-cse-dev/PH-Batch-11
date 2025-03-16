// json viewer pro chrome extension

const handleLoadUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((r) => r.json())
    .then((d) => {
      console.log(d);
      displayUser(d); //send data as argument to function
    });
};

const displayUser = (users) => {
    //receive data as parameter from the place where it is called
  console.log(users[0]);
};
