import React from "react";
import { motion } from "framer-motion";
import Dropdown from "./Dropdown.js";

let backgroundColors = ["#23C4FF", "#FF10F0", "#FE5F55", "#CB04A5", "#FB5012"];
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
    color: "white",
  };

  toggleColorChange = () => {
    this.setState({
      changeColor: true,
      backgroundColor: random(),
    });
  };

  render() {
    return (
      <>
        <div
          className="home-container"
          style={{
            backgroundColor: this.state.backgroundColor,
            transition: "background-color 0.5s ease",
          }}
        >
          <div className="name-container">
            <span className="hi">Hi i'm</span>{" "}
            <div className="name">JACOB.</div>
            <motion.div
              onClick={(e) => this.toggleColorChange(e)}
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
              <div className="clickme">
                <span> Pick a Color</span>
              </div>
            </motion.div>
            <div className="lastname"> &nbsp;I make things for the web. </div>
          </div>
        </div>
        <div className="japan-bg">
          <div className="japan-text">
            <div className="sub-title">
              I like design, fonts & taking photos.{" "}
            </div>
          </div>
          <Dropdown />
        </div>
      </>
    );
  }
}

export default Home;
