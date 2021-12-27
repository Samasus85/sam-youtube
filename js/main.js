const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1900: {
            slidesPerView: 6,
        },
        1600: {
            slidesPerView: 5,
        },
        1300: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 3,
        },
        760: {
            slidesPerView: 2,
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '#next',
        prevEl: '#prev',
    },


});
const swiperOne = new Swiper('.channel-slider-two', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        1600: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 2
        },


    },
    spaceBetween: 20,


    // Navigation arrows
    navigation: {
        nextEl: '#recomended-next',
        prevEl: '#recomended-prev',
    },
});
const swiperTwo = new Swiper('.channel-slider-bottom', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        1900: {
            slidesPerView: 6,
        },
        1600: {
            slidesPerView: 5,
        },
        1300: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 3,
        },
        760: {
            slidesPerView: 2,
        }
    },
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
        nextEl: '#next-bottom',
        prevEl: '#prev-bottom',
    },
});

const searchBtn = document.querySelector('.mobile-search')
const mobileSearch = document.querySelector('.input-group')
searchBtn.addEventListener('click', () => {
    mobileSearch.classList.toggle('is-open')
});

if (document.documentElement.scrollWidth <= 640) {
    swiper.destroy();
    swiperOne.destroy();
    swiperTwo.destroy();
}
