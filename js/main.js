$(function() {
    $('.popup__link').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        mainClass: 'mfp-fade',

    });

    $('.gallery__slider').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-prev.svg" alt="arrow-prev">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow-next.svg" alt="arrow-next"></button>',
    });


    $('.gallery__item-inner').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
    });


    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });

});