const handlePost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => displayPost(data));
};

const displayPost = (posts) => {
  //   console.log(posts);
  const postContainer = document.getElementById("postContainer");
  for (post of posts) {
    // console.log(post.title);
    let divElement = document.createElement("div");
    divElement.classList.add("card");
    divElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button>${post.id}</button>
    `;
    postContainer.appendChild(divElement);
  }
};

handlePost();
