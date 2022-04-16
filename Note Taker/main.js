const inputNotes = document.querySelector('.inputNotes');
const button = document.querySelector('.button');
const notes = document.querySelector('.notes')
const inputTitle = document.querySelector('.inputTitle')
const body = document.querySelector('body')

button.addEventListener('click',printNotes) 
function printNotes() {
    const newDiv = document.createElement('div')
    const newTitle = document.createElement('h1')
    const savedNotes = document.createElement('p');
    const deleteButton = document.createElement('button')
    const viewNotesButton = document.createElement('button')
    
    newDiv.classList.add('newDiv')
    notes.append(newDiv)
    newDiv.append(newTitle)
    newDiv.append(savedNotes)
    newDiv.append(deleteButton)
    newDiv.append(viewNotesButton)

    newTitle.innerText = inputTitle.value;
    savedNotes.innerText = inputNotes.value.substr(0,100) + '...';
    deleteButton.innerText = 'x'
    viewNotesButton.innerText = 'View Notes'

    deleteButton.addEventListener('click', () => {
        newDiv.remove();
      })   
    viewNotesButton.addEventListener('click', () => {
        newDiv.classList.remove('newDiv')
        newDiv.classList.add('viewNotes')
        
        savedNotes.innerText = inputNotes.value
    })
}





