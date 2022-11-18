import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import "../styles/About.css";

class About extends React.Component {
  render() {
    return (
      <>
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator
              animation={batch(Sticky(35, 50), MoveOut(0, 100), FadeOut(1, 0))}
            >
              <div
                style={{
                  fontSize: "70px",
                  marginTop: "120px",
                }}
              >
                <span>
                  Hi. I'm a{" "}
                  <b>
                    Full Stack Web Developer with interest in Web/UI Design and
                    Photography,
                  </b>{" "}
                  originally from Suffolk and now based in London.
                </span>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage page={0}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                textAlign: "center",
                margin: "30px",
                backgroundColor: "deeppink",
              }}
            >
              <span className="about-paragraph">
                <Animator animation={MoveIn(0, 1000, 0, 1100)}>
                  Im currently looking for a junior position as{" "}
                  <b>Full Stack or Front End Web Developer</b>, whilst working
                  on a number of personal and freelance projects that can be
                  viewed in the projects section of this site and on my{" "}
                  <b>GitHub</b> repository.{" "}
                </Animator>
              </span>
            </div>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(StickyOut(35, 67), FadeOut(1, 0))}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  width: "100%",
                }}
              >
                <img
                  style={{ borderRadius: "20px" }}
                  className="selfie"
                  src="images/selfie.png"
                  alt=""
                />
                <span
                  style={{
                    marginLeft: "100px",
                    fontSize: "100px",
                    color: "deeppink",
                  }}
                >
                  This is me. On a Fjord in Norway.
                </span>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage page={1}>
            <div
              style={{
                textAlign: "center",
                margin: "200px 30px 0px 30px",
              }}
            >
              <span className="about-paragraph right">
                <Animator animation={batch(Move(200, 0), FadeOut(1, 0))}>
                  <b>I build my projects using React & Node.js</b>; Im
                  constantly practicing, watching and reading to advance skills
                  with the{" "}
                  <b>React library, Vanilla JavaScript & advanced CSS</b>{" "}
                </Animator>
              </span>
            </div>
          </ScrollPage>

          <ScrollPage>
            <div
              style={{
                textAlign: "center",
                margin: "0px 30px 0px 30px",
                backgroundColor: "deeppink",
              }}
            >
              <span className="about-paragraph right">
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
        </ScrollContainer>

        <span className="about-paragraph ">
          <b>A passionate photographer,</b> Ive documentend my travels in{" "}
          <b>South America, the USA, Asia, Europe & Australia</b> over the last
          8 years.
        </span>

        <span className="about-paragraph last-right">
          I have a creative background; graduating from{" "}
          <b>Wimbledon College of Art </b>in 2013, studying{" "}
          <b>Print & Time Based Media.</b>
        </span>

        <div className="links">
          <h1>Contact me.</h1>
          <div className="name-reveal">
            [<i className="fa-solid fa-envelope"></i>
            <span className="email revealed-text">
              jacob.bidmead.fullstack@outlook.com
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
            <span className="revealed-text">github.com/Jacobbidmead</span>]
          </a>
        </div>
      </>
    );
  }
}

export default About;
