import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const textAnimate = {
  offscreen: { y: 50 },
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
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

class Bookmarker extends React.Component {
  state = {
    bgColor: "black",
  };
  listenScrollEvent = (e) => {
    const backgroundBreakpoints = [0, 900, 3000];

    const colorsList = ["black", "#ffdead"];

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
          className="google-bg"
          style={{
            backgroundColor: this.state.bgColor,
            transition: "background-color 0.5s ease",
            paddingBottom: "1px",
          }}
        >
          <div className="header">
            <h1> Bookmark Manager</h1>
          </div>
          <motion.div>
            <Link to="/Projects" className="return-projects">
              <h4 className="back-to-projects">Back to Projects</h4>
            </Link>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <div className="project-name">
                <h1>Bookmark Manager App</h1>
                <h5>February 2023</h5>
              </div>

              <div className="project-description">
                <span> Bookmark manager app</span> is front end application that
                allows the user to save, edit & delete bookmarks from a list.
                <p>
                  Users can add a maximum of 20 links (urls) with custom names
                  to the list per page. Pagniation at the bottom of the screen
                  allows for easy navigation to next pages.
                </p>
                <a
                  href="https://loquacious-sable-4df720.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#74ebd5", textDecoration: "none" }}
                >
                  Click here for the hosted page.
                </a>
                <p>
                  <span>
                    Technologies used - TypeScript, React, HTML, Styled
                    Components, MUI pagniation.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={boxAnimate}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
              className="text-container google-container"
            >
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={textAnimate}
                viewport={{ once: true, amount: 0.1 }}
                style={{ marginBottom: "50px" }}
              >
                <img
                  src="./images/project-img/bookmarker.png"
                  className="google-searchpage"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={textAnimate}
                viewport={{ once: true, amount: 0.1 }}
                className="bookmark-text"
              >
                <span>
                  Users add a link & name thier bookmark, the saved bookmarks
                  persist with page reload. Users can also clear all links at
                  bottom of the page.
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </>
    );
  }
}

export default Bookmarker;
