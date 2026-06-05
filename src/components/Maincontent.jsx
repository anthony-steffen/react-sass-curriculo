import About from './About';
import Projects from './Projects';
import Technologies from './Technologies';

import '../styles/components/maincontent.sass';

function MainContent() {
  return (
    <div className="main">
      <About />
      <Projects />
      <Technologies />
    </div>
  );
}

export default MainContent;
