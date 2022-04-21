const text = document.querySelector('.text');
const button = document.querySelector('.button')
const vowelAmount = document.querySelector('.vowelAmount')
const userInput = document.querySelector('.userInput')
const vowels = ['a', 'e','i','o','u']

let vowelCount = 0;

button.addEventListener('click', grabInput)
function grabInput() {
    const userText = text.value
    userInput.innerText = userText
    userInput.style.color = 'red'
    text.value = ''


    if (userText.length) {vowelCount = 0}

    for (i = 0; i < userText.length; i++) {
        if (userText[i] === 'a') {vowelCount++}
        if (userText[i] === 'e') {vowelCount++}
        if (userText[i] === 'i') {vowelCount++}
        if (userText[i] === 'o') {vowelCount++}
        if (userText[i] === 'u') {vowelCount++} 
    }
    vowelAmount.innerText = vowelCount
}





