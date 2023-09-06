import react from "react";
import styles from "./Header.module.css";
import resumeSvg from "../../assets/resume.svg"

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Create Your Own <span>Resume</span>
        </p>
        <p className={styles.heading}>
          In Just <span>Few</span> Minutes
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt='resume'/>
      </div>
      
    </div>
  );
}

export default Header;
