const HIDDEN_CLASS = 'hidden';
let links;

function toggleItem(itemId, element) {
  const toggleIcon = element.querySelector('.toggle-icon');
  const itemToToggle = document.querySelector(itemId);

  if (itemToToggle.classList.contains(HIDDEN_CLASS)) {
    itemToToggle.classList.remove(HIDDEN_CLASS);
    toggleIcon.innerHTML = '-';
    return;
  }

  toggleIcon.innerHTML = '+';
  itemToToggle.classList.add(HIDDEN_CLASS);
}

function getLinks() {
  if (links) return links;
  links = document.querySelectorAll('[data-type=list-item]');
  return links;
}

function displayLinks(links) {
  links.forEach(link => {
    link.classList.remove(HIDDEN_CLASS);
  })
}

function searchLinks(value) {
  if (typeof value !== 'string' || value.length < 2) {
    displayLinks(getLinks());
    return;
  }

  getLinks()
    .forEach((link) => {
      const stringNotMatches = link.innerHTML.toLowerCase().indexOf(value.toLowerCase()) === -1;
      if (stringNotMatches) {
        link.classList.add(HIDDEN_CLASS);
      }
    });
}
