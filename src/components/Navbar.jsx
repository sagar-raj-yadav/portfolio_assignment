import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const Navbar = ({ className = "" }) => {
  return (
    <header className={[styles.navbar, className].join(" ")}>
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <div className={styles.menuWrapper}>
        <div className={styles.menu}>
          <div className={styles.skills}>
            <div className={styles.skills1}>
              <a href="#home" className={styles.skills2}>Home</a>
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.skills1}>
              <a href="#skills" className={styles.skills2}>Skills</a>
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.skills1}>
              <a href="#education" className={styles.skills2}>Education</a>
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.skills1}>
              <a href="#projects" className={styles.skills2}>Projects</a>
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.skills1}>
              <a href="#recommendations" className={styles.skills2}>Recommendations</a>
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.skills1}>
              <a href="#contact" className={styles.skills2}>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
