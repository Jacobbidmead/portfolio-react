import React from "react";

class AirBnB extends React.Component {
  render() {
    return (
      <>
        <div
          className="return-projects"
          onClick={(e) => this.props.toggleShowProjects(e)}
        >
          <img src="images/left-arrow.png" alt="" className="arrow" />
        </div>
      </>
    );
  }
}

export default AirBnB;
