
import {html, render} from 'https://unpkg.com/lit-html?module';

export const collapsibleList = (links, title, element) => {
  const listItems = links.map((link) => {
    return render(listItem(link), element);
  });
  return html`
    <style>
      
      ul {
        padding: 0;
        list-style: none;
      }
    </style>
    <ul class="collapsible-list">
      <h2 class="">${title}</h2>
      ${listItems.join('\n')}
    </ul>
`;
};

const listItem = (link) => {
  return html`
    <li>
      <a href="${link.url}">${link.description}</a>
    </li>
  `;
};
