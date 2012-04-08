Backbone Support
================

Create backbone models:
```js
namespace("my.app.models", function(model){
    model("Sculpture", {
        name: 'Sculpture Name',
        img: ''
    });
    model("Person", {
        name: 'Michelangelo',
        bornYear: 1475,
        diedYear: 1564,
        aged: function(){
            return this.diedYear - this.bornYear;
        },
        bestSculpture: null
   });
});
```

Just backbone.js:

```js
var Sculpture = Backbone.Model.extend({
    defaults: {
        name: 'Sculpture Name',
        img: ''
    }
});

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Michelangelo',
        bornYear: 1475,
        diedYear: 1564,
        aged: function(){
            return this.diedYear - this.bornYear;
        },
        sculpture: {
            name: 'Piet&agrave;'
        }
    }
})
```
