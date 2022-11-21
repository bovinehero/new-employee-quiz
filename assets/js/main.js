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
let submit = document.getElementById('submit');

function buildQuestions(){
    const questions = [];
    for (let i in radioQuestions) {
        // use of hasOwnProperty check for defensive coding!
        if (radioQuestions.hasOwnProperty(i)) {
            let question = radioQuestions[i]['question']
            let answers = fetchAnswers(radioQuestions[i]['answers'], i).join('');
            questions.push(
                `
                <div class="question-slide">
                    <p>${question}</p>
                    ${answers}
                </div>
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
            htmlAnswers.push(
            `<input type="radio" name="question${questionNumber}" value="${i}">
            <label for="answer${i}">${answersArray[i]}</label><br>
            `
            )
        }
    }
    return htmlAnswers;
}

function returnAnswer(questionName) {
    let answeredQuestions = document.getElementsByName(questionName);
    let answer = "";
    for (let i in answeredQuestions) {
        if (answeredQuestions.hasOwnProperty(i)){
            if (answeredQuestions[i].checked){
                answer = answeredQuestions[i].value; 
            }      
        }
    }
    return answer;
}

function showAnswers(){
    // const message = document.getElementById("answers");
    // clear the answer message
    message.innerHTML = "";
    for (i in radioQuestions){
        if (radioQuestions.hasOwnProperty(i)){
            let questionIdentifier = "question" + i
            let selectedAnswer = returnAnswer(questionIdentifier);
            if (selectedAnswer){
                console.log(selectedAnswer);
                message.innerHTML += `You answered ${radioQuestions[i]['question']}<br> with option ${selectedAnswer}<br>`;
            } else {
                message.innerHTML += `OOPS looks like you didn't answer: ${radioQuestions[i]['question']}.<br>`;
            }
        }
    }
    console.log("Answers Displayed");
    
}

// display quiz right away
buildQuestions();

const previous = document.getElementById("previous");
const next = document.getElementById("next");
const review = document.getElementById("review");
const slides = document.querySelectorAll(".question-slide");
const message = document.getElementById("answers");
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    console.log(slides)
    if(currentSlide === 0){
        previous.style.display = 'none';
        message.style.display = 'none';
    }
    else{
        previous.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
        next.style.display = 'none';
        review.style.display = 'inline-block';
        submit.style.display = 'inline-block';
    }
    else{
        next.style.display = 'inline-block';
        message.style.display = 'none';
        review.style.display = 'none';
        submit.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
    console.log("next")
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
    console.log("previous")
}

showSlide(currentSlide);

// on submit, show results
submit.addEventListener('click', showAnswers);
previous.addEventListener("click", showPreviousSlide);
next.addEventListener("click", showNextSlide);