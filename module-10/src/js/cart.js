






























//  itemBox = document.querySelector('.menu__item');
// cartCont = document.querySelector('#cart_content');
//  // Получаем данные из LocalStorage
// function getCartData(){
//     return JSON.parse(localStorage.getItem('cart'));
//   }
//   // Записываем данные в LocalStorage
//   function setCartData(o){
//     localStorage.setItem('cart', JSON.stringify(o));
//     return false;
//   }

// function addToCart(e){
//     let cartData = getCartData() || {},

//     parentBox = e.currentTarget.parentNode.parentNode;
//     itemId = parentBox.getAttribute('id');
//     itemTitle = parentBox.querySelector('.card__name').textContent;
//     itemPrice = parentBox.querySelector('.card__price').lastChild.textContent;
//      if(cartData.hasOwnProperty(itemId)){
//          cartData[itemId][2] += 1;  
//            } else {
//                cartData[itemId] = [itemTitle, itemPrice, 1];
//            }
//            if(!setCartData(cartData)){

//            }
//            return false;
// };

// for (let i = 0; i < itemBox.length; i += 1){
//     itemBox[i].querySelector('.card__button').addEventListener( 'click', addToCart);
// };
// function openCart(){
//     let cartData = getCartData(),
//     totalItems = '';

//     if(cartData !== null){
//         totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
//         for(var items in cartData){
//             totalItems += '<tr>';
//             for(var i = 0; i < cartData[items].length; i += 1){
//               totalItems += '<td>' + cartData[items][i] + '</td>';
//             }
//             totalItems += '</tr>';
//           }
//           totalItems += '</table>';
//           cartCont.innerHTML = totalItems;
//         } else {
//           // если в корзине пусто, то сигнализируем об этом
//           cartCont.innerHTML = 'В корзине пусто!';
//         }
//         return false;
// };
// btnCart = document.querySelector('.js-button');
// btnCart.addEventListener( 'click', openCart);
    


// //==================

