Namespace JS
============

The easy way to create a namespace in javascript context

Without namespace:

```
    var badPublic = 'its bad public variable';
    function MyClass(){
        this.myMethod = function(){
            alert('Hello world!');
        }
    }
```

With namespace:

```
namespace('my.package', function(){
    // not bad
    var badPublic = 'its bad public variable';

    // the same class
    function MyClass(){
        this.myMethod = function(){
            alert('Hello world!');
        }
    }

    return {MyClass: MyClass};
});
```

As you can see its easy to put old code inside a namespace.

```
    // import like java
    var MyClass = my.package.MyClass;
    
    var myClass = new MyClass();
    myClass.myMethod();
```
