import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeOut,
  MoveIn,
  MoveOut,
} from "react-scroll-motion";
import "../styles/About.css";

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
          <div
            style={{
              marginLeft: "30px",
              marginTop: "20px",
              fontSize: "70px",
              textAlign: "left",
              width: "50%",
              color: "rgba(247, 243, 234, 0.5)",
            }}
          >
            <span>
              Hi. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm a Front End Developer
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with an interest
              in Web/UI Design and
              &nbsp;Photography,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; based in
              &nbsp;&nbsp;South London.
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              fontSize: "50px",
              textAlign: "right",
              width: "50%",
              padding: "40px",
              marginLeft: "40%",
            }}
          >
            <span className="about-paragraph">
              Im looking for a junior position as &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b> a Front End/Full Stack Web Developer</b>,
              &nbsp;&nbsp;&nbsp;&nbsp;Im currenlty
              &nbsp;&nbsp;&nbsp;&nbsp;working on a number of personal and
              freelance projects,
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;these can be
              viewed in the projects section of this site and on my&nbsp;
              <b>GitHub</b> repository.{" "}
            </span>
          </div>

          <div
            style={{
              fontSize: "30px",
              color: "black",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div className="about-text">
              After three months of self study, I completed{" "}
              <b>Tortuga Coders 11 week fullstack coding bootcamp</b>{" "}
              &nbsp;&nbsp;&nbsp;in Koh Phangan - Thailand.
              &nbsp;&nbsp;&nbsp;&nbsp;Graduating in mid-October 2022.
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div>
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
              </div>
            </div>

            <div
              style={{
                textAlign: "right",
                color: "white",
              }}
              className="about-text"
            >
              <span className="about-paragraph right">
                <b>
                  I build my projects using React &
                  &nbsp;&nbsp;&nbsp;&nbsp;Node.js
                </b>
                ; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Im constantly
                &nbsp;&nbsp;practicing, watching and reading; &nbsp; to advance
                my skills with the&nbsp;
                <b>
                  React, Vanilla JavaScript, advanced CSS and Next.js.
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Althought
                  these are my primary langauges, I am open to learning any tech
                  stack required.
                </b>
              </span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div
              className="about-text"
              style={{ fontSize: "40px", color: "black" }}
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
            </div>
            <div
              className="about-text"
              style={{
                fontSize: "40px",
                color: "black",
                textAlign: "right",
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
            </div>
          </div>

          <div
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
          </div>

          <div
            style={{
              fontSize: "40px",
              textAlign: "center",
              margin: "250px 10px 0px 10px",
              color: "black",
            }}
          >
            <i className="fa-solid fa-envelope"></i>
            jacob.bidmead.fullstack@outlook.com
          </div>
          <div>
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
          </div>
        </div>
      </>
    );
  }
}

export default About;
