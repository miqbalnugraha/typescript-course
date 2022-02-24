"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User2 = exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.age = age;
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    return User;
}());
exports.User = User;
var User2 = /** @class */ (function () {
    function User2(name) {
        this.name = name;
    }
    return User2;
}());
exports.User2 = User2;
// let user = new User2("Nugraha");
// console.log(user);
// inheritance
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    // method
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    ;
    // static method
    Admin.getNameRole = function () {
        return "static method";
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (val) {
            if (val.length < 5) {
                this._email = "Email terlalu pendek";
            }
            else {
                this._email = val;
            }
        },
        enumerable: false,
        configurable: true
    });
    Admin.getRoleName = "Static Properties";
    return Admin;
}(User));
var admin = new Admin("0896542528", "toni", 25);
admin.getName();
admin.setName("asd");
admin.getRole();
admin.email = "iqbal@gmail.com";
// console.log(admin.email);
var admin2 = Admin.getNameRole();
console.log(admin2);
