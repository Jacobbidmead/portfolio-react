import React from "react";
import MagiKards from "../components/Projects/MagiKards.js";
import AirBnB from "../components/Projects/AirBnB.js";
import Google from "../components/Projects/Google.js";
import "../styles/Projects.css";
import { motion } from "framer-motion";

const backgroundColors = [
  "#23C4FF",
  "#FF10F0",
  "#FFFD77",
  "#FE5F55",
  "#D1DEDE",
  "#5DA399",
];

const random =
  backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

class Projects extends React.Component {
  state = {
    changeColor: false,
    backgroundColor: random,
  };

  onMouseEnter = () => {
    this.setState({
      changeColor: true,
    });
  };

  render() {
    const { changeColor } = this.state;
    const style = changeColor
      ? {
          transition: "background-color 0.5s ease",
          backgroundColor: this.state.backgroundColor,
        }
      : {
          backgroundColor: "black",
          transition: "background-color 0.5s ease",
        };
    return (
      <>
        <div className="bg-fill">
          <div className="project-links" style={style}>
            {this.props.showMagiKards ? (
              <MagiKards
                toggleShowMagiKards={this.props.toggleShowMagiKards}
                toggleShowProjects={this.props.toggleShowProjects}
              />
            ) : (
              <div
                className="box project-link"
                onClick={(e) => this.props.toggleShowMagiKards(e)}
                onMouseEnter={this.onMouseEnter}
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
              <motion.div
                className="project-link"
                onClick={(e) => this.props.toggleShowAirBnb(e)}
                onMouseEnter={this.onMouseEnter}
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
