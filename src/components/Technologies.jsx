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

import '../styles/components/technologies.sass';

const tectData = [
  { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
  { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
  { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
  { id: 'react', name: 'React', icon: <DiReact /> },
  { id: 'node', name: 'Node.js', icon: <DiNodejs /> },
  { id: 'mysql', name: 'MySQL', icon: <DiMysql /> },
  { id: 'docker', name: 'Docker', icon: <DiDocker /> },
  { id: 'python', name: 'Python', icon: <DiPython /> },
];

function technologies() {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {tectData.map((tech) => (
          <div className="technology-card" id={ tech.id } key={ tech.id }>
            {tech.icon}
            <div>
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default technologies;
