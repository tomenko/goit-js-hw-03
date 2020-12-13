'use strict';
/* Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта(значение свойства name).
Возвращает общую стоимость продукта(цена * количество). */

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

// 1-й вариант
/* const calculateTotalPrice = function(allProdcuts, productName) {
    let result;
    for (const arrObject of allProdcuts) {
        for (const key in arrObject) {
            if (arrObject[key] === productName) { 
                result = (arrObject.price * arrObject.quantity); };
        };
    };
    return result;
};  */



// 2-й вариант
const calculateTotalPrice = function (allProdcuts, productName) {
    let result = 0;
    for (const arrObject of allProdcuts) {
        if (arrObject.name === productName) {
            result = (arrObject.price * arrObject.quantity);
        };
    };
    return result;
};
 

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800