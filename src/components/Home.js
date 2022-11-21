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
                left: "10%",
                top: "135px",
                height: "90%",
                fontSize: "98px",
                color: "black",
              }}
            >
              JACOB BIDMEAD
            </div>
            <div
              style={{
                paddingLeft: "30px",
                position: "absolute",
                right: "10%",
                top: "125px",
                fontSize: "95px",
                color: "black",
              }}
            >
              WEBDEVELOPER
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
