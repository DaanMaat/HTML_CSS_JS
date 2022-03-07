'use strict'

const Player1 = prompt('Type de naam van player 1');
const Player2 = prompt('Type de naam van player 2');
document.querySelector('.p1').textContent = `${Player1}`;
document.querySelector('.p2').textContent = `${Player2}`;
let Dices = [0, 0, 0 ,0 ,0]
let holdDices = [0, 0, 0, 0, 0];
const turn = document.querySelector('#turn');
let turnSelector = Math.floor(Math.random()*5)+1;
let rollsLeft = 3;
const rollButton = document.querySelector('#rollAgain');
const worpen = document.querySelector('#rollsLeft');
const nextTurnButton = document.querySelector('#nextTurn');
nextTurnButton.textContent = 'Volgende beurt';
rollButton.textContent = `Worpen over: ${rollsLeft}`;
turn.textContent = 'Klik op volgende beurt!';
const D1 = document.querySelector('.dice1');
const D2 = document.querySelector('.dice2');
const D3 = document.querySelector('.dice3');
const D4 = document.querySelector('.dice4');
const D5 = document.querySelector('.dice5');
const Die = [D1, D2, D3, D4 ,D5];
D1.src = 'Dice0.png';
D2.src = 'Dice0.png';
D3.src = 'Dice0.png';
D4.src = 'Dice0.png';
D5.src = 'Dice0.png';

nextTurnButton.addEventListener('click', function(){
    if(turnSelector % 2 == 0){
    rollsLeft = 3;
    turn.textContent = `${Player1} is aan de beurt!`;
    turnSelector++;
    rollButton.textContent = `Worpen over: ${rollsLeft}`;
    rollButton.classList.remove('hidden');
    D1.src = 'Dice0.png';
    D2.src = 'Dice0.png';
    D3.src = 'Dice0.png';
    D4.src = 'Dice0.png';
    D5.src = 'Dice0.png';
    for(let z = 0; z < 5; z++){
        Die[z].classList.add('notSelected');
        holdDices[z] = 0;
    }
} else { rollsLeft = 3;
turn.textContent = `${Player2} is aan de beurt!`;
rollButton.textContent = `Worpen over: ${rollsLeft}`; 
turnSelector++
rollButton.classList.remove('hidden');
D1.src = 'Dice0.png';
D2.src = 'Dice0.png';
D3.src = 'Dice0.png';
D4.src = 'Dice0.png';
D5.src = 'Dice0.png';
for(let z = 0; z < 5; z++){
    Die[z].classList.add('notSelected');
    holdDices[z] = 0;
}
}});

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

rollButton.addEventListener('click', function(){
    rollsLeft--;
    rollButton.textContent = `Worpen over: ${rollsLeft}`; 
    if (rollsLeft == 0){
        rollButton.classList.add('hidden');
    }

    for (let i = 0; i < 5; i++) {
        if (holdDices[i] == 0) {
            Dices[i] = Math.floor(Math.random() * 6) + 1;
            Die[i].src = `Dice${Dices[i]}.png`
            console.log(Dices);


}}});
D1.addEventListener('click', function(){
    if(D1.classList.contains('notSelected')){
        D1.classList.remove('notSelected');
        holdDices[0] = Dices[0];
    } else {D1.classList.add('notSelected');
    holdDices[0] = 0;
}});
D2.addEventListener('click', function(){
    if(D2.classList.contains('notSelected')){
        D2.classList.remove('notSelected');
        holdDices[1] = Dices[1];
    } else {D2.classList.add('notSelected');
    holdDices[1] = 0;
}});
D3.addEventListener('click', function(){
    if(D3.classList.contains('notSelected')){
        D3.classList.remove('notSelected');
        holdDices[2] = Dices[2];
    } else {D3.classList.add('notSelected');
    holdDices[2] = 0;
}});
D4.addEventListener('click', function(){
    if(D4.classList.contains('notSelected')){
        D4.classList.remove('notSelected');
        holdDices[3] = Dices[3];
    } else {D4.classList.add('notSelected');
    holdDices[3] = 0;
}});
D5.addEventListener('click', function(){
    if(D5.classList.contains('notSelected')){
        D5.classList.remove('notSelected');
        holdDices[4] = Dices[4];
    } else {D5.classList.add('notSelected');
    holdDices[4] = 0;
}});
document.querySelector('#Dev-button').addEventListener('click', function(){
    console.log(holdDices);
});