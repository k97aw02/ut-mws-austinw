
const choiceArray = ['r', 'p', 's'];

let win = 0;

let tie = 0;

let loss = 0;

let gamecount = 0;


alert('Thanks for choosing to play Rock, Paper Sissors.  The computer has challenged you to best of 5 rounds, please press okay to start.');


for (let i = 0; i <= 4; i++) {

    let compAnswer = choiceArray[Math.floor(Math.random() * choiceArray.length)];



    let userAnswer = prompt('Please make a selection, r for rock, s for scissors, p for paper.');

    userAnswer = userAnswer.toLowerCase();



    if ((userAnswer === 'r') || (userAnswer === 'p') || (userAnswer === 's')) {



        alert(`You chose ${userAnswer}, the computer chose ${compAnswer} `);



        if (userAnswer === compAnswer) {

            alert(`user ties`);

            tie++;
            gamecount++;

            alert(`User has ${tie} ties out of ${gamecount} tries. `)

        } else if (((userAnswer === "r" && compAnswer === "s") ||

            (userAnswer === "s" && compAnswer === "p") ||

            (userAnswer === "p" && compAnswer === "r"))) {

            alert(`User wins!`);

            win++;
            gamecount++;

            alert(`User has ${win} wins out of ${gamecount} tries. `)
      
        }else {

            alert(`User lost!`);

            loss++;
            gamecount++;

            alert(`User has ${loss} losses out of ${gamecount} tries. `)

        }



    } else {

        alert('this is an invalid input, try again');

        location.reload();

    };
    };  
    
    //else alert(`You have ${win} wins, ${loss}, and ${tie}`);
//        let playAgain = confirm(`would you like to play again, user? Choose Okay for yes cancel for no`);
  //      if(playAgain === true){
  //          location.reload();
  //          }else{
  //             alert('computer says good game!');
    
   // };


 //}

