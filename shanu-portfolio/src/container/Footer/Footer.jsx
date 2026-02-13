import emailjs from '@emailjs/browser';
import { useState } from 'react';

import { footerContacts } from '../../constants/data';
import { AppWrap, MotionWrap } from '../../wrapper';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeInput = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // console.log('Service ID:', serviceId);
    // console.log('Template ID:', templateId);
    // console.log('Public Key:', publicKey);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'shanumet@gmail.com',
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // alert(`Message Sent Successfully! Status: ${response.status}`);
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        // alert(`Failed to send message: ${JSON.stringify(error)}`);
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        {footerContacts.map((contact) => (
          <div className="app__footer-card" key={contact.type}>
            <img src={contact.icon} alt={contact.type} />
            <a href={contact.href} className="p-text">
              {contact.label}
            </a>
          </div>
        ))}
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="p-text">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      ) : (
        <div className="app__footer-form app__flex">
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg');
