'use strict'

// const Player1 = prompt('Type de naam van player 1');
// const Player2 = prompt('Type de naam van player 2');
const Player1 = 'Daanoontje'
const Player2 = 'Leah'
document.querySelector('.p1').textContent = `${Player1}`;
document.querySelector('.p2').textContent = `${Player2}`;
let Dices = [0,-7,0,7,0]
let holdDices = [0, 0, 0, 0, 0];
let sameDices = 0;
const turn = document.querySelector('#turn');
let turnSelector = Math.floor(Math.random()*5)+1;
let rollsLeft = 3;
const rollButton = document.querySelector('#rollAgain');
const worpen = document.querySelector('#rollsLeft');
rollButton.textContent = `Worpen over: ${rollsLeft}`;
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
function turnFunction(){
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
} else {rollsLeft = 3;
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
}}};
turnFunction();

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
        }
    }
});
let ToKP1 = false;
let CareeP1 = false;
let ThreeFHP1 = false;
let TwoFHP1 = false;
let fullHouseP1 = false;
let kStreetP1 = false;
let gStreetP1 = false;
let YahtzeeP1 = false;

let ToKP2 = false;
let CareeP2 = false;
let ThreeFHP2 = false;
let TwoFHP2 = false;
let fullHouseP2 = false;
let kStreetP2 = false;
let gStreetP2 = false;
let YahtzeeP2 = false;

const score1P1 = document.querySelector('.p1score-enen');
const score2P1 = document.querySelector('.p1score-tweeën');
const score3P1 = document.querySelector('.p1score-drieën');
const score4P1 = document.querySelector('.p1score-vieren');
const score5P1 = document.querySelector('.p1score-vijfen');
const score6P1 = document.querySelector('.p1score-zessen');

const score1P2 = document.querySelector('.p2score-enen');
const score2P2 = document.querySelector('.p2score-tweeën');
const score3P2 = document.querySelector('.p2score-drieën');
const score4P2 = document.querySelector('.p2score-vieren');
const score5P2 = document.querySelector('.p2score-vijfen');
const score6P2 = document.querySelector('.p2score-zessen');

const p1ToKP = document.querySelector('.p1ToKP');
const p1CareeP = document.querySelector('.p1CareeP');
const p1FullHouseP = document.querySelector('.p1FullHouseP');
const p1KStraatP = document.querySelector('.p1KStraatP');
const p1GStraatP = document.querySelector('.p1GStraatP');
const p1YahtzeeP = document.querySelector('.p1YahtzeeP');
const p1ChanceP = document.querySelector('.p1ChanceP')
const p1BottomScoredP = document.querySelector('.p1BottomScoredP');
const p1TopScoredP = document.querySelector('.p1TopScoredP');
const p1TopScoredWBP = document.querySelector('.p1TopScoredWBP');
const p1BonusP = document.querySelector('.p1BonusP');
const p1TotaalP = document.querySelector('.p1TotaalP');

const p2ToKP = document.querySelector('.p2ToKP');
const p2CareeP = document.querySelector('.p2CareeP');
const p2FullHouseP = document.querySelector('.p2FullHouseP');
const p2KStraatP = document.querySelector('.p2KStraatP');
const p2GStraatP = document.querySelector('.p2GStraatP');
const p2YahtzeeP = document.querySelector('.p2YahtzeeP');
const p2ChanceP = document.querySelector('.p2ChanceP');
const p2BottomScoredP = document.querySelector('.p2BottomScoredP');
const p2TopScoredP = document.querySelector('.p2TopScoredP');
const p2TopScoredWBP = document.querySelector('.p2TopScoredWBP');
const p2BonusP = document.querySelector('.p2BonusP');


