import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  const topbtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <div className="gototop">
        {isVisible && (
          <div className="bottom-btn" onClick={topbtn}>
            <FaArrowUp className="" />
          </div>
        )}
      </div>
    </>
  );
};

export default GoToTop;
