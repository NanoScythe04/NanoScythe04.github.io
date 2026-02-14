import 'Signup.css';
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="content">
      <h2>Sign Up</h2>

      <form className="auth-form">
        <label>First Name</label>
        <input type="text" required />

        <label>Last Name</label>
        <input type="text" required />

        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <label>Confirm Password</label>
        <input type="password" required />

        <label>Mobile Number</label>
        <input type="text" />

        <label>Home Address</label>
        <input type="text" />

        <button type="submit">Create Account</button>
      </form>

      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Signup;
