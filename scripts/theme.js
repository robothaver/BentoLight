let theme = localStorage.getItem("theme");

if (theme == null) {
  localStorage.setItem("theme", "dark");
  document.body.setAttribute("data-theme", "dark");
} else {
  document.body.setAttribute("data-theme", theme);
}

function configureThemeButton() {
  let themeIcon = document.getElementById("themeIcon");
  let icon;
  if (theme == "dark") {
    icon = "assets/icons/default/light_mode_icon.svg";
  } else {
    icon = "assets/icons/default/dark_mode_icon.svg";
  }
  themeIcon.style["-webkit-mask"] = `url('${icon}') no-repeat center`;
  themeIcon.style["mask"] = `url('${icon}') no-repeat center`;
}

function changeTheme() {
  if (theme == "dark") {
    theme = "light";
    document.body.setAttribute("data-theme", "light");
  } else {
    theme = "dark";
    document.body.setAttribute("data-theme", "dark");
  }
  localStorage.setItem("theme", theme);
  configureThemeButton();
}

document.getElementById("themeButton").onmousedown = function () {
  changeTheme();
};

configureThemeButton()
