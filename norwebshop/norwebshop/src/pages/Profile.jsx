import 'Profile.css';
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="content">
      <h2>User Profile</h2>

      <p><strong>Name:</strong> Juan Dela Cruz</p>
      <p><strong>Email:</strong> juan@email.com</p>
      <p><strong>Mobile:</strong> 09123456789</p>
      <p><strong>Address:</strong> Manila, Philippines</p>
    </div>
  );
}

export default Profile;
