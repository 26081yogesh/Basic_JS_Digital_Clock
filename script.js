const toDisplay = document.querySelector(".button-div");

setInterval(() => {
  let date = new Date();
  toDisplay.innerHTML = date.toLocaleTimeString();
}, 1000);
