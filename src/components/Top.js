import React from "react";
import "../styles/Top.css";

class Top extends React.Component {
  render() {
    return (
      <>
        <div
          className="home-button name-reveal"
          onClick={(e) => this.props.toggleShowHome(e)}
        >
          +
        </div>
      </>
    );
  }
}

export default Top;
