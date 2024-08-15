document.addEventListener('DOMContentLoaded', ()=> {
    
    const elements = document.querySelectorAll('.slide-in')

    const callback = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible')
            }
        })
    }

    const observer = new IntersectionObserver(callback, {
        threshold: 0.1
    })

    elements.forEach(element =>{
        observer.observe(element)
    })
})