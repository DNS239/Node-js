// index.js

import * as cartServices from './services/cart.js';
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to your Shopee Cart!");

// Criando os itens
const item0 = await createItem("hotweels 0", 3.01, 2);
const item1 = await createItem("hotweels 1", 2.01, 3);

// Adicionando itens ao carrinho
await cartServices.addItem(myCart, item0);
await cartServices.addItem(myCart, item1);

await cartServices.displayCart(myCart);

// Removendo uma unidade
await cartServices.removeItem(myCart, item1);
//await cartServices.removeItem(myCart, item1);

console.log("Depois de remover 1 unidade:");
await cartServices.displayCart(myCart);

console.log("Shopee Cart Total is:");
await cartServices.calculateTotal(myCart);
