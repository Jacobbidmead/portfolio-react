import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const textAnimate = {
  offscreen: { y: 500, opacity: 0 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      bounce: 0.5,
      duration: 1,
    },
  },
};

const textAnimate2 = {
  offscreen: { y: 300, opacity: 0 },
  onscreen: {
    opacity: 1,
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

class About extends React.Component {
  state = {
    bgColor: "black",
    showContact: "true",
  };

  toggleShowContact = (e) => {
    console.log("work");
    this.setState({
      showContact: false,
    });
  };

  listenScrollEvent = (e) => {
    const backgroundBreakpoints = [0, 1000, 2000, 2700, 3700, 4800, 5500, 7000];
    const colorsList = [
      "black",
      "#FF10F0",
      "#23C4FF",
      "#35FF69",
      "#FE5F55",
      "#10FFCB",
      "white",
    ];

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
            paddingBottom: "350px",
          }}
          className="about-bg"
        >
          <motion.div
            initial={{ y: "600", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: "tween", duration: 0.8 },
            }}
            className="about-intro"
          >
            <span>
              Hi.&nbsp;&nbsp;I'm a Junior Full Stack Developer
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with an interest
              in Web Design, UI Design and Photography, based in South London.
            </span>
          </motion.div>

          <motion.div
            className="about-article"
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              type: "tween",
              stiffness: 400,
              damping: 10,
            }}
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxAnimate}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.01 }}
            >
              After three months of self study, I took part in & completed{" "}
              <b>Tortuga Coders 11 week fullstack coding bootcamp, </b>{" "}
              &nbsp;&nbsp;&nbsp;in Koh Phangan - Thailand.
              &nbsp;&nbsp;&nbsp;&nbsp;Graduating in mid-October 2022.
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <motion.div>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "20px",
                  }}
                  href="https://tortugacoders.com/certificates/08/jacob-bidmead"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b className="tortuga-certificate">Click me.</b>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              style={{
                textAlign: "right",
                width: "auto",
                marginTop: "33%",
              }}
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate2}
              viewport={{ once: true, amount: 0.01 }}
            >
              <span>
                <b>
                  I build my projects using React &
                  &nbsp;&nbsp;&nbsp;&nbsp;Node.js
                </b>
                ; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Im constantly
                &nbsp;&nbsp;practicing, watching and reading; &nbsp; to advance
                my skills with{" "}
                <b>
                  modern React & JavaScript, advanced CSS and Next.js.
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Althought
                  these are my primary langauges, I am open to learning any tech
                  stack required.
                </b>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-article"
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              type: "tween",
              stiffness: 400,
              damping: 10,
            }}
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxAnimate}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.01 }}
            >
              <b>I have a creative background;</b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p>
                Graduating from <b>Wimbledon College of Art </b>
                in 2013,
              </p>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;studying{" "}
              <b>BA:Hons - Print & Time Based Media.</b>
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate2}
              viewport={{ once: true, amount: 0.01 }}
              style={{
                color: "black",
                textAlign: "right",
                marginTop: "33%",
              }}
            >
              <span>
                <b>&nbsp;A passionate photographer,</b>
                &nbsp; Ive documentend my travels in{" "}
                <p>
                  <b>
                    South America, the USA, Asia, Europe&nbsp;&nbsp; &
                    &nbsp;&nbsp;Australia
                  </b>{" "}
                  over the last 8 years.
                </p>
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={textAnimate2}
            viewport={{ once: true, amount: 0.05 }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              type: "tween",
              stiffness: 400,
              damping: 10,
            }}
            className="about-article"
          >
            <motion.div
              style={{
                textAlign: "right",
                width: "auto",
              }}
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate2}
              viewport={{ once: true, amount: 0.01 }}
            >
              <span>
                Im currently working on a number of personal and freelance
                projects.{" "}
              </span>
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate2}
              viewport={{ once: true, amount: 0.01 }}
              style={{ textAlign: "right", marginTop: "33%" }}
            >
              These can be viewed in the projects section of this site and on my{" "}
              <b>GitHub</b> repository.{" "}
            </motion.div>
          </motion.div>
          <motion.div
            className="about-article"
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              type: "tween",
              stiffness: 400,
              damping: 10,
            }}
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxAnimate}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.01 }}
              style={{ textAlign: "right" }}
            >
              <b>Im extremly motivated to learn and progress;</b>{" "}
              &nbsp;&nbsp;and am always looking for new opportunities.
              &nbsp;&nbsp;
            </motion.div>

            <motion.div
              style={{
                textAlign: "right",
                width: "auto",
                marginTop: "33%",
              }}
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate2}
              viewport={{ once: true, amount: 0.01 }}
            >
              <span>
                <b>Im looking for my next step</b> &nbsp;&nbsp;&nbsp;&nbsp;im
                availble for work - permanent or
                freelance,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; click the link
                below for my contact info.{" "}
              </span>
            </motion.div>
          </motion.div>
          {this.state.showContact ? (
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={boxAnimate}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                scale: 1.4,
              }}
              transition={{
                type: "tween",
                stiffness: 400,
                damping: 10,
              }}
              className="contacts-link"
            >
              <div onClick={(e) => this.toggleShowContact(e)}>
                Get in touch.
              </div>
            </motion.div>
          ) : (
            <div>
              <motion.div
                style={{
                  textAlign: "center",
                  margin: "400px 10px 0px 10px",
                  color: "black",
                  cursor: "pointer",
                }}
                whileHover={{
                  scale: 1.3,
                }}
                transition={{
                  type: "tween",
                  stiffness: 400,
                  damping: 10,
                }}
                className="email"
              >
                <i className="fa-solid fa-envelope"></i>
                jacob.bidmead.fullstack@outlook.com
              </motion.div>

              <motion.div
                className="gitlink"
                style={{ marginBottom: "250px" }}
                whileHover={{
                  scale: 1.3,
                }}
                transition={{
                  type: "tween",
                  stiffness: 400,
                  damping: 10,
                }}
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={boxAnimate}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="gitlink">
                  <a
                    href="https://github.com/Jacobbidmead"
                    className="gitlink"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                    github.com/Jacobbidmead
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default About;
