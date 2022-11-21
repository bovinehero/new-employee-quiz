/**
* Main JavaScript for the site
*/
console.log("JavaScript Connected!");

const radioQuestions = [
    {
        question: "Question 0?",
        answers: {
        a: "radio option a",
        b: "radio option b",
        c: "radio option c",
        },
        specialConditionAnswer: "a"
    },
    {
        question: "Question 1?",
        answers: {
            a: "radio option a",
            b: "radio option b",
            c: "radio option c",
        },
        specialConditionAnswer: "b"
    },
    {
        question: "Question 2?",
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
            // console.log(radioQuestions[i]);
            // console.log(radioQuestions[i]['question']);
            // console.log(radioQuestions[i]['answers']);
            // console.log(radioQuestions[i]['specialConditionAnswer'])
            let question = radioQuestions[i]['question']
            let answers = fetchAnswers(radioQuestions[i]['answers'], i).join('');
            questions.push(
                `<p>${question}</p>
                ${answers}
                `
            )
        }
    }
    // console.log(questions);
    questionsContainer.innerHTML = questions.join('');
    console.log("Questions Built");
}

function fetchAnswers(answersArray, questionNumber){
    console.log(answersArray);
    let htmlAnswers = []
    for (let i in answersArray) {
        if (answersArray.hasOwnProperty(i)) {
            // console.log(i);
            // console.log(answersArray[i]);
            htmlAnswers.push(
            `<input type="radio" name="question${questionNumber}" value="${i}">
            <label for="answer${i}">${answersArray[i]}</label><br>
            `
            )
        }
    }
    // console.log(htmlAnswers);
    return htmlAnswers;

}

function returnAnswer(questionName) {
    let answeredQuestions = document.getElementsByName(questionName);
    let answer = "";
    for (let i in answeredQuestions) {
        if (answeredQuestions.hasOwnProperty(i)){
            if (answeredQuestions[i].checked){
                // console.log(i, answeredQuestions[i], "this is checked");
                answer = answeredQuestions[i].value; 
            } else {
                // console.log(i, answeredQuestions[i], "this is NOT checked");
            }        
        }
    }
    return answer;
}

function showAnswers(){
    const message = document.getElementById("answers");
    // clear the answer message
    message.innerHTML = "";
    // Validator Code
    // try {
    //     if (document.querySelector('input[name="question1"]:checked').value != null) {
    //         let testor = document.querySelector('input[name="question1"]:checked').value;
    //         console.log(testor);
    //         } else {
    //         console.log(testor);
    //     }        
    // }
    // catch(err) {
    //     if (err.name  == 'TypeError') {
    //         message.innerHTML = "OOPS you need to answer the question.";
    //     } else {
    //         console.log(err);
    //     }
        
    // }
    for (i in radioQuestions){
        if (radioQuestions.hasOwnProperty(i)){
            console.log(i);
            // let questionNumber = Number(i) + 1;
            let questionIdentifier = "question" + i
            let selectedAnswer = returnAnswer(questionIdentifier);
            if (selectedAnswer){
                console.log(selectedAnswer);
                message.innerHTML += `You answered ${questionIdentifier} with option ${selectedAnswer}<br>`;
            } else {
                console.log(`OOPS you need to answer the ${questionIdentifier}.`);
            }
        }
    }
    // let selectedAnswer = returnAnswer("question1");
    
    // if (selectedAnswer){
    //     console.log(selectedAnswer);
    //     message.innerHTML = `You answered question1 with option ${selectedAnswer}`;
    // } else {
    //     console.log("OOPS you need to answer the question1.");
    // }
    console.log("Answers Displayed");
    
}

// display quiz right away
buildQuestions();

// on submit, show results
submitButton.addEventListener('click', showAnswers);