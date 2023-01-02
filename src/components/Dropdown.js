import React from "react";
import ArrowButton from "./ArrowButton";

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="skill">
        <div onClick={handleOpen}>
          <ArrowButton />
        </div>
        <div className="skills">Skills </div>
      </div>

      {!open ? null : (
        <div className="my-skills">
          &bull; Object Oriented Programming &bull; MVC &bull; Functional React
          &bull; JavaScript &bull; Node.js &bull; MongoDB &bull; Framer Motion
          &bull; HTML & CSS &bull; GitHub &bull; Project Managemenrt (PRINCE2)
        </div>
      )}
    </div>
  );
};

export default App;
