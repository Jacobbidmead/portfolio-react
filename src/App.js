import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import Photos from "./components/Photos.js";
import AirBnB from "./components/Projects/AirBnB.js";
import MagiKards from "./components/Projects/MagiKards.js";
import Google from "./components/Projects/Google.js";
import "./styles/Top.css";

class App extends React.Component {
  state = {
    showHome: true,
    showAbout: false,
    showPhotos: false,
    showProjects: false,
    showAirBnb: false,
    showMagiKards: false,
    showGoogle: false,
    showNav: false,
    backgroundColor: "black",
    color: "rgba(247, 243, 234, 0.5)",
  };

  toggleShowNav = () => {
    this.setState({
      showNav: this.state.showNav ? false : true,
    });
  };

  toggleNavColorChange = () => {
    if (this.state.backgroundColor === "#35FF69") {
      this.setState({
        backgroundColor: "black",
        color: "rgba(247, 243, 234, 0.5)",
      });
    } else {
      this.setState({
        backgroundColor: "#35FF69",
        color: "black",
      });
    }
  };

  makeBlack = () => {
    this.setState({
      backgroundColor: "black ",
      color: "rgba(247, 243, 234, 0.5)",
    });
  };

  rotateArrow = (e) => {
    let arrow = document.getElementById("arrow");
    arrow.style.transform = "rotate(180deg)";
  };

  toggleShowHome = () => {
    this.setState({
      showHome: true,
      showAbout: false,
      showPhotos: false,
      showProjects: false,
      showAirBnb: false,
      showMagiKards: false,
      showGoogle: false,
    });
  };

  toggleShowLinks = () => {
    this.setState({
      showLinks: true,
      showHome: false,
      showAbout: false,
      showProjects: false,
      showPhotos: false,
      showAirBnb: false,
      showMagiKards: false,
      showGoogle: false,
    });
  };

  toggleShowAbout = () => {
    this.setState({
      showAbout: true,
      showHome: false,
      showProjects: false,
      showPhotos: false,
      showAirBnb: false,
      showMagiKards: false,
      showGoogle: false,
    });
  };

  toggleShowPhotos = () => {
    this.setState({
      showPhotos: true,
      showHome: false,
      showLinks: false,
      showAbout: false,
      showProjects: false,
      showAirBnb: false,
      showMagiKards: false,
      showGoogle: false,
    });
  };

  toggleShowProjects = () => {
    this.setState({
      showProjects: true,
      showHome: false,
      showAbout: false,
      showPhotos: false,
      showAirBnb: false,
      showMagiKards: false,
      showGoogle: false,
    });
  };

  toggleShowAirBnb = (e) => {
    this.setState({
      showProjects: false,
      showAirBnb: true,
    });
  };

  toggleShowMagiKards = (e) => {
    this.setState({
      showProjects: false,
      showMagiKards: true,
    });
  };

  toggleShowGoogle = (e) => {
    this.setState({
      showProjects: false,
      showGoogle: true,
    });
  };

  render() {
    return (
      <>
        {this.state.showNav ? (
          <div
            style={{
              backgroundColor: this.state.backgroundColor,
              color: this.state.color,
            }}
          >
            <div className="top-bar">
              <div
                style={{ color: this.state.color }}
                onClick={this.toggleShowNav}
              >
                <img
                  src="images/down-arrow.png"
                  style={{
                    backgroundColor: "white",
                    width: "30px",
                    borderRadius: "50%",
                    padding: "6px",
                    margin: "20px",
                  }}
                  alt=""
                  id="arrow"
                />
              </div>

              <Sidebar
                toggleShowLinks={this.toggleShowLinks}
                toggleShowAbout={this.toggleShowAbout}
                toggleShowHome={this.toggleShowHome}
                toggleShowProjects={this.toggleShowProjects}
                toggleShowPhotos={this.toggleShowPhotos}
                makeBlack={this.makeBlack}
              />
            </div>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: this.state.backgroundColor,
              color: this.state.color,
              height: "100%",
            }}
            div
            className="top-bar"
          >
            <img
              onClick={this.toggleShowNav}
              src="images/down-arrow.png"
              style={{
                backgroundColor: "rgba(247, 243, 234, 0.5)",
                width: "30px",
                borderRadius: "50%",
                padding: "6px",
                margin: "20px",
              }}
              alt=""
            />
          </div>
        )}

        {this.state.showHome && (
          <Home
            toggleShowNav={this.toggleShowNav}
            toggleNavColorChange={this.toggleNavColorChange}
          />
        )}

        {this.state.showAbout && <About />}

        {this.state.showProjects && (
          <Projects
            toggleShowAirBnb={this.toggleShowAirBnb}
            toggleShowMagiKards={this.toggleShowMagiKards}
            toggleShowGoogle={this.toggleShowGoogle}
          />
        )}

        {this.state.showAirBnb ? (
          <AirBnB toggleShowProjects={this.toggleShowProjects} />
        ) : null}

        {this.state.showMagiKards ? (
          <MagiKards toggleShowProjects={this.toggleShowProjects} />
        ) : null}

        {this.state.showGoogle ? (
          <Google toggleShowProjects={this.toggleShowProjects} />
        ) : null}
        {this.state.showPhotos && <Photos />}
      </>
    );
  }
}

export default App;
