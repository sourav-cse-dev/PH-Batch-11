const loadPhotos = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => displayPhotos(data));
};

const displayPhotos = (photos) => {
  photoContainer = document.getElementById("photoContainer");
  for (photo of photos) {
    let photoElement = document.createElement("div");
    photoElement.innerHTML = `
        <h2>${photo.id}</h2>
        <p>${photo.title}</p>
        <img src="${photo.url}">
        <img src="${photo.thumbnailUrl}">
        `;
    photoContainer.appendChild(photoElement);
  }
};

loadPhotos();
