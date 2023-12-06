import Aboout from './Aboout';
import Projects from './Projects';
import Technologies from './Technologies';

import '../styles/components/maincontent.sass';

function MainContent() {
  return (
    <div className="main">
      <Aboout />
      <Projects />
      <Technologies />
    </div>
  );
}

export default MainContent;
