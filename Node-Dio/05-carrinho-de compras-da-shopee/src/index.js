import * as cartServices from './services/cart.js'
import createItem from "./services/item.js";


const myCart = [];
const myWhishList = [];


console.log("Welcome to the your Shopee Cart!");


const item1 = await createItem("hotweels ferrari", 20.99, 1);
const item2 = await createItem("hotweels lamborghine", 39.99, 3);


await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);

await cartServices.removeItem(myCart, 1)

await cartServices.displayCart(myCart);

// await cartServices.deletItem(myCart, item2.name);
// await cartServices.deletItem(myCart, item1.name);

console.log("Shopee Cart Total is:");
await cartServices.calculateTotal(myCart);