import React from "react";
import ArrowButton from "./ArrowButton";

const Qualification = () => {
  const [open, setOpen] = React.useState(false);

  const showQualifications = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="skill">
        <div onClick={showQualifications}>
          <ArrowButton />
        </div>
        <div className="qualification">Education </div>
      </div>

      {!open ? null : (
        <div className="my-skills">
          &bull;Tortuga Coders Full Stack Web Development &bull; BA Hons: Print
          & Time Based Media - UAL &bull; PRINCE2 Foundation & Practioner
        </div>
      )}
    </div>
  );
};

export default Qualification;
