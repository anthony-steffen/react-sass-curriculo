import SocialNetworks from './SocialNetworks';
import Information from './Information';
import profile from '../data/profile';
import pdfSrc from '../../resume.pdf';

import Avatar from '../img/anthony.jpg';

import '../styles/components/sidebar.sass';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="avatar">
        <img src={ Avatar } alt={ profile.name } />
      </div>
      <SocialNetworks />
      <Information />
      <button
        type="button"
        className="btn"
        onClick={ () => (window.open(pdfSrc)) }
      >
        <span>{profile.resumeLabel}</span>
      </button>
    </aside>
  );
}

export default Sidebar;
