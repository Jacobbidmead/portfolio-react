import React, { useState } from "react";

const ArrowButton = () => {
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation(rotation + 180);
  };

  return (
    <>
      <img
        className="down-arrow"
        onClick={handleClick}
        style={{ transform: `rotate(${rotation}deg)` }}
        src="images/down-arrow.png"
        alt=""
      />
    </>
  );
};

export default ArrowButton;
