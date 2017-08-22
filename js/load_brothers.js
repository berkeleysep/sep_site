$(function () {
  // var template = Handlebars.templates['brother'];

  var source   = $('#brother-template').html();
  var template = Handlebars.compile(source);

  // Define our data object
  $.getJSON('templates/brothers.json').then(function(data){
    // Pass our data to the template
    var theCompiledHtml = template(data);

    // Add the compiled html to the page
    $('.content-placeholder').html(theCompiledHtml);
  });
});
