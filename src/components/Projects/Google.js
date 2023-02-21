import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const scaleImg = {
  offscreen: { scale: 1 },
  onscreen: {
    scale: 1.08,
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

class Google extends React.Component {
  state = {
    bgColor: "black",
  };
  listenScrollEvent = (e) => {
    const backgroundBreakpoints = [0, 500, 3000];

    const colorsList = ["black", "#FE5F55"];

    backgroundBreakpoints.forEach((breakpoint, position) => {
      if (
        window.scrollY > breakpoint &&
        window.scrollY < backgroundBreakpoints[position + 1]
      ) {
        this.setState({ bgColor: colorsList[position] });
      }
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <>
        <div
          className="google-bg"
          style={{
            backgroundColor: this.state.bgColor,
            transition: "background-color 0.5s ease",
            paddingBottom: "1px",
          }}
        >
          <div className="google-header">
            <h1> Google Search</h1>
          </div>
          <motion.div>
            <Link to="/Projects" className="return-projects">
              <h4 style={{ marginLeft: "100px" }}>Back to Projects</h4>
            </Link>
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
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={boxAnimate}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
              className="text-container google-container"
            >
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={textAnimate}
                viewport={{ once: true, amount: 0.1 }}
                style={{ marginBottom: "50px" }}
              >
                <img
                  src="./images/project-img/google2.png"
                  className="google-searchpage"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={textAnimate}
                viewport={{ once: true, amount: 0.1 }}
                className="google-text"
              >
                <span>
                  Google search home page & results; users can search for the
                  data in image below via the search bar.
                </span>
              </motion.div>
            </motion.div>
          </div>
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
                marginTop: "80px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                marginBottom: "200px",
              }}
              alt=""
            />
          </motion.div>
        </div>
      </>
    );
  }
}

export default Google;
