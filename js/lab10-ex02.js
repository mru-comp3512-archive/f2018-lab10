const f1 = function() {
    return "function 1";
}
const f2 = function(s) {
    return s;
}
const f3 = function(a,b) {
    return "function 2 result=" + (a+b);
}
const f4 = function(a,b) {
    let s = "function 3 result=";
    let product = a*b;
    let msg = s + product;
    return msg;
}
const f5 = function(a,b, fn) {
    let msg = f4(a,b) + fn();
    return msg;
}

console.log( f1() );
console.log( f2('hello') );
console.log( f3(4,5) );
console.log( f4(5,6) );
console.log( f5(7,8, function() {
                       return " param f4"
                    }) );

/* now define arrow function equivalents */
