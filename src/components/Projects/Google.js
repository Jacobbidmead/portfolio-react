import React from "react";
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
          <div className="google-header" style={style}>
            <h1> Google Search</h1>
          </div>
          <motion.div>
            <div
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
              <div className="project-name">
                <h1>Google Seach App</h1>
                <h5>October 2022</h5>
              </div>

              <div className="project-description">
                <span> Google Search style app,</span> first made in MVC style,
                then using React for the front end while creating our own API
                and connecting to the backend using Axios.{" "}
                <p>
                  Users are able to search for limited data contained in the
                  MongoDB database.
                </p>
                <p>
                  <span>
                    Technologies used - React, Axios, Passport, HTML, CSS,
                    Express.js, Node.js, MongoDB.
                  </span>
                </p>
                <span style={{ fontSize: "15px" }}>
                  Scroll over images to change colour
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div className="google-img">
            <motion.img
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={scaleImg}
              viewport={{ once: true, amount: 0.1 }}
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
                variants={textAnimate}
                viewport={{ once: true, amount: 0.1 }}
                onMouseEnter={this.onMouseEnter}
                style={{ marginBottom: "50px" }}
              >
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
                <span style={{ color: "white" }}>
                  Google search home page & results; users can search for the
                  above data in the search bar.
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </>
    );
  }
}

export default Google;
