const input = document.querySelector('.input')
const submit = document.querySelector('.submit')
const printedList = document.querySelector('.printedList')

// when submit is clicked print out what is on the list
// Elements youa re working with
    // 1. submit button
            // create event when click it runs the following actions
    // 2. input list
            // when submit clicked we set the contents equal to new element we create
    // 3. printedList
            // prints everything from the list onto this

submit.addEventListener('click', submitFunction)
function submitFunction () {
    const newButton = document.createElement('button')
    const newPara = document.createElement('li');
    
    newPara.innerText = input.value;
    printedList.append(newPara);
    newButton.innerText = 'x'
    newPara.append(newButton)
    input.value = '';
    
    newButton.addEventListener('click', deleteList)
    function deleteList() {
        newPara.remove();
    }
}








