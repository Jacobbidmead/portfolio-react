import React from "react";
import "../styles/Links.css";

class Links extends React.Component {
  render() {
    return (
      <>
        <div className="links name-reveal">
          [<i className="fa-solid fa-envelope"></i>
          <span className="email revealed-text">
            jacob.bidmead.fullstack@outlook.com
          </span>{" "}
          ]
        </div>

        <div
          href="https://github.com/Jacobbidmead"
          className="gitlink links name-reveal"
          target="_blank"
          rel="noreferrer"
        >
          [<i className="fa-brands fa-github"></i>
          <span className="revealed-text">github.com/Jacobbidmead</span>]
        </div>
      </>
    );
  }
}

export default Links;
