import React from "react";
import Tilt from "react-parallax-tilt";
import "../styles/Tilt.css";
import { motion } from "framer-motion";

const TiltComponent = () => {
  return (
    <Tilt
      glareEnable={false}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
    >
      <motion.div
        animate={{
          scale: [1, 1.3, 1.3, 1, 1],
          rotate: [0, 0, 360, 360, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        className="tiltComponent"
      >
        <div className="name" style={{ paddingTop: "150px" }}>
          JACOB{" "}
        </div>
        <div className="name">BIDMEAD</div>
      </motion.div>
    </Tilt>
  );
};

export default TiltComponent;
