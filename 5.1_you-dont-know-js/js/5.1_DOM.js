'use strict';

const item = document.querySelectorAll('.item');
const propsItemFour = document.querySelectorAll('.props__item_four');
const propsItemFive = document.querySelectorAll('.props__item_five');
const propsList = document.querySelectorAll('.props__list');
const itemTitle = document.querySelectorAll('.item__title');
const propsItemTwo = document.querySelectorAll('.props__item_two');


// перенос большой карточки
item[4].before(item[0]);

// перенос из списка `ES6 и не только` в
// список `Типы и грамматические конструкции`
console.log(propsItemFour);
propsItemFour[3].before(propsItemFour[5]);

// перенос из `Замыкания и объекты` в `Область видимости и замыкание`
console.log(propsItemFive);
console.log(propsList);
propsList[4].before(propsList[3]);

// перенос из `Область видимости и замыкание` в `Замыкания и объекты`
console.log(itemTitle);
itemTitle[2].after(propsList[4]);

// перенос хвоста спика `ES6 и не только`
// из списка `Асинхронная обработка и оптимизация`
console.log(propsItemTwo);
propsItemTwo[7].after(propsItemTwo[8], (propsItemTwo[9]));
