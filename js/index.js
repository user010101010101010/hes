
const semicircle = document.querySelectorAll('.anim-x .semicircle')
const arrow = document.querySelectorAll('.anim-x .arrow')
const semicircle2 = document.querySelectorAll('.anim-y .semicircle')
const arrow2 = document.querySelectorAll('.anim-y .arrow')
const text = document.querySelectorAll('.semicircle-text')

setInterval(() => {
    semicircle.forEach(e1 => {
        e1.classList.toggle('w-100')
    })
    arrow.forEach(e2 => {
        e2.classList.toggle('w-0')
    })
    text.forEach(e3 => {
        e3.classList.toggle('d-none')
    })

    semicircle2.forEach(e1 => {
        e1.classList.toggle('h-100')
    })
    arrow2.forEach(e2 => {
        e2.classList.toggle('h-0')
    })
}, 2500);