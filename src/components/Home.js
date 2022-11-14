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
              [<span className="link-effect">J - B</span>]
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
