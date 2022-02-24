export class User{
    public name: string;
    constructor(name: string, public age: number) {
        this.name = name;
    }
    setName(value: string): void {
        this.name = value;
    }
    getName = () : string => {
        return this.name;
    }
}
export class User2{
    constructor(public name: string) {
    }
}
// let user = new User2("Nugraha");
// console.log(user);

// inheritance

class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";
    constructor(phone: string, name: string, age: number){
        super(name,age);
        this.phone = phone;
    }

    static getRoleName: string = "Static Properties";

    // method
    getRole() : {read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write
        };
    };
    // static method
    static getNameRole() {
        return "static method";
    }

    set email(val: string) {
        if(val.length < 5){
            this._email = "Email terlalu pendek";
        } else {
            this._email = val;
        }
    }
    get email(): string{
        return this._email;
    }
}

let admin = new Admin("0896542528","toni", 25);
admin.getName();
admin.setName("asd");
admin.getRole();
admin.email = "iqbal@gmail.com";
// console.log(admin.email);

let admin2 = Admin.getNameRole();
console.log(admin2);