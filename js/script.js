let stars = document.querySelector('#stars')
let moon = document.querySelector('#moon')
let mountains_behind = document.querySelector('#mountains_behind')
let text = document.querySelector('#text')
let btn = document.querySelector('#btn')
let mountains_front = document.querySelector('#mountains_front')
let header = document.querySelector('header')
let descr = document.querySelectorAll('.txt')

window.onscroll = () => {
    let val = window.scrollY
    stars.style.left = val + "px"
    stars.style.bottom = val + "px"
    moon.style.top = val * 0.75 + "px"
    mountains_behind.style.top = val * .25 + 'px'
    text.style.marginRight = val * 2  + 'px'
    text.style.marginTop = val * .75 + 'px'
    btn.style.marginTop = val * .5 + 'px'
    mountains_front.style.top = val * .20 + 'px'
    header.style.marginTop = val * .5 + 'px'
    if(val >= 350){
        descr.forEach(el => el.style.opacity = '1')
    } else {
        descr.forEach(el => el.style.opacity = null)
    }
}