"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        console.log("hidup");
    };
    Asus.prototype.off = function () {
        console.log("mati");
    };
    return Asus;
}());
var Macbook = /** @class */ (function () {
    function Macbook(name, isKeyboardLight) {
        this.name = name;
        this.isKeyboardLight = isKeyboardLight;
    }
    Macbook.prototype.on = function () {
        console.log("hidup");
    };
    Macbook.prototype.off = function () {
        console.log("mati");
    };
    return Macbook;
}());
var asus = new Asus("asus", true);
console.log(asus.on());
var macbook = new Macbook("macbook", true);
console.log(macbook);
