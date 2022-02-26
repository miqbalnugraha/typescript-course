import ILaptop from "./ILaptop";
import * as Keyboard from "./Keyboard";
import { b } from "./Keyboard";

abstract class BaseLaptop<T> implements ILaptop<T> {
    name: string;
    type: T;
    withNumpad: boolean;
    withTouchButton: boolean;

    constructor(
        name: string,
        type: T,
        witNumpad: boolean,
        withTouchButton: boolean
        )
        {
            this.name = name;
            this.type = type;
            this.withNumpad = witNumpad;
            this.withTouchButton = withTouchButton;            
        }
    
    a(): void {
        console.log(Keyboard.a());
    }
    b(): void {
        console.log(b());
    }
}

export default BaseLaptop;