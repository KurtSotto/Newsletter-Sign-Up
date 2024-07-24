const params = new URLSearchParams(window.location.search)
const email = params.get('email')

document.querySelector('span').textContent = email

document.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        window.location.href = './index.html'
    }
})