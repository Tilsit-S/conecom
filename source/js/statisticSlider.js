$(document).ready(function(){
    $('.statistic__slider').slick({
        arrows: true,
        dots: true,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    );
});
