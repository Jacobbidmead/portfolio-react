import React from "react";

class Claudia extends React.Component {
  render() {
    return (
      <>
        <div className="header" style={{ paddingBottom: "200px" }}>
          In production, come back soon.
        </div>
        <div
          className="return-projects"
          onClick={(e) => this.props.toggleShowProjects(e)}
        >
          <h4>Back to Projects</h4>
        </div>
      </>
    );
  }
}

export default Claudia;
