let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    cartTotal += price;
    updateCart();
}

function addNewProduct(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);

    if (productName && !isNaN(productPrice)) {
        addToCart(productName, productPrice);
        clearForm();
    } else {
        alert('Please enter valid product information.');
    }
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsElement.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    cartTotalElement.textContent = cartTotal.toFixed(2);
}
