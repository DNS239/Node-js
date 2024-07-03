// Todas as funções que lidam com produto


const productType = {
    version: "digital",
    tax: "x1",
};


//hidden const
const apiURL = {
    url: "www.google.com/api",
};

async function getFullName(codeId, productName) {
    console.log("\n");
    console.log("product: " + codeId + "--" + productName);
    await doBrackLine();
};

// Hidden function
async function doBrackLine() {
    console.log("\n");
};

async function getProductLabel(productName) {
    console.log("\n");
    console.log("product: " + productName);
};

module.exports = {
    getFullName,
    getProductLabel,
    productType,
};