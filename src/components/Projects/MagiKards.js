import React from "react";

class MagiKards extends React.Component {
  render() {
    return (
      <>
        <div
          className="return-projects"
          onClick={(e) => this.props.toggleShowProjects(e)}
        >
          <img src="images/left-arrow.png" alt="" className="arrow" />
        </div>
        <div className="Mcards-container">
          <div className="content-container">
            <img
              src="./images/project-img/MK1.png"
              className="img-container"
              alt=""
            />
          </div>

          <div className="content-container text-container">
            <h1 className="text title">MagiKards</h1>
            <p className="text">
              {" "}
              Magikards is a fantasy based battle card game created by myself
              and class mates Joshua Peoples & Mohammed Hammuri during the final
              two weeks of Tortuga Coders bootcamp.
            </p>
            <p className="text">
              The concept was top create a game using React that would take two
              classes of cards, each with unique attributes that would affect
              one another, with the strongest removing health from the
              opposition player.
            </p>
          </div>

          <div className="content-container text-container">
            <p className="text text-fit">
              The view above is the home screen; players are able to select
              either Ice or Fire, then enter thier name into the input above.
              This allows the start of the game. Only when both players have
              selected their class and entered thier name can they enter the
              'Battlefield'.
            </p>
            <p className="text text-fit">
              The image on the right shows a pop up located on the home screen
              that explains the rules of the game. This button is located in the
              top right of the home screen and disapears apon clicking 'info'.
            </p>
          </div>

          <div className="content-container">
            <img
              src="./images/project-img/MK3.png"
              className="img-container"
              alt=""
            />
          </div>

          <div className="content-container">
            <img
              src="./images/project-img/MK4.png"
              className="img-container mk"
              alt=""
            />
          </div>
          <div className="content-container text-container">
            <p className="text">
              This view shows the Battlefield, the hand of cards is randomly
              generated to the player. Once the player runs out of cards, seven
              more cards will be randomly selected from the deck. Once a card is
              selected it will be displayed as the main card. There is also a
              pass option.
            </p>
          </div>
          <div className="content-container text-container">
            <p className="text text-fit">
              Once both players have selected a card, the resulting card effects
              will take place and health will be subtracked from the relevent
              players. This is a work in progress that we are still working on
              as a group. Hover to enlarge
            </p>
          </div>

          <div className="content-container">
            <img
              src="./images/project-img/MK2.png"
              className="img-container mk"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
}

export default MagiKards;
