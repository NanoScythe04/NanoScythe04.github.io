import 'Login.css';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="content">
      <h2>Login</h2>

      <form className="auth-form">
        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}

export default Login;
