function navSearchClicked() {
  removeElements();
  extendSearch();
  
}

function extendSearch () {
  document.querySelector('.nav-bar').style.height = "65vh";
  document.querySelector('#nav-form').insertBefore(
    document.createElement('input'), document.querySelector('#categories'));
}

function removeElements() {
  document.querySelector('#nav-form').style.border = "none";
  document.querySelector('#right-nav').remove();
  document.querySelector('#search-button').remove();
}