import PropTypes from 'prop-types';

import { navLinks } from '../../constants/data';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {navLinks.map((item) => (
      <a
        href={`#${item}`}
        key={item}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#313bac' } : undefined}
        aria-label={`${item} section`}
      />
    ))}
  </div>
);

NavigationDots.propTypes = {
  active: PropTypes.string.isRequired,
};

export default NavigationDots;
