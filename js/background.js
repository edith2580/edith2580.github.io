const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
];

const chooseImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");
bgimage.src = `img/${chooseImage}`;
bgimage.id = "bgImage";

document.body.appendChild(bgimage);
