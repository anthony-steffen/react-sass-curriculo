import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import socialLinks from '../data/socialLinks';

import '../styles/components/socialnetworks.sass';

const socialIcons = {
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
  instagram: <FaInstagram />,
};

function SocialNetworks() {
  return (
    <section className="social-networks">
      {socialLinks.map((network) => (
        <a
          href={ network.url }
          className={ `social-btn-${network.id}` }
          key={ network.id }
          id={ network.name }
          target="_blank"
          rel="noreferrer"
          aria-label={ network.name }
        >
          {socialIcons[network.id]}
        </a>
      ))}
    </section>
  );
}

export default SocialNetworks;
