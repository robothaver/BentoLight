function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function getRandomBackgroundImage() {
  let image = backgroundImages[getRandomIndex(backgroundImages.length)];
  let background = document.getElementById("backgroundImage");
  background.style["background-image"] = `url("${image}")`
}

function setBackground() {
  if (config.imageBackground) {
    getRandomBackgroundImage();
  } else {
    let overlay = document.getElementById("overlay");
    overlay.style.backgroundImage = "none";
    overlay.style["background-color"] = "var(--background)";
  }
}

setBackground()
