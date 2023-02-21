import React from "react";
import { Link } from "react-router-dom";

class Claudia extends React.Component {
  render() {
    return (
      <>
        <div className="header" style={{ paddingBottom: "200px" }}>
          In production, come back soon.
        </div>
        <Link to="/Projects" className="return-projects">
          <h4 style={{ marginLeft: "100px" }}>Back to Projects</h4>
        </Link>
      </>
    );
  }
}

export default Claudia;
