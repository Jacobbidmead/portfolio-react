import React from "react";
import ArrowButton from "./ArrowButton";

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="skill" onClick={handleOpen}>
        <div>
          <ArrowButton />
        </div>
        <div>Skills </div>
      </div>

      {open ? null : (
        <div className="my-skills">
          <div>&bull; Object Oriented Programming</div>
          <div>&bull; MVC</div>
          <div>&bull; Functional React</div>
          <div>&bull; JavaScript</div>
          <div>&bull; Node.js</div>
          <div>&bull; MongoDB</div>
          <div>&bull; Framer Motion</div>
          <div>&bull; HTML & CSS</div>
          <div>&bull; Project Managemenrt (PRINCE2)</div>
        </div>
      )}
    </div>
  );
};

export default App;
