import React from "react";
import Tilt from "react-parallax-tilt";

class MagiKards extends React.Component {
  render() {
    return (
      <>
        <div className="header" style={{ marginBottom: "170px" }}>
          <h1 style={{ margin: "0" }}>MagiKards</h1>
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
            <h1>MagiKards battle style card game</h1>
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
            src="./images/project-img/MK1.png"
            alt=""
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: " 1fr 1fr",
            margin: "200px 70px 0px 70px",
          }}
        >
          <div>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
              <img
                style={{ width: "100%", borderRadius: "5px" }}
                className="airbnb-img"
                src="./images/project-img/MK3.png"
                alt=""
              />
            </Tilt>
          </div>
          <div
            style={{ color: "white", marginLeft: "40px", textAlign: "right" }}
          >
            <h1>some text here</h1>
          </div>

          <div style={{ color: "white", marginTop: "70px" }}>
            <h1>some text here</h1>
          </div>
          <div style={{ marginTop: "100px" }}>
            {" "}
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
              <img
                style={{ width: "100%", borderRadius: "5px" }}
                className="airbnb-img"
                src="./images/project-img/MK2.png"
                alt=""
              />
            </Tilt>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <img
            style={{ width: "80%", borderRadius: "5px", marginBottom: "40px" }}
            className="airbnb-img"
            src="./images/project-img/MK4.png"
            alt=""
          />
        </div>
      </>
    );
  }
}

export default MagiKards;
