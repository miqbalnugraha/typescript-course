import BaseLaptop from "./BaseLaptop";

class Asus<T> extends BaseLaptop<T> {
    constructor(type: T, withNumpad: boolean, withTouchButton: boolean) {
        super("Asus", type, withNumpad, withTouchButton);
    }
}

export default Asus;