import React from "react";
import MagiKards from "../components/Projects/MagiKards.js";
import AirBnB from "../components/Projects/AirBnB.js";
import Google from "../components/Projects/Google.js";
import "../styles/Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <>
        <div className="bg-fill">
          <div>
            <h1 className="header">Projects.</h1>
          </div>

          <div className="project-links">
            {this.props.showMagiKards ? (
              <MagiKards
                toggleShowMagiKards={this.props.toggleShowMagiKards}
                toggleShowProjects={this.props.toggleShowProjects}
              />
            ) : (
              <span
                className="project-link"
                onClick={(e) => this.props.toggleShowMagiKards(e)}
              >
                MagiKards
              </span>
            )}

            {this.props.showAirBnb ? (
              <AirBnB
                toggleShowAirBnb={this.props.toggleShowAirBnb}
                toggleShowProjects={this.props.toggleShowProjects}
              />
            ) : (
              <span
                className="project-link"
                onClick={(e) => this.props.toggleShowAirBnb(e)}
              >
                AIRBNB
              </span>
            )}

            {this.props.showGoogle ? (
              <Google
                toggleShowGoogle={this.props.toggleShowGoogle}
                toggleShowProjects={this.props.toggleShowProjects}
              />
            ) : (
              <span
                className="project-link"
                onClick={(e) => this.props.toggleShowGoogle(e)}
              >
                Google Search
              </span>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
