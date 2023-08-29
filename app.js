const OPEN = document.getElementById("open")
const CLOSE = document.getElementById("close")
const CONTAİNER = document.querySelector('.container')

OPEN.addEventListener('click',() => {
    CONTAİNER.classList.add('show-nav')

})

CLOSE.addEventListener('click',() => {
    CONTAİNER.classList.remove('show-nav')

})