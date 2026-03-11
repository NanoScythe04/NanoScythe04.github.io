import 'About.css';
import { Link } from "react-router-dom";   

function About() {
  return (
    <div className="content">
      <h2>About Lutong Bahay</h2>
      <p>
        Lutong Bahay offers authentic Filipino home-cooked meals
        prepared with love and fresh ingredients.
      </p>

      <h3>Owner</h3>
      <p>Name: Juan Dela Cruz</p>
      <p>Email: owner@lutongbahay.com</p>
    </div>
  );
}

export default About;
