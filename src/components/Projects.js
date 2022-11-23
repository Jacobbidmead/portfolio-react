import React from "react";
import MagiKards from "../components/Projects/MagiKards.js";
import AirBnB from "../components/Projects/AirBnB.js";
import Google from "../components/Projects/Google.js";
import "../styles/Projects.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  FadeOut,
  MoveOut,
  MoveIn,
  Fade,
} from "react-scroll-motion";

let backgroundColors = [
  "#23C4FF",
  "#FF10F0",
  "#FFFD77",
  "#FE5F55",
  "#D1DEDE",
  "#5DA399",
];

const random = () => {
  return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
};

class Projects extends React.Component {
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
        <ScrollContainer>
          <ScrollPage>
            <div
              className="header"
              style={{ color: "white", fontSize: "100px", textAlign: "center" }}
            >
              <Animator animation={batch(MoveOut(0, 100), FadeOut(0.5, 0))}>
                <h1>Things I've made</h1>
              </Animator>
            </div>
          </ScrollPage>
          <ScrollPage>
            <div className="bg-fill" style={style}>
              <div className="project-links" style={style}>
                {this.props.showMagiKards ? (
                  <MagiKards
                    toggleShowMagiKards={this.props.toggleShowMagiKards}
                    toggleShowProjects={this.props.toggleShowProjects}
                  />
                ) : (
                  <div
                    className="box project-link"
                    onClick={(e) => this.props.toggleShowMagiKards(e)}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                  >
                    MagiKards
                  </div>
                )}

                {this.props.showAirBnb ? (
                  <AirBnB
                    toggleShowAirBnb={this.props.toggleShowAirBnb}
                    toggleShowProjects={this.props.toggleShowProjects}
                  />
                ) : (
                  <div
                    className="project-link"
                    onClick={(e) => this.props.toggleShowAirBnb(e)}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                  >
                    AIRBNB
                  </div>
                )}

                {this.props.showGoogle ? (
                  <Google
                    toggleShowGoogle={this.props.toggleShowGoogle}
                    toggleShowProjects={this.props.toggleShowProjects}
                  />
                ) : (
                  <div
                    className="project-link"
                    onClick={(e) => this.props.toggleShowGoogle(e)}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                  >
                    Google Search
                  </div>
                )}
              </div>
            </div>
          </ScrollPage>
        </ScrollContainer>
      </>
    );
  }
}

export default Projects;
