import React from "react";
import ArrowButton from "./ArrowButton";

const Experience = () => {
  const [open, setOpen] = React.useState(false);

  const showExperience = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="skill">
        <div onClick={showExperience}>
          <ArrowButton />
        </div>
        <div className="experience">Experience</div>
      </div>

      {!open ? null : (
        <div className="my-skills">
          Im currently working as a freelance Front End Developer. Previously,
          I've spend five years in hospitality management, working for high end
          resturant groups in London &bull; My duties included -- Team
          management &bull; Stock management & accounting &bull; P&L + HR
          responsibilities &bull; Staff training &bull; Menu creation.
        </div>
      )}
    </div>
  );
};

export default Experience;
