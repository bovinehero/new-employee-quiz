/**
* Main JavaScript for the site
*/
console.log("JavaScript Connected!");

const radioQuestions = [
    {
        question: "Question 1?",
        answers: {
        a: "radio option a",
        b: "radio option b",
        c: "radio option c",
        },
        specialConditionAnswer: "a"
    },
    {
        question: "Question 2?",
        answers: {
            a: "radio option a",
            b: "radio option b",
            c: "radio option c",
        },
        specialConditionAnswer: "b"
    },
    {
        question: "Question 3?",
        answers: {
            a: "radio option a",
            b: "radio option b",
            c: "radio option c",
        },
        specialConditionAnswer: "c"
    },
];

let questionsContainer = document.getElementById('questions');
let answersContainer = document.getElementById('answers');
let submitButton = document.getElementById('submit');

function buildQuestions(){
    const questions = [];
    for (let i in radioQuestions) {
        // use of hasOwnProperty check for defensive coding!
        if (radioQuestions.hasOwnProperty(i)) {
            console.log(radioQuestions[i]);
            console.log(radioQuestions[i]['question']);
            console.log(radioQuestions[i]['answers']);
            console.log(radioQuestions[i]['specialConditionAnswer'])
            let question = radioQuestions[i]['question']
            questions.push(
                `<p>${question}</p>`
            )
        }
    }
    console.log(questions);
    questionsContainer.innerHTML = questions.join('');
    console.log("Questions Built");
}

function showAnswers(){
    console.log("Answers Displayed");
}

// display quiz right away
buildQuestions();

// on submit, show results
submitButton.addEventListener('click', showAnswers);