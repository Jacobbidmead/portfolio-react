import React, { useState, useEffect } from "react";

function FadeOnScroll() {
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 1000 && fade) {
        setFade(false);
      } else if (scrollTop <= 1000 && !fade) {
        setFade(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fade]);

  return (
    <div style={{ opacity: fade ? 1 : 0, color: "white" }}>
      This element will fade in and out as the user scrolls.
    </div>
  );
}

export default FadeOnScroll;
