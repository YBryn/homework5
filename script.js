"use strict";
///// Завдання 1

///// Основи роботи з DOM (2)
const h1 = document.querySelector("body h1");
console.log(h1);

///// DOM дерево
const sectionOne = document.querySelector('.firstSection');
const h2 = sectionOne.querySelectorAll('h2')[0];
console.log(h2);


///// Пункт 5 
const body = document.querySelector('body');
const bodyDiv = body.querySelector('div ul');
console.log(bodyDiv.lastElementChild.previousElementSibling);


///// hatredLevelBlock
const hatredLevelBlock = body.getElementsByClassName('hatredLevelBlock');
console.log(hatredLevelBlock);

