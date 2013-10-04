!function($){
  $.fn.multipleFilterMasonry = function(options){
    var cache=[];

    //the main job of the function is to cache the item,because we are going to filter the items later
    var init = function($container){
      $container.find(options.itemSelector).each(function(){
        cache.push($(this));
      });
      $container.masonry(options);
    }

    //filter items in cache
    var filterItems = function(selector){
      var result=[];
      $(cache).each(function(item){
        $(selector).each(function(index,sel) {
          if(cache[item].is(sel)){
            if($.inArray(cache[item], result) === -1) result.push(cache[item]);
          }
        });
      })
      return result;
    }

    //reload masonry
    var reload = function($container,items){
      $container.empty();
      $(items).each(function(){
        $($container).append($(this));
      });
      $container.masonry('reloadItems');
      $container.masonry();
    }

    var proc = function($container){
      $(options.filtersGroupSelector).find('input[type=checkbox]').each(function(){
        $(this).change(function(){
          var selector = [];
          $(options.filtersGroupSelector).find('input[type=checkbox]').each( function() {
            if ( $(this).is(':checked') ) {
              selector.push( '.' + $(this).val() );
            }
          });
          var items = cache;
          if (selector.length > 0) {
            items = filterItems(selector);
          }
          reload($container,items);
        })
      })
    }

    return this.each(function() {
      var $$ = $(this);
      init($$);
      proc($$);
    });
  }
}(window.jQuery)