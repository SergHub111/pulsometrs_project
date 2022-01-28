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
