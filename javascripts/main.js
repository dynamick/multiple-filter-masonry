console.log('This would be the main JS file.');
(function() {

  // initialize Masonry
  var $container = $('#container');

  $container.filteredMasonry({
    itemSelector: '.challenge',
    filtersGroupSelector:'.filters'
  });

});