import React from "react";
import Tilt from "react-parallax-tilt";
import "../styles/Tilt.css";

const TiltComponent = () => {
  return (
    <Tilt
      glareEnable={true}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      glareColor={"red"}
    >
      <div className="tiltComponent">
        <div>JACOB BIDMEAD</div>
        <div>WEB DEVELOPER</div>
        <div>+447960446892</div>
      </div>
    </Tilt>
  );
};

export default TiltComponent;
