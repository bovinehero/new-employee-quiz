/**
* Main JavaScript for the site
*/
console.log("JavaScript Connected!");

const questions = [];
const radioQuestions = [
    {
        question: "Question 0?",
        answers: {
        a: "radio option a",
        b: "radio option b",
        c: "radio option c",
        },
        inputValue: "q0"
    },
    {
        question: "Question 1?",
        answers: {
            a: "radio option a",
            b: "radio option b",
            c: "radio option c",
        },
        inputValue: "q1"
    },
    {
        question: "Question 2?",
        answers: {
            a: "radio option a",
            b: "radio option b",
            c: "radio option c",
        },
        inputValue: "q2"
    },
];

const questionsContainer = document.getElementById('questions');
const answersContainer = document.getElementById('answers');
const submit = document.getElementById('submit');

function buildQuestions(){
    // const questions = [];
    for (let i in radioQuestions) {
        // use of hasOwnProperty check for defensive coding!
        if (radioQuestions.hasOwnProperty(i)) {
            console.log(radioQuestions[i]['answers']['a'])
            let question = radioQuestions[i]['question']
            let answers = fetchAnswers(radioQuestions[i]['answers'], radioQuestions[i]['inputValue']).join('');
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
    // //console.log(questions);
    questionsContainer.innerHTML = questions.join('');
    //console.log("Questions Built");
}

function fetchAnswers(answersArray, inputName){
    console.log(answersArray);
    let htmlAnswers = []
    for (let i in answersArray) {
        if (answersArray.hasOwnProperty(i)) {
            console.log(answersArray[i], i);
            htmlAnswers.push(
            `<input type="radio" name="${inputName}" value="${answersArray[i]}">
            <label for="${inputName}">${answersArray[i]}</label><br>
            `
            )
        }
    }
    htmlAnswers.push(
        `<input type="radio" name="${inputName}" value="not answered" checked>
        <label for="${inputName}">None Selected</label><br>
        `
    )
    return htmlAnswers;
}

function returnAnswer(questionName) {
    let answeredQuestions = document.getElementsByName(questionName);
    let answer = "";
    for (let i in answeredQuestions) {
        if (answeredQuestions.hasOwnProperty(i)){
            if (answeredQuestions[i].checked){
                answer = answeredQuestions[i].value;
                //console.log(answeredQuestions);
            }      
        }
    }
    return answer;
}

function showAnswers(){
    const message = document.getElementById("answers");
    // clear the answer message
    message.innerHTML = "";
    for (i in radioQuestions){
        if (radioQuestions.hasOwnProperty(i)){
            let questionIdentifier = "question" + i
            let selectedAnswer = returnAnswer(questionIdentifier);
            if (selectedAnswer){
                //console.log(selectedAnswer);
                message.innerHTML += `You answered ${radioQuestions[i]['question']}:<br> ${selectedAnswer}<br>`;
            } else {
                message.innerHTML += `OOPS looks like you didn't answer: ${radioQuestions[i]['question']}.<br>`;
            }
        }
    }
    //console.log("Answers Displayed");
    
}

// display quiz right away
buildQuestions();

const previous = document.getElementById("previous");
const next = document.getElementById("next");
const review = document.getElementById("review");
const slides = document.querySelectorAll(".question-slide");
const message = document.getElementById("answers");
const closeReview = document.getElementById("close");
const span = document.getElementsByClassName("close-request")[0];
const modal = document.getElementById("review-modal");

let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if(currentSlide === 0){
        previous.style.display = "none";
    }
    else{
        previous.style.display = "inline-block";
    }
    if(currentSlide === slides.length-1){
        next.style.display = "none";
        review.style.display = "inline-block";
        submit.style.display = "inline-block";
    }
    else{
        next.style.display = "inline-block";
        submit.style.display = "none";
        review.style.display = "none";
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

function reviewAnswers() {
    const modal = document.getElementById("review-modal");
    modal.style.display = "block";
    showAnswers();
}

function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the open modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
};


showSlide(currentSlide);

submit.addEventListener('click', showAnswers);
previous.addEventListener("click", showPreviousSlide);
next.addEventListener("click", showNextSlide);
review.addEventListener("click", reviewAnswers);
closeReview.addEventListener("click", closeModal);


// When the user clicks on <span> (x), close the modal
span.addEventListener("click", closeModal);