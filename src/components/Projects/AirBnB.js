import React from "react";

class AirBnB extends React.Component {
  render() {
    return (
      <>
        <div className="header" style={{ marginBottom: "170px" }}>
          <h1 style={{ margin: "0" }}>AirBnB Clone</h1>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div style={{ color: "white", marginLeft: "100px" }}>
            <h1>AirBnB style site</h1>
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
              Tecnhologies used - HTML, CSS, Bootstrap, Express.js, Node.js,
              MongoDB.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "300px",
          }}
        >
          {" "}
          <img
            style={{
              width: "90%",
              zIndex: "5",
              borderRadius: "5px",
            }}
            className="airbnb-img"
            src="./images/project-img/abnb4.png"
            alt=""
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: " 1fr 1fr",
          }}
        >
          <div>
            {" "}
            <img
              style={{ width: "50%", zIndex: "5" }}
              className="airbnb-img"
              src="./images/project-img/abnb1.png"
              alt=""
            />
          </div>
          <div style={{ color: "white" }}>
            <h1>some text here</h1>
          </div>

          <div style={{ color: "white" }}>
            <h1>some text here</h1>
          </div>
          <div>
            {" "}
            <img
              style={{ width: "50%", zIndex: "5" }}
              className="airbnb-img"
              src="./images/project-img/abnb1.png"
              alt=""
            />
          </div>
        </div>
        <div>
          {" "}
          <img
            style={{ width: "50%", zIndex: "5" }}
            className="airbnb-img"
            src="./images/project-img/abnb1.png"
            alt=""
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: " 1fr 1fr",
          }}
        >
          <div>
            {" "}
            <img
              style={{ width: "50%", zIndex: "5" }}
              className="airbnb-img"
              src="./images/project-img/abnb1.png"
              alt=""
            />
          </div>
          <div style={{ color: "white" }}>
            <h1>some text here</h1>
          </div>

          <div style={{ color: "white" }}>
            <h1>some text here</h1>
          </div>
          <div>
            {" "}
            <img
              style={{ width: "50%", zIndex: "5" }}
              className="airbnb-img"
              src="./images/project-img/abnb1.png"
              alt=""
            />
          </div>
        </div>
        <div
          className="return-projects"
          onClick={(e) => this.props.toggleShowProjects(e)}
        >
          <h1>Back to Projects</h1>
        </div>
      </>
    );
  }
}

export default AirBnB;
