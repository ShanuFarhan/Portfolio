import { motion } from 'framer-motion';

import images from '../../constants/images';
import { AppWrap, MotionWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const circleImages = [images.reduxAlt, images.reactjs, images.sassAlt];

const Header = () => (
  <div className="app__header app__flex" style={{ perspective: 1200, transformStyle: 'preserve-3d' }}>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1], rotateY: [-20, 0] }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="app__header-info"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="app__header-badge">
        <motion.div
          className="badge-cmp app__flex"
          whileHover={{ rotateX: 10, rotateY: 10, scale: 1.02 }}
        >
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Shanu Farhan</h1>
          </div>
        </motion.div>

        <motion.div
          className="tag-cmp app__flex"
          whileHover={{ rotateX: -10, rotateY: 10, scale: 1.02 }}
        >
          <p className="p-text">Frontend Developer</p>
          <p className="p-text">Bengaluru, India</p>
        </motion.div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      {/* Profile image placeholder if needed in future */}
    </motion.div>

    <motion.div
      className="app__header-circles"
      whileInView={scaleVariants.whileInView}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {circleImages.map((circle, index) => (
        <motion.div
          className="circle-cmp app__flex"
          key={`circle-${index}`}
          whileHover={{ rotateX: 20, rotateY: 20, z: 50, scale: 1.1 }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5
            }
          }}
        >
          <img src={circle} alt="tech" />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(MotionWrap(Header, 'app__header'), 'home', 'app__primarybg');
