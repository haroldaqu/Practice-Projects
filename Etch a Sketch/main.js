const container = document.querySelector('.container')
const deleteButton = document.querySelector('.button')
const submitButton = document.querySelector('.submitButton')
const userInput = document.querySelector('.userInput')

let userNumValue;

function createDiv () {
    if (userNumValue < 50){
        for (i = 0; i < userNumValue; i++) {
           const newDiv = document.createElement('div')
            newDiv.classList.add('newDiv')
            container.append(newDiv)
            newDiv.classList.add(`div${[i]}`)
        } 
    } 
    if (userNumValue > 50) { 
        alert('Please input # lower than 50')
        return;
    } 
    deleteButton.addEventListener('click', () => {
        container.remove()
    })
}

submitButton.addEventListener('click', userGridInput)
function userGridInput () {
    userNumValue = userInput.value;
    createDiv()
}








