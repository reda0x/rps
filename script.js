const getcomputerchoise = () =>{
    let choises = ['rock', 'paper', 'scissor']
    let ranum = Math.floor(Math.random() * 3)
    let computerchoise = choises[ranum]
    return computerchoise
}
const getResult = (playerchoise, computerchoise) => {
    let score;
    if (playerchoise == computerchoise){
        score = 0
    }else if(playerchoise == 'rock' && computerchoise == 'scissor'){
        score = 1
    }else if(playerchoise == 'rock' && computerchoise == 'paper'){
        score = -1
    }else if(playerchoise == 'scissor' && computerchoise == 'rock'){
        score = -1
    }else if(playerchoise == 'paper' && computerchoise == 'rock'){
        score = 1
    }else if(playerchoise == 'scissor' && computerchoise == 'paper'){
        score = 1
    }else if(playerchoise == 'paper' && computerchoise == 'scissor'){
        score = -1
    }
    return score
    
}
const showResult = (score, playerchoise, computerchoise) => {
    let hands = document.querySelector('.hands')
    let result = document.querySelector('.result')
    if (score == 1){
        result.innerText = 'you won!'
    }else if (score == -1){
        result.innerText = 'you lose!'
    }else if (score == 0){
        result.innerText = "it's a draw!"
    }
    hands.innerText =` ${playerchoise} VS ${computerchoise}`
}
const rpsbutton = (playerchoise) => {
    computerchoise = getcomputerchoise()
    score = getResult(playerchoise.value, computerchoise)
    showResult(score, playerchoise.value, computerchoise)
}
const playgame = () => {
    let rpsbuttons = document.querySelectorAll('.rps-button')
    rpsbuttons.forEach(button => button.onclick = () => rpsbutton(button))
    let clearbutton = document.querySelector('.clear-button')
    clearbutton.onclick = () => clearResult()
}
const clearResult = () => {
    let hands = document.querySelector('.hands')
    let result = document.querySelector('.result')
    hands.innerText = ''
    result.innerText = ''
}
playgame()