import React from "react";
import "../styles/Top.css";

class Top extends React.Component {
  state = {
    showHomeButton: true,
  };

  toggleShowHomeButton = () => {
    this.setState({
      showHomeButton: true,
    });
  };

  render() {
    return (
      <>
        <div
          className="home-button"
          onClick={(e) => this.props.toggleShowHome(e)}
        >
          +
        </div>
      </>
    );
  }
}

export default Top;
