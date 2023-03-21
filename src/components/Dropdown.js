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
          JavaScript &bull; React.js &bull;TypeScript &bull; Next.js &bull;
          Object Oriented Programming &bull; MVC &bull; Node.js &bull; MongoDB
          &bull; Framer Motion &bull; Styled Components &bull; HTML & CSS &bull;
          GitHub
        </div>
      )}
    </div>
  );
};

export default App;
