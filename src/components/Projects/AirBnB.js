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

        <div>Hello</div>

        <div className="airbnb-container">
          <div className="media-scroller first">
            <img
              className="airbnb-img"
              src="./images/project-img/abnb1.png"
              alt=""
            />
          </div>
          <div className="media-scroller">
            <img
              className="airbnb-img"
              src="./images/project-img/abnb2.png"
              alt=""
            />
          </div>
          <div className="media-scroller">
            <img
              className="airbnb-img"
              src="./images/project-img/abnb3.png"
              alt=""
            />
          </div>
          <div className="media-scroller">
            <img
              className="airbnb-img"
              src="./images/project-img/abnb4.png"
              alt=""
            />
          </div>
          <div className="media-scroller">
            <img
              className="airbnb-img"
              src="./images/project-img/abnb5.png"
              alt=""
            />
          </div>
          <div className="media-scroller">
            <img
              className="airbnb-img"
              src="./images/project-img/abnb6.png"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
}

export default AirBnB;
