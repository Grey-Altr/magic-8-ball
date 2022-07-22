// import functions and grab DOM elements

// let state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state


const questionSection = document.getElementById('question-section');
const askButton = document.getElementById('ask-button');
const answerSection = document.getElementById('answer-section');
const toy = document.getElementById('toy');


// set event listeners 
askButton.addEventListener('click', () => {
    toggleVisibility();
    applyAnimations();
    setTimeout(validateBall, 1000);
});

function toggleVisibility() {
    questionSection.classList.add('hidden');
    answerSection.classList.remove('hidden');
}

function applyAnimations() {
    toy.classList.add('shake');
}

function validateBall(){
    const randomId = Math.floor(Math.random() * 20);
    document.getElementById(randomId).checked = true;
}
