export default interface ILaptop<T> {
    name: string;
    type: T,
    withNumpad: boolean,
    withTouchButton: boolean
}