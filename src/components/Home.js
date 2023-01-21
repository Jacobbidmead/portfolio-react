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
    if (this.state.backgroundColor === "rgb(17, 240, 47)") {
      this.setState({
        backgroundColor: "black",
        color: "rgba(247, 243, 234, 0.5)",
        borderColor: "white",
      });
    }
    if (this.state.backgroundColor === "black") {
      this.setState({
        backgroundColor: "rgb(17, 240, 47)",
        color: "black",
        borderColor: "black",
      });
    }
  };

  render() {
    return (
      <>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={textAnimate}
          viewport={{ once: true, amount: 0.01 }}
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
            <div></div>
          </div>
        </motion.div>
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
        <motion.div>
          {" "}
          <Dropdown />
          <Qualification />
          <Experience />
        </motion.div>
        <div>
          <div className="japan-bg2">
            <motion.div
              className="japan-text2"
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.01 }}
            >
              <div></div>
              <div className="sub-title2">
                I like to travel, take photos,
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ride a
                skateboard, climb rocks and make websites. Check out my page and
                get in touch.
              </div>
            </motion.div>
          </div>
          <div
            className="contacts-container"
            style={{ backgroundColor: "#FF10F0" }}
          >
            <div></div>
            <div className="contact"> jacob.bidmead.fullstack@outlook.com</div>
            <div className="contact">
              <a
                href="https://www.instagram.com/camomilehaze/?hl=en"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Instagram
              </a>
            </div>
            <div className="contact">
              <a
                href="https://github.com/Jacobbidmead"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                {" "}
                GitHub
              </a>
              <div></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
