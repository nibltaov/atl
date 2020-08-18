import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
const img = [...document.querySelectorAll('.main__img')],
slide = document.querySelector('.swiper-container')

img.forEach(el => {
    el.addEventListener('click', function (el) {
        el.preventDefault()
        const indexImg = img.indexOf(this);
        slide.classList.add('active')
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            initialSlide: indexImg,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    })
})
const btn = document.querySelector('.swiper-button-close')
btn.addEventListener('click', () => {
    slide.classList.remove('active')
})