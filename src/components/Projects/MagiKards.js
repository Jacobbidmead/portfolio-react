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

const containerAnimate = {
  offscreen: { y: 600, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
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

    const colorsList = ["black", "#FB5012"];

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
            paddingBottom: "1px",
          }}
        >
          <div className="header" style={{ marginBottom: "170px" }}>
            <h1 style={{ margin: "0" }}>MagiKards.</h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <div
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
              <div className="project-name">
                <h1>MagiKards battle style card game</h1>
                <h5>October 2022</h5>
              </div>
              <div className="project-description">
                Magikards is a fantasy based battle card game created by myself
                and class mates Joshua Peoples & Mohammed Hammuri during the
                final two weeks of Tortuga Coders bootcamp.
                <p>
                  The concept was to create a game using React that would take
                  two classes of cards, each with unique attributes, that would
                  affect one another, with the strongest removing health from
                  the opposition player. We took influence from online card
                  games such as Yu-Gi-Oh & Gwent from The Witcher game series.
                </p>
                Technologies used - React, JavaScript, HTML, CSS.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={containerAnimate}
            viewport={{ once: true, amount: 0.1 }}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "300px",
            }}
          >
            {" "}
            <motion.img
              className="magikards-large"
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={scaleImg}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                width: "76%",
                borderRadius: "5px",
              }}
              src="./images/project-img/MK1.png"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={containerAnimate}
            viewport={{ once: true, amount: 0.1 }}
            className="text-container dual-col"
          >
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={moveRight}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                type: "tween",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                <img
                  className="magikards-img1"
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
              className="text-box magikards-text"
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
          </motion.div>

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
              viewport={{ once: true, amount: 0.1 }}
              style={{
                width: "76%",
                borderRadius: "5px",

                marginTop: "300px",
              }}
              src="./images/project-img/MK4.png"
              alt=""
            />
          </div>
          <motion.div
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={containerAnimate}
            viewport={{ once: true, amount: 0.1 }}
            className="text-container"
          >
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={moveRight}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                width: "50%",

                marginLeft: "auto",

                height: "55%",
                color: "white",
                marginTop: "40px",
              }}
              className="text-box magikards-text"
            >
              <section>
                This view above shows the Battlefield, the hand of cards is
                randomly generated to the player. Once the player runs out of
                cards, seven more cards will be randomly selected from the deck
                and given to the player. The view below is showing the selected
                cards of the two players, when a card is selected it will be
                displayed as the main card in the center of the screen. There is
                also a pass option.
                <p>
                  Once both players have selected a card, the resulting card
                  effects will take place and health will be subtracked from the
                  relevent players. This project is still in the development
                  phase that we continue to work on as a group.
                </p>
              </section>
            </motion.div>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
              <motion.div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "0px 0px 70px 0px",
                }}
                className="magikards-img1"
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={moveLeft}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  type: "tween",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                {" "}
                <img
                  className="magikards-img2"
                  src="./images/project-img/MK2.png"
                  alt=""
                />
              </motion.div>
            </Tilt>
          </motion.div>
        </div>
      </>
    );
  }
}

export default MagiKards;
