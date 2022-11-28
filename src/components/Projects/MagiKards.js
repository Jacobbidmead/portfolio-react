import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const scaleImg = {
  offscreen: { scale: 1 },
  onscreen: {
    scale: 1.2,
    transition: {
      type: "tween",
      bounce: 0.6,
      duration: 0.7,
    },
  },
};

const moveLeft = {
  offscreen: { x: 200 },
  onscreen: {
    x: 0,
    transition: {
      type: "tween",
      bounce: 0.6,
      duration: 0.7,
    },
  },
};

const moveRight = {
  offscreen: { x: -200 },
  onscreen: {
    x: 0,
    transition: {
      type: "tween",
      bounce: 0.6,
      duration: 0.7,
    },
  },
};

const textAnimate = {
  offscreen: { y: 400 },
  onscreen: {
    y: 0,
    transition: {
      type: "tween",
      bounce: 0.5,
      duration: 1,
    },
  },
};

class MagiKards extends React.Component {
  state = {
    bgColor: "black",
  };
  listenScrollEvent = (e) => {
    const backgroundBreakpoints = [0, 900, 3000];
    const colorsList = ["black", "#CB04A5"];

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
          <div className="header" style={{ marginBottom: "170px" }}>
            <h1 style={{ margin: "0" }}>MagiKards.</h1>
          </div>
          <div
            style={{ margin: "100px 0px 0px 100px", paddingBottom: "80px" }}
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
            <div style={{ color: "white", marginLeft: "100px" }}>
              <h1>MagiKards battle style card game</h1>
              <h5>October 2022</h5>
            </div>
            <div
              style={{ color: "white", fontSize: "30px", marginRight: "100px" }}
            >
              Magikards is a fantasy based battle card game created by myself
              and class mates Joshua Peoples & Mohammed Hammuri during the final
              two weeks of Tortuga Coders bootcamp.
              <p>
                The concept was to create a game using React that would take two
                classes of cards, each with unique attributes, that would affect
                one another, with the strongest removing health from the
                opposition player. We took influence from online card games such
                as Yu-Gi-Oh & Gwent from The Witcher game series.
              </p>
              Technologies used - React, JavaScript, HTML, CSS.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "300px",
            }}
          >
            {" "}
            <motion.img
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={scaleImg}
              viewport={{ once: false, amount: 0.1 }}
              style={{
                width: "60%",
                borderRadius: "5px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
              className="airbnb-img"
              src="./images/project-img/MK1.png"
              alt=""
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: " 1fr 1fr",
              margin: "200px 70px 0px 70px",
            }}
          >
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={moveRight}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                <img
                  style={{
                    width: "80%",
                    borderRadius: "5px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    cursor: "pointer",
                    marginLeft: "100px",
                  }}
                  className="projects-img"
                  src="./images/project-img/MK3.png"
                  alt=""
                />
              </Tilt>
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                width: "50%",
                marginLeft: "25%",
                fontSize: "20px",
                color: "white",
                height: "45%",
              }}
              className="text-box"
            >
              The view above is the home screen; players are able to select
              either Ice or Fire, then enter thier name into the input above.
              This allows the start of the game. Only when both players have
              selected their class and entered thier name can they enter the
              'Battlefield'.
              <p>
                The image on the left shows a pop up located on the home screen
                that explains the rules of the game. This button is located in
                the top right of the home screen and disapears when clicking
                'info'.
              </p>
            </motion.div>

            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={moveRight}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                width: "50%",
                fontSize: "18px",
                marginLeft: "60px",
                color: "white",
              }}
              className="text-box"
            >
              This view below shows the Battlefield, the hand of cards is
              randomly generated to the player. Once the player runs out of
              cards, seven more cards will be randomly selected from the deck
              and given to the player. The view to the right is showing the
              selected cards of the two players, when a card is selected it will
              be displayed as the main card in the center of the screen. There
              is also a pass option.
              <p>
                Once both players have selected a card, the resulting card
                effects will take place and health will be subtracked from the
                relevent players. This project is still in the development phase
                that we continue to work on as a group.
              </p>
            </motion.div>

            <motion.div
              style={{ marginTop: "100px" }}
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={moveLeft}
              viewport={{ once: true, amount: 0.1 }}
            >
              {" "}
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                <img
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    cursor: "pointer",
                  }}
                  className="projects-img"
                  src="./images/project-img/MK2.png"
                  alt=""
                />
              </Tilt>
            </motion.div>
          </div>

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
              viewport={{ once: false, amount: 0.1 }}
              style={{
                width: "60%",
                borderRadius: "5px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                marginBottom: "130px",
                marginTop: "150px",
              }}
              src="./images/project-img/MK4.png"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
}

export default MagiKards;
