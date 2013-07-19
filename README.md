# Backfill.js - fill your window up

A Simple jQuery plugin to stretch elements to the full window size

## Getting Started

<!-- Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/kojinkai/jquery-backfilljs/master/dist/jquery.backfill.min.js
[max]: https://raw.github.com/kojinkai/jquery-backfilljs/master/dist/jquery.backfill.js -->

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/backfill.min.js"></script>
<script>
jQuery(function($) {
  $("#myelement").backfill(); // ""
});
</script>
```

## Documentation
The plugin simply takes the jQuery element and stretches the height to the full height of the window, calculating and padding in the process.

The plugin accepts one option, a number, to offset the height by, if you have a main navigation bar you want to factor into the calculation, for example.`

## Examples 
Subtracting the height of your navigation from the height applied to our element

```html
<script>
jQuery(function($) {
  $("#myelement").backfill({
        offset: $( '.navbar').height()
    });
});
</script>
```
## Release History
_(Nothing yet)_
