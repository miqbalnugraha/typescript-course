import Asus from "./Asus";
import Macbook from "./Macbook";

let asus = new Asus("ROG Gaming", true, true);
console.log(asus);

let macbook = new Macbook("Macbook Pro M1", false, false);
console.log(macbook);
macbook.a();
macbook.b();