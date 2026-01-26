document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('cartItems');
  const total = document.getElementById('total');

  Cart?.getItems()?.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₱${item.price}`;
    list.appendChild(li);
  });

  total.textContent = "Total: ₱" + (Cart?.getTotal() ?? 0);
});
