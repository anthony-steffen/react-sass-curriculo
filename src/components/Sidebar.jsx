import { Link } from 'react-router-dom';
import SocialNetworks from './SocialNetworks';
import Information from './Information';

import Avatar from '../img/anthony.jpg';

import '../styles/components/sidebar.sass';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="avatar">
        <img src={ Avatar } alt="Anthony" />
      </div>
      <SocialNetworks />
      <Information />
      <Link
        to="/react-sass-curriculo/download"
        className="btn"
      >
        <span>Exibir Currículo</span>
      </Link>
    </aside>
  );
}

export default Sidebar;
