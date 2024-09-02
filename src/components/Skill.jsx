import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Skill.module.css";

const Skill = ({ className = "", languages, hindi, english, propMinWidth }) => {
  const skill2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.skill2, className].join(" ")} style={skill2Style}>
      <div className={styles.skill2Child} />
      <div className={styles.languages}>{languages}</div>
      <div className={styles.languageDetails}>
        <div className={styles.languageContainer}>
          <div className={styles.hindi}>{hindi}</div>
          <div className={styles.hindiSkill}>90%</div>
        </div>
        <div className={styles.hindiSeparator}>
          <div className={styles.line}>
            <div className={styles.lineChild} />
            <div className={styles.hindiProgress} />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.englishParent}>
              <div className={styles.english}>{english}</div>
              <div className={styles.englishSeparator}>85%</div>
            </div>
            <div className={styles.line1}>
              <div className={styles.lineItem} />
              <div className={styles.englishProgress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  className: PropTypes.string,
  languages: PropTypes.string,
  hindi: PropTypes.string,
  english: PropTypes.string,

  propMinWidth: PropTypes.any,
};

export default Skill;
