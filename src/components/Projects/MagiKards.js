import React from "react";
import { motion } from "framer-motion";

const scaleImg = {
  offscreen: { scale: 1 },
  onscreen: {
    scale: 1.08,
    transition: {
      type: "tween",
      bounce: 0.6,
      duration: 0.7,
    },
  },
};

const textAnimate = {
  offscreen: { y: 100 },
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
  offscreen: { y: 100, opacity: 0 },
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

    const colorsList = ["black", "#10FFCB"];

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
          <div className="header">
            <h1 style={{ margin: "0" }} className="magikards-head">
              MagiKards.
            </h1>
          </div>
          <motion.div>
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
                <span>Magikards is a fantasy based battle card game</span>{" "}
                created by myself and class mates Joshua Peoples & Mohammed
                Hammuri during the final two weeks of Tortuga Coders bootcamp.
                <p>
                  The concept was to create a game using React that would take
                  two classes of cards, each with unique attributes, that would
                  affect one another, with the strongest removing health from
                  the opposition player. We took influence from online card
                  games such as Yu-Gi-Oh & Gwent from The Witcher game series.
                  The game is still in beta, we plan to redesign the UI and card
                  interaction in 2023.
                </p>
                <span>
                  Technologies used - React, JavaScript, HTML, CSS./span>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={containerAnimate}
            viewport={{ once: true, amount: 0.1 }}
            className="text-container magikards-container"
          >
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
              viewport={{ once: true, amount: 0.1 }}
              style={{
                marginLeft: "auto",
              }}
              className="text-box "
            >
              <section>
                <span>This view shows the Battlefield, </span>the hand of cards
                is
                <span>
                  {" "}
                  randomly generated to the player. Once the player runs out of
                  cards, seven more cards will be randomly selected from the
                  deck and given to the player.{" "}
                </span>
                The view below is showing the selected cards of the two players,
                when a card is selected it will be displayed as the main card in
                the center of the screen. There is also a pass option.
                <p>
                  <span>
                    Once both players have selected a card, the resulting card
                    effects will take place and health will be subtracked from
                    the relevent players. This project is still in the
                    development phase that we continue to work on as a group.
                  </span>
                </p>
              </section>
            </motion.div>
            <div>
              {" "}
              <motion.img
                className="magikards-large"
                variants={textAnimate}
                viewport={{ once: true, amount: 0.1 }}
                initial={"offscreen"}
                whileInView={"onscreen"}
                style={{
                  borderRadius: "5px",
                }}
                src="./images/project-img/MK4.png"
                alt=""
              />
            </div>
          </motion.div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            className="mkard-cont"
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
              }}
              src="./images/project-img/MK2.png"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
}

export default MagiKards;
