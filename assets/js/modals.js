const modalBtn1 = document.getElementById('projectModal1')
const modalContent1 = document.getElementById('modal1')
const closeBtn1 = document.getElementById('closeBtn1')

modalBtn1.addEventListener('click', () => {
    if (modalContent1.style.display === 'none') {
        modalContent1.style.display = 'block'
        document.body.style.overflow = 'hidden'
    } else {
        modalContent1.style.display = 'none'
        document.body.style.overflow = 'auto'
    }
})

window.addEventListener('click', () => {
    if(event.target !== modalContent1 && event.target !== modalBtn1) {
        modalContent1.style.display = 'none'
        document.body.style.overflow = 'auto'
    }
})

closeBtn1.addEventListener('click', () => {
    modalContent1.style.display = 'none'
    document.body.style.overflow = 'auto'
})






