import React from "react";
import { motion } from "framer-motion";
import Dropdown from "./Dropdown.js";

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

class Home extends React.Component {
  state = {
    changeColor: false,
    backgroundColor: "black",
    color: "rgba(247, 243, 234, 0.5);",
    borderColor: "white",
  };

  toggleColorChange = () => {
    if (this.state.backgroundColor === "#35FF69") {
      this.setState({
        backgroundColor: "black",
        color: "rgba(247, 243, 234, 0.5)",
        borderColor: "white",
      });
    } else {
      this.setState({
        backgroundColor: "#35FF69",
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
              JACOB.
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
                duration: 1,
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
                <span
                  style={{
                    fontFamily: "Futura",
                  }}
                >
                  {" "}
                  Change theme
                </span>
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
          <div className="japan-text">
            <div className="sub-title">
              I like to code, design & take photos.{" "}
            </div>
          </div>
          <Dropdown />
          {/* <div style={{ color: "white" }}>New section</div> */}
        </div>
      </>
    );
  }
}

export default Home;
