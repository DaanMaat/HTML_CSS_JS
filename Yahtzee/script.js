'use strict'

const Player1 = prompt('Type de naam van player 1');
const Player2 = prompt('Type de naam van player 2');
document.querySelector('.p1').textContent = `${Player1}`;
document.querySelector('.p2').textContent = `${Player2}`;
const turn = document.querySelector('#turn');
let turnSelector = Math.floor(Math.random()*5)+1;
let rollsLeft = 3;
const rollButton = document.querySelector('#rollAgain');
const worpen = document.querySelector('#rollsLeft');
const nextTurnButton = document.querySelector('#nextTurn');
nextTurnButton.textContent = 'Volgende beurt';

let p1scoreTop = 0;
let p1scoreBottom = 0;
let p1bonus = 0;
let p1totalScore = 0;
let p1score1 = 0;
let p1score2 = 0;
let p1score3 = 0;
let p1score4 = 0;
let p1score5 = 0;
let p1score6 = 0;
let p1TOK = 0;
let p1Caree = 0;
let p1FullHouse = 0;
let p1KStraat = 0;
let p1GStraat = 0;
let p1Yahtzee = 0;
let p1Chance = 0;

let p2scoreTop = 0;
let p2scoreBottom = 0;
let p2bonus = 0;
let p2totalScore = 0;
let p2score1 = 0;
let p2score2 = 0;
let p2score3 = 0;
let p2score4 = 0;
let p2score5 = 0;
let p2score6 = 0;
let p2TOK = 0;
let p2Caree = 0;
let p2FullHouse = 0;
let p2KStraat = 0;
let p2GStraat = 0;
let p2Yahtzee = 0;
let p2Chance = 0;


const Dice1 = Math.floor(Math.random()*6)+1;
const Dice2 = Math.floor(Math.random()*6)+1;
const Dice3 = Math.floor(Math.random()*6)+1;
const Dice4 = Math.floor(Math.random()*6)+1;
const Dice5 = Math.floor(Math.random()*6)+1;
const Dice6 = Math.floor(Math.random()*6)+1;

// function turnFunction(){
// switch(turnSelector){
//     case 1:
//     turn.textContent = `${Player1} is aan de beurt, succes!`;
//     rollButton.textContent = `Worpen over: ${rollsLeft}`;
//     rollButton.addEventListener('click', function(){
//         rollsLeft--;
//         rollButton.textContent = `Worpen over: ${rollsLeft}`;
//     });
// break;
// case 2:
//     turn.textContent = `${Player2} is aan de beurt, succes!`;
//         rollButton.textContent = `Worpen over: ${rollsLeft}`;
//     rollButton.addEventListener('click', function(){
//         rollsLeft--;
//         rollButton.textContent = `Worpen over: ${rollsLeft}`;
//     })};
//     break;
// }

// if(turnSelector == 1){
//     nextTurnButton.addEventListener('click', function(){
//         turnSelector++;
//         turnFunction();
//     });
// } else {
//     nextTurnButton.addEventListener('click', function(){
//         turnSelector--;
//         turnFunction();
//     })
// }

if (turnSelector % 2 == 0){
    turn.textContent = `${Player1} is aan de beurt, succes!`;
    rollButton.textContent = `Worpen over: ${rollsLeft}`;
    rollButton.addEventListener('click', function(){
        rollsLeft--;
        rollButton.textContent = `Worpen over: ${rollsLeft}`;
    });
}else{
    turn.textContent = `${Player2} is aan de beurt, succes!`;
        rollButton.textContent = `Worpen over: ${rollsLeft}`;
    rollButton.addEventListener('click', function(){
        rollsLeft--;
        rollButton.textContent = `Worpen over: ${rollsLeft}`;
    })};