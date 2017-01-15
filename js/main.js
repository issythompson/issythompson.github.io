$(function() {
  $('nav li.' + location.pathname.split("/").slice(-1)[0].split('.')[0]).addClass('active');
});