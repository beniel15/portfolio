import useScrollAnimation from '../hooks/useScrollAnimation';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Student Management System',
    description:
      'Developed a backend application to efficiently manage student records with complete CRUD operations and database integration.',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Digital Task Performance Analyzer',
    description:
      'Built a full stack web application that enables users to manage daily tasks and analyze their productivity through dashboards and performance tracking.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management System',
    description:
      'Developed a task management platform where users can create, update, delete, and organize tasks with an intuitive user interface.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: '#',
    demo: '#',
  },
];

function Projects() {
  const fadeRef = useScrollAnimation();

  return (
    <section id="projects" className="section projects">
      <div ref={fadeRef} className="container section-animate">
        <div className="section-header fade-in">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Things I've Built</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card fade-in">
              <div className="project-card-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
