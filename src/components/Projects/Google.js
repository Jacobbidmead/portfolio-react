import React from "react";
import Tilt from "react-parallax-tilt";

let backgroundColors = ["#23C4FF", "#FF10F0", "#FE5F55", "#10FFCB", "#CB04A5"];

const random = () => {
  return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
};

class Google extends React.Component {
  state = {
    changeColor: false,
    backgroundColor: "black",
  };

  onMouseEnter = () => {
    this.setState({
      changeColor: true,
      backgroundColor: random(),
    });
  };

  onMouseLeave = () => {
    this.setState({
      changeColor: false,
    });
  };
  render() {
    const { changeColor } = this.state;
    const style = changeColor
      ? {
          transition: "background-color 0.5s ease",
          backgroundColor: this.state.backgroundColor,
        }
      : {
          backgroundColor: "black",
          transition: "background-color 0.5s ease",
        };
    return (
      <>
        <div style={style}>
          <div className="header" style={style}>
            <h1 style={{ margin: "0" }}>Google Search.</h1>
          </div>
          <div
            style={{ margin: "100px 0px 0px 100px", paddingBottom: "80px" }}
            className="return-projects"
            onClick={(e) => this.props.toggleShowProjects(e)}
          >
            <h4>Back to Projects</h4>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div style={{ color: "white", marginLeft: "100px" }}>
              <h1>Google Seach App</h1>
              <h5>October 2022</h5>
            </div>

            <div
              style={{ color: "white", fontSize: "30px", marginRight: "100px" }}
            >
              Google Search style app, first made in MVC style, then using React
              for the front end while creating our own API and connecting to the
              backend using Axios.{" "}
              <p>
                Users are able to search for limited data contained in the
                MongoDB database.
              </p>
              <p>
                Tecnhologies used - React, Axios, Passport, HTML, CSS,
                Express.js, Node.js, MongoDB.
              </p>
              <small style={{ fontSize: "15px" }}>
                Scroll over images to change colour
              </small>
            </div>
          </div>
          <div
            className="google-img"
            onMouseEnter={this.onMouseEnter}
            style={style}
          >
            <img
              src="./images/project-img/google.png"
              style={{ width: "80%", borderRadius: "5px", cursor: "pointer" }}
              alt=""
              onMouseEnter={this.onMouseEnter}
            />
          </div>
          <div style={style}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginLeft: "145px",
              }}
            >
              <div
                onMouseEnter={this.onMouseEnter}
                style={{ marginBottom: "50px" }}
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                  <img
                    src="./images/project-img/google2.png"
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    alt=""
                  />
                </Tilt>
              </div>
              <div
                style={{
                  color: "white",
                  marginRight: "160px",
                  textAlign: "right",
                }}
              >
                <p>Some txt here</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Google;
