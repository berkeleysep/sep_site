$('#fratty-open').on('click', function () {
    console.log('hello');
    $('#fratty-modal').css("display", "block");
});

$('#fratty-close').on('click', function () {
    $('#fratty-modal').css("display", "none");
});

$('#tt-open').on('click', function () {
    console.log('hello');
    $('#tt-modal').css("display", "block");
});

$('#tt-close').on('click', function () {
    $('#tt-modal').css("display", "none");
});

$('#fmb-open').on('click', function () {
    console.log('hello');
    $('#fmb-modal').css("display", "block");
});

$('#fmb-close').on('click', function () {
    $('#fmb-modal').css("display", "none");
});

$('#cs-open').on('click', function () {
    console.log('hello');
    $('#cs-modal').css("display", "block");
});

$('#cs-close').on('click', function () {
    $('#cs-modal').css("display", "none");
});

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }