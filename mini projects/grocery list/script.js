const itemButton = document.getElementById('btnItem')
const itemInput = document.getElementById('item')
const groceryList = document.getElementById('groceryList')

function newTask(itemInput) {
    const li = document.createElement('li')
    li.innerText = itemInput
    groceryList.appendChild(li)
    cleanInput()
    deleteButton(li)
    saveLocalStorage()
}

function cleanInput() {
    itemInput.value = ''
    itemInput.focus()
}

function deleteButton(li) {
    li.innerText += ' '
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButton.setAttribute('class', 'delete')
    li.appendChild(deleteButton)
}

function saveLocalStorage() {
    const items = groceryList.querySelectorAll('li')
    const groceriesArray = []

    for (let item of items) {
        let itemText = item.innerText
        itemText = itemText.replace('Delete', '').trim()
        groceriesArray.push(itemText)
    }

    const groceriesJSON = JSON.stringify(groceriesArray)
    localStorage.setItem('groceryList', groceriesJSON)
}

function getFromLocalStorage(){
    const groceriesJSON = localStorage.getItem('groceryList')
    const groceriesArray = JSON.parse(groceriesJSON)

    for (let item of groceriesArray){
        newTask(item)
    }
}

itemButton.addEventListener('click', function () {
    if (!itemInput.value) return
    newTask(itemInput.value)
})

itemInput.addEventListener('keypress', function (e) {
    if (!itemInput.value) return
    if (e.keyCode === 13) newTask(itemInput.value)
})

document.addEventListener('click', function (e) {
    const target = e.target
    if (target.classList.contains('delete')) target.parentElement.remove()
    saveLocalStorage()
})

getFromLocalStorage()