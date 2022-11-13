import React from "react";
import "../styles/Top.css";

class Top extends React.Component {
  state = {
    hideTop: true,
  };

  hideTopBar = () => {
    this.setState({
      hideTop: false,
    });
  };

  render() {
    return (
      <>
        <div
          className="home-button"
          onClick={(e) => this.props.toggleShowHome(e)}
        >
          [<span className="link-effect">+</span>]
        </div>
      </>
    );
  }
}

export default Top;
