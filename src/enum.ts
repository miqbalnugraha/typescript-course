// enum

enum Month{
    JAN,
    FEB = 5,
    MAR,
    APR,
    MAY
}
console.log(Month);
console.log(Month.MAR);

// string enum
enum Month2{
    JAN = "January",
    FEB = "February",
    MAR = "March",
    APR = "April",
    MAY = "May"
}
console.log(Month2);
console.log(Month2.FEB);