import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <div
          onClick={(e) => this.props.toggleShowAbout(e)}
          className=" button-style name-text name-box "
        >
          <small>01</small>
          <h1>
            [<span className="link-effect">About</span>]
          </h1>
        </div>
        <div
          onClick={(e) => this.props.toggleShowProjects(e)}
          className="button-style link1 "
        >
          <small>02</small>
          <h1>
            [<span className="link-effect">Projects</span>]
          </h1>
        </div>
        <div
          onClick={(e) => this.props.toggleShowPhotos(e)}
          className="button-style link2 "
        >
          <small>03</small>
          <h1>
            [<span className="link-effect">Photo</span>]
          </h1>
        </div>
        <div
          onClick={(e) => this.props.toggleShowLinks(e)}
          className="button-style link3 "
        >
          <small>04</small>
          <h1>
            [<span className="link-effect">Links</span>]
          </h1>
        </div>
      </>
    );
  }
}

export default Sidebar;
