'use strict';
/* Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
Возвращает массив значений определенного свойства prop из каждого объекта в массиве. */

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
// 1-й вариант
/* const getAllPropValues = function (arr, prop) {
    let result = [];
    for (const arrObject of arr) {
        for (const key in arrObject) {
            if (key === prop) { 
                result.push(arrObject[key]) };
        };
    };
    return result;
}; */

// 2-й вариант
/* const getAllPropValues = function (arr, prop) {
    let result = [];
    for (const arrObject of arr) {
        arrObject[prop] !== undefined ? result.push(arrObject[prop]) : [];
    };
    return result;
}; */

// 3-й вариант
const getAllPropValues = function (arr, prop) {
    let result = [];
    for (const arrObject of arr) {
        if (prop in arrObject) {
            result.push(arrObject[prop])
        };
    };
    return result;
};


console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []