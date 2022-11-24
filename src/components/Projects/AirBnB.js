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
            margin: "200px 70px 100px 70px",
          }}
        >
          <div>
            {" "}
            <img
              style={{ width: "100%", borderRadius: "5px" }}
              className="airbnb-img"
              src="./images/project-img/abnb1.png"
              alt=""
            />
          </div>
          <div
            style={{ color: "white", marginLeft: "40px", textAlign: "right" }}
          >
            <h1>some text here</h1>
          </div>

          <div style={{ color: "white" }}>
            <h1>some text here</h1>
          </div>
          <div style={{ marginTop: "50px" }}>
            {" "}
            <img
              style={{ width: "100%", borderRadius: "5px" }}
              className="airbnb-img"
              src="./images/project-img/abnb2.png"
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "200px",
          }}
        >
          {" "}
          <img
            style={{ width: "90%", borderRadius: "5px" }}
            className="airbnb-img"
            src="./images/project-img/abnb3.png"
            alt=""
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: " 1fr 1fr",
            margin: "200px 70px 100px 70px",
          }}
        >
          <div>
            {" "}
            <img
              style={{
                width: "100%",
                borderRadius: "5px",
                marginBottom: "80px",
              }}
              className="airbnb-img"
              src="./images/project-img/abnb6.png"
              alt=""
            />
          </div>
          <div
            style={{ color: "white", marginLeft: "40px", textAlign: "right" }}
          >
            <h1>some text here</h1>
          </div>

          <div style={{ color: "white" }}>
            <h1>some text here</h1>
          </div>
          <div style={{ marginTop: "50px" }}>
            {" "}
            <img
              style={{ width: "100%", borderRadius: "5px" }}
              className="airbnb-img"
              src="./images/project-img/abnb7.png"
              alt=""
            />
          </div>
        </div>
        <div
          style={{ margin: "100px 0px 0px 100px", paddingBottom: "80px" }}
          className="return-projects"
          onClick={(e) => this.props.toggleShowProjects(e)}
        >
          <h3>Back to Projects</h3>
        </div>
      </>
    );
  }
}

export default AirBnB;
