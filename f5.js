let x = 10;

function createFunction1() {
    let x = 20;
    return new Function('return x;'); // this |x| refers global |x|
}

function createFunction2() {
    let x = 20;
    function f() {
        return x; // this |x| refers local |x| above
    }
    return f;
}

var f1 = createFunction1();
console.log(f1());          // 10
var f2 = createFunction2();
console.log(f2());        