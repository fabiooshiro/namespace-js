/**
 * The code
 * author: Fabio Issamu Oshiro (Sr. Oshiro)
 */
function namespace(name, publics){
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
    var key;
    if(typeof(publics) == 'function') publics = publics();
    for(key in publics){
        ns[key] = publics[key];
    }
}
