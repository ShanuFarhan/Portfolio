import { motion } from 'framer-motion';

const MotionWrap = (Component, classNames) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={classNames}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
