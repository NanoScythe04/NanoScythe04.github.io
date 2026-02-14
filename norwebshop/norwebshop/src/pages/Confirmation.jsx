import 'Confirmation.css';
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <div className="content">
      <h2>Transaction Successful</h2>
      <p>Thank you for your order!</p>

      <div>
        <p>Order ID: 000123</p>
        <p>Total Amount: ₱270</p>
        <p>Payment Method: Cash on Delivery</p>
      </div>
    </div>
  );
}

export default Confirmation;
