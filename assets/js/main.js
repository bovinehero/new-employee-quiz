/**
* Main JavaScript for the site
*/
console.log("JavaScript Connected!");

let questionsContainer = document.getElementById('questions');
let answersContainer = document.getElementById('answers');
let submitButton = document.getElementById('submit');

function buildQuestions(){
    console.log("Questions Built");
}

function showAnswers(){
    console.log("Answers Displayed");
}

// display quiz right away
buildQuestions();

// on submit, show results
submitButton.addEventListener('click', showAnswers);