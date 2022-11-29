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
      <motion.div className="tiltComponent">
        <div className="name" style={{ paddingTop: "200px" }}>
          JACOB{" "}
        </div>
        <div className="name">BIDMEAD</div>
      </motion.div>
    </Tilt>
  );
};

export default TiltComponent;
