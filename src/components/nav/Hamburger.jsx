/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from './Hamburger.module.css'

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
        <div className={`${styles.wrapperMenu} ${isOpen ? "open" : ""}`} onClick={handleClick}>
          <div className={`${styles.lineMenu} ${styles.half} ${styles.start}`}></div>
          <div className={styles.lineMenu}></div>
          <div className={`${styles.lineMenu} ${styles.half} ${styles.end}`}></div>
        </div>
      ) : null}
    </>
  )
}

export default Hamburger
