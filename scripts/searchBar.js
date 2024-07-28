function createSearchBar() {
  if (config.searchBar) {
    let container = document.getElementById("searchBarHolder");
    let content = `
      <a href="#" id="searchButton"><div id="searchBarButton"></div></a>
      <form id="form" onsubmit="return false">
        <input id="searchBar" type="text" placeholder="Search">
      </form>
    `;
    container.className = "searchBarContainer";
    container.insertAdjacentHTML("beforeend", content);
  }
}

function configureSearchBar() {
  if (config.searchBar) {
    let searchBar = document.getElementById("searchBar");
    let form = document.getElementById("form");
    let button = document.getElementById("searchButton");
    let container = document.getElementsByClassName("searchBarContainer")[0];
    searchBar.onfocus = function () {
      container.style.borderWidth = "2px";
      container.style.borderColor = "var(--fg)";
      container.style.borderStyle = "solid";
    };

    let focusout = function () {
      container.style.borderWidth = "none";
      container.style.borderColor = "transparent";
      container.style.borderStyle = "none";
    };

    searchBar.addEventListener("focusout", focusout);

    let submit = function (event) {
      event.preventDefault();
      let searchTerm = searchBar.value;
      if (searchTerm != "") {
        window.location.href = `https://www.google.com/search?q=${searchBar.value}`;
      }
    };

    form.addEventListener("submit", submit);

    button.onclick = function () {
      let searchTerm = searchBar.value;
      if (searchTerm != "") {
        window.location.href = `https://www.google.com/search?q=${searchTerm}`;
      }
    };
  }
}

createSearchBar();
configureSearchBar();
