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
          [01
          <span>About</span>]
        </div>
        <div
          onClick={(e) => {
            this.props.toggleShowProjects(e);
            this.props.makeBlack(e);
          }}
          className="button-style  "
        >
          [02<span>Projects</span>]
        </div>
        <div
          onClick={(e) => {
            this.props.toggleShowPhotos(e);
            this.props.makeBlack(e);
          }}
          className="button-style "
        >
          [03<span>Photo</span>]
        </div>
        <div
          className="button-style"
          onClick={(e) => {
            this.props.toggleShowHome(e);
          }}
        >
          [04<span>Home</span>]
        </div>
      </>
    );
  }
}

export default Sidebar;
