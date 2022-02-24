function getData(value: any) {
    return value;
}
// console.log(getData("Nugraha").length);
// console.log(getData(1234).length);

// generic
function myData<T>(value: T){
    return value;
}

console.log(myData("Nugraha").length);
console.log(myData(1234));
