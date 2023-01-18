import "../components/ContactForm.css";
import React from 'react'


export default function ContactForm() {
  return (
    <div className="form-container">
      
    <h1>Send message to us</h1>

    <form>
        <input placeholder="Name"/>
        <input placeholder="Email" type="email" required/>
        <input placeholder="Subject"/>
        <textarea placeholder="Message" rows="4"></textarea>
        <button type="submit">Send Message</button>

    </form>

    </div>
  )
}
