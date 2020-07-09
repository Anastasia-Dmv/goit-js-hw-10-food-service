
import itemsTemplate from '../templates/menu-items.hbs';
import menu  from '../menu.json';

import '../styles.css';

   
const markup = itemsTemplate(menu);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);
//   console.log(markup);