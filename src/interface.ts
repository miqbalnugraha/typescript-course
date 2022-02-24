interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean;
    constructor(name: string, isGaming: boolean){
        this.name = name;
        this.isGaming = isGaming;
    }
    on(): void {
        console.log("hidup");
    }
    off(): void {
        console.log("mati");
    }    
}

class Macbook implements Laptop {
    name: string;
    isKeyboardLight: boolean;
    constructor(name: string, isKeyboardLight: boolean) {
        this.name = name;
        this.isKeyboardLight = isKeyboardLight;
    }
    on(): void {
        console.log("hidup");
    }
    off(): void {
        console.log("mati");
    }        
}

let asus = new Asus("asus",true);
console.log(asus.on());

let macbook = new Macbook("macbook",true);
console.log(macbook);
