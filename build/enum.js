"use strict";
// enum
var Month;
(function (Month) {
    Month[Month["JAN"] = 0] = "JAN";
    Month[Month["FEB"] = 5] = "FEB";
    Month[Month["MAR"] = 6] = "MAR";
    Month[Month["APR"] = 7] = "APR";
    Month[Month["MAY"] = 8] = "MAY";
})(Month || (Month = {}));
console.log(Month);
console.log(Month.MAR);
// string enum
var Month2;
(function (Month2) {
    Month2["JAN"] = "January";
    Month2["FEB"] = "February";
    Month2["MAR"] = "March";
    Month2["APR"] = "April";
    Month2["MAY"] = "May";
})(Month2 || (Month2 = {}));
console.log(Month2);
console.log(Month2.FEB);
