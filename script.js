
document.querySelectorAll('.adult-slider').forEach(slider => {
    new Swiper(slider, {
        loop: true,

        navigation: {
            nextEl: slider.querySelector('.foto-right'),
            prevEl: slider.querySelector('.foto-left'),
        },

        pagination: {
            el: slider.querySelector('.swiper-pagination'),
            clickable: true,
            dynamicBullets: true,
        },
        autoHeight: true,
        spaceBetween: 20,
        effect: 'flip',
        });
});
new Swiper('.puppies-slider', {
    loop: false,
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 15,

    navigation: {
        nextEl: '.puppies-slider .foto-right',
        prevEl: '.puppies-slider .foto-left',
    },

    pagination: {
        el: '.puppies-slider .swiper-pagination',
        clickable: true,        
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },
    breakpoints: {
        200: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    }
});
// window.location.href = "mailto:iii888jji@gmail.com";