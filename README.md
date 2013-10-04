multiple-filter-masonry
=======================

This script extend the great Desandro Masonry plugin adding the ability to filter elements using multiple filter (checkbox)

### Demo

See the demo at this [page](http://dynamick.github.io/multiple-filter-masonry/)

### How to use

Include the plugins in your html header.

    <script src="javascripts/masonry.pkgd.js"></script>
    <script src="javascripts/multipleFilterMasonry.js"></script>

Add to your custom javascript, the following lines:

    // initialize Masonry
    var $container = $('#masonryContainer');

    $container.multipleFilterMasonry({
      itemSelector: '.challenge',
      filtersGroupSelector:'.filters'
    });

The **filtersGroupSelector** is the container into which the script search for **checkboxes**. For every input[type=checkbox] found, it will be attached an onclick event that will trigger the filtering. The **value of checkboxes** will be matched on the **class** of every masonry elements.

The html fiter part is:

    <div class="btn-toolbar filters">
      <div data-toggle="buttons" class="btn-group">
        <label class="btn btn-default">
          <input type="checkbox" value="Matematica" >
          Matematica
        </label>
        <label class="btn btn-default">
          <input type="checkbox" value="Scienza" >
          Scienza
        </label>
        <label class="btn btn-default">
          <input type="checkbox" value="Letteratura" >
          Letteratura
        </label>
      </div>
      <div data-toggle="buttons" class="btn-group">
        <label class="btn btn-default">
          <input type="checkbox" value="mine" >
          Mine
        </label>
      </div>
    </div>

... and the masonry items...

    <div id="masonryContainer" class="row" >
      <div class="Letteratura challenge col-lg-3 col-md-4 col-sm-6 col-xs-12 mine" >
        <h3>Calcolo del Pi Greco</h3>
      </div>
      <div class="Matematica Scienza challenge col-lg-3 col-md-4 col-sm-6 col-xs-12 mine" >
        <h3>Quadratura cerchio</h3>
      </div>

      ...

    </div>

... where the .challenge class indicate a masonry element. The class .Letteratura, .Matematica, .
Scienza are used for filtering.

### Authors and Contributors

This script is a modified version of kevincantstop's script, [masonry-filtering](https://github.com/kevincantstop/masonry-filtering), and most of the work was done by him.

Many thanks for [DeSandro Masonry](http://masonry.desandro.com/) plugin, on which my script depends.

You can follow me at [@dynamick](https://twitter.com/dynamick) or reading my blog, [Dynamick](http://www.dynamick.it), or become a fan of my [facebook page](http://www.facebook.com/dynamick.it).

### Support or Contact

Having trouble with Multiple Filter Masonry? Check out the documentation at [this page](http://dynamick.github.io/multiple-filter-masonry/) or contact [info AT dynamick it](mailto:info@dynamick.it) and we’ll help you sort it out.


