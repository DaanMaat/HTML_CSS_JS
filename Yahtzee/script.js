'use strict'

const Player1 = prompt('Type de naam van player 1');
const Player2 = prompt('Type de naam van player 2');
document.querySelector('.p1').textContent = `${Player1}`;
document.querySelector('.p2').textContent = `${Player2}`;
const turn = document.querySelector('#turn');
let turnSelector = Math.floor(Math.random()*3)+1;
let rollsLeft = 3;
const rollButton = document.querySelector('#rollAgain');
const worpen = document.querySelector('#rollsLeft');

const Dice1 = Math.floor(Math.random()*6)+1;
const Dice2 = Math.floor(Math.random()*6)+1;
const Dice3 = Math.floor(Math.random()*6)+1;
const Dice4 = Math.floor(Math.random()*6)+1;
const Dice5 = Math.floor(Math.random()*6)+1;
const Dice6 = Math.floor(Math.random()*6)+1;


if ((turnSelector % 2) == 0) {
    turn.textContent = `${Player1} is aan de beurt, succes!`;
    rollButton.textContent = `Worpen over: ${rollsLeft}`;
    rollButton.addEventListener('click', function(){
        rollsLeft--;
        rollButton.textContent = `Worpen over: ${rollsLeft}`;
    })}
else {turn.textContent = `${Player2} is aan de beurt, succes!`;
        rollButton.classList.remove = 'hidden';
        rollButton.textContent = `Worpen over: ${rollsLeft}`;
    rollButton.addEventListener('click', function(){
        rollsLeft--;
        rollButton.textContent = `Worpen over: ${rollsLeft}`;
    })}

    rollButton.addEventListener('click', function(){
        rollButton.classList.add = 'hidden';
    })