import React from "react";
import GITHUB from "../assets/svg/github";

const Projects = props => {
  const content = props.projects.map(project => (
    <div key={project.id} className="col-md-6 col-sm-12 work-tile">
      <br></br>
      <a target="_blank" href={`${project.anchor}`} id={`project${project.id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${project.image}.jpg`}
          className="img-fluid proj-img"
          alt={project.title}
        ></img>
      </a>
      <br></br>
      <a
        href={`${project.gitLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className={project.gitLink ? 'github-link' : 'no-link'}
      >
        <GITHUB 
          circleFill="#000"
          fill="#fff"
          className="github-link-img" />
        Check code on Github
      </a>
      <p className="work-description">{project.description}</p>
    </div>
  ));
  return <div className="row">{content}</div>;
};

export default Projects;
