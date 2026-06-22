const themeSwitcher = document.getElementById("themeSwitcher");
let themeManager = localStorage.getItem("theme");

function loadSelectedThemeFromConfig() {
    if (themeManager == null) {
        localStorage.setItem("theme", "dark");
        document.body.setAttribute("data-theme", "dark");
    } else {
        document.body.setAttribute("data-theme", themeManager);
    }
}

function changeTheme() {
    if (themeManager === "dark") {
        themeManager = "light";
        document.body.setAttribute("data-theme", "light");
    } else {
        themeManager = "dark";
        document.body.setAttribute("data-theme", "dark");
    }
    localStorage.setItem("theme", themeManager);
    updateThemeSwitcherIcon()
}

function updateThemeSwitcherIcon() {
    let color = (themeManager === "dark") ? "light" : "dark"
    themeSwitcher.src = `assets/icons/default/${color}_mode_icon.svg`
}

loadSelectedThemeFromConfig()
updateThemeSwitcherIcon()
themeSwitcher.onmousedown = changeTheme