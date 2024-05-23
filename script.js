document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItemsList = document.getElementById('cart-items');
  const checkoutButton = document.getElementById('checkout');
  const clearCartButton = document.getElementById('clear-cart');
  const contactForm = document.getElementById('contact-form');
  let cartItems = [];

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.getAttribute('data-product');
      cartItems.push(productName);
      renderCartItems();
    });
  });

  checkoutButton.addEventListener('click', () => {
    if (cartItems.length > 0) {
      alert('Thank you for your purchase!');
      cartItems = [];
      renderCartItems();
    } else {
      alert('Your cart is empty.');
    }
  });

  clearCartButton.addEventListener('click', () => {
    cartItems = [];
    renderCartItems();
  });

  cartItemsList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const index = e.target.getAttribute('data-index');
      cartItems.splice(index, 1);
      renderCartItems();
    }
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your concerns have been sent.');
    contactForm.reset();
  });

  function renderCartItems() {
    cartItemsList.innerHTML = '';
    if (cartItems.length === 0) {
      cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
    } else {
      cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('data-index', index);
        li.appendChild(removeButton);
        cartItemsList.appendChild(li);
      });
    }
  }
});