function Countnumbers(number, diceScore){
    let count = 0;
    for (let i = 0; i < Dices.length; i++) {
      if (Dices[i] === number) {
        count += 1;
      }
    }
    const punten = count * number;
    diceScore.textContent = punten;
}

    if(turnSelector % 2 !== 0){
        Countnumbers(1, score1P1);
        Countnumbers(2, score2P1);
        Countnumbers(3, score3P1);
        Countnumbers(4, score4P1);
        Countnumbers(5, score5P1);
        Countnumbers(6, score6P1);
        const p1ToKP = document.querySelector('.p1ToKP');
        const p1CareeP = document.querySelector('.p1CareeP');
        for(let i = 0;i <= 6; i++){
            sameDices = 0;
        for(let j = 0; j < 5; j++){
            if(i == Dices[j]){
                sameDices++
            }}
            if(sameDices >= 3){
                ToKP1 = true;
            } 
            if(sameDices >= 4){
                CareeP1 = true;
            }}
            if(ToKP1){
                p1ToKP.textContent = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4];
            } else {p1ToKP.textContent = '0'}
            if(CareeP1){
                p1CareeP.textContent = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]; 
            } else {
            p1CareeP.textContent = '0';
    };
    for(let i = 0;i <= 6; i++){
        sameDices = 0;
    for(let j = 0; j < 5; j++){
        if(i == Dices[j]){
            sameDices++
        }
        if(sameDices == 3){
            ThreeFHP1 = true;
        } else {ThreeFHP1 = false;}
    } for(let i = 0;i <= 6; i++){
        sameDices = 0;
    for(let j = 0; j < 5; j++){
        if(i == Dices[j]){
            sameDices++}
        if(sameDices == 2){
            TwoFHP1 = true;
        }else{TwoFHP1 = false;}}
        if(ThreeFHP1 && TwoFHP1){
            fullHouseP1 = true;
        }}
        if(fullHouseP1){
            p1FullHouseP.textContent = '25'}
        else {p1FullHouseP.textContent = '0'}
    };
    let streets = [6];
    for(let i = 0; i < 5; i++){
            let value = Dices[i];
            streets[value-1] = 1;
            let opeenVolgendeWaarden = 0;
            for (let j = 0; j < 6; j++){
                if(streets[j] == 1){
                    opeenVolgendeWaarden++;
                } else {opeenVolgendeWaarden = 0}
                if(opeenVolgendeWaarden == 4){kStreetP1 = true;}
                if(kStreetP1){document.querySelector('.p1KStraatP').textContent = '30';}
                if(opeenVolgendeWaarden == 5){gStreetP1 = true;}
                if(gStreetP1){document.querySelector('.p1GStraatP').textContent = '40';}
                else {
                    document.querySelector('.p1GStraatP').textContent = '0';
                    document.querySelector('.p1KStraatP').textContent = '0';
                }}  
            };
            for(let j = 0; j <= 6; j++){
                sameDices = 0;
                for(let k = 0; k<5; k++){
                    if(j == Dices[k]){
                        sameDices++;
                        if(sameDices == 5){YahtzeeP1 = true;}};
                        if(YahtzeeP1){document.querySelector('.p1YahtzeeP').textContent = '50';
                    } else {document.querySelector('.p1YahtzeeP').textContent = '0'}
                    }};                        
    document.querySelector('.p1ChanceP').textContent = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4];

    document.querySelector('.p1BottomScoredP').textContent = p1scoreBottom = p1TOK + p1Caree + p1Chance + p1FullHouse + p1GStraat + p1KStraat + p1Yahtzee;
    document.querySelector('.p1TopScoredP').textContent = p1score1 + p1score2 + p1score3 + p1score4 + p1score5 + p1score6;

    } else {    //Else voor turnselector
        Countnumbers(1, score1P2);
        Countnumbers(2, score2P2);
        Countnumbers(3, score3P2);
        Countnumbers(4, score4P2);
        Countnumbers(5, score5P2);
        Countnumbers(6, score6P2);
        const p2ToKP = document.querySelector('.p2ToKP');
        const p2CareeP = document.querySelector('.p2CareeP');
        for(let i = 0;i <= 6; i++){
            sameDices = 0;
        for(let j = 0; j < 5; j++){
            if(i == Dices[j]){
                sameDices++
            }}
            if(sameDices >= 3){
                ToKP2 = true;
            }
            if(sameDices >= 4){
               CareeP2 = true;
            }}
            if(ToKP2){
                p2ToKP.textContent = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4];
            }else{p2ToKP.textContent = '0'
            }
            if(CareeP2){
                p2CareeP.textContent = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]; 
            } else {p2CareeP.textContent = '0';
    };
        for(let i = 0;i <= 6; i++){
            sameDices = 0;
        for(let j = 0; j < 5; j++){
            if(i == Dices[j]){
                sameDices++
            }
            if(sameDices == 3){
                ThreeFHP2 = true;
            } else {ThreeFHP2 = false;}
        } for(let i = 0;i <= 6; i++){
            sameDices = 0;
        for(let j = 0; j < 5; j++){
            if(i == Dices[j]){
                sameDices++}
            if(sameDices == 2){
                TwoFHP2 = true;
            }else{TwoFHP2 = false;}}
            if(ThreeFHP2 && TwoFHP2){
                fullHouseP2 = true;
            }}
            if(fullHouseP2){
                p2FullHouseP.textContent = '25'}
            else {p2FullHouseP.textContent = '0'}
        };
            let streets2 = [6];
        for(let i = 0; i < 5; i++){
                let value = Dices[i];
                streets2[value-1] = 1;
                let opeenVolgendeWaarden = 0;
                for (let j = 0; j < 6; j++){
                    if(streets2[j] == 1){
                        opeenVolgendeWaarden++;
                    }}
                    if(opeenVolgendeWaarden == 4){
                        kStreetP2 = true;
                    } else {document.querySelector('.p2KStraatP').textContent = '0'};

                    if(opeenVolgendeWaarden == 5){
                        gStreetP2 = true;
                    } else{document.querySelector('.p2GStraatP').textContent = '0';};
                    if(kStreetP2){document.querySelector('.p2KStraatP').textContent = '30'};
                    if(gStreetP2){document.querySelector('.p2GStraatP').textContent = '40'};
                };
                    for(let j = 0; j <= 6; j++){
                        sameDices = 0;
                        for(let k = 0; k<5; k++){
                            if(j == Dices[k]){
                                sameDices++;
                                if(sameDices == 5){YahtzeeP2 = true;}};
                                if(YahtzeeP2){document.querySelector('.p2YahtzeeP').textContent = '50';
                            } else {document.querySelector('.p2YahtzeeP').textContent = '0'}
                            }}};                        
    document.querySelector('.p2ChanceP').textContent = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4];
    document.querySelector('.p2BottomScoredP').textContent = p2scoreBottom = p2TOK + p2Caree + p2Chance + p2FullHouse + p2GStraat + p2KStraat + p2Yahtzee;
                       

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

