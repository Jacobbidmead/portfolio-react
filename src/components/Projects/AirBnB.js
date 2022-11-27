import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

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
                Technologies used - JavaScript, HTML, CSS, Bootstrap,
                Express.js, Node.js, MongoDB.
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
              src="./images/project-img/abnb4.png"
              alt=""
              className="airbnb"
              on
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
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                <img
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    cursor: "pointer",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                  className="airbnb-img"
                  src="./images/project-img/abnb1.png"
                  alt=""
                />
              </Tilt>
            </div>
            <div
              style={{
                color: "white",
                marginLeft: "40%",
                textAlign: "right",
                marginBottom: "80px",
                width: "50%",
                fontSize: "25px",
              }}
            >
              Once a house is selected user is taken to the 'house' page, where
              they can interact with the house gallery.
              <p></p>
            </div>

            <div
              style={{
                color: "white",
                marginTop: "40px",
                width: "50%",
                fontSize: "25px",
              }}
            >
              Users are able to 'Request booking' and leave reviews after
              booking is complete.
            </div>
            <div style={{ marginTop: "50px" }}>
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                <img
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    cursor: "pointer",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                  className="airbnb-img"
                  src="./images/project-img/abnb2.png"
                  alt=""
                />
              </Tilt>
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
              style={{
                width: "90%",
                borderRadius: "5px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
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
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                <img
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    marginBottom: "80px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    cursor: "pointer",
                  }}
                  className="airbnb-img"
                  src="./images/project-img/abnb6.png"
                  alt=""
                />{" "}
              </Tilt>
            </div>
            <div
              style={{
                color: "white",
                textAlign: "right",
                width: "50%",
                marginLeft: "40%",
                fontSize: "25px",
              }}
            >
              Users can log in and access thier 'Profile' page, where they can
              update their data, create a house to be listed and edit a
              currently listed house.
            </div>

            <div style={{ color: "white", width: "50%", fontSize: "30px" }}>
              List a house form that creates house in the database and populates
              data into 'houses' and 'profile' pages.
            </div>
            <div style={{ marginTop: "50px" }}>
              {" "}
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                <img
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    cursor: "pointer",
                  }}
                  className="airbnb-img"
                  src="./images/project-img/abnb7.png"
                  alt=""
                />
              </Tilt>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AirBnB;
