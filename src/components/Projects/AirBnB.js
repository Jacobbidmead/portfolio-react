import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const scaleImg = {
  offscreen: { scale: 1 },
  onscreen: {
    scale: 1.2,
    transition: {
      type: "tween",
      bounce: 0.6,
      duration: 1,
    },
  },
};

const moveLeft = {
  offscreen: { x: 200 },
  onscreen: {
    x: 0,
    transition: {
      type: "tween",
      bounce: 0.6,
      duration: 0.8,
    },
  },
};

const moveRight = {
  offscreen: { x: -200 },
  onscreen: {
    x: 0,
    transition: {
      type: "tween",
      bounce: 0.6,
      duration: 0.8,
    },
  },
};

class AirBnB extends React.Component {
  state = {
    bgColor: "black",
  };

  listenScrollEvent = (e) => {
    const backgroundBreakpoints = [0, 900, 1000];
    const colorsList = ["black", "#23C4FF"];

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
            <motion.img
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={scaleImg}
              viewport={{ once: true, amount: 0.1 }}
              src="./images/project-img/abnb4.png"
              alt=""
              className="airbnb "
              on
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              margin: "200px 70px 100px 70px",

              padding: "50px",
              borderRadius: "20px",
              border: "1px solid white",
            }}
          >
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={moveLeft}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                color: "white",
                width: "70%",
                fontSize: "25px",
                height: "55%",
              }}
              className="text-box"
            >
              Once a house is selected, user is taken to the 'house' page, where
              they can interact with the house gallery.
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={moveRight}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
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
                  className="projects-img"
                  src="./images/project-img/abnb1.png"
                  alt=""
                />
              </Tilt>
            </motion.div>

            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={moveRight}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                color: "white",
                width: "70%",
                fontSize: "25px",
                height: "55%",
                marginTop: "50px",
              }}
              className="text-box"
            >
              Users are able to 'Request booking' and leave reviews after
              booking is complete.
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={moveLeft}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              style={{ marginTop: "50px" }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                <img
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    cursor: "pointer",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                  className="projects-img"
                  src="./images/project-img/abnb2.png"
                  alt=""
                />
              </Tilt>
            </motion.div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "200px",
            }}
          >
            {" "}
            <motion.img
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={scaleImg}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                width: "82%",
                borderRadius: "5px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
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
              backgroundColor: "rgba(16, 255 ,203, 0.5)",
              padding: "50px",
              borderRadius: "20px",
              border: "1px solid white",
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={moveRight}
              viewport={{ once: true, amount: 0.1 }}
            >
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
                  className="projects-img"
                  src="./images/project-img/abnb6.png"
                  alt=""
                />{" "}
              </Tilt>
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={moveLeft}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                color: "white",
                width: "70%",
                fontSize: "26px",
                height: "52%",
              }}
              className="text-box"
            >
              Users can log in and access thier 'Profile' page, where they can
              update their data, create a house to be listed and edit a
              currently listed house.
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={moveLeft}
              viewport={{ once: true, amount: 0.1 }}
            >
              {" "}
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                <img
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                  className="projects-img"
                  src="./images/project-img/abnb7.png"
                  alt=""
                />
              </Tilt>
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={moveRight}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                color: "white",
                width: "70%",
                fontSize: "28px",
                height: "51%",
              }}
              className="text-box"
            >
              List a house form that creates a house in the database and
              populates data into 'houses' and 'profile' pages.
            </motion.div>
          </div>
        </div>
      </>
    );
  }
}

export default AirBnB;
