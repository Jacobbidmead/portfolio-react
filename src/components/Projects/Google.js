import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const scaleImg = {
  offscreen: { scale: 1 },
  onscreen: {
    scale: 1.2,
    transition: {
      type: "tween",
      bounce: 0.6,
      duration: 1,
    },
  },
};

const moveRight = {
  offscreen: { x: -200 },
  onscreen: {
    x: 0,
    transition: {
      type: "tween",
      bounce: 0.6,
      duration: 1,
    },
  },
};

const textAnimate = {
  offscreen: { y: 50 },
  onscreen: {
    y: 0,
    transition: {
      type: "tween",
      bounce: 0.5,
      duration: 1,
    },
  },
};

const boxAnimate = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

let backgroundColors = ["#23C4FF", "#FF10F0", "#FE5F55", "#10FFCB", "#CB04A5"];

const random = () => {
  return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
};

class Google extends React.Component {
  state = {
    changeColor: false,
    backgroundColor: "black",
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
        <div style={style}>
          <div className="header" style={style}>
            <h1 style={{ margin: "0" }}>Google Search.</h1>
          </div>
          <div
            style={{ margin: "100px 0px 0px 100px", paddingBottom: "80px" }}
            className="return-projects"
            onClick={(e) => this.props.toggleShowProjects(e)}
          >
            <h4>Back to Projects</h4>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div style={{ color: "white", marginLeft: "100px" }}>
              <h1>Google Seach App</h1>
              <h5>October 2022</h5>
            </div>

            <div
              style={{ color: "white", fontSize: "30px", marginRight: "100px" }}
            >
              Google Search style app, first made in MVC style, then using React
              for the front end while creating our own API and connecting to the
              backend using Axios.{" "}
              <p>
                Users are able to search for limited data contained in the
                MongoDB database.
              </p>
              <p>
                Technologies used - React, Axios, Passport, HTML, CSS,
                Express.js, Node.js, MongoDB.
              </p>
              <small style={{ fontSize: "15px" }}>
                Scroll over images to change colour
              </small>
            </div>
          </div>
          <div
            className="google-img"
            onMouseEnter={this.onMouseEnter}
            style={style}
          >
            <motion.img
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={scaleImg}
              viewport={{ once: true, amount: 0.5 }}
              src="./images/project-img/google.png"
              style={{
                width: "80%",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "100px",
              }}
              alt=""
              onMouseEnter={this.onMouseEnter}
            />
          </div>
          <div style={style}>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={boxAnimate}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                backgroundColor: " rgba(0,0,0,0.4)",
                marginTop: "300px",
                paddingTop: "80px",
                borderTop: "solid white 1px",
              }}
            >
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={moveRight}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
                onMouseEnter={this.onMouseEnter}
                style={{ marginBottom: "50px" }}
                className="projects-img"
              >
                <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} perspective={1000}>
                  <img
                    src="./images/project-img/google2.png"
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginTop: "80px",
                      marginLeft: "100px",
                    }}
                    alt=""
                  />
                </Tilt>
              </motion.div>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={textAnimate}
                viewport={{ once: true, amount: 0.1 }}
                style={{
                  width: "50%",
                  fontSize: "25px",
                  height: "56%",
                  marginTop: "80px",
                }}
                className="text-box"
              >
                <p style={{ color: "white", paddingTop: "60px" }}>
                  Google search home page & results; users can search for the
                  above data in the search bar.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </>
    );
  }
}

export default Google;
