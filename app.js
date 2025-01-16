const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() { 
    const randomNumber = Math.floor(Math.random() * 3) // or you can use possibleChoices.length
    console.log(randomNumber)
    const choices = ['rock', 'scissors', 'paper']
    computerChoice = choices[randomNumber]
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    let result
    if (computerChoice === userChoice) {
        result = 'It\'s a draw!'
    } else if ((computerChoice === 'rock' && userChoice === 'scissors') ||
               (computerChoice === 'scissors' && userChoice === 'paper') ||
               (computerChoice === 'paper' && userChoice === 'rock')) {
        result = 'You lost!'
    } else {
        result = 'You won!'
    }
    resultDisplay.innerHTML = result
}

