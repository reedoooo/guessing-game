'use strict';

let greeting = prompt('What is your name?');
alert('hello ' + greeting + ' welcome to my site.');

let questions = ['Is my name Reed? (Y/N)', 'Is my age 30? (Y/N)', 'Is my hair long? (Y/N)', 'Am I a girl? (Y/N)', 'Is my eye color brown? (Y/N)', 'How many years did I live in Argentina?', 'Name a city that I have lived in'];
let answers = ['y', 'n', 'y', 'y', 'n', 2, ['Buenos Aires', 'Seattle', 'Twisp', 'Ogden']];
let response = '';
let counter = 0;

/*if(console.log('correct')){
    counter++;
    console.log(counter);
}*/

questionOne();
functionHigherLower();
functionCityGuess();


function questionOne() {

for (let i = 0; i < questions.length-2; i++){
    response = prompt(questions[i] + ('answer with "Y" or "N"'));
    if (response.toUpperCase() === answers[i].toUpperCase()){
        alert('Correct!');
        counter++;
        console.log('correct');
    } else {
        alert('Try Again');
        console.log('try Again');
    }  
}
}

function functionHigherLower() {
    let response = prompt(questions[5] + 'Answer with Numbers');
    let attempts = 0;
    let gotIt = false;

    while (!gotIt) {
        attempts++;
        if (response == answers[5]) {
            alert('Correct!');
            gotIt = true;
            counter++;
            console.log('correct');
            break;
        }

        if (attempts == 4) {
            alert('Out of attempts');
            break;
        }

        if (response > answers[5]) {
            alert('Too High!');
            response = prompt(questions[5] + 'Answer with Numbers');
        } else {
            (response < answers[5])
            alert('Too Low!');
            response = prompt(questions[5] + 'Answer with Numbers');
        }
    }

}

function functionCityGuess() {
    let response = prompt(questions[6] + 'Answer with a City');
    let attempts = 0;

    guesses: while (attempts != 7) {
        attempts++;
        console.log(attempts);
        for (let i = 0; i < answers[6].length; i++) {
            console.log(answers[6][i]);
            if (response.toLowerCase() == answers[6][i].toLowerCase()) {
                //attempts++;
                alert('Correct!');
                console.log('correct')
                counter++;
                break guesses
            }
        }
        response = prompt( 'try again');
    }
    if(attempts == 7){
        alert('run out of atttempts');
    }
}

alert('You got ' + counter + ' answers correct');


/*
for (let i = 0; i < questions.length; i++){
    if (response === answers[6[0]] || response === answers[6[1]] || response === answers[6[2]]){
        alert('Correct');
    } else if(i === answers[6[0,1,2]] && response > answers[6[0,1,2]]){
        alert('Too high')
        prompt(questions[i] + ('answer with "Y" or "N"'));
        prompt(questions[i] + ('answer with "Y" or "N"'));
        prompt(questions[i] + ('answer with "Y" or "N"'));
        prompt(questions[i] + ('answer with "Y" or "N"'));
        prompt(questions[i] + ('answer with "Y" or "N"'));
        prompt(questions[i] + ('answer with "Y" or "N"'));
        prompt(questions[i] + ('answer with "Y" or "N"'));

    } else if(i === 6[0,1,2] && response < answers[6[0,1,2]]){
        alert('Too low')
        prompt(questions[i] + ('answer with "Y" or "N"'));
        prompt(questions[i] + ('answer with "Y" or "N"'));
        prompt(questions[i] + ('answer with "Y" or "N"'));
        prompt(questions[i] + ('answer with "Y" or "N"'));
        prompt(questions[i] + ('answer with "Y" or "N"'));
        prompt(questions[i] + ('answer with "Y" or "N"'));
        prompt(questions[i] + ('answer with "Y" or "N"'));
    }
}

*/
/*
response2 = prompt('How many years did I live in Argentina?');
    let n = '2';
    while(n == response2){
        if(n == response2){
            
        }
        n++;

    }
*/
/*
questionSeven = function(){

}
questionSeven();
alert('goodbye ' + greeting + ' thanks for playing')
/*
if(answer1 !== answer1){
    alert('Correct!');
} else if (question1 === question1.toLowerCase()){
    alert('Wrong Answer')
} else if (question1 === question1.toLowerCase()){
    alert('Wrong Case.')
} else {
    alert('wrong')
}
*/
/*
let question2 = prompt('Is my age 30?');
let question3 = prompt('Is my hair long?');
let question4 = prompt('Am I a girl?');
    if(question1 === 'Y'){
        alert('Correct!');
    } else if (question1 === 'N'){
        alert('Wrong Answer')
    } else {
        alert('Wrong Case.')
    }

    
    if(question2 === 'Y'){
        alert('Try again');
    }
    if(question3 === 'Y'){
        alert('Try again');
    }
    if(question4 === 'Y'){
        alert('Try again');
    }
*/


