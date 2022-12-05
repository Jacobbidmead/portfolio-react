import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

let backgroundColors = ["#23C4FF", "#FF10F0", "#FE5F55", "#10FFCB", "#CB04A5"];

const random = () => {
  return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
};

const animateCircle = {
  clicked: {
    scale: [1, 1.3, 1.3, 1, 1],
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
          <div className="name">JACOB</div>

          <motion.div
            onClick={(e) => this.toggleColorChange(e)}
            whileTap={"clicked"}
            variants={animateCircle}
            animate={{
              scale: [1, 1.3, 1.3, 1, 1],
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
            <div style={{ paddingTop: "60px" }}>
              <span> Click me</span>
            </div>
          </motion.div>
        </div>
      </>
    );
  }
}

export default Home;
