function fib(n) {
var a = 0,
b = 1;
for (var i = 2; i <= n; i++) {
var c = a + b;
a = b;
b = c;
}
return b;
}
var n;


window.addEventListener("load", init, false);
function init () {  
test.addEventListener("click", action, true);
}

function action(){
    n = prompt('type n' ,n);
    alert(fib(n));
}