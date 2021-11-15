//Timer fields
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const millisecondElement = document.querySelector('.millisecond')

//Buttons
const buttonStart = document.querySelector('.start')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonNew = document.querySelector('.new')

//Listeners
buttonStart.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})
buttonPause.addEventListener('click', () => {
    clearInterval(interval)
})
buttonStop.addEventListener('click', () => {
    clearInterval(interval)
    clearFields()
})
buttonNew.addEventListener('click', () => {
    clearInterval(interval)
    counter++
    const results = document.querySelector('.results')
    const block = document.createElement('div')
    block.classList.add('results__info')
    block.innerText = `Result ${counter}: ${hour}:${minute}:${second}:${millisecond}`
    results.append(block)
    clearFields()
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

//Variables
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval,
    counter = 0
    disabled = true


function startTimer() {

    //Milliseconds
    millisecond++
    if(millisecond < 9){
        millisecondElement.innerText = '0' + millisecond
    }
    if (millisecond > 9) {
        millisecondElement.innerText = millisecond
    }
    if(millisecond > 99){
        second++
        secondElement.innerText = '0' + second
        millisecond = 0
        millisecondElement.innerText = '0' + millisecond
    }

    //Seconds
    if(second < 9){
        secondElement.innerText = '0' + second
    }
    if (second > 9) {
        secondElement.innerText = second
    }
    if(second > 59){
        minute++
        minuteElement.innerText = '0' + minute
        second = 0
        secondElement.innerText = '0' + second
    }

    //Minutes
    if(minute < 9){
        minuteElement.innerText = '0' + minute
    }
    if(minute > 9){
        minuteElement.innerText = minute
    }
    if(minute > 59){
        hour++
        hourElement.innerText = '0' + hour
        minute = 0
        minuteElement.innerText = '0' + minute
    }

    //Hours
    if(hour < 9){
        hourElement.innerText = '0' + hour
    }
    if(hour > 9){
        hourElement.innerText = hour
    }

    buttonNew.disabled = false
}

function clearFields() {
    hour = 00
    minute = 00
    second = 00
    millisecond = 00
    hourElement.textContent = '00'
    minuteElement.textContent = '00'
    secondElement.textContent = '00'
    millisecondElement.textContent = '00'
    disabledBtn()
}

function disabledBtn() {
    if(disabled) {
        buttonNew.disabled = true
    }
}
disabledBtn()