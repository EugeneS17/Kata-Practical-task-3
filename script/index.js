let swiperSlidesList = document.querySelector('.swiper-slides__list');
let showAllButton = document.querySelector('.show-all-button');

// Обработчик события 'click'
showAllButton.addEventListener('click', () => {
    if (swiperSlidesList.classList.contains('swiper-slides__list--show')) {
        swiperSlidesList.classList.remove('swiper-slides__list--show');
        showHideButton(false);
        return;
    }

    swiperSlidesList.classList.add('swiper-slides__list--show');
    showHideButton(true);
});

// Функция кнопки 'Показать/Скрыть'
function showHideButton(show) {
    if (show) {
        showAllButton.classList.add('show-all-button--show');
        showAllButton.textContent = 'Cкрыть';
        return;
    }

    showAllButton.classList.remove('show-all-button--show');
    showAllButton.textContent = 'Показать всё';
}
// Функиция сворачивания/разворачивания подменю
function tglSwiperSlides(show) {
    if (!show) {
        swiperSlidesList.classList.remove('swiper-slides__list');
        swiperSlidesList.classList.remove('swiper-slides__list--show');
        swiperPagination.classList.remove('hidden');
        showAllButton.classList.add('hidden');
        showHideButton(false);
        return;
    }

    swiperSlidesList.classList.add('swiper-slides__list');
    swiperPagination.classList.add('hidden');
    showAllButton.classList.remove('hidden');
}

// Параметры слайдера
let initSwiper = false;
let swiper;
let setting = {
    slidesPerView: "auto",
    spaceBetween: 16,
    grabCursor: true,
    direction: 'horizontal',
    pagination: {
        el: '.swiper-slides__pagination',
        clickable: true,
    },
};

let swiperPagination = document.querySelector('.swiper-pagination');

// Функция и условия инициализации слайдера
function swiperMode() {
    let mobile = window.matchMedia('(width < 768px)');
    if (mobile.matches) {
        if (!initSwiper) {
            initSwiper = true;
            swiper = new Swiper('.swiper', setting);
            tglSwiperSlides(false);
        }
    } else if (initSwiper) {
        swiper.destroy();
        initSwiper = false;
        tglSwiperSlides(true);
    }
}
// Запуск функции инициализации
swiperMode();
window.addEventListener('resize', swiperMode);