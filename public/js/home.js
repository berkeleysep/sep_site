// $('.about-option').hover(function() {
//         $('#home-image').removeClass('home-image-0');
//         $('#home-image').addClass('home-image-1');
//     }, function() {
//         $('#home-image').removeClass('home-image-1');
//         $('#home-image').addClass('home-image-0');
// });

// $('.projects-option').hover(function() {
//     $('#home-image').removeClass('home-image-0');
//     $('#home-image').addClass('home-image-2');
// }, function() {
//     $('#home-image').removeClass('home-image-2');
//     $('#home-image').addClass('home-image-0');
// });

// $('.rush-option').hover(function() {
//     $('#home-image').removeClass('home-image-0');
//     $('#home-image').addClass('home-image-3');
// }, function() {
//     $('#home-image').removeClass('home-image-3');
//     $('#home-image').addClass('home-image-0');
// });

/* TODO: find credit for this */

var pieces = 20,
    speed = 1,
    broken = false;

for (var i = pieces - 1; i >= 0; i--) {
  $('.rush-button').prepend('<div class="piece"></div>');
};

function breakGlass(toReverse){
    if (broken && toReverse) {
        // reverse
        $('.piece').each(function(){
            TweenLite.to($(this), speed, {x:0, y:0, rotationX:0, rotationY:0, opacity: 1, z: 0});
          });
        broken = false;
        return;
    } else if (!broken && !toReverse) {
        $('.piece').each(function(){
            var distX = getRandomArbitrary(-250, 250),	
                distY = getRandomArbitrary(-250, 250),
                rotY  = getRandomArbitrary(-720, 720),
                rotX  = getRandomArbitrary(-720, 720),
                z = getRandomArbitrary(-500, 500);
            
            TweenLite.to($(this), speed, {x:distX, y:distY, rotationX:rotX, rotationY:rotY, opacity: 0, z: z});			
        });
        broken = true;
    }	
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
if($(window).width() >= 700){
    $('.rush-button').hover(function() {
        breakGlass(false);
        $('.rush-button').addClass('rush-button-border');
    });
}

