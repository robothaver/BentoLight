function generateButtons() {
  let buttonContainer = document.getElementById("buttonContainer")

  buttons.forEach((button) => {
    let link = document.createElement("a");
    link.className = "buttonLink";
    link.href = button.link;

    if (config.openInNewTab) {
      link.target = "_blank";
    }

    let buttonBody = document.createElement("div");
    buttonBody.className = "button";

    let icon = document.createElement("div");
    icon.style["transition"] = "0.2s ease-in-out";
    icon.className = "buttonLogo";
    icon.style["-webkit-mask"] = `url('${button.icon}') no-repeat center`;
    icon.style["mask"] = `url('${button.icon}') no-repeat center`;
    icon.style["-webkit-mask-size"] = "15%";
    icon.style["background-color"] = "var(--fg)";

    buttonBody.onmouseenter = function () {
      setTimeout(function () { icon.style["background-color"] = "var(--sfg)"; }, 200);
    };

    buttonBody.onmouseleave = function () {
      setTimeout(function () { icon.style["background-color"] = "var(--fg)"; }, 200)
    };

    buttonBody.append(icon);

    link.append(buttonBody);

    buttonContainer.append(link);
  });
}

generateButtons()