//Point Calculation
document.querySelector('.p1score1D').addEventListener('click', function(){
    score1P1.classList.remove('possible');
    score1P1.classList.add('definitive');
    score1P1.classList.remove('p1score-enen');
    document.querySelector('.p1score1D').classList.remove('p1score1D');
    p1score1 = score1P1.textContent;
    console.log(p1score1);
    turnFunction();
});
document.querySelector('.p1score2D').addEventListener('click', function(){
score2P1.classList.remove('possible');
score2P1.classList.add('definitive');
score2P1.classList.remove('p1score-tweeën');
document.querySelector('.p1score2D').classList.remove('p1score2D');
p1score2 = score2P1.textContent;
turnFunction();
});
document.querySelector('.p1score3D').addEventListener('click', function(){
score3P1.classList.remove('possible');
score3P1.classList.add('definitive');
score3P1.classList.remove('p1score-drieën');
document.querySelector('.p1score3D').classList.remove('p1score3D');
p1score3 = score3P1.textContent;
turnFunction();
});
document.querySelector('.p1score4D').addEventListener('click', function(){
score4P1.classList.remove('possible');
score4P1.classList.add('definitive');
score4P1.classList.remove('p1score-vieren');
document.querySelector('.p1score4D').classList.remove('p1score4D');
p1score4 = score4P1.textContent;
turnFunction();
});
document.querySelector('.p1score5D').addEventListener('click', function(){
score5P1.classList.remove('possible');
score5P1.classList.add('definitive');
score5P1.classList.remove('p1score-vijfen');
document.querySelector('.p1score5D').classList.remove('p1score5D');
p1score5 = score5P1.textContent;
turnFunction();
});
document.querySelector('.p1score6D').addEventListener('click', function(){
score6P1.classList.remove('possible');
score6P1.classList.add('definitive');
score6P1.classList.remove('p1score-zessen');
document.querySelector('.p1score6D').classList.remove('p1score6D');
p1score6 = score6P1.textContent;
turnFunction();
});
document.querySelector('.p1ToKD').addEventListener('click', function(){
p1ToKP.classList.remove('possible'); 
p1ToKP.classList.add('definitive');
p1ToKP.classList.remove('p1ToKP');
document.querySelector('.p1ToKD').classList.remove('p1ToKD');
if(ToKP1){p1ToK = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]}else{p1ToK = 0}
turnFunction();
});
document.querySelector('.p1CareeD').addEventListener('click', function(){
p1CareeP.classList.remove('possible'); 
p1CareeP.classList.add('definitive');
p1CareeP.classList.remove('p1CareeP');
document.querySelector('.p1CareeD').classList.remove('p1CareeD');
if(CareeP1){p1Caree = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]}else{p1Caree = 0}
turnFunction();
});
document.querySelector('.p1FullHouseD').addEventListener('click', function(){
p1FullHouseP.classList.remove('possible');
p1FullHouseP.classList.add('definitive');
p1FullHouseP.classList.remove('p1FullHouseP')
document.querySelector('.p1FullHouseD').classList.remove('p1FullHouseD');
if(fullHouseP1){p1FullHouse = 25;}
turnFunction();
});
document.querySelector('.p1KStraatD').addEventListener('click', function(){
p1KStraatP.classList.remove('possible');
p1KStraatP.classList.add('definitive');
p1KStraatP.classList.remove('p1KStraatP');
document.querySelector('.p1KStraatD').classList.remove('p1KStraatD');
if(kStreetP1){p1KStraat = 30;}
turnFunction();
});
document.querySelector('.p1GStraatD').addEventListener('click', function(){
p1GStraatP.classList.remove('possible');
p1GStraatP.classList.add('definitive');
p1GStraatP.classList.remove('p1GStraatP');
document.querySelector('.p1GStraatD').classList.remove('p1GStraatD');
if(gStreetP1){p1GStraat = 40;}
turnFunction();
});
document.querySelector('.p1YahtzeeD').addEventListener('click', function(){
p1YahtzeeP.classList.remove('possible'); 
p1YahtzeeP.classList.add('definitive');
p1YahtzeeP.classList.remove('p1YahtzeeP');
document.querySelector('.p1YahtzeeD').classList.remove('p1YahtzeeD');
if(YahtzeeP1){p1Yahtzee = 50;}else{p1Yahtzee = 0}
turnFunction();
});
document.querySelector('.p1ChanceD').addEventListener('click', function(){   
p1ChanceP.classList.remove('possible'); 
p1ChanceP.classList.add('definitive');
p1ChanceP.classList.remove('p1ChanceP');
document.querySelector('.p1ChanceD').classList.remove('.p1ChanceD');
p1Chance = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4];
turnFunction();
});
document.querySelector('.p1BottomScoredD').addEventListener('click', function(){
p1BottomScoredP.classList.remove('possible'); 
p1BottomScoredP.classList.add('definitive');
p1BottomScoredP.classList.remove('p1BottomScoredP');
document.querySelector('.p1BottomScoredD').classList.remove('.p1BottomScoredD');
p1scoreBottom = p1TOK + p1Caree + p1Chance + p1FullHouse + p1GStraat + p1KStraat + p1Yahtzee;
});
document.querySelector('.p1TopScoredD').addEventListener('click', function(){
p1TopScoredP.classList.remove('possible'); 
p1TopScoredP.classList.add('definitive');
p1TopScoredP.classList.remove('p1TopScoredP');
document.querySelector('.p1TopScoredD').classList.remove('.p1BottomScoredD');
p1scoreTop = p1score1 + p1score2 + p1score3 + p1score4 + p1score5 + p1score6;
});
document.querySelector('p1BonusD').addEventListener('click', function(){
p1BonusP.classList.remove('possible');
p1BonusP.classList.add('definitive');
if(p1scoreTop >= 63){p1bonus = 35}
if(p1bonus == 35){p1BonusP.textContent = '35'}
p1BonusP.classList.remove('p1BonusP');
document.querySelector('.p1BonusD').classList.remove('p1BonusD');
});
document.querySelector('.p1TotaalD').addEventListener('click', function(){
    
});
p1totalScore = p1scoreTop + p1scoreBottom + p1bonus;

