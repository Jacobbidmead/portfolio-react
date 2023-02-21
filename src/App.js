import "./App.css";
import React from "react";
import Home from "./components/Home.js";
import "./styles/Top.css";

class App extends React.Component {
  state = {
    backgroundColor: "black",
    color: "rgba(247, 243, 234, 0.5)",
    burger: "rgba(247, 243, 234, 0.5)",
  };

  makeBlack = () => {
    this.setState({
      backgroundColor: "black ",
      color: "rgba(247, 243, 234, 0.5)",
    });
  };

  rotateArrow = (e) => {
    let arrow = document.getElementById("arrow");
    arrow.style.transform = "rotate(180deg)";
  };

  render() {
    return (
      <>
        <Home />
      </>
    );
  }
}

export default App;
