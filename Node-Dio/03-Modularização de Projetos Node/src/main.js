const {getFullName, productType} = require("./services/products");
const products = require("./services/products");

const config = require("./services/config")
const database = require("./services/database");

async function main() {
    console.log("Carrinho De Compras:");


    getFullName("1", "teclado");
    products.getFullName("1", "teclado");
    console.log(productType);

    // product.getFullName("408", "MousePad");
    // product.getFullName("502", "mouse");
    // product.getProductLabel("MousePad");

    database.connectToDatabase("My-Data")
}

main();
