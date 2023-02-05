const input = document.querySelector('#input')
const button = document.querySelector('#button')
const outputBlock = document.querySelector('.outputBlock')
const left = document.querySelector('.left')
const right = document.querySelector('.right')


button.addEventListener('click', function (event) {
    event.preventDefault()

    if (input.value === "") {
        alert('Заполните все поля!')
        p.remove()
        doneBtn.remove()
    }

    const div = document.createElement('div')
    div.classList.add('inner-block')
    outputBlock.append(div)

    const p = document.createElement('p')
    p.classList.add('task')
    p.innerHTML = input.value

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('doneBtn')
    doneBtn.innerHTML = 'done'

    div.append(left)
    div.append(right)
    left.append(p)
    right.append(doneBtn)

    doneBtn.addEventListener('click', function (event) {
        event.preventDefault()
        p.style.textDecoration = 'line-through'
        doneBtn.innerHTML = 'done ✅'
        doneBtn.style.background = 'grey'
    })
})
