import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar.js";
import Links from "./components/Links.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Top from "./components/Top.js";
import Projects from "./components/Projects.js";
import Photos from "./components/Photos.js";
import AirBnB from "./components/Projects/AirBnB.js";
import MagiKards from "./components/Projects/MagiKards.js";
import Google from "./components/Projects/Google.js";

class App extends React.Component {
  state = {
    showHome: true,
    showLinks: false,
    showAbout: false,
    showPhotos: false,
    showProjects: false,
    showAirBnb: false,
    showMagiKards: false,
    showGoogle: false,
  };

  toggleShowHome = () => {
    this.setState({
      showHome: true,
      showLinks: false,
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
      showLinks: false,
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
      showLinks: false,
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
        <div className="top-bar">
          <Sidebar
            toggleShowLinks={this.toggleShowLinks}
            toggleShowAbout={this.toggleShowAbout}
            toggleShowHome={this.toggleShowHome}
            toggleShowProjects={this.toggleShowProjects}
            toggleShowPhotos={this.toggleShowPhotos}
          />
          <Top toggleShowHome={this.toggleShowHome} />
        </div>

        {this.state.showHome && (
          <div className="main-display">
            <Home toggleShowAbout={this.toggleShowAbout} />
          </div>
        )}
        <div className="links-bg">{this.state.showLinks && <Links />}</div>
        <div className="about-bg">{this.state.showAbout && <About />}</div>

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
        <div className="photo-bg">{this.state.showPhotos && <Photos />}</div>
      </>
    );
  }
}

export default App;
