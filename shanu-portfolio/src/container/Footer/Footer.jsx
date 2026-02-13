import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
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
    <div className="app__footer" style={{ perspective: 1200, transformStyle: 'preserve-3d' }}>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        {footerContacts.map((contact, index) => (
          <motion.div
            className="app__footer-card"
            key={contact.type}
            initial={{ opacity: 0, rotateY: -30, x: -30 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            whileHover={{ scale: 1.05, rotateY: 5, z: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <img src={contact.icon} alt={contact.type} />
            <a href={contact.href} className="p-text">
              {contact.label}
            </a>
          </motion.div>
        ))}
      </div>

      {!isFormSubmitted ? (
        <motion.form
          className="app__footer-form app__flex"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, rotateX: 20, y: 50 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          style={{ transformStyle: 'preserve-3d' }}
        >
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
          <motion.button
            type="submit"
            className="p-text"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      ) : (
        <div className="app__footer-form app__flex">
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg');
