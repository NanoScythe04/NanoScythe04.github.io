import './App.css';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/payment">Payment</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Sidebar;
