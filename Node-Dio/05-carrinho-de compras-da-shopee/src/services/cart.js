
async function addItem(userCart, item) {
    userCart.push(item);
}

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

    console.log(`\n🎁Total: ${result}`);
}



async function deletItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index != -1) {
        userCart.splice(index, 1)
    }
}


async function removeItem(userCart, index) {

    const deletIndex = index - 1;

    if (index >= 0 && index < userCart.length) {
        userCart.splice(deletIndex, 1);
    }
}


async function displayCart(userCart) {
    console.log("\nShoppe Cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal= ${item.subtotal()}`);
    });
};






export {
    addItem,
    calculateTotal,
    deletItem,
    removeItem,
    displayCart,
}