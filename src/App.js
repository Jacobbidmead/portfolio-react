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
import Claudia from "./components/Projects/Claudia";

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
    showClaudia: false,
    backgroundColor: "black",
    color: "rgba(247, 243, 234, 0.5)",
    burger: "rgba(247, 243, 234, 0.5)",
  };

  toggleShowNav = () => {
    this.setState({
      showNav: this.state.showNav ? false : true,
    });
  };

  toggleNavColorChange = () => {
    if (this.state.backgroundColor === "rgb(17, 240, 47)") {
      this.setState({
        backgroundColor: "black",
        color: "rgba(247, 243, 234, 0.5)",
        burger: "white",
      });
    } else {
      this.setState({
        backgroundColor: "rgb(17, 240, 47)",
        color: "black",
        burger: "rgba(247, 243, 234, 0.5)",
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
      showClaudia: false,
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
      showClaudia: false,
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
      showClaudia: false,
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
      showClaudia: false,
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
      showClaudia: false,
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

  toggleShowClaudia = (e) => {
    console.log("working");
    this.setState({
      showProjects: false,
      showClaudia: true,
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
                  src="images/menu-bar.png"
                  className="nav-arrow"
                  style={{ backgroundColor: this.state.burger }}
                  alt=""
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
            <span onClick={this.toggleShowNav}>
              <img
                src="images/menu-bar.png"
                className="nav-arrow"
                alt=""
                style={{ backgroundColor: this.state.burger }}
              />
            </span>
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
            toggleShowClaudia={this.toggleShowClaudia}
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

        {this.state.showClaudia ? (
          <Claudia toggleShowProjects={this.toggleShowProjects} />
        ) : null}
        {this.state.showPhotos && <Photos />}
      </>
    );
  }
}

export default App;
