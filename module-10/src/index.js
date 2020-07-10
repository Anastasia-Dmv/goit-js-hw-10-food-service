import './styles.css';
 import  './js/menu';


 import './js/localstorage';
 import './js/cart';

 import * as basicLightbox from 'basiclightbox';
 import 'basiclightbox/dist/basicLightbox.min.css';


 const openModalBtnRef = document.querySelector('.js-button');
 const modalTemplate = document.querySelector('#modal');

 const instance = basicLightbox.create(modalTemplate, {
     onShow(instance)  {
         const closeModalBtnRef = getCloseModalBtnRef(instance);
         closeModalBtnRef.addEventListener('click', instance.close);
     },
     onClose(instance){
         const closeModalBtnRef = getCloseModalBtnRef(instance);
         closeModalBtnRef.removeEventListener('click', instance.close);
     },
 });
 openModalBtnRef.addEventListener('click', instance.show);

 function getCloseModalBtnRef(parent){
 return parent.element().querySelector('button[data-close-modal]');
};





 //========================

//  const openModalBtnRef = document.querySelector('.js-button');
//  const modalTemplate = document.querySelector('#modal');

//  const instance = basicLightbox.create(modalTemplate, {
//      onShow: instance => {
//          const closeModalBtnRef = instance
//          .element()
//          .querySelector('button[data-close-modal]');
//          closeModalBtnRef.onclick = instance.close;
//      },
//  });
//  openModalBtnRef.addEventListener('click', instance.show);