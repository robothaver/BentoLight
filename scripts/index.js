import { setBackground } from "/scripts/background.js";
import { generateButtons } from "/scripts/buttons.js";
import { setTheme } from "/scripts/theme.js"
import { setColor } from "/scripts/color.js"
import { createSearchBar, configureSearchBar } from "/scripts/searchBar.js"
import { updateDate, updateClockAndGreet } from "/scripts/update.js";

let buttonContainer = document.getElementById("buttonContainer");

// Configure background
setBackground();

// Set theme
setTheme()
setColor()

// Creating search bar
createSearchBar()
configureSearchBar()

// Start updating date and time
updateDate();
updateClockAndGreet();
