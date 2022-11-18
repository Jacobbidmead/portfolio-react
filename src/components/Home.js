import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home-container">
          <div className="home">
            <img src="images/bouncy.png" alt="" className="home-img" />
          </div>
          <div
            style={{
              visibility: this.state.showWelcome ? "visible" : "hidden",
            }}
          ></div>

          <span className="initial">
            <div className="name-reveal">
              [ J <span className="revealed-text"> ACOB</span> - B
              <span className="revealed-text">IDMEAD</span> &nbsp;]
            </div>
          </span>
        </div>
      </>
    );
  }
}

export default Home;
