import React from "react";
import TiltComponent from "./Tilt";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home-container">
          <div id="background">
            <TiltComponent></TiltComponent>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
