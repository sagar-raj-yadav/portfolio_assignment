import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Skill1.module.css";

const Skill1 = ({ className = "", propMinWidth, domain,
  skill1,
  percentage1,
  skill2,
  percentage2,
  skill3,
  percentage3,
  skill4,
  percentage4,
  skill5,
  percentage5 }) => {
  const skill1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.skill1, className].join(" ")} style={skill1Style}>
      <div className={styles.skill1Child} />
      <div className={styles.frontEndDevelopmentContainer}>
        <p className={styles.frontEndDevelopment}>{domain}t</p>
      </div>
      <div className={styles.frontEndDetails}>
        <div className={styles.frontendList}>
          <div className={styles.frontEndSkill}>
            <div className={styles.html}>{skill1}</div>
            <div className={styles.htmlSeparator}>{percentage1}</div>
          </div>
          <div className={styles.line}>
            <div className={styles.lineChild} />
            <div className={styles.htmlProgress} />
          </div>
        </div>
        <div className={styles.cssDetails}>
          <div className={styles.cssSkills}>
            <div className={styles.css}>{skill2}</div>
            <div className={styles.cssSeparator}>{percentage2}</div>
          </div>
          <div className={styles.cssProgressWrapper}>
            <div className={styles.line1}>
              <div className={styles.lineItem} />
              <div className={styles.cssProgress} />
            </div>
            <div className={styles.jSSkills}>
              <div className={styles.jsSkills}>
                <div className={styles.js}>{skill3}</div>
                <div className={styles.jsSeparator}>{percentage3}</div>
              </div>
              <div className={styles.line2}>
                <div className={styles.lineInner} />
                <div className={styles.jsProgress} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.phpDetails}>
          <div className={styles.phpSkills}>
            <div className={styles.php}>{skill4}</div>
            <div className={styles.phpSeparator}>{percentage4}</div>
          </div>
          <div className={styles.line3}>
            <div className={styles.rectangleDiv} />
            <div className={styles.phpProgress} />
          </div>
        </div>
        <div className={styles.wordpressDetails}>
          <div className={styles.pHPItems}>
            <div className={styles.wordpress}>{skill5}</div>
            <div className={styles.wordpressSeparator}>{percentage5}</div>
          </div>
          <div className={styles.line4}>
            <div className={styles.lineChild1} />
            <div className={styles.wordpressProgress} />
          </div>
        </div>
      </div>
    </div>
  );
};

Skill1.propTypes = {
  className: PropTypes.string,

  propMinWidth: PropTypes.any,
};

export default Skill1;
