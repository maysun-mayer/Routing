$(document).ready(function() {
    $('nav a').click(function(e) {
        e.preventDefault();
        var page = $(this).attr('href');
        $('.page').removeClass('active');
        $(page).addClass('active');
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, 1000);
    });
});
