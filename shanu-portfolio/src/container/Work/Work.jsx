import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import { workFilters, works as worksData } from '../../constants/data';
import { AppWrap, MotionWrap } from '../../wrapper';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filteredWorks, setFilteredWorks] = useState(worksData);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'All') {
        setFilteredWorks(worksData);
      } else {
        setFilteredWorks(worksData.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative Portfolio Section</h2>

      <div className="app__work-filter">
        {workFilters.map((item) => (
          <div
            key={item}
            onClick={() => handleWorkFilter(item)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') handleWorkFilter(item);
            }}
            role="button"
            tabIndex={0}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''
              }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      >
        {filteredWorks.map((work, index) => (
          <motion.div
            className="app__work-item app__flex"
            key={`${work.title}-${index}`}
            initial={{ opacity: 0, rotateX: -15, y: 30 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            whileHover={{
              rotateX: 10,
              rotateY: 10,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            viewport={{ once: false }}
          >
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                {work.projectLink && (
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}

                {work.codeLink && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg');
