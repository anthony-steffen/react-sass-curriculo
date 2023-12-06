import SocialNetworks from './SocialNetworks';

import Avatar from '../img/anthony.jpg';

import '../styles/components/sidebar.sass';
import Information from './Information';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="avatar">
        <img src={ Avatar } alt="Anthony" />
      </div>
      <SocialNetworks />
      <Information />
      <a href="http://" className="btn"><span>Download Currículo</span></a>
    </aside>
  );
}

export default Sidebar;
