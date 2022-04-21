const container = document.querySelector('.container')
const submitButton = document.querySelector('.submitButton')
const userInputBox = document.querySelector('.userInputBox')
const colorButton = document.querySelector('.colorButton')
const clearButton = document.querySelector('.clearButton')
const eraseButton = document.querySelector('.eraseButton')

const newlyMadeDivs = []


// function that takes the num that user inputs
submitButton.addEventListener('click', userGridInput)
function userGridInput () {
    const userInput = userInputBox.value
    userInputBox.value = ''
    if(userInput < 100 ) {
        clearGrids();
        createGrids(userInput)
        changeGridSize(userInput)
    }
}

// function that just makes the divs 
function createGrids(userInput) {
    for (i = 0; i < userInput*userInput; i++) {
            let newDiv = document.createElement('div');
            // newDiv.classList.add('newDiv')
            container.append(newDiv)
            newDiv.style.backgroundColor = 'white'
            newlyMadeDivs.push(newDiv)
    }
}

// function that will change size of divs
function changeGridSize(userInput) {
    container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
}

// function hover over change color
colorButton.addEventListener('click', colorGrid)
function colorGrid() {
    newlyMadeDivs.forEach((div) => {
        div.addEventListener('mouseover', () => div.style.backgroundColor = 'black')
    })
}

// function erase parts of grid
eraseButton.addEventListener('click', eraseGrid)
function eraseGrid() {
    newlyMadeDivs.forEach((div) => {
        div.addEventListener('mouseover', () =>  div.style.backgroundColor = 'white')
    })  
}

// fucntion clear grid
clearButton.addEventListener('click', clearGrids)
function clearGrids() {
    newlyMadeDivs.forEach((div) => div.remove())
}




