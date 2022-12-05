import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

let backgroundColors = ["#23C4FF", "#FF10F0", "#FE5F55", "#10FFCB", "#CB04A5"];

const random = () => {
  return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
};

class Home extends React.Component {
  state = {
    changeColor: false,
    backgroundColor: "black",
  };

  toggleColorChange = () => {
    console.log("work");
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
          style={{ backgroundColor: this.state.backgroundColor }}
        >
          <div className="name">JACOB</div>

          <Tilt
            glareEnable={false}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
          >
            <motion.div
              onClick={(e) => this.toggleColorChange(e)}
              animate={{
                scale: [1, 1.3, 1.3, 1, 1],
                rotate: [0, 0, 360, 360, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
              }}
              className="circle"
            >
              {" "}
              <div style={{ paddingTop: "60px" }}>
                <span> Click me</span>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </>
    );
  }
}

export default Home;
