import { motion } from 'framer-motion';
import { useState } from 'react';

import { testimonials as testimonialsData } from '../../constants/data';
import { AppWrap, MotionWrap } from '../../wrapper';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonialsData[currentIndex];

  const handleClick = (index) => {
    const normalizedIndex = (index + testimonialsData.length) % testimonialsData.length;
    setCurrentIndex(normalizedIndex);
  };
  return (
    <div className="app__testimonial-container" style={{ perspective: 1000, transformStyle: 'preserve-3d' }}>
      <h2 className="head-text">Testimonials</h2>

      {testimonial && (
        <>
          <motion.div
            key={testimonial.name}
            className="app__testimonial-item app__flex"
            initial={{ opacity: 0, rotateX: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
            whileHover={{ rotateY: 10, rotateX: 5, z: 20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* <img src={testimonial.imgUrl} alt={testimonial.name} /> */}
            <div className="app__testimonial-content" style={{ transformStyle: 'preserve-3d' }}>
              <p className="p-text">{testimonial.feedback}</p>
              <h4 className="bold-text">{testimonial.name}</h4>
              <h5 className="p-text">{testimonial.company}</h5>
            </div>
          </motion.div>

          {/* <div className="app__testimonial-btns app__flex">
            <div className="app__flex" role="button" tabIndex={0} onClick={() => handleClick(currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" role="button" tabIndex={0} onClick={() => handleClick(currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div> */}
        </>
      )}

      {/* <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__flex"
            key={brand.name}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div> */}
    </div>
  );
};

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), 'testimonial', 'app__primarybg');
