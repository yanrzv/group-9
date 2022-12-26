
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

 const refs = {
    
  };


document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close'),
       body = document.querySelector('body');

   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
          overlay.classList.add('active');
          body.classList.add('no-scroll');
      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
          overlay.classList.remove('active');
          body.classList.remove('no-scroll');
      });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
            document.querySelector('body').classList.remove('no-scroll');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('body').classList.remove('no-scroll');
        this.classList.remove('active');
    });




}); // end ready


// <!-- Элементы для вызова модальных окон, могут быть любые -->

// <a href="#" class="js-open-modal" data-modal="1">Открыть окно 1</a>
// <a href="#" class="js-open-modal" data-modal="2">Открыть окно 2</a>

// <!-- Несколько модальных окон -->

// <div class="modal" data-modal="1">
//   <!--   Svg иконка для закрытия окна  -->
//   <svg
//     class="modal__cross js-modal-close"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//   >
//     <path
//       d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
//     />
//   </svg>
//   <p class="modal__title"></p>
// </div>

// <div class="modal" data-modal="2">
//   <!--   Svg иконка для закрытия окна  -->
//   <svg
//     class="modal__cross js-modal-close"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//   >
//     <path
//       d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
//     />
//   </svg>
//   <p class="modal__title">Заголовок окна 2</p>
// </div>



/* Стили для подложки */

// .overlay {

//     /* Скрываем подложку  */
//     opacity: 0;
//     visibility: hidden;

//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, .5);
//     z-index: 20;
//     transition: .3s all;
// }


// /* Стили для модальных окон */

// .modal {

//     /* Скрываем окна  */
//     opacity: 0;
//     visibility: hidden;


//     /*  Установаем ширину окна  */
//     width: 100%;
//     max-width: 500px;

//     /*  Центрируем и задаем z-index */
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: 30;
//     /* Должен быть выше чем у подложки*/

//     /*  Побочные стили   */
//     box-shadow: 0 3px 10px -.5px rgba(0, 0, 0, .2);
//     text-align: center;
//     padding: 30px;
//     border-radius: 3px;
//     background-color: #fff;
//     transition: 0.3s all;
// }


// /* Стили для активных классов подложки и окна */

// .modal.active,
// .overlay.active {
//     opacity: 1;
//     visibility: visible;
// }


// /* Стили для кнопки закрытия */

// .modal__cross {
//     width: 15px;
//     height: 15px;
//     position: absolute;
//     top: 20px;
//     right: 20px;
//     fill: #444;
//     cursor: pointer;
// }


// /* Стили для кнопок. Мы ведь порядочные разработчики, негоже простые ссылки оставлять */

// a {
//     padding: 20px;
//     display: inline-block;
//     text-decoration: none;
//     background-color: #414b52;
//     margin: 10px;
//     color: #fff;
//     border-radius: 3px;
// }