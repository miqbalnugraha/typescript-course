class List<T> {
    private data: T[];

    constructor(...elements: T[]) {
        this.data = elements;
    }

    add(element: T): void {
        this.data.push(element);
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements);
    }

    getAll(): T[] {
        return this.data;
    }
}

let numbers = new List<number>(1,5,3);
numbers.add(56);
numbers.addMultiple(2,33,43)
console.log(numbers.getAll());

let random = new List<number | string>(1,2,"tiga");
random.add("empat");
random.addMultiple(5,"enam");
console.log(random.getAll());