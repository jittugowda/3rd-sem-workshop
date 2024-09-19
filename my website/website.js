let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartItemsElement = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.parentElement;
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseFloat(productElement.getAttribute('data-price'));

        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

function updateCart() {
    cartCountElement.textContent = cart.length;
    cartItemsElement.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(itemElement);
        total += item.price;
    });

    totalElement.textContent = `Total: $${total}`;
}

// Checkout button functionality (optional)
document.getElementById('checkout').addEventListener('click', function() {
    if (cart.length > 0) {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    } else {
        alert('Your cart is empty!');
    }
});
