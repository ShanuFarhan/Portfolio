import { motion } from 'framer-motion';

import { experiences, skills as skillsData } from '../../constants/data';
import { AppWrap, MotionWrap } from '../../wrapper';

const Skills = () => (
  <>
    <h2 className="head-text">Skills & Experiences</h2>

    <div className="app__skills-container" style={{ perspective: 1000, transformStyle: 'preserve-3d' }}>
      <motion.div className="app__skills-list">
        {skillsData.map((skill) => (
          <motion.div
            className="app__skills-item app__flex"
            key={skill.name}
            initial={{ opacity: 0, rotateY: -30, x: -30 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            whileHover={{
              rotateX: 10,
              rotateY: 10,
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="app__flex" style={{ transformStyle: 'preserve-3d' }}>
              <img src={skill.icon} alt={skill.name} style={{ pointerEvents: 'none' }} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="app__skills-exp">
        {experiences.map((experience) => (
          <motion.div
            className="app__skills-exp-item"
            key={experience.year}
            initial={{ opacity: 0, rotateX: 20, y: 30 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <div className="app__skills-exp-year">
              <p className="bold-text">{experience.year}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              {experience.works.map((work, index) => (
                <motion.div
                  key={work.name + index}
                  className="app__skills-exp-work"
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="bold-text">{work.name}</h4>
                  <p className="p-text">{work.company}</p>
                  <p className="p-text" style={{ marginTop: 10 }}>{work.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </>
);

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');
