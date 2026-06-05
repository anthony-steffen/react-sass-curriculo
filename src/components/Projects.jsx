import { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { fallbackProjects, getProjects } from '../services/githubProjects';

import '../styles/components/projects.sass';

function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    getProjects({ signal: controller.signal }).then((loadedProjects) => {
      if (isMounted) setProjects(loadedProjects);
    });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={ project.id }>
            <div className="project-card__header">
              <span>{project.status}</span>
              <h3>{project.title}</h3>
            </div>

            <p>{project.description}</p>

            <ul className="project-card__tags">
              {project.technologies.map((technology) => (
                <li key={ technology }>{technology}</li>
              ))}
            </ul>

            <div className="project-card__actions">
              <a href={ project.repositoryUrl } target="_blank" rel="noreferrer">
                <FaGithub />
                Código
              </a>
              {project.liveUrl && (
                <a href={ project.liveUrl } target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
