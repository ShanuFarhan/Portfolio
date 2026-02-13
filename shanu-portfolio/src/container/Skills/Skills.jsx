import { motion } from 'framer-motion';

import { experiences, skills as skillsData } from '../../constants/data';
import { AppWrap, MotionWrap } from '../../wrapper';

const Skills = () => (
  <>
    <h2 className="head-text">Skills & Experiences</h2>

    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skillsData.map((skill) => (
          <motion.div
            className="app__skills-item app__flex"
            key={skill.name}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div className="app__flex">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="app__skills-exp">
        {experiences.map((experience) => (
          <motion.div className="app__skills-exp-item" key={experience.year}>
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
