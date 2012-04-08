Namespace JS
============

The easy way to create a namespace in javascript context

Without namespace:

```js
var badPublic = 'its bad public variable';
function MyClass(){
    this.myMethod = function(){
        alert('Hello world!');
    }
}
```

With namespace:

```js
namespace('my.package1', function(){
    // not bad
    var badPublic = 'its bad public variable';

    // the same class
    function MyClass(){
        this.myMethod = function(){
            alert('Hello world!');
        }
    }

    // turn public MyClass
    return { MyClass: MyClass };
});
```

As you can see its easy to put old code inside a namespace.

```js
// import like java
var MyClass = my.package1.MyClass;
    
var myClass = new MyClass();
myClass.myMethod();
```

## Other syntax

```js
namespace('my.pack1', {
    MyClass: {
        myMethod: function(){
            alert('Hello world');
        }
    }
});
```

## Backbone.js support 

[backbone support docs](https://github.com/fabiooshiro/namespace-js/blob/master/docs/backbone-js.md "Backbone.js")

### Who is using namespace.js

#### Traffic Cone
https://github.com/j03m/trafficcone

### License

The project is licensed under the WTFPL.
http://sam.zoy.org/wtfpl/
