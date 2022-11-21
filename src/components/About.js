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
    } else if (window.scrollY > 500 && window.scrollY < 1000) {
      this.setState({ bgColor: "deeppink" });
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
              <Animator
                animation={batch(
                  Sticky(35, 50),
                  MoveOut(0, 100),
                  FadeOut(1, 0)
                )}
              >
                <div
                  style={{
                    marginTop: "120px",
                    fontSize: "70px",
                  }}
                >
                  <span>
                    Hi. I'm a Full Stack Web Developer with an interest in
                    Web/UI Design and Photography, originally from Suffolk and
                    now based in London.
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

                  textAlign: "left",
                  margin: "30px",
                }}
              >
                <span className="about-paragraph">
                  <Animator animation={batch(MoveIn(0, 1000, 0, 1100), Fade())}>
                    Im currently looking for a junior position as{" "}
                    <b style={{ backgroundColor: "black" }}>
                      Full Stack or Front End Web Developer
                    </b>
                    , whilst working on a number of personal and freelance
                    projects that can be viewed in the projects section of this
                    site and on my{" "}
                    <b style={{ backgroundColor: "black" }}>GitHub</b>{" "}
                    repository.{" "}
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
                }}
              >
                <span className="about-paragraph right">
                  <Animator animation={MoveIn(0, 1000, 0, 300)}>
                    <b>I build my projects using React & Node.js</b>; Im
                    constantly practicing, watching and reading to advance
                    skills with the{" "}
                    <b>React library, Vanilla JavaScript & advanced CSS</b>{" "}
                  </Animator>
                </span>
              </div>
            </ScrollPage>

            <ScrollPage>
              <div
                style={{
                  textAlign: "left",
                  margin: "100px 30px 0px 30px",
                  fontSize: "80px",
                }}
              >
                <span>
                  <Animator animation={MoveIn(0, 1000, 0, 1100)}>
                    I completed Tortuga Coders 11 week fullstack coding bootcamp
                    in Koh Phangan - Thailand in mid October 2022, during the
                    course I gained extensive experience of{" "}
                    <b>JavaScript, HTML, CSS, Node.js & React</b>, amoung other
                    languages, frameworks and libarys.{" "}
                  </Animator>
                </span>
              </div>
            </ScrollPage>

            <ScrollPage>
              <div style={{ textAlign: "right", margin: "0px 80px 0px 30px" }}>
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
                  margin: "0px 80px 0px 30px",
                  backgroundColor: "deeppink",
                  color: "white",
                  height: "500px",
                  padding: "80px 20px 0px 20px",
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

            <div className="links">
              <ScrollPage>
                <Animator animation={batch(Move(0, 1000), StickyOut(10, 10))}>
                  <h1>Contact me.</h1>
                </Animator>
              </ScrollPage>
              <ScrollPage>
                <div className="name-reveal">
                  [<i className="fa-solid fa-envelope"></i>
                  <span className="email revealed-text">
                    <Animator animation={Move(0, 1000)}>
                      jacob.bidmead.fullstack@outlook.com
                    </Animator>
                  </span>{" "}
                  ]
                </div>

                <a
                  href="https://github.com/Jacobbidmead"
                  className="gitlink name-reveal"
                  target="_blank"
                  rel="noreferrer"
                >
                  [<i className="fa-brands fa-github"></i>
                  <span className="revealed-text">
                    <Animator>github.com/Jacobbidmead</Animator>
                  </span>
                  ]
                </a>
              </ScrollPage>
            </div>
          </ScrollContainer>
        </div>
      </>
    );
  }
}

export default About;
