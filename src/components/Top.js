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
          [+ <span className="revealed-text"> &nbsp;Home &nbsp;</span> ]
        </div>
      </>
    );
  }
}

export default Top;
