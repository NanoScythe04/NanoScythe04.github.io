import 'Cart.css';
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="content">
      <h2>Shopping Cart</h2>

      <ul>
        <li>Chicken Adobo – ₱120</li>
        <li>Sinigang – ₱150</li>
      </ul>

      <p><strong>Total: ₱270</strong></p>
    </div>
  );
}

export default Cart;
