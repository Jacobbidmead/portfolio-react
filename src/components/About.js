import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const textAnimate = {
  offscreen: { y: 600 },
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
  offscreen: { y: 200 },
  onscreen: {
    y: 0,
    transition: { type: "tween", duraion: 0.5 },
  },
};

class About extends React.Component {
  state = {
    bgColor: "black",
  };

  listenScrollEvent = (e) => {
    const backgroundBreakpoints = [0, 500, 1500, 2000, 2700, 3800, 5500, 7000];
    const colorsList = [
      "black",
      "#23C4FF",
      "#FF10F0",
      "#35FF69",
      "#FE5F55",
      "#10FFCB",
      "black",
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
          }}
        >
          <motion.div
            initial={{ y: "600", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: "tween", duration: 0.8 },
            }}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "15%",
              fontSize: "70px",
              textAlign: "center",
              width: "80%",
              color: "rgba(247, 243, 234, 0.5)",
            }}
          >
            <span>
              Hi. I'm Jake.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm a Front End
              Developer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with an
              interest in Web/UI Design and
              &nbsp;Photography,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; based in
              &nbsp;&nbsp;South London.
            </span>
          </motion.div>

          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={textAnimate}
            viewport={{ once: true, amount: 0.05 }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            style={{
              fontSize: "50px",
              textAlign: "center",
              width: "auto",
              padding: "200px",
              marginTop: "23%",
              backgroundColor: "rgba(247, 243, 234, 0.3)",
              border: "1px solid white",
            }}
          >
            <span className="about-paragraph">
              &nbsp;&nbsp;&nbsp;&nbsp;Im currently working on a number of
              personal and freelance projects,
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;these can be
              viewed in the projects section of this site and on my&nbsp;
              <b>GitHub</b> repository.{" "}
            </span>
          </motion.div>

          <motion.div
            style={{
              fontSize: "30px",
              color: "black",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginTop: "23%",
              backgroundColor: "rgba(247, 243, 234, 0.4)",
              padding: "140px",
              width: "auto",
              border: "1px solid white",
            }}
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxAnimate}
            viewport={{ once: true, amount: 0.05 }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.01 }}
              className="about-text"
            >
              After three months of self study, I completed{" "}
              <b>Tortuga Coders 11 week fullstack coding bootcamp</b>{" "}
              &nbsp;&nbsp;&nbsp;in Koh Phangan - Thailand.
              &nbsp;&nbsp;&nbsp;&nbsp;Graduating in mid-October 2022.
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <motion.div>
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "20px",
                  }}
                  href="https://tortugacoders.com/certificates/08/jacob-bidmead"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Click me.</b>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              style={{
                textAlign: "right",
                color: "white",
                width: "auto",
              }}
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.01 }}
              className="about-text"
            >
              <span className="about-paragraph right">
                <b>
                  I build my projects using React &
                  &nbsp;&nbsp;&nbsp;&nbsp;Node.js
                </b>
                ; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Im constantly
                &nbsp;&nbsp;practicing, watching and reading; &nbsp; to advance
                my skills with&nbsp;
                <b>
                  React, Vanilla JavaScript, advanced CSS and Next.js.
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Althought
                  these are my primary langauges, I am open to learning any tech
                  stack required.
                </b>
              </span>
            </motion.div>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <motion.div
              className="about-text"
              style={{ fontSize: "40px", color: "black", marginTop: "33%" }}
            >
              <b>I have a creative background;</b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p>
                Graduating from
                <b>Wimbledon College of Art </b>
                in 2013,
              </p>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;studying{" "}
              <b>BA:Hons - Print & Time Based Media.</b>
            </motion.div>
            <motion.div
              className="about-text"
              style={{
                fontSize: "40px",
                color: "black",
                textAlign: "right",
                marginTop: "33%",
              }}
            >
              <span className="about-paragraph ">
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
          </div>

          <motion.div
            style={{
              textAlign: "left",
              fontSize: "100px",

              padding: "350px 30px 0px 30px",
              textAlignLast: "center",
              marginLeft: "auto",
              marginRight: "auto",

              color: "black",
            }}
          >
            <span className="about-paragraph last-right">Get in touch.</span>
          </motion.div>

          <motion.div
            style={{
              fontSize: "40px",
              textAlign: "center",
              margin: "250px 10px 0px 10px",
              color: "black",
            }}
          >
            <i className="fa-solid fa-envelope"></i>
            jacob.bidmead.fullstack@outlook.com
          </motion.div>
          <div>
            <motion.div className="gitlink">
              <a
                href="https://github.com/Jacobbidmead"
                className="gitlink"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
                github.com/Jacobbidmead
              </a>
            </motion.div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
