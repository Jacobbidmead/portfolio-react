import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <div
          onClick={(e) => this.props.toggleShowAbout(e)}
          className=" button-style  name-reveal"
        >
          [01
          <span className="revealed-text">About</span>]
        </div>
        <div
          onClick={(e) => this.props.toggleShowProjects(e)}
          className="button-style  name-reveal"
        >
          [02<span className="revealed-text">Projects</span>]
        </div>
        <div
          onClick={(e) => this.props.toggleShowPhotos(e)}
          className="button-style name-reveal"
        >
          [03<span className="revealed-text">Photo</span>]
        </div>
        <div
          className="home-button name-reveal"
          onClick={(e) => this.props.toggleShowHome(e)}
        >
          +
        </div>
      </>
    );
  }
}

export default Sidebar;
