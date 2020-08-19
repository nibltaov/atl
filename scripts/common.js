import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
const img = [...document.querySelectorAll('.main__img')],
    slide = document.querySelector('.swiper-container')
const swiperWrapper = document.querySelector('.swiper-wrapper')
let children = ''
const listener = (e) => {
    e.preventDefault();
    if (e.keyCode === 27) {
        slide.classList.remove('active')
        window.removeEventListener('keydown', listener)
    }
}
img.forEach(el => {
    const srcImg = el.querySelector('img').getAttribute('src')

    children += `<div class="swiper-slide">
    <img src="${srcImg}" alt="">
</div>`
    el.addEventListener('click', function (el) {
        el.preventDefault()
        const indexImg = img.indexOf(this);
        slide.classList.add('active')
        const swiper = new Swiper('.swiper-container', {
            initialSlide: indexImg,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            keyboard: {
                enabled: true,
            }
        });
        
        window.addEventListener('keydown', listener)
    })
})
swiperWrapper.innerHTML = children
const btn = document.querySelector('.swiper-button-close')
btn.addEventListener('click', () => {
    slide.classList.remove('active')
})