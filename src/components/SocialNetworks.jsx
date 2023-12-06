import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/anthony-steffen-dev/', icon: <FaLinkedin /> },
  { name: 'Github', url: 'https://github.com/anthony-steffen', icon: <FaGithub /> },
  { name: 'Instagram', url: 'https://www.instagram.com/_anthony.steffen_/', icon: <FaInstagram /> },
];

function SocialNetworks() {
  return (
    <section className="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={ network.url }
          className={ `social-btn-${network.name.toLowerCase()}` }
          key={ network.name }
          id={ network.name }
          target="_blank"
          rel="noreferrer"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
}

export default SocialNetworks;
