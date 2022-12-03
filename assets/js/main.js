/**
* Main JavaScript for the site
*/

// init questions varaible for quiz
const questions = [];

/** defined questions array for the quiz, questions with more than 8 answers options may spill out of the answer box on smaller screens. 
 * should follow the following format:
 * {
 *   question: "This is the question that will be displayed",
 *   answers: {
 *      a: "this is answer 1",
 *      b: "this is answer 2",
 *      c: "this is answer 3",
 *      d: "this is answer 4",
 *   },
 *  inputValue: "data value that is submitted downstream as a key for key pair value"
 * } 
 * */
const radioQuestions = [
    {
        question: "How many CPUs are required?",
        answers: {
            a: "1",
            b: "2",
            c: "4",
            d: "8",
        },
        inputValue: "cpu"
    },
    {
        question: "How many GBs of Memory?",
        answers: {
            a: "1",
            b: "2",
            c: "4",
            d: "8",
            e: "16",
            f: "32",
            g: "64",
            h: "128"
        },
        inputValue: "mem"
    },
    {
        question: "What Additional Data Disk Size is Required?",
        answers: {
            a: "20",
            b: "40",
            c: "80",
            d: "120",
            e: "160",
            f: "240",
            g: "480",
            h: "960"
        },
        inputValue: "datad"
    },
    {
        question: "What Location is Needed?",
        answers: {
            a: "US West (Oregon)",
            b: "US East (Ohio)",
            c: "South America (São Paulo)",
            d: "Europe (Ireland)",
            e: "Europe (London) Region",
            f: "Middle East (Bahrain) Region",
            g: "Australia (Sydney) Region",
            h: "Asia Pacific (Seoul)"
        },
        inputValue: "location"
    },
    {
        question: "What Environment is being deployed to?",
        answers: {
            a: "Production",
            b: "Staging",
            c: "Testing",
            d: "Development",
            e: "External"
        },
        inputValue: "env"
    },
    {
        question: "What Operating System should be installed?",
        answers: {
            a: "Windows Server 2019",
            b: "Windows 11",
            c: "Linux: Debian",
            d: "Linux: Centos",
            e: "Linux: Kali",
            f: "BSD: MacOS",
            g: "BSD: Firewall"
        },
        inputValue: "osType"
    }
];

// define the DOM elements to set up the quiz area
let questionsContainer = document.getElementById('questions');
let submit = document.getElementById('submit');

/**
 * build out the questions html, relies on fetchAnswers() to handle the multiple choice answer formatting
 * use of hasOwnProperty check for defensive coding, let i in array has potential injection issues
 */
function buildQuestions(){
    for (let i in radioQuestions) {
        if (radioQuestions.hasOwnProperty(i)) {
            let question = radioQuestions[i].question;
            let answers = fetchAnswers(radioQuestions[i].answers, radioQuestions[i].inputValue).join('');
            questions.push(
                `
                <div class="question-slide">
                    <p>${question}</p>
                    ${answers}
                </div>
                `
            );
        }
    }
    questionsContainer.innerHTML = questions.join('');
}

/**
 * Return the HTML code for a given question as an array
 * @param {Object} answersData - the key pairs for the question answers
 * @param {string} inputName - details for the radio input name and label
 * @returns 
 */
function fetchAnswers(answersData, inputName){
    let htmlAnswers = [];
    for (let i in answersData) {
        if (answersData.hasOwnProperty(i)) {
            htmlAnswers.push(
            `<input type="radio" id="${inputName}" name="${inputName}" value="${answersData[i]}">
            <label for="${inputName}">${answersData[i]}</label><br>
            `
            );
        }
    }
    htmlAnswers.push(
        `<input type="radio" id="none" name="${inputName}" value="not answered" checked>
        <label for="none">None Selected</label><br>
        `
    );
    return htmlAnswers;
}

/**
 * return the selected answer for a question
 * @param {String} questionName - name value for an input question
 * @returns 
 */
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

/**
 * Called in the Review Modal to show the user what answers they selected in the quiz
 * relies on returnAnswer() function to handle the fetching of the selected answers to build the Modal's HTML
 */
function showAnswers(){
    message.innerHTML = "";
    for (let i in radioQuestions){
        if (radioQuestions.hasOwnProperty(i)){
            let selectedAnswer = returnAnswer(radioQuestions[i].inputValue);
            if (selectedAnswer){
                message.innerHTML += `<li>Q: ${radioQuestions[i].question}:<br>A: ${selectedAnswer}</li>`;
            } else {
                message.innerHTML += `<li>OOPS looks like you didn't answer: ${radioQuestions[i].question}.</li>`;
            }
        }
    }
    
}

/**
 * Questions are built before the global controls and slide show is generated.
 */
buildQuestions();
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const review = document.getElementById("review");
const helper = document.getElementById("order-helper");
const slides = document.querySelectorAll(".question-slide");
const message = document.getElementById("answers");
const closeReview = document.getElementById("close");
const closeHelp = document.getElementById("close-help");
const span = document.getElementsByClassName("close-modal")[0];
const span2 = document.getElementsByClassName("close-modal")[1];
const modal = document.getElementById("review-modal");
const help = document.getElementById("help-modal");

// set inital slide page to the first question
let currentSlide = 0;

/**
 * slide deck control managment
 * No previous if on first page
 * No next if on last page
 * Only show review and submit when on the last page
 * @param {Integer} n - slide number
 */
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

/**
 * increment the the slide show page by 1
 * called on the next button on index
 */
function showNextSlide() {
    showSlide(currentSlide + 1);
}

/**
 * decrease the slide show page by 1
 * called by the previous button on index
 */
function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

/**
 * Launch review answers modal
 * displays outpout of showAnswers()
 * called by review button on index
 */
function reviewAnswers() {
    const modal = document.getElementById("review-modal");
    modal.style.display = "block";
    showAnswers();
}


/**
 * Launch Help modal
 * called by help icon button on index
 */
 function launchHelp() {
    const help = document.getElementById("help-modal");
    help.style.display = "block";
}

/**
 * Hide modal content
 * called by close button and span of times in modal content and click outside of modal content
 */
function closeModal() {
    modal.style.display = "none";
    help.style.display = "none";
}

/**
 * Event handler to hide modal content when modal is clicked, relies on closeModal() for the action
 * @event document#mouseclick 
 */
window.onclick = function(event) {
  if (event.target == modal || event.target == help) {
    closeModal();
  }
};

// display current slide
showSlide(currentSlide);

// event listeners once all content is loaded
submit.addEventListener('click', showAnswers);
previous.addEventListener("click", showPreviousSlide);
next.addEventListener("click", showNextSlide);
review.addEventListener("click", reviewAnswers);
helper.addEventListener("click",launchHelp);
closeReview.addEventListener("click", closeModal);
closeHelp.addEventListener("click", closeModal);
// When the user clicks on <span> (x), close the modal
span.addEventListener("click", closeModal);
span2.addEventListener("click", closeModal);