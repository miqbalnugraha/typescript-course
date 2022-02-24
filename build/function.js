"use strict";
// tipe data pada balikan function
function getName() {
    return "Hello, my name is iqbal";
}
console.log(getName());
function getAge() {
    return 25;
}
console.log(getAge());
function printName() {
    // void tidak boleh me-return appapun
    console.log("M Iqbal Nugraha");
}
printName();
// tipe data argumen
function multiply(val1, val2) {
    return val1 * val2;
}
var result = multiply(2, 7);
console.log(result);
var age = 123;
var Add = function (val1, val2) {
    return val1 + val2;
};
var result2 = Add(15, 5);
console.log(result2);
// default parameter
var fullName = function (first, last) {
    if (last === void 0) { last = "Nugraha"; }
    return first + " " + last;
};
console.log(fullName("Iqbal"));
// optional parameter
var alamat = function (val1, val2) {
    return val1 + " " + val2;
};
console.log(alamat("A"));
