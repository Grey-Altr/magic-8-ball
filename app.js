// import functions and grab DOM elements

// let state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state
const questionSection = document.getElementById('question-section');
const askedQuestion = document.getElementById('asked-question');
const askButton = document.getElementById('ask-button');
const answerSection = document.getElementById('answer-section');
const questionDisplay = document.getElementById('question-display');
const answerDisplay = document.getElementById('answer-display');
const toy = document.getElementById('toy');

// set event listeners 
askButton.addEventListener('click', () => {
    copyQuestion();
    toggleVisibility();
    applyAnimations();
    showRandomAnswer();
});

function copyQuestion() {
    const question = askedQuestion.value;
    questionDisplay.textContent = question;
}

function toggleVisibility() {
    questionSection.classList.add('hidden');
    answerSection.classList.remove('hidden');
}

function applyAnimations() {
    answerDisplay.classList.add('fade-in');
    toy.classList.add('shake');
}