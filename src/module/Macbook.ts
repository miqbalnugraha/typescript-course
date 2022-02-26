import BaseLaptop from "./BaseLaptop";

class Macbook<T> extends BaseLaptop<T> {
    constructor(type: T, withNumpad: boolean, withTouchButton: boolean) {
        super("Macbook", type, withNumpad, withTouchButton);
    }
}

export default Macbook;