/**
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://sam.zoy.org/wtfpl/COPYING for more details.
 * 
 * The source code is at
 * https://github.com/fabiooshiro/namespace-js
 * 
 * author: Fabio Issamu Oshiro (Sr. Oshiro)
 * ref: http://blog.stannard.net.au/2011/01/14/creating-namespaces-in-javascript/
 */
var namespace;

(function(){
    var hasBackboneJs = typeof(Backbone) != 'undefined';
    var root = this;
    var loadDsl;
    var unloadDsl;
    if(hasBackboneJs){
        loadDsl = function(ns, name){
            var model = function(modelName, body){
                body['className'] = name + '.' + modelName;
                ns[modelName] = Backbone.Model.extend({
                    defaults: body
                });
            };
            var view = function(viewName, body){
                ns[viewName] = Backbone.View.extend(body);
            };
            return [model, view];
        };
        unloadDsl = function(){
        }; 
    }else{
        loadDsl = function(ns, name){};
        unloadDsl = function(){};
    }
    
    namespace = function (name, publics){
        var path = name.split('\.');
        var cpath = '';
        for(var i=0;i<path.length;i++){
            cpath += path[i];
            if(typeof(eval('this.' + cpath)) == 'undefined'){
                eval(cpath + '={}');
            }
            cpath += '.';
        }
        var ns = eval(name);
        var dsl = loadDsl(ns, name);
        if(typeof(publics) == 'function'){
            publics = publics.apply(root, dsl);
        }
        unloadDsl();
        for(var key in publics){
            ns[key] = publics[key];
        }
    }
})();
