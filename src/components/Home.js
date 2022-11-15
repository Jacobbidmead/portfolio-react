import React from "react";

class Home extends React.Component {
  state = {
    showWelcome: false,
  };
  toggleShowWelcome = (e) => {
    this.setState({
      showWelcome: this.showWelcome ? false : true,
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
              <div className="welcome-name">Hi. I'm Jacob.</div>
            </div>
          </div>

          <div onClick={(e) => this.toggleShowWelcome(e)}>
            <span className="initial">
              <div className="name-reveal">
                [ J <span className="revealed-text"> acob</span>&nbsp; -&nbsp; B
                <span className="revealed-text">idmead</span> &nbsp;]
              </div>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
