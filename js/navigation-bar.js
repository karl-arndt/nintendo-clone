function navSearchClicked() {
  extendSearch();
  removeElements();
}

function extendSearch () {
  document.querySelector('.nav-bar').style.height = "65vh";
}

function removeElements() {
  document.querySelector('#nav-form').style.border = "none";
  document.querySelector('#right-nav').remove();
}