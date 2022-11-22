import React from "react";
import MagiKards from "../components/Projects/MagiKards.js";
import AirBnB from "../components/Projects/AirBnB.js";
import Google from "../components/Projects/Google.js";
import "../styles/Projects.css";
import { motion } from "framer-motion";

class Projects extends React.Component {
  state = {
    changeColor: false,
  };

  onMouseEnter = () => {
    this.setState({
      changeColor: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      changeColor: false,
    });
  };

  render() {
    const { changeColor } = this.state;
    const style = changeColor
      ? {
          transition: "background-color 0.5s ease",
          backgroundColor: "deeppink",
        }
      : {
          backgroundColor: "#f7f3ea",
          transition: "background-color 0.5s ease",
        };
    return (
      <>
        <div className="bg-fill" style={style}>
          <div className="project-links">
            {this.props.showMagiKards ? (
              <MagiKards
                toggleShowMagiKards={this.props.toggleShowMagiKards}
                toggleShowProjects={this.props.toggleShowProjects}
              />
            ) : (
              <motion.div
                className="box project-link"
                whileTap={{ scale: 0.9 }}
                onClick={(e) => this.props.toggleShowMagiKards(e)}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
              >
                MagiKards
              </motion.div>
            )}

            {this.props.showAirBnb ? (
              <AirBnB
                toggleShowAirBnb={this.props.toggleShowAirBnb}
                toggleShowProjects={this.props.toggleShowProjects}
              />
            ) : (
              <motion.div
                className="project-link"
                onClick={(e) => this.props.toggleShowAirBnb(e)}
              >
                AIRBNB
              </motion.div>
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
