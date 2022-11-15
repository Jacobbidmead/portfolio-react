import React from "react";

class Home extends React.Component {
  state = {
    showWelcome: false,
  };
  toggleShowWelcome = (e) => {
    this.setState({
      showWelcome: true,
    });
  };
  render() {
    return (
      <>
        <div className="main-display">
          <div className="box-left"></div>
          <div className="box-right">
            <div
              style={{
                visibility: this.state.showWelcome ? "visible" : "hidden",
              }}
            >
              Hi, my names Jacob Bidmead. <div>Welcome to my website.</div>
            </div>
          </div>

          <div onClick={(e) => this.toggleShowWelcome(e)}>
            <span className="initial">
              <div className="name-reveal">
                [J<span className="revealed-text">acob</span> - B
                <span className="revealed-text">idmead</span> ]
              </div>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
