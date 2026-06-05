import projectConfigs, { githubOwner } from '../data/projects';

const GITHUB_API_URL = 'https://api.github.com/repos';
const CACHE_KEY = 'portfolio:github-projects';
const MILLISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const CACHE_TIME_IN_MINUTES = 30;
const MAX_TECHNOLOGY_TAGS = 6;
const CACHE_TIME_IN_MS = MILLISECONDS_IN_SECOND
  * SECONDS_IN_MINUTE
  * CACHE_TIME_IN_MINUTES;

const formatRepositoryName = (repository) => repository
  .replace(/[-_]/g, ' ')
  .replace(/\b\w/g, (letter) => letter.toUpperCase());

const getRepositoryUrl = (repository) => (
  `https://github.com/${githubOwner}/${repository}`
);

const getUniqueTechnologies = (project, repositoryData = {}) => {
  const technologies = [
    ...(project.technologies || []),
    repositoryData.language,
    ...(repositoryData.topics || []),
  ].filter(Boolean);

  return [...new Set(technologies)].slice(0, MAX_TECHNOLOGY_TAGS);
};

const buildProject = (project, repositoryData = {}) => ({
  id: project.repository,
  title: project.title
    || repositoryData.name
    || formatRepositoryName(project.repository),
  status: project.status || 'Projeto',
  description: project.description
    || repositoryData.description
    || 'Projeto disponível no GitHub.',
  technologies: getUniqueTechnologies(project, repositoryData),
  repositoryUrl: repositoryData.html_url || getRepositoryUrl(project.repository),
  liveUrl: project.liveUrl || repositoryData.homepage || '',
  updatedAt: repositoryData.updated_at || '',
});

const readCachedProjects = () => {
  if (typeof window === 'undefined') return null;

  try {
    const cachedProjects = window.localStorage.getItem(CACHE_KEY);
    if (!cachedProjects) return null;

    const { projects, updatedAt } = JSON.parse(cachedProjects);
    const isFresh = Date.now() - updatedAt < CACHE_TIME_IN_MS;

    return isFresh ? projects : null;
  } catch {
    return null;
  }
};

const writeCachedProjects = (projects) => {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ projects, updatedAt: Date.now() }),
    );
  } catch {
    // Cache is optional; the portfolio still works with local fallback data.
  }
};

const fetchRepository = async (project, signal) => {
  const response = await fetch(
    `${GITHUB_API_URL}/${githubOwner}/${project.repository}`,
    { signal },
  );

  if (!response.ok) return buildProject(project);

  const repositoryData = await response.json();
  return buildProject(project, repositoryData);
};

export const fallbackProjects = projectConfigs.map((project) => (
  buildProject(project)
));

export const getProjects = async ({ signal } = {}) => {
  const cachedProjects = readCachedProjects();
  if (cachedProjects) return cachedProjects;

  const projects = await Promise.all(projectConfigs.map(async (project) => {
    try {
      return await fetchRepository(project, signal);
    } catch {
      return buildProject(project);
    }
  }));

  writeCachedProjects(projects);
  return projects;
};
