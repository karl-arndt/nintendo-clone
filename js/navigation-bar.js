function navSearchClicked() {
  extendSearch();
}

function extendSearch () {
  let navBar = document.querySelector('.nav-bar');
  let form = document.querySelector('#nav-form');
  navBar.style.height = "65vh";
  form.style.border = "none";
}