document.querySelector('.p2score1D').addEventListener('click', function(){
score1P2.classList.remove('possible');
score1P2.classList.add('definitive');
score1P2.classList.remove('p2score-enen');
document.querySelector('.p2score1D').classList.remove('p2score1D');
p12core1 = score1P2.textContent;
turnFunction();
});
document.querySelector('.p2score2D').addEventListener('click', function(){
score2P2.classList.remove('possible');
score2P2.classList.add('definitive');
score2P2.classList.remove('p2score-tweeën');
document.querySelector('.p2score2D').classList.remove('p2score2D');
p2score2 = score2P2.textContent;
turnFunction();
});
document.querySelector('.p2score3D').addEventListener('click', function(){
score3P2.classList.remove('possible');
score3P2.classList.add('definitive');
score3P2.classList.remove('p2score-drieën');
document.querySelector('.p2score3D').classList.remove('p2score3D');
p2score3 = score3P2.textContent;
turnFunction();
});
document.querySelector('.p2score4D').addEventListener('click', function(){
score4P2.classList.remove('possible');
score4P2.classList.add('definitive');
score4P2.classList.remove('p2score-vieren');
document.querySelector('.p2score4D').classList.remove('p2score4D');
p2score4 = score4P1.textContent;
turnFunction();
});
document.querySelector('.p2score5D').addEventListener('click', function(){
score5P2.classList.remove('possible');
score5P2.classList.add('definitive');
score5P2.classList.remove('p2score-vijfen');
document.querySelector('.p2score5D').classList.remove('p2score5D');
p2score5 = score5P2.textContent;
turnFunction();
});
document.querySelector('.p2score6D').addEventListener('click', function(){
score6P2.classList.remove('possible');
score6P2.classList.add('definitive');
score6P2.classList.remove('p2score-zessen');
document.querySelector('.p2score6D').classList.remove('p2score6D');
p2score6 = score6P2.textContent;
turnFunction();
});
document.querySelector('.p2ToKD').addEventListener('click', function(){
p2ToKP.classList.remove('possible'); 
p2ToKP.classList.add('definitive');
p2ToKP.classList.remove('p2ToKP');
document.querySelector('.p2ToKD').classList.remove('p2ToKD');
if(ToKP2){p2ToK = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]}else{p2ToK = 0}
turnFunction();
});
document.querySelector('.p2CareeD').addEventListener('click', function(){
p2CareeP.classList.remove('possible'); 
p2CareeP.classList.add('definitive');
p2CareeP.classList.remove('p1CareeP');
document.querySelector('.p2CareeD').classList.remove('p2CareeD');
if(CareeP2){p2Caree = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]}else{p2Caree = 0}
turnFunction();
});


