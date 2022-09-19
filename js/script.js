$(document).ready(function () {

    $('#carousel img:eq(0)').addClass('.car-active').show();

    setInterval(slide, 3000);

    function slide() {
        if ($('.car-active').next().length) {
            $('.car-active').removeClass('car-active').hide().next().addClass('car-active').show()
        } else {
            $('.car-active').removeClass().hide()
            $('#carousel img:eq(0)').addClass('car-active').show()
        }
    };
    $('.menu-btn').click(function () {
        $(this).toggleClass('fa-times');
        $('.menu').toggleClass('menu-active');
    })

});
