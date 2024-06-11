function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
function add(a, b) {
    console.log(a + b);
}
;
executeCallback(add, 3, 3);
