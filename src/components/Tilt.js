import React from "react";
import Tilt from "react-parallax-tilt";
import "../styles/Tilt.css";

const TiltComponent = () => {
  return (
    <Tilt
      glareEnable={true}
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={1000}
      glareColor={"red"}
    >
      <div className="tiltComponent">
        <div style={{ paddingTop: "140px" }}>JACOB </div>
        <div>BIDMEAD</div>
        <div>WEB</div>
        <div>DEVELOPER</div>
      </div>
    </Tilt>
  );
};

export default TiltComponent;
