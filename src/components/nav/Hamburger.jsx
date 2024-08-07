/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const SCREEN_SIZE = 820;

function Hamburger({ onToggleMenu, isOpen }) {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < SCREEN_SIZE,
  );

  function handleClick() {
    onToggleMenu();
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < SCREEN_SIZE);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <>
      {isMobile ? (
        <div className={`wrapper-menu ${isOpen ? "open" : ""}`} onClick={handleClick}>
          <div className="line-menu half start"></div>
          <div className="line-menu"></div>
          <div className="line-menu half end"></div>
        </div>
      ) : null}
    </>
  )
}

export default Hamburger
