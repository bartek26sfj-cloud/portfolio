import { projects } from "../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section id="prosjekter" className="section projects">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Prosjekter</span>
          <h2 className="section-title">Ting jeg har bygget</h2>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <a
                className="project-card__media"
                href={project.demo ?? project.github}
                target="_blank"
                rel="noreferrer"
              >
                <img src={project.image} alt={`Skjermbilde av ${project.title}`} loading="lazy" />
              </a>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live demo ↗
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
