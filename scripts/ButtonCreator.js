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

        let icon = document.createElement("img");
        icon.className = "buttonLogo";
        icon.src = button.icon;

        buttonBody.onmouseenter = function () {
            setTimeout(function () {
                icon.classList.add("buttonLogoHovered")
            }, 200);
        };

        buttonBody.onmouseleave = function () {
            setTimeout(function () {
                icon.classList.remove("buttonLogoHovered")
            }, 200);
        };

        buttonBody.append(icon);

        link.append(buttonBody);

        buttonContainer.append(link);
    });
}

generateButtons()
