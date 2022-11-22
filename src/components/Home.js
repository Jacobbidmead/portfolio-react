import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home-container">
          <div className="home">
            <img src="images/bouncy.png" alt="" className="home-img" />
          </div>

          <div>
            <div
              style={{
                writingMode: "vertical-lr",
                textOrientation: "mixed",
                position: "absolute",
                left: "11%",
                top: "185px",
                height: "90%",
                fontSize: "85px",
                color: "#fffcda",
              }}
            >
              JACOB BIDMEAD
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
