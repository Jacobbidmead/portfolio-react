import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "../styles/Tilt.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home-container">
          <div id="background">
            <Tilt
              glareEnable={false}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
            >
              <motion.div
                tyle={{}}
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
                <span> Click me</span>
                <div className="name" style={{ paddingTop: "150px" }}>
                  JACOB{" "}
                </div>
                <div className="name">BIDMEAD</div>
              </motion.div>
            </Tilt>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
