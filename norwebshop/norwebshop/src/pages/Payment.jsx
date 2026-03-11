import 'Payment.css';
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div className="content">
      <h2>Payment & Delivery</h2>

      <label>Payment Method</label>
      <select>
        <option>Cash on Delivery</option>
        <option>GCash</option>
      </select>

      <label>Delivery Option</label>
      <select>
        <option>Home Delivery</option>
        <option>Pick-up</option>
      </select>

      <br /><br />
      <button>Confirm Order</button>
    </div>
  );
}

export default Payment;
