function getElementsWithClass(className) {
  return document.querySelectorAll(`.${className}`);
}

function getElementWithId(id) {
  return document.querySelector(`#${id}`);
}

function createElementByTag(tag) {
  return document.createElement(tag);
}

function setInnetText(element, value) {
  element.innerText = value;
}
