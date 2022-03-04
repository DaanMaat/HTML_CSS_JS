'use strict'

// const Player1 = prompt('Type de naam van player 1');
// const Player2 = prompt('Type de naam van player 2');
// document.querySelector('.p1').textContent = `${Player1}`;
// document.querySelector('.p2').textContent = `${Player2}`;
let Dices = [0, 0, 0 ,0 ,0]
let holdDices = [0, 0, 0, 0, 0];
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

const D1 = document.querySelector('.dice1');
const D2 = document.querySelector('.dice2');
const D3 = document.querySelector('.dice3');
const D4 = document.querySelector('.dice4');
const D5 = document.querySelector('.dice5');


D1.addEventListener('click', function(){
    if(D1.classList.contains('notSelected')){
        D1.classList.remove('notSelected');
    } else {D1.classList.add('notSelected');
}});
D2.addEventListener('click', function(){
    if(D2.classList.contains('notSelected')){
        D2.classList.remove('notSelected');
    } else {D2.classList.add('notSelected');
}});
D3.addEventListener('click', function(){
    if(D3.classList.contains('notSelected')){
        D3.classList.remove('notSelected');
    } else {D3.classList.add('notSelected');
}});
D4.addEventListener('click', function(){
    if(D4.classList.contains('notSelected')){
        D4.classList.remove('notSelected');
    } else {D4.classList.add('notSelected');
}});
D5.addEventListener('click', function(){
    if(D5.classList.contains('notSelected')){
        D5.classList.remove('notSelected');
    } else {D5.classList.add('notSelected');
}});

rollButton.addEventListener('click', function(){
    Dices[0] = Math.floor(Math.random()*6)+1;
    Dices[1] = Math.floor(Math.random()*6)+1;
    Dices[2] = Math.floor(Math.random()*6)+1;
    Dices[3] = Math.floor(Math.random()*6)+1;
    Dices[4] = Math.floor(Math.random()*6)+1;
    D1.src = `Dice${Dices[0]}.png`
    D2.src = `Dice${Dices[1]}.png`
    D3.src = `Dice${Dices[2]}.png`
    D4.src = `Dice${Dices[3]}.png`
    D5.src = `Dice${Dices[4]}.png`
    if(holdDices == 0){
        
    }
    console.log(Dices);
    
});


// if (turnSelector % 2 == 0){
//     turn.textContent = `${Player1} is aan de beurt, succes!`;
//     rollButton.textContent = `Worpen over: ${rollsLeft}`;
//     rollButton.addEventListener('click', function(){
//         rollsLeft--;
//         rollButton.textContent = `Worpen over: ${rollsLeft}`;
//     });
// }else{
//     turn.textContent = `${Player2} is aan de beurt, succes!`;
//         rollButton.textContent = `Worpen over: ${rollsLeft}`;
//     rollButton.addEventListener('click', function(){
//         rollsLeft--;
//         rollButton.textContent = `Worpen over: ${rollsLeft}`;
//     })};