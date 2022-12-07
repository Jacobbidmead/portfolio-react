import React from "react";
import { motion } from "framer-motion";

let backgroundColors = ["#23C4FF", "#FF10F0", "#FE5F55", "#10FFCB", "#CB04A5"];

const random = () => {
  return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
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
    fontFamily: "Futura",
  };

  toggleColorChange = () => {
    this.setState({
      changeColor: true,
      backgroundColor: random(),
      fontFamily: "Helvetica",
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
              <span> Click me</span>
            </div>
          </motion.div>
          <div className="lastname" style={{ fontFamily: this.fontFamily }}>
            BIDMEAD
          </div>
          <div className="webdev" style={{ fontFamily: this.fontFamily }}>
            WEB DEVELOPER
          </div>
        </div>
      </>
    );
  }
}

export default Home;
