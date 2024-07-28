const original = "#57a0d9";
const mint = "#4CD9A4";
const crimson = "#F5004F";
const pinky = "#E3A5C7";

function setColor() {
  let selectedColor;

  switch (config.theme.toLowerCase()) {
    case "original":
      selectedColor = original;
      break
    case "mint":
      selectedColor = mint;
      break
    case "crimson":
      selectedColor = crimson;
      break
    case "pinky":
      selectedColor = pinky;
      break
  }
  document.documentElement.style.setProperty("--accent", selectedColor);
}

setColor()
