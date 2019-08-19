$('.about-option').hover(function() {
        $('#home-image').removeClass('home-image-0');
        $('#home-image').addClass('home-image-1');
    }, function() {
        $('#home-image').removeClass('home-image-1');
        $('#home-image').addClass('home-image-0');
});

$('.projects-option').hover(function() {
    $('#home-image').removeClass('home-image-0');
    $('#home-image').addClass('home-image-2');
}, function() {
    $('#home-image').removeClass('home-image-2');
    $('#home-image').addClass('home-image-0');
});

$('.rush-option').hover(function() {
    $('#home-image').removeClass('home-image-0');
    $('#home-image').addClass('home-image-3');
}, function() {
    $('#home-image').removeClass('home-image-3');
    $('#home-image').addClass('home-image-0');
});