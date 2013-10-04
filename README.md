multiple-filter-masonry
=======================

This script extend the great Desandro Masonry plugin adding the ability to filter elements using multiple filter (checkbox)

### Demo

See the demo at this [page](http://dynamick.github.io/multiple-filter-masonry/)

### How to use

The Javascript part is:

          // initialize Masonry
          var $container = $('#masonryContainer');

          $container.multipleFilterMasonry({
            itemSelector: '.challenge',
            filtersGroupSelector:'.filters'
          });`</pre>

The **filtersGroupSelector** is the container into which the script search for **checkboxes**. For every input[type=checkbox] found, it will be attached an onclick event that will trigger the filtering. The **value of checkboxes** will be matched on the **class** of every masonry elements.

The html fiter part is:

        <pre>`
          &lt;div class=&quot;btn-toolbar filters&quot;&gt;
            &lt;div data-toggle=&quot;buttons&quot; class=&quot;btn-group&quot;&gt;
              &lt;label class=&quot;btn btn-default&quot;&gt;
                &lt;input type=&quot;checkbox&quot; value=&quot;Matematica&quot; &gt;
                Matematica
              &lt;/label&gt;
              &lt;label class=&quot;btn btn-default&quot;&gt;
                &lt;input type=&quot;checkbox&quot; value=&quot;Scienza&quot; &gt;
                Scienza
              &lt;/label&gt;
              &lt;label class=&quot;btn btn-default&quot;&gt;
                &lt;input type=&quot;checkbox&quot; value=&quot;Letteratura&quot; &gt;
                Letteratura
              &lt;/label&gt;
            &lt;/div&gt;
            &lt;div data-toggle=&quot;buttons&quot; class=&quot;btn-group&quot;&gt;
              &lt;label class=&quot;btn btn-default&quot;&gt;
                &lt;input type=&quot;checkbox&quot; value=&quot;mine&quot; &gt;
                Mine
              &lt;/label&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        `</pre>

... and the masonry items...

        <pre>`
          &lt;div id=&quot;masonryContainer&quot; class=&quot;row&quot; &gt;
            &lt;div class=&quot;Letteratura challenge col-lg-3 col-md-4 col-sm-6 col-xs-12 mine&quot; &gt;
              &lt;h3&gt;Calcolo del Pi Greco&lt;/h3&gt;
            &lt;/div&gt;
            &lt;div class=&quot;Matematica Scienza challenge col-lg-3 col-md-4 col-sm-6 col-xs-12 mine&quot; &gt;
              &lt;h3&gt;Quadratura cerchio&lt;/h3&gt;
            &lt;/div&gt;

            ...

          &lt;/div&gt;

### Authors and Contributors

This script is a modified version of kevincantstop's script, [masonry-filtering](https://github.com/kevincantstop/masonry-filtering), and most of the work was done by him.

Many thanks for [DeSandro Masonry](http://masonry.desandro.com/) plugin, on which my script depends.

You can follow me at [@dynamick](https://twitter.com/dynamick) or reading my blog, [Dynamick](http://www.dynamick.it), or become a fan of my [facebook page](http://www.facebook.com/dynamick.it).

### Support or Contact

Having trouble with Multiple Filter Masonry? Check out the documentation at [this page](http://dynamick.github.io/multiple-filter-masonry/) or contact [info AT dynamick it](mailto:info@dynamick.it) and we’ll help you sort it out.


