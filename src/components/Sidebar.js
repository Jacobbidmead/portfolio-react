import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <div
          onClick={(e) => {
            this.props.toggleShowAbout(e);
            this.props.makeBlack(e);
          }}
          className=" button-style "
        >
          About
        </div>
        <div
          onClick={(e) => {
            this.props.toggleShowProjects(e);
            this.props.makeBlack(e);
          }}
          className="button-style  "
        >
          Projects
        </div>
        <div
          onClick={(e) => {
            this.props.toggleShowPhotos(e);
            this.props.makeBlack(e);
          }}
          className="button-style "
        >
          Photo
        </div>
        <div
          className="button-style"
          onClick={(e) => {
            this.props.toggleShowHome(e);
          }}
        >
          Home
        </div>
      </>
    );
  }
}

export default Sidebar;
