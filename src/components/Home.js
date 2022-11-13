import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="main-display">
          <div>
            <div className="box-left"></div>
            <div className="box-right"></div>

            <div>
              <h1 className="main-page  first-name">JACOB</h1>
            </div>
            <div>
              <img src="images/asia/umbrella.png" alt="" className="img-box" />
            </div>
          </div>
          <div>
            <div>
              <h1 className="main-page last-name">BIDMEAD</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
