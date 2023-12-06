import SocialNetworks from './SocialNetworks';

import Avatar from '../img/anthony.jpg';
import Loading from '../img/loading.png';

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
      <a href={ Loading } className="btn"><span>Download Currículo</span></a>
    </aside>
  );
}

export default Sidebar;
