import { BsGithub, BsLinkedin, BsBehance } from 'react-icons/bs';

import { socialLinks } from '../../constants/data';

const iconMap = {
  github: <BsGithub />,
  linkedin: <BsLinkedin />,
  behance: <BsBehance />,
};

const SocialMedia = () => (
  <div className="app__social">
    {socialLinks.map(({ name, url, icon }) => (
      <div key={name}>
        <a href={url} target="_blank" rel="noreferrer" aria-label={name}>
          {iconMap[icon]}
        </a>
      </div>
    ))}
  </div>
);

export default SocialMedia;
