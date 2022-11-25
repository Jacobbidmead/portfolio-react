import React from "react";
import Scroll from "./AirBnBScroll";

class AirBnB extends React.Component {
  state = {
    bgColor: "black",
  };

  listenScrollEvent = (e) => {
    const backgroundBreakpoints = [0, 2000, 3000];
    const colorsList = ["black", "#00A699"];

    backgroundBreakpoints.forEach((breakpoint, position) => {
      if (
        window.scrollY > breakpoint &&
        window.scrollY < backgroundBreakpoints[position + 1]
      ) {
        this.setState({ bgColor: colorsList[position] });
      }
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: this.state.bgColor,
            transition: "background-color 0.5s ease",
          }}
        >
          <div className="header" style={{ marginBottom: "170px" }}>
            <h1 style={{ margin: "0" }}>AirBnB Clone.</h1>
          </div>
          <div
            style={{ margin: "100px 0px 0px 100px", paddingBottom: "80px" }}
            className="return-projects"
            onClick={(e) => this.props.toggleShowProjects(e)}
          >
            <h4>Back to Projects</h4>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div style={{ color: "white", marginLeft: "100px" }}>
              <h1>AirBnB style site</h1>
              <h5>October 2022</h5>
            </div>

            <div
              style={{ color: "white", fontSize: "30px", marginRight: "100px" }}
            >
              Fully working fullstack MVC AirBnB style web app, this personal
              project was part of Tortuga Coders coding bootcamp. Users are able
              to create a profile and upload house data, which is populated onto
              the main app page.{" "}
              <p>
                Users, while logged in, can also edit house data and leave
                comments. User data is stored in MongoDB and accessed with
                Express.js.
              </p>
              <p>
                Tecnhologies used - JavaScript, HTML, CSS, Bootstrap,
                Express.js, Node.js, MongoDB.
              </p>
            </div>
          </div>
          <Scroll />
        </div>
      </>
    );
  }
}

export default AirBnB;
