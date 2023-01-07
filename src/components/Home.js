import React from "react";
import { motion } from "framer-motion";
import Dropdown from "./Dropdown.js";
import Qualification from "./Qualification";
import Experience from "./Experience";

const animateCircle = {
  clicked: {
    scale: [0.6, 1.4, 1.3, 1.2, 1],
    rotate: [0, 0, 360, 360, 0],
    transition: {
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      duration: 1,
    },
  },
};

const textAnimate = {
  offscreen: { y: 200, opacity: 0 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      bounce: 0.5,
      duration: 1,
    },
  },
};

class Home extends React.Component {
  state = {
    changeColor: false,
    backgroundColor: "black",
    color: "rgba(247, 243, 234, 0.5);",
    borderColor: "white",
  };

  toggleColorChange = () => {
    if (this.state.backgroundColor === "rgb(175, 225, 175)") {
      this.setState({
        backgroundColor: "black",
        color: "rgba(247, 243, 234, 0.5)",
        borderColor: "white",
      });
    }
    if (this.state.backgroundColor === "black") {
      this.setState({
        backgroundColor: "rgb(175, 225, 175)",
        color: "black",
        borderColor: "black",
      });
    }
  };

  render() {
    return (
      <>
        <div
          className="home-container"
          style={{
            backgroundColor: this.state.backgroundColor,
            color: this.state.color,
          }}
        >
          <div className="name-container">
            <span className="hi" style={{ color: this.state.color }}>
              Hi i'm
            </span>{" "}
            <div className="name" style={{ color: this.state.color }}>
              JACOB
            </div>
            <motion.div
              style={{ borderColor: this.state.borderColor }}
              onClick={(e) => {
                this.toggleColorChange(e);
                this.props.toggleNavColorChange(e);
              }}
              whileTap={"clicked"}
              variants={animateCircle}
              animate={{
                scale: [1, 1.4, 1.3, 1.2, 1],
                rotate: [0, 0, 360, 360, 0],
              }}
              transition={{
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                duration: 1.2,
              }}
              className="circle"
            >
              {" "}
              <div
                className="clickme"
                style={{
                  color: this.state.color,
                }}
              >
                <span> Change Theme</span>
              </div>
            </motion.div>
            <div
              className="lastname"
              style={{
                color: this.state.color,
                borderColor: this.state.borderColor,
              }}
            >
              {" "}
              &nbsp;I make things for the web.{" "}
            </div>
          </div>
        </div>
        <div className="japan-bg">
          <motion.div
            className="japan-text"
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={textAnimate}
            viewport={{ once: true, amount: 0.01 }}
          >
            <div className="sub-title">
              I'm a Junior Full Stack Developer
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with an interest
              in Web Design & UI Design, based in South London.
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={textAnimate}
          viewport={{ once: true, amount: 0.01 }}
          style={{ paddingBottom: "100px" }}
        >
          <Dropdown />
          <Qualification />
          <Experience />
        </motion.div>
        <div></div>
      </>
    );
  }
}

export default Home;
