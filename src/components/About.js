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

const FadeUp = batch(FadeIn(), Sticky(), Move());

class About extends React.Component {
  render() {
    return (
      <>
        <ScrollContainer>
          <ScrollPage page={0}>
            <div className="about-text-left">
              <Animator animation={batch(Move(900, 0), FadeOut(100, 0))}>
                <span className="about-paragraph">
                  Hi. I'm a{" "}
                  <b>
                    Full Stack Web Developer with interest in Web/UI Design and
                    Photography,
                  </b>{" "}
                  originally from Suffolk and now based in London.
                </span>
              </Animator>
            </div>
          </ScrollPage>

          <ScrollPage page={0}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <span className="about-paragraph">
                <Animator animation={MoveIn(1000, 0)}>
                  Im currently looking for a junior position as{" "}
                  <b>Full Stack or Front End Web Developer</b>, whilst working
                  on a number of personal and freelance projects that can be
                  viewed in the projects section of this site and on my{" "}
                  <b>GitHub</b> repository.{" "}
                </Animator>
              </span>
            </div>
          </ScrollPage>

          <p>
            <span className="about-paragraph right">
              <b>I build my projects using React & Node.js</b>; Im constantly
              practicing, watching and reading to advance skills with the{" "}
              <b>React library & Vanilla JavaScript</b>{" "}
            </span>
          </p>
        </ScrollContainer>

        <ScrollContainer>
          <ScrollPage page={2}>
            <Animator animation={FadeIn}></Animator>
          </ScrollPage>
        </ScrollContainer>

        <div className="about-text-right">
          <p>
            <span className="about-paragraph right">
              I completed Tortuga Coders 11 week fullstack coding bootcamp in
              Koh Phangan - Thailand in mid October 2022, during the course I
              gained extensive experience of{" "}
              <b>JavaScript, HTML, CSS, Node.js & React</b>, amoung other
              languages, frameworks and libarys.{" "}
            </span>
          </p>

          <p>
            <span className="about-paragraph ">
              <b>A passionate photographer,</b> Ive documentend my travels in{" "}
              <b>South America, the USA, Asia, Europe & Australia</b> over the
              last 8 years.
            </span>
          </p>
          <p>
            <span className="about-paragraph last-right">
              I have a creative background; graduating from{" "}
              <b>Wimbledon College of Art </b>in 2013, studying{" "}
              <b>Print & Time Based Media.</b>
            </span>
          </p>
        </div>
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
