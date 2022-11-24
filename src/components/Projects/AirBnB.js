import React from "react";

class AirBnB extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <h1 style={{ margin: "0" }}>AirBnB Clone</h1>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div style={{ color: "white" }}>
            <h1>AirBnB style site</h1>
          </div>
          <div style={{ color: "white" }}>
            <h1>Main descritption of airbnb project</h1>
          </div>
        </div>

        <div>
          {" "}
          <img
            style={{ width: "50%", zIndex: "5" }}
            className="airbnb-img"
            src="./images/project-img/abnb1.png"
            alt=""
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: " 1fr 1fr",
          }}
        >
          <div>
            {" "}
            <img
              style={{ width: "50%", zIndex: "5" }}
              className="airbnb-img"
              src="./images/project-img/abnb1.png"
              alt=""
            />
          </div>
          <div style={{ color: "white" }}>
            <h1>some text here</h1>
          </div>

          <div style={{ color: "white" }}>
            <h1>some text here</h1>
          </div>
          <div>
            {" "}
            <img
              style={{ width: "50%", zIndex: "5" }}
              className="airbnb-img"
              src="./images/project-img/abnb1.png"
              alt=""
            />
          </div>
        </div>
        <div>
          {" "}
          <img
            style={{ width: "50%", zIndex: "5" }}
            className="airbnb-img"
            src="./images/project-img/abnb1.png"
            alt=""
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: " 1fr 1fr",
          }}
        >
          <div>
            {" "}
            <img
              style={{ width: "50%", zIndex: "5" }}
              className="airbnb-img"
              src="./images/project-img/abnb1.png"
              alt=""
            />
          </div>
          <div style={{ color: "white" }}>
            <h1>some text here</h1>
          </div>

          <div style={{ color: "white" }}>
            <h1>some text here</h1>
          </div>
          <div>
            {" "}
            <img
              style={{ width: "50%", zIndex: "5" }}
              className="airbnb-img"
              src="./images/project-img/abnb1.png"
              alt=""
            />
          </div>
        </div>
        <div
          className="return-projects"
          onClick={(e) => this.props.toggleShowProjects(e)}
        >
          <h1>Back to Projects</h1>
        </div>
      </>
    );
  }
}

export default AirBnB;
