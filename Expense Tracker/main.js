// Grab elements
const button = document.querySelector('.button')
const name = document.querySelector('#name')
const date = document.querySelector('#date')
const amount = document.querySelector('#amount')
const table = document.querySelector('table')

// when button clicked it will execute printEpense function
button.addEventListener('click', printExpense)

// printExpense function
function printExpense() {
    const newTR = document.createElement('tr')
    const thName = document.createElement('th')
    const thDate = document.createElement('th')
    const thAmount = document.createElement('th')
    const thDelete = document.createElement('th')
    const deleteButton = document.createElement('button')
    
    
    table.append(newTR)
    newTR.append(thName)
    newTR.append(thDate)
    newTR.append(thAmount)
    newTR.append(thDelete)
    thDelete.append(deleteButton)
    
    thName.innerText = name.value
    thDate.innerText = date.value
    thAmount.innerText = amount.value
    deleteButton.innerText = 'x'

    deleteButton.addEventListener('click', () => {
        newTR.remove();
    })
}
























