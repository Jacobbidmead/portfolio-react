import React from "react";
import Photo from "./Photo.js";
import "../styles/Photos.css";
import { motion } from "framer-motion";

const boxAnimate = {
  offscreen: { y: 600 },
  onscreen: {
    y: 0,
    transition: {
      type: "tween",
      bounce: 0.5,
      duration: 1,
    },
  },
};

class Photos extends React.Component {
  render() {
    return (
      <>
        <div className="header" style={{ marginBottom: "170px" }}>
          <h1 className="photo-head">Photos.</h1>
        </div>
        <motion.div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div className="photo-subtitle">
            <h1>Analogue photography</h1>
            <h5>2014 - 2019</h5>
          </div>
          <div className="quote">
            "Travel changes you, as you move through this life and this world
            you change things slightly, you leave marks behind, however small.
            And in return, life — and travel — leaves marks on you."{" "}
            <p style={{ fontFamily: "PolySans" }}>- Anthony Bourdain</p>{" "}
            <p style={{ fontFamily: "PolySans" }}>
              Over the last 10 years, I've been shooting street photography.
              Capturing moments from my life & travels; cultures, experiences,
              landscapes and compositions.
            </p>
            <p>
              {" "}
              Through my work, I attempt to describe my love of anthropology &
              discovering new cultures.
            </p>
            <small>Shot on Contax TVS III</small>
          </div>
        </motion.div>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={boxAnimate}
          viewport={{ once: true, amount: 0.1 }}
          className="photo-bg"
        >
          <Photo changePic={this.props.changePic} />
        </motion.div>
      </>
    );
  }
}

export default Photos;
