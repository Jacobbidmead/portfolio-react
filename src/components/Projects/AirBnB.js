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

        <div className="airbnb-container">
          <div className="animated-div">
            <img
              src="./images/project-img/abnb1.png"
              className="img-container"
              alt=""
            />
          </div>
          <div className="animated-div">
            <img
              src="./images/project-img/abnb2.png"
              className="img-container"
              alt=""
            />
          </div>
          <div className="animated-div">
            <img
              src="./images/project-img/abnb3.png"
              className="img-container"
              alt=""
            />
          </div>
          <div className="animated-div">
            <img
              src="./images/project-img/abnb4.png"
              className="img-container"
              alt=""
            />
          </div>
          <div className="animated-div">
            <img
              src="./images/project-img/abnb5.png"
              className="img-container"
              alt=""
            />
          </div>
          <div className="animated-div">
            <img
              src="./images/project-img/abnb6.png"
              className="img-container"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
}

export default AirBnB;
