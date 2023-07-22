
const body = document.querySelector("body");

const images = ["0.jpg", "1.jpg", "2.jpeg"];


const RandomImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${RandomImage}`;

body.appendChild(bgImage);
