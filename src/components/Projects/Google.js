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
            <h1 style={{ margin: "0" }}>Google Search</h1>
          </div>
          <div
            style={{ margin: "100px 0px 0px 100px", paddingBottom: "80px" }}
            className="return-projects"
            onClick={(e) => this.props.toggleShowProjects(e)}
          >
            <h4>Back to Projects</h4>
          </div>
          <div
            className="google-img"
            onMouseEnter={this.onMouseEnter}
            style={style}
          >
            <img
              src="./images/project-img/google.png"
              style={{ width: "80%", borderRadius: "5px" }}
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
              <div onMouseEnter={this.onMouseEnter}>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                  <img
                    src="./images/project-img/google2.png"
                    style={{ width: "100%", borderRadius: "5px" }}
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
