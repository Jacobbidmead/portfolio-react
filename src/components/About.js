import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
} from "react-scroll-motion";
import "../styles/About.css";

class About extends React.Component {
  state = {
    bgColor: "black",
  };

  listenScrollEvent = (e) => {
    const backgroundBreakpoints = [
      0, 500, 1500, 2400, 3500, 4500, 5500, 6070, 7000,
    ];
    const colorsList = [
      "black",
      "#23C4FF",
      "#FF10F0",
      "#FFFD77",
      "#FE5F55",
      "#D1DEDE",
      "#5DA399",
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
          <ScrollContainer>
            <ScrollPage>
              <Animator animation={batch(MoveOut(0, 100), FadeOut(1, 0))}>
                <div
                  style={{
                    marginLeft: "30px",
                    marginTop: "20px",
                    fontSize: "70px",
                    color: "black",
                    textAlign: "left",
                    width: "50%",
                    color: "#f7f3ea",
                  }}
                >
                  <span>
                    Hi. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm a Full Stack Web
                    Developer
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with
                    an interest in Web/UI &nbsp;&nbsp;&nbsp;Design and
                    &nbsp;Photography&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; based
                    in &nbsp;&nbsp;South London.
                  </span>
                </div>
              </Animator>
            </ScrollPage>

            <ScrollPage>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                  fontSize: "20px",
                  textAlign: "right",

                  width: "50%",

                  padding: "40px",
                }}
              >
                <span className="about-paragraph">
                  <Animator animation={batch(MoveIn(0, 1000, 0, 1100), Fade())}>
                    Im looking for a junior &nbsp;&nbsp;position
                    as&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>a Full Stack or Front End Web Developer</b>,
                    &nbsp;&nbsp;&nbsp;&nbsp;Im currenlty
                    &nbsp;&nbsp;&nbsp;&nbsp;working on a number of personal and
                    freelance projects &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;these can
                    be viewed in the projects section of this
                    site&nbsp;&nbsp;&nbsp; and on my&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>GitHub</b> repository.{" "}
                  </Animator>
                </span>
              </div>
            </ScrollPage>
            <ScrollPage>
              <div
                style={{
                  textAlign: "left",
                  margin: "100px 30px 1000px 30px",
                  padding: "80px 30px",
                  color: "white",
                }}
              >
                <span className="about-paragraph right">
                  <Animator animation={MoveIn(0, 1000, 0, 300)}>
                    <b>
                      I build my projects using React
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&
                      &nbsp;&nbsp;&nbsp;&nbsp;Node.js
                    </b>
                    ; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Im constantly
                    &nbsp;&nbsp;practicing, watching &nbsp;&nbsp;&nbsp;&nbsp;and
                    reading to advance my skills with the&nbsp;&nbsp;&nbsp;
                    <b>
                      React library, &nbsp;&nbsp;&nbsp;Vanilla JavaScript &
                      &nbsp;&nbsp;&nbsp;&nbsp;advanced CSS
                    </b>
                  </Animator>
                </span>
              </div>
            </ScrollPage>

            <ScrollPage>
              <div
                style={{
                  textAlign: "left",
                  margin: "100px 50px 0px 40px",
                  fontSize: "70px",
                }}
              >
                <span>
                  <Animator
                    animation={batch(MoveIn(0, 1000, 0, 1100), FadeOut(1, 0))}
                  >
                    I completed Tortuga Coders 11 week
                    &nbsp;&nbsp;&nbsp;&nbsp;fullstack coding bootcamp
                    &nbsp;&nbsp;&nbsp;in Koh Phangan - Thailand
                    &nbsp;&nbsp;&nbsp;&nbsp;in mid October 2022
                  </Animator>
                </span>
              </div>
            </ScrollPage>
            <ScrollPage>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "50px",
                  color: "black",
                  fontSize: "80px",
                }}
              >
                <Animator
                  animation={batch(
                    MoveIn(0, 1000, 0, 1100),

                    FadeOut(1, 0)
                  )}
                >
                  <a
                    style={{ textDecoration: "none", color: " black" }}
                    href="https://tortugacoders.com/certificates/08/jacob-bidmead"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click me.
                  </a>
                </Animator>
              </div>
            </ScrollPage>

            <ScrollPage>
              <div style={{ textAlign: "center", margin: "0px 80px 0px 30px" }}>
                <span className="about-paragraph ">
                  <Animator animation={Move(0, 1000, 0, 1100)}>
                    <b>&nbsp;A passionate photographer,</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ive documentend my
                    travels in&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    <b>
                      South America, &nbsp;&nbsp;&nbsp;&nbsp;the USA, Asia,
                      Europe&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; & Australia
                    </b>{" "}
                    over the last &nbsp;&nbsp;&nbsp;&nbsp;8 years.
                  </Animator>
                </span>
              </div>
            </ScrollPage>

            <ScrollPage>
              <div
                style={{
                  textAlign: "left",
                  padding: "80px 50px 80px 50px",
                  color: "white",
                }}
              >
                <span className="about-paragraph last-right">
                  <Animator animation={MoveIn(0, 1000, 0, 1100)}>
                    I have a creative background;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;graduating
                    from &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>Wimbledon College of Art </b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in 2013,
                    studying{" "}
                    <b>&nbsp;&nbsp;&nbsp;&nbsp;Print & Time Based Media.</b>
                  </Animator>
                </span>
              </div>
            </ScrollPage>

            <ScrollPage>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "30px",

                  padding: "350px 30px 0px 30px",
                  textAlignLast: "center",
                  marginLeft: "auto",
                  marginRight: "auto",

                  color: "white",
                }}
              >
                <span className="about-paragraph last-right">
                  <Animator animation={MoveIn(0, 1000, 0, 1100)}>
                    Check out my site
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and
                    get in touch.
                  </Animator>
                </span>
              </div>
            </ScrollPage>

            <ScrollPage>
              <div
                style={{
                  fontSize: "60px",
                  textAlign: "center",
                  margin: "250px 10px 0px 10px",
                  color: "white",
                }}
              >
                <Animator animation={MoveIn(0, 1000, 0, 1100)}>
                  <i className="fa-solid fa-envelope"></i>
                  jacob.bidmead.fullstack@outlook.com
                </Animator>
              </div>
              <div>
                <Animator animation={MoveIn(0, 1000, 0, 1100)}>
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
                </Animator>
              </div>
            </ScrollPage>
          </ScrollContainer>
        </div>
      </>
    );
  }
}

export default About;
