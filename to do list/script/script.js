const input = document.querySelector('#input')
const button = document.querySelector('#button')
const innerBLock = document.querySelector('.inner-block')
const tasks = document.querySelector('.tasks');
const button2 = document.querySelector('.button');

button.addEventListener('click', function (event) {
    event.preventDefault()

    const p = document.createElement('p')
    p.classList.add('task')
    p.textContent = input.value

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('doneBtn')
    doneBtn.textContent = 'done'


    tasks.append(p)
    button2.append(doneBtn)
})