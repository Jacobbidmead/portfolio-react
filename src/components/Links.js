import React from "react";
import "../styles/Links.css";

class Links extends React.Component {
  render() {
    return (
      <>
        <div className="link-container">
          <div>
            <h1 className="contact-me">Contact Me.</h1>
          </div>
          <div>
            <span className="links">
              <i className="fa-solid fa-envelope"></i>
              jacob.bidmead.fullstack@outlook.com
              <i className="fa-brands fa-github"></i>
              <a
                href="https://github.com/Jacobbidmead"
                className="gitlink"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Jacobbidmead
              </a>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Links;
