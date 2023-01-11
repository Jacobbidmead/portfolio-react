import React from "react";
import { motion } from "framer-motion";

const scaleImg = {
  offscreen: { scale: 1 },
  onscreen: {
    scale: 1.08,
    transition: {
      type: "tween",
      bounce: 0.6,
      duration: 1,
    },
  },
};

const textAnimate = {
  offscreen: { y: 100 },
  onscreen: {
    y: 0,
    transition: {
      type: "tween",
      bounce: 0.5,
      duration: 1,
    },
  },
};

const boxAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      bounce: 0.5,
      duration: 1,
    },
  },
};

class AirBnB extends React.Component {
  state = {
    bgColor: "black",
  };

  listenScrollEvent = (e) => {
    const backgroundBreakpoints = [0, 900, 1000];
    const colorsList = ["black", "#43BCCD"];

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
            paddingBottom: "1px",
          }}
        >
          <div className="header">
            <h1 style={{ margin: "0" }}>AirBnB Clone.</h1>
          </div>
          <motion.div>
            <div
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
              <div className="project-name">
                <h1>AirBnB style site</h1>
                <h5>October 2022</h5>
              </div>

              <div className="project-description">
                <span>Fully working fullstack MVC AirBnB style web app,</span>{" "}
                this personal project was part of Tortuga Coders coding
                bootcamp. Users are able to create a profile and upload house
                data, which is populated onto the main app page.{" "}
                <p>
                  Users, while logged in, can also edit house data and leave
                  comments. User data is stored in MongoDB and accessed with
                  Express.js.
                </p>
                <p>
                  <span>
                    Technologies used - JavaScript, HTML, CSS, Bootstrap,
                    Express.js, Node.js, MongoDB.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "100px",
            }}
          >
            {" "}
            <motion.img
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={scaleImg}
              viewport={{ once: true, amount: 0.1 }}
              src="./images/project-img/abnb4.jpeg"
              alt=""
              className="airbnb"
              on
            />
          </div>
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
            }}
            className="text-container"
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxAnimate}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                color: "black",
                width: "70%",
                height: "55%",
              }}
              className="text-box"
            >
              Once a house is selected, user is taken to the{" "}
              <span>'house'</span> page, where they can interact with the{" "}
              <span>house gallery.</span>
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.1 }}
            >
              {" "}
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
            </motion.div>

            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                width: "70%",
                height: "55%",
                marginTop: "50px",
              }}
              className="text-box"
            >
              Users are able to <span>'Request booking'</span> and leave reviews
              after booking is complete.
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.1 }}
              style={{ marginTop: "50px" }}
            >
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
            </motion.div>
          </motion.div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            <motion.img
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={scaleImg}
              viewport={{ once: true, amount: 0.1 }}
              className="airbnb"
              src="./images/project-img/abnb3.png"
              alt=""
            />
          </div>
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: " 1fr 1fr",
            }}
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxAnimate}
            viewport={{ once: true, amount: 0.3 }}
            className="text-container"
          >
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.1 }}
            >
              {" "}
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
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                width: "70%",

                height: "52%",
              }}
              className="text-box"
            >
              Users can log in and access thier <span>Profile'</span>' page,
              where they can
              <span>
                {" "}
                update their data, create a house to be listed and edit a
                currently listed house.
              </span>
            </motion.div>

            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.1 }}
            >
              {" "}
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
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                width: "70%",

                height: "51%",
              }}
              className="text-box"
            >
              List a house form that{" "}
              <span>creates a house in the database </span>and populates data
              into <span>'houses' and 'profile' pages.</span>
            </motion.div>
          </motion.div>
        </div>
      </>
    );
  }
}

export default AirBnB;
