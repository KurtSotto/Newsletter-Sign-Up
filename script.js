const email = document.querySelector('#email')
const form = document.querySelector('#form')
let emailValue 
let timeoutId

// function to validate email
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(String(email).toLowerCase())
}

form.addEventListener('submit', e => {
    e.preventDefault()
    validateEmail()
})

function setError(msg){
    const showMsg = document.querySelector('.error')
    const inputElement = document.querySelector('input')
    showMsg.innerText = msg
    inputElement.classList.add('red-border')

    clearTimeout(timeoutId)
    timeoutId = setTimeout(_ => {
        showMsg.innerText = ''
        inputElement.classList.remove('red-border')
    }, 3000)
}

function validateEmail(){
    emailValue = email.value.trim()

    if(emailValue === '') {
        setError('This field is required');
    } else if (!isValidEmail(emailValue)) {
        setError('Valid email required');
    } else {
        window.location.href = `success.html?email=${encodeURIComponent(emailValue)}`
        document.querySelector('.error').innerText = ''
        email.value = ''
    }
}

