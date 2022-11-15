import React from "react";
import Photo from "./Photo.js";
import "../styles/Photos.css";

class Photos extends React.Component {
  render() {
    return (
      <>
        <div className="photo-bg">
          <div className="quote-container">
            <div className="quote1">
              <h1 className="travel">Travel changes you.</h1>
            </div>
            <div className="quote2">
              <span>
                As you move through this life and this world you change things
                slightly,
              </span>
            </div>
            <div className="quote3">
              <span>you leave marks behind, however small.</span>
            </div>
            <div className="quote4">
              <span>
                And in return, life — and travel — leaves marks on you.
              </span>
            </div>
            <div className="quote5">
              <span>- Anthony Bourdain</span>
            </div>
          </div>
          <div className="photo-quote-container">
            <span className="photo-quote1">
              Over the last 10 years, I've been shooting street photography.
              Capturing moments from my life & travels; cultures, experiences,
              landscapes and compositions.
            </span>
          </div>
          <div className="photo-quote-container2">
            <span className="photo-quote2">
              Through my work, I attempt to describe my love of anthropology &
              discovering new cultures.
            </span>
          </div>
          <Photo changePic={this.props.changePic} />
        </div>
      </>
    );
  }
}

export default Photos;
