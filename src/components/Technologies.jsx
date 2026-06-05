import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiMysql,
  DiDocker,
  DiPython,
} from 'react-icons/di';
import technologies from '../data/technologies';

import '../styles/components/technologies.sass';

const technologyIcons = {
  html: <DiHtml5 />,
  css: <DiCss3 />,
  js: <DiJsBadge />,
  react: <DiReact />,
  node: <DiNodejs />,
  mysql: <DiMysql />,
  docker: <DiDocker />,
  python: <DiPython />,
};

function Technologies() {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={ tech.id } key={ tech.id }>
            {technologyIcons[tech.id]}
            <div>
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
