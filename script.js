'use strict'

const Player1 = prompt('Type de naam van player 1');
const Player2 = prompt('Type de naam van player 2');
document.querySelector('.p1').textContent = `${Player1}`;
document.querySelector('.p2').textContent = `${Player2}`;

const Dice1 = Math.floor(Math.random()*6)+1;
const Dice2 = Math.floor(Math.random()*6)+1;
const Dice3 = Math.floor(Math.random()*6)+1;
const Dice4 = Math.floor(Math.random()*6)+1;
const Dice5 = Math.floor(Math.random()*6)+1;
const Dice6 = Math.floor(Math.random()*6)+1;