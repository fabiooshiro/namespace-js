/**
 * The code
 * author: Fabio Issamu Oshiro (Sr. Oshiro)
 */
function namespace(name, publics){
    var path = name.split('\.');
    var cpath = 'this.' + path[0];
    for(var i=0;i<path.length;i++){
        if(typeof(eval('this.' + cpath)) == 'undefined'){
            eval(cpath + '={}');
        }
        cpath += '.' + path[i];
    }
    var ns = eval(nome);
    var key;
    if(typeof(publics) == 'function') publics = publics();
    for(key in publics){
        ns[key] = publics[key];
    }
}
