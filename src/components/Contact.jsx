import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

function Contact() {
  const fadeRef = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend — show a success message locally
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section contact">
      <div ref={fadeRef} className="container section-animate">
        <div className="section-header fade-in">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info fade-in">
            <h3>Let's talk about your next project</h3>
            <p>
              Feel free to reach out if you're looking for a developer, have a question,
              or just want to connect.
            </p>

            <ul className="contact-details">
              <li>
                <FiMail className="contact-icon" />
                <a href="mailto:benielraja1503@gmail.com">benielraja1503@gmail.com</a>
              </li>
              <li>
                <FiPhone className="contact-icon" />
                <a href="tel:+916374027877">+91 6374027877</a>
              </li>
              <li>
                <FiMapPin className="contact-icon" />
                <span>Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

          <form className="contact-form fade-in" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="5"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-send">
              <FiSend /> Send Message
            </button>
            {submitted && (
              <p className="form-success">Thank you! Your message has been noted.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
