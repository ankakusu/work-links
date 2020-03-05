import {collapsibleList} from './components/collapsable-list/collapsable-list.js';

const bodyElement = document.querySelector('body');
console.log(bodyElement);

const listItems = [{
  url: '#x',
  description: 'my super link'
}];
render(collapsibleList(listItems, 'Title 1'), document.body);
