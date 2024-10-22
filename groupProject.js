
////////////////////////////////////////////////////////
///                                                  ///
///           CS PREP GROUP WORKFLOW PRACTICE        ///
///                                                  ///
///      JAVASCRIPT FILE FOR PRACTICE SESSION        ///
///                                                  ///
////////////////////////////////////////////////////////

/*
  This is a practice JavaScript file for your group workflow practice.
  Follow the instructions in the README to run this file and practice your workflow.
  Modify this file as needed during your collaboration session.
*/


//These are the three methods we need to include to make the game interactive: 

//alert
//prompt
//confirm

function start(callback, questions, score) {
    // Need to add protections against bad inputs
    let name = prompt("What is your name?");
    let con = confirm(`Do you want to play a game, ${name}?`)
    if(!con){alert("Fine then")}
    else alert("Let's go then!") 
    callback(questions, score)
}

function askQuestions(arrayOfQ, callback) {
    let healthRating = 5;
    for (const el of arrayOfQ) {
        let goodAnswer = el.healthyAnswer;
        let response = prompt(el.question);
        healthRating = callback(response, goodAnswer, healthRating);
    }
    alert("Your Final Health Score: " + healthRating);
}

function score(response, el, healthRating) {
    if (el === response) {
        alert("Good job!")
        healthRating++;
    } else {
        alert("Your mom must be disappointed");
        healthRating--;
    }
    alert("Your Health Score: " + healthRating);
    return healthRating;
}

const questions = [
    {
    question: "Are you a smoker?",
    healthyAnswer: "no",
    },
    {
    question: "Do you have more than 7 drinks a week?",
    healthyAnswer: "no",
    },
    {
    question: "Do you sleep at least 7 hours every night?",
    healthyAnswer: "yes",
    },
    {
    question: "Do you drink at least 8 glasses of water a day?",
    healthyAnswer: "yes",
    },
    {
    question: "Do you exercise at least 30 mins a day?",
    healthyAnswer: "yes",
    }
]


start(askQuestions, questions, score);



// if (count === 5){
//   alert("You have a long boring life ahead of you :)")
// } else if (count <= 4 || count > 2){
//   alert("You might not die")
// } else if (count >= 0 && count <= 2) {
//   alert("You're gonna die")
// }