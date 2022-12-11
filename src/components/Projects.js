import React from "react";
import MagiKards from "../components/Projects/MagiKards.js";
import AirBnB from "../components/Projects/AirBnB.js";
import Google from "../components/Projects/Google.js";
import "../styles/Projects.css";
import { motion } from "framer-motion";

let backgroundColors = ["#23C4FF", "#FF10F0", "#FE5F55", "#10FFCB", "#CB04A5"];

const random = () => {
  return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
};

const linkAnimate = {
  offscreen: { y: 200, scale: 1 },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 1,
      scale: 2,
    },
  },
};

class Projects extends React.Component {
  state = {
    changeColor: false,
    backgroundColor: "black",
    textShadow: "none",
  };

  onMouseEnter = () => {
    this.setState({
      changeColor: true,
      backgroundColor: random(),
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
          backgroundColor: this.state.backgroundColor,
        }
      : {
          backgroundColor: "black",
          transition: "background-color 0.5s ease",
        };
    return (
      <>
        <div className="header" style={style}>
          <h1 style={{ margin: "0 0 0px 50px", position: "fixed" }}>
            Things I've made.
          </h1>
        </div>

        <div className="bg-fill" style={style}>
          <div className="project-links" style={style}>
            {this.props.showMagiKards ? (
              <MagiKards
                toggleShowMagiKards={this.props.toggleShowMagiKards}
                toggleShowProjects={this.props.toggleShowProjects}
              />
            ) : (
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                className="box project-link"
                onClick={(e) => this.props.toggleShowMagiKards(e)}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                variants={linkAnimate}
                viewport={{ once: false, amount: 0.1 }}
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
                initial={"offscreen"}
                whileInView={"onscreen"}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                className="project-link"
                onClick={(e) => this.props.toggleShowAirBnb(e)}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                variants={linkAnimate}
                viewport={{ once: false, amount: 0.1 }}
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
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                className="project-link"
                onClick={(e) => this.props.toggleShowGoogle(e)}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                variants={linkAnimate}
                viewport={{ once: false, amount: 0.1 }}
              >
                Google Search
              </motion.div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
