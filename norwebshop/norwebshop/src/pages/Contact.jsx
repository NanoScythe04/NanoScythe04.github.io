import { useState } from "react";
import 'Contact.css';

function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Thank you! Your message has been received.");
  }

  return (
    <div className="content">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit} className="contactForm">
        <label>Name</label>
        <input type="text" required />

        <label>Message</label>
        <textarea required></textarea>

        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Contact;