document.querySelector('.p2FullHouseD').addEventListener('click', function(){
p2FullHouseP.classList.remove('possible');
p2FullHouseP.classList.add('definitive');
p2FullHouseP.classList.remove('p2FullHouseP')
document.querySelector('.p2FullHouseD').classList.remove('p2FullHouseD');
if(fullHouseP2){p2FullHouse = 25;}
turnFunction();
});
document.querySelector('.p2KStraatD').addEventListener('click', function(){
p2KStraatP.classList.remove('possible');
p2KStraatP.classList.add('definitive');
p2KStraatP.classList.remove('p2KStraatP');
document.querySelector('.p2KStraatD').classList.remove('p2KStraatD');
if(kStreetP2){p2KStraat = 30;}
turnFunction();
});
document.querySelector('.p2GStraatD').addEventListener('click', function(){
p2GStraatP.classList.remove('possible');
p2GStraatP.classList.add('definitive');
p2GStraatP.classList.remove('p2GStraatP');
document.querySelector('.p2GStraatD').classList.remove('p2GStraatD');
if(gStreetP2){p2GStraat = 40;}
turnFunction();
});
document.querySelector('.p2YahtzeeD').addEventListener('click', function(){
p2YahtzeeP.classList.remove('possible'); 
p2YahtzeeP.classList.add('definitive');
p2YahtzeeP.classList.remove('p2YahtzeeP');
document.querySelector('.p2YahtzeeD').classList.remove('p2YahtzeeD');
if(YahtzeeP2){p2Yahtzee = 50;}else{p1Yahtzee = 0}
turnFunction();
});
document.querySelector('.p2ChanceD').addEventListener('click', function(){   
p2ChanceP.classList.remove('possible'); 
p2ChanceP.classList.add('definitive');
p2ChanceP.classList.remove('p2ChanceP');
document.querySelector('.p2ChanceD').classList.remove('p2ChanceD');
p1Chance = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4];
turnFunction();
});
document.querySelector('.p2BottomScoredD').addEventListener('click', function(){
p2BottomScoredP.classList.remove('possible'); 
p2BottomScoredP.classList.add('definitive');
p2BottomScoredP.classList.remove('p2ChanceP');
document.querySelector('.p2BottomScoredD').classList.remove('.p2BottomScoredD');
p2scoreBottom = p2TOK + p2Caree + p2Chance + p2FullHouse + p2GStraat + p2KStraat + p2Yahtzee;
turnFunction();
});

p2scoreTop = p2score1 + p2score2 + p2score3 + p2score4 + p2score5 + p2score6;
if(p2scoreTop >= 63){p2bonus = 35}
p2totalScore = p2scoreTop + p2scoreBottom + p2bonus;


document.querySelector('#Dev-button').addEventListener('click', function(){
    console.log(sameDices);
});