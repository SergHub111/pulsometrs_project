

let slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    navPosition: 'bottom',
    speed: 1200,
    autoplayTimeout: 5000
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
})

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
})

$(document).ready(function () {

    // catalog 
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');



    // modal windows
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('fast')
    });

    $('.modal__close').on('click', function () {
        $('.modal, .overlay').fadeOut('fast')
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn('fast')
        })
    })

    // validation forms

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Укажите свое имя!",
                    minlength: jQuery.validator.format("Введите не менее {0} букв!")
                },
                phone: "Введите корректный номер",
                email: {
                    required: "Введите корректную почту",
                    email: "Ваша почта неккоректна"
                }
            }
        });
    }
    validateForm('#consultation-form');
    validateForm('#consultation form');
    validateForm('#order form');

    // mask for phone in forms

    $('input[name=phone').mask("+38 (099) 999-99-99");

    // scroll & pageup

    //show pageUpArrow on 1600px scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $(".pageup").fadeIn('fast')
        } else {
            $(".pageup").fadeOut()
        }
    });

    // smooth slide:
    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    // new WOW().init();

    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();

    wowMob = new WOW(
        {
            boxClass: 'wowMob',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: false,       // default
            live: true        // default
        }
    )
    wowMob.init();
});
