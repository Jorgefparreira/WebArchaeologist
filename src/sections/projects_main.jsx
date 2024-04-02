import React, { Component } from "react";
import Projects from "../components/project_data";
import {personalProjects,commercialProjects} from "../components/project_list";

class ProjectsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
  }


  componentDidMount() {
  }



  render() {
    return (
      <section
        className="work-container "
        id="works"
        ref={divElement => (this.divElement = divElement)}
      >
        <hr className="projects-hr" />
        <h2 className="text-center h1">Projects</h2>
        <hr className="projects-hr" />
        <div className="container">
        <div className="row">
            <div className="col-xs-12">
              <h3>Commercial</h3>
            </div>
          </div>
          <Projects projects={commercialProjects} />          
          <br/><br/>
          <div className="row">
            <div className="col-xs-12">
              <h3>Personal</h3>
            </div>
          </div>
          <Projects projects={personalProjects} />
        </div>
        <br />
      </section>
    );
  }
}

export default ProjectsMain;
