import React from "react";
import Photo from "./Photo.js";
import "../styles/Photos.css";

class Photos extends React.Component {
  render() {
    return (
      <>
        <div className="header" style={{ marginBottom: "170px" }}>
          <h1 style={{ margin: "0" }}>Photos.</h1>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ color: "white", marginLeft: "100px" }}>
            <h1>Analogue photography</h1>
            <h5>2014 - 2019</h5>
          </div>
          <div
            style={{ color: "white", marginRight: "100px", textAlign: "right" }}
          >
            "Travel changes you, As you move through this life and this world
            you change things slightly, you leave marks behind, however small.
            And in return, life — and travel — leaves marks on you." -{" "}
            <p>Anthony Bourdain</p> <p></p>
          </div>
        </div>
        <div className="photo-bg">
          <Photo changePic={this.props.changePic} />
        </div>
      </>
    );
  }
}

export default Photos;
