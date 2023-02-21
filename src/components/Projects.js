import React from "react";
import "../styles/Projects.css";
import { Link } from "react-router-dom";

let backgroundColors = ["#23C4FF", "#FF10F0", "#FE5F55", "#CB04A5", "#FB5012"];

const random = () => {
  const randomizedArray = [];

  for (let i = 0; i < backgroundColors.length; i++) {
    let randomIndex = Math.floor(Math.random() * backgroundColors.length);
    while (randomizedArray.includes(backgroundColors[randomIndex])) {
      randomIndex = Math.floor(Math.random() * backgroundColors.length);
    }
    randomizedArray.push(backgroundColors[randomIndex]);
  }

  const randomIndex = Math.floor(Math.random() * randomizedArray.length);
  return randomizedArray[randomIndex];
};

class Projects extends React.Component {
  state = {
    changeColor: false,
    backgroundColor: "black",
    textShadow: "none",
    color: "rgba(247, 243, 234, 0.5)",
  };

  lightupText = () => {
    this.setState({
      textShadow: "1px 1px 4px white, -1px -1px 4px white",
    });
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
      textShadow: "none",
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
        <div className="bg-fill" style={style}>
          <nav className="button-style link-container">
            <Link
              to="/About"
              className="button-style"
              style={{ color: this.state.color }}
            >
              About
            </Link>

            <Link
              to="/Photos"
              className="button-style "
              style={{ color: this.state.color }}
            >
              Photo
            </Link>
            <Link
              className="button-style"
              to="/"
              style={{ color: this.state.color }}
            >
              Home
            </Link>
          </nav>

          <h1
            style={{
              position: "fixed",
              marginLeft: "900px",
              textShadow: this.state.textShadow,
              textAlign: "right",
            }}
            className="header"
          >
            Projects
          </h1>

          <div className="project-links" id="text" style={style}>
            <Link
              to="/Bookmarker"
              className="project-link link highlight"
              onMouseOver={(e) => this.lightupText(e)}
              onMouseEnter={this.onMouseEnter}
            >
              Bookmarks
            </Link>
            <Link
              to="/AirBnb"
              className="project-link link highlight"
              onMouseOver={(e) => this.lightupText(e)}
              onMouseEnter={this.onMouseEnter}
            >
              AirBNB
            </Link>

            <Link
              to="/Claudia"
              className="project-link link highlight claudia"
              onMouseOver={(e) => this.lightupText(e)}
              onMouseEnter={this.onMouseEnter}
            >
              Claudia Cantarini
            </Link>

            <Link
              to="/MagiKards"
              className="project-link link highlight"
              onMouseOver={(e) => this.lightupText(e)}
              onMouseEnter={this.onMouseEnter}
            >
              MagiKards
            </Link>

            <Link
              to="/Google"
              className="project-link link highlight"
              onMouseOver={(e) => this.lightupText(e)}
              onMouseEnter={this.onMouseEnter}
            >
              Google
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
