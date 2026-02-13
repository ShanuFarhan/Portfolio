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
    <>
      <h2 className="head-text">Testimonials</h2>

      {testimonial && (
        <>
          <motion.div
            key={testimonial.name}
            className="app__testimonial-item app__flex"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            {/* <img src={testimonial.imgUrl} alt={testimonial.name} /> */}
            <div className="app__testimonial-content">
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
    </>
  );
};

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), 'testimonial', 'app__primarybg');
