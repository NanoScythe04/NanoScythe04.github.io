const Cart = (function () {
  let items = [];

  function add(name, price) {
    items.push({ name, price });
    alert(name + " added to cart");
  }

  function getItems() {
    return items;
  }

  function getTotal() {
    return items.reduce((sum, item) => sum + item.price, 0);
  }

  return {
    add,
    getItems,
    getTotal
  };
})();