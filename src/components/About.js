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
  Sticky,
  StickyIn,
  StickyOut,
} from "react-scroll-motion";
import "../styles/About.css";

class About extends React.Component {
  state = {
    bgColor: "color",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY < 500) {
      this.setState({ bgColor: "#f7f3ea" });
    } else if (window.scrollY > 500 && window.scrollY < 1500) {
      this.setState({ bgColor: "#23C4FF" });
    } else if (window.scrollY > 1500 && window.scrollY < 2400) {
      this.setState({ bgColor: "#FF10F0" });
    } else if (window.scrollY > 2400 && window.scrollY < 3500) {
      this.setState({ bgColor: "#FFFD77" });
    } else if (window.scrollY > 3500 && window.scrollY < 4500) {
      this.setState({ bgColor: "#FE5F55" });
    } else if (window.scrollY > 4500 && window.scrollY < 5500) {
      this.setState({ bgColor: "#D1DEDE" });
    } else if (window.scrollY > 5500 && window.scrollY < 6500) {
      this.setState({ bgColor: "#5DA399" });
    } else {
      this.setState({ bgColor: "#f7f3ea" });
    }
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
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "50px",
                  textAlign: "left",
                  margin: "30px",

                  padding: "40px",
                }}
              >
                <span className="about-paragraph">
                  <Animator animation={batch(MoveIn(0, 1000, 0, 1100), Fade())}>
                    Im currently looking &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for a
                    junior &nbsp;&nbsp;position as&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                  textAlign: "right",
                  margin: "100px 50px 0px 40px",
                  fontSize: "70px",
                }}
              >
                <span>
                  <Animator
                    animation={batch(MoveIn(0, 1000, 0, 1100), FadeOut(1, 0))}
                  >
                    I completed &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tortuga
                    Coders 11 week fullstack coding bootcamp
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
                  backgroundColor: "black",
                  color: "black",
                  fontSize: "80px",
                }}
              >
                <Animator
                  animation={batch(
                    MoveIn(0, 1000, 0, 1100),
                    StickyOut(),
                    FadeOut(1, 0)
                  )}
                >
                  My Stack
                </Animator>
              </div>
            </ScrollPage>
            <ScrollPage>
              <Animator animation={MoveIn(2000, 0, 0, 0)}>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "50px",
                    marginTop: "100px",
                    padding: "30px",
                  }}
                >
                  React
                </div>
              </Animator>
              <Animator animation={MoveIn(3000, 0, 0, 0)}>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "50px",
                    padding: "30px",
                  }}
                >
                  JavaScript
                </div>
              </Animator>
              <Animator animation={MoveIn(-3000, 0, 0, 1100)}>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "50px",
                    marginBottom: "40px",
                  }}
                >
                  Advanced HTML & CSS
                </div>
              </Animator>
              <Animator animation={MoveIn(1000, 0, 0, 1100)}>
                <div style={{ textAlign: "center", fontSize: "50px" }}>
                  MongoDB
                </div>
              </Animator>
              <Animator animation={MoveIn(3000, 0, 0, 1100)}>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "50px",
                    padding: "30px",
                  }}
                >
                  Node.js
                </div>
              </Animator>
            </ScrollPage>
            <ScrollPage>
              <Animator animation={MoveIn(-2000, 0, 0, 1100)}>
                <div style={{ textAlign: "center", fontSize: "50px" }}>
                  As well as other languages, frameworks and libarys.{" "}
                </div>
              </Animator>
            </ScrollPage>

            <ScrollPage>
              <div style={{ textAlign: "center", margin: "0px 80px 0px 30px" }}>
                <span className="about-paragraph ">
                  <Animator animation={Move(0, 1000, 0, 1100)}>
                    <b>A passionate photographer,</b> Ive documentend my travels
                    in <b>South America, the USA, Asia, Europe & Australia</b>{" "}
                    over the last 8 years.
                  </Animator>
                </span>
              </div>
            </ScrollPage>

            <ScrollPage>
              <div
                style={{
                  textAlign: "left",
                  backgroundColor: "black",
                  color: "white",
                  height: "500px",
                  padding: "170px 30px 0px 30px",
                  textAlignLast: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <span className="about-paragraph last-right">
                  <Animator animation={MoveIn(0, 1000, 0, 1100)}>
                    I have a creative background; graduating from{" "}
                    <b>Wimbledon College of Art </b>in 2013, studying{" "}
                    <b>Print & Time Based Media.</b>
                  </Animator>
                </span>
              </div>
            </ScrollPage>

            <ScrollPage>
              <div
                style={{
                  fontSize: "80px",
                  backgroundColor: "deeppink",
                  color: "#D1DEDE",
                  width: "50%",
                  textAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <h1>
                  <Animator animation={MoveIn(0, 3000, 0, 5000)}>
                    Contact me.
                  </Animator>
                </h1>
              </div>
            </ScrollPage>
            <ScrollPage>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "30px",
                  height: "500px",
                  padding: "170px 30px 0px 30px",
                  textAlignLast: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <span className="about-paragraph last-right">
                  <Animator animation={MoveIn(0, 1000, 0, 1100)}>
                    Check out my site, get in touch.
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
