const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },


});
const swiperOne = new Swiper('.channel-slider-two', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,


    // Navigation arrows
    navigation: {
        nextElem: '.swiper-button-next',
        prevElem: '.swiper-button-prev',
    },


});
