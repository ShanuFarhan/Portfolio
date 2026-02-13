import { motion } from 'framer-motion';

import { abouts } from '../../constants/data';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => (
  <>
    <h2 className="head-text">
      I Know that Good Design <span>means</span> Good Business
    </h2>

    <div className="app__profiles" style={{ perspective: 1000, transformStyle: 'preserve-3d' }}>
      {abouts.map((about, index) => (
        <motion.div
          initial={{ opacity: 0, rotateX: -30, y: 50 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          whileHover={{
            scale: 1.05,
            rotateX: 10,
            rotateY: 10,
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="app__profile-item"
          key={`${about.title}-${index}`}
        >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            {about.title}
          </h2>
          <p className="p-text" style={{ marginTop: 10 }}>
            {about.description}
          </p>
        </motion.div>
      ))}
    </div>
  </>
);

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');
