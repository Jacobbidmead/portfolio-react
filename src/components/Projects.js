import React from "react";
import MagiKards from "../components/Projects/MagiKards.js";
import AirBnB from "../components/Projects/AirBnB.js";
import Google from "../components/Projects/Google.js";
import "../styles/Projects.css";
import { motion } from "framer-motion";

let backgroundColors = [
  "#23C4FF",
  "#FF10F0",
  "#FE5F55",
  "#10FFCB",
  "#CB04A5",
  "#FB5012",
];

const random = () => {
  const randomizedArray = [];

  for (let i = 0; i < backgroundColors.length; i++) {
    let randomIndex = Math.floor(Math.random() * backgroundColors.length);
    while (randomizedArray.includes(backgroundColors[randomIndex])) {
      randomIndex = Math.floor(Math.random() * backgroundColors.length);
    }
    randomizedArray.push(backgroundColors[randomIndex]);
  }

  const randomIndex = Math.floor(Math.random() * randomizedArray.length);
  return randomizedArray[randomIndex];
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

  lightupText = () => {
    this.setState({
      textShadow: "1px 1px 10px white, -1px -1px 10px white",
    });
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
      textShadow: "none",
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
        <div className="bg-fill" style={style}>
          <h1
            style={{
              position: "fixed",
              marginLeft: "40px",
              textShadow: this.state.textShadow,
            }}
            className="header"
          >
            Things I've made.
          </h1>

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
                className="project-link"
                onClick={(e) => this.props.toggleShowMagiKards(e)}
                onMouseOver={(e) => this.lightupText(e)}
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
                onMouseOver={(e) => this.lightupText(e)}
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
                onMouseOver={(e) => this.lightupText(e)}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                variants={linkAnimate}
                viewport={{ once: false, amount: 0.1 }}
              >
                Google
              </motion.div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
