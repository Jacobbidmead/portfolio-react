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
          <div className="project-links">
            {this.props.showMagiKards ? (
              <MagiKards
                toggleShowMagiKards={this.props.toggleShowMagiKards}
                toggleShowProjects={this.props.toggleShowProjects}
              />
            ) : (
              <div
                className="project-link"
                onClick={(e) => this.props.toggleShowMagiKards(e)}
              >
                MagiKards
              </div>
            )}

            {this.props.showAirBnb ? (
              <AirBnB
                toggleShowAirBnb={this.props.toggleShowAirBnb}
                toggleShowProjects={this.props.toggleShowProjects}
              />
            ) : (
              <div
                className="project-link"
                onClick={(e) => this.props.toggleShowAirBnb(e)}
              >
                AIRBNB
              </div>
            )}

            {this.props.showGoogle ? (
              <Google
                toggleShowGoogle={this.props.toggleShowGoogle}
                toggleShowProjects={this.props.toggleShowProjects}
              />
            ) : (
              <div
                className="project-link"
                onClick={(e) => this.props.toggleShowGoogle(e)}
              >
                Google Search
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
