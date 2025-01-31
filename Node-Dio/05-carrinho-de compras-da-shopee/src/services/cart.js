// cart.js

async function addItem(userCart, item) {
    userCart.push(item);
}

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\n🎁 Total: R$ ${result.toFixed(2)}`);
}

async function deletItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index != -1) {
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound !== -1) {
        if (userCart[indexFound].quantity > 1) {
            userCart[indexFound].quantity--;  // Diminui a quantidade
            console.log(`1 unidade de "${item.name}" removida. Restam ${userCart[indexFound].quantity}.`);
        } else {
            userCart.splice(indexFound, 1); // Remove o item se a quantidade for 0
            console.log(`"${item.name}" removido do carrinho.`);
        }
    } else {
        console.log(`Item "${item.name}" não encontrado no carrinho.`);
    }
}

async function displayCart(userCart) {
    console.log("\nShoppe Cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal= R$ ${item.subtotal().toFixed(2)}`);
    });
}

export {
    addItem,
    calculateTotal,
    deletItem,
    removeItem,
    displayCart
};
