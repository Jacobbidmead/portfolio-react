import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="main-display">
          <div className="box-left"></div>
          <div className="box-right"></div>

          <div onClick={(e) => this.props.toggleShowAbout(e)}>
            <h1 className="main-page  initial">
              [<span className="link-effect">J - B</span>]
            </h1>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
