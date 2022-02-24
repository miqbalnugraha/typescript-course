// tipe data pada balikan function
function getName(): string{
    return "Hello, my name is iqbal";
}
console.log(getName());

function getAge(): number{
    return 25;
}
console.log(getAge());

function printName(): void{
    // void tidak boleh me-return appapun
    console.log("M Iqbal Nugraha");
}
printName();


// tipe data argumen
function multiply(val1: number, val2: number): number{
    return val1*val2;
}
const result = multiply(2,7);
console.log(result);


// function as type
type Age = number;
let age: Age = 123;

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
    return val1+val2;
}
const result2 = Add(15,5);
console.log(result2);

// default parameter
const fullName = (first: string, last: string = "Nugraha"): string => {
    return first + " " + last;
}
console.log(fullName("Iqbal"));

// optional parameter
const alamat = (val1: string, val2?: string): string => {
    return val1 + " " + val2;
}
console.log(alamat("A"));