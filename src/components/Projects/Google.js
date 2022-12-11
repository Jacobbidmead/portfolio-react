import React from "react";
import Tilt from "react-parallax-tilt";
import { motion, MotionConfig } from "framer-motion";

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

const containerAnimate = {
  offscreen: { y: 600 },
  onscreen: {
    y: 0,
    transition: {
      type: "tween",
      bounce: 0.5,
      duration: 1,
    },
  },
};

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
        <div className="google-bg" style={style}>
          <div className="header" style={style}>
            <h1 style={{ marginBottom: "200px" }}>Google Search.</h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
          >
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
                style={{
                  color: "white",
                  fontSize: "30px",
                  marginRight: "100px",
                }}
              >
                Google Search style app, first made in MVC style, then using
                React for the front end while creating our own API and
                connecting to the backend using Axios.{" "}
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
          </motion.div>
          <motion.div
            className="google-img"
            onMouseEnter={this.onMouseEnter}
            style={style}
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={containerAnimate}
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.img
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={scaleImg}
              viewport={{ once: true, amount: 0.5 }}
              src="./images/project-img/google.png"
              style={{
                width: "76%",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "100px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
              alt=""
              onMouseEnter={this.onMouseEnter}
            />
          </motion.div>
          <div style={style}>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={boxAnimate}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
              }}
              className="text-container"
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
                  type: "tween",
                  stiffness: 300,
                  damping: 10,
                }}
                onMouseEnter={this.onMouseEnter}
                style={{ marginBottom: "50px" }}
              >
                <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} perspective={1000}>
                  <img
                    src="./images/project-img/google2.png"
                    style={{
                      width: "50%",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginTop: "80px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
                  width: "40%",
                  fontSize: "25px",
                  marginTop: "80px",
                  height: " 30%",
                }}
                className="text-box"
              >
                <p style={{ color: "white" }}>
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
