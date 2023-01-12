'use strict';

let greeting = prompt('What is your name?');
alert('hello ' + greeting + ' welcome to my site.');


function button() {
    let questions = ['Is my name Reed?', 'Is my age 30?', 'Is my hair long?', 'Am I a girl?', 'Is my eye color brown?', 'How many years did I live in Argentina? ', 'Name a city that I have lived in '];
    let answers = ['y', 'n', 'y', 'y', 'n', 2, ['Buenos Aires', 'Seattle', 'Twisp', 'Ogden']];
    let response = '';
    let counter = 0;



    questionOne();
    functionHigherLower();
    functionCityGuess();


    function questionOne() {

        for (let i = 0; i < questions.length - 2; i++) {
            response = prompt(questions[i] + (' Answer with "Y" or "N"'));
            if (response.toUpperCase() === answers[i].toUpperCase()) {
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
            response = prompt('try again');
        }
        if (attempts == 7) {
            alert('run out of atttempts');

        }
    }

    alert('You got ' + counter + ' answers correct');

}



