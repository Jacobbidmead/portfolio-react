import React from "react";

class Google extends React.Component {
  render() {
    return (
      <>
        <div
          style={{ margin: "100px 0px 0px 100px", paddingBottom: "80px" }}
          className="return-projects"
          onClick={(e) => this.props.toggleShowProjects(e)}
        >
          <h4>Back to Projects</h4>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <img
              src="./images/project-img/google.png"
              style={{ width: "100%", borderRadius: "5px" }}
              alt=""
            />
          </div>
          <div>
            <p>Google this is a test</p>
          </div>
        </div>
      </>
    );
  }
}

export default Google;
