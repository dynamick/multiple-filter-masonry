$(function() {

  console.log('This would be the main JS file.');

  // initialize Masonry
  var $container = $('#masonryContainer');

  $container.multipleFilterMasonry({
    itemSelector: '.challenge',
    filtersGroupSelector:'.filters'
  });

});