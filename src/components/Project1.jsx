import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Project1.module.css";

const Project1 = ({ className = "", image, propHeight, propPadding, data }) => {
  const projectStyle = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  return (
    <div className={[styles.project, className].join(" ")} style={projectStyle}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.projectChild} />
      <div className={styles.cardContent}>
        <div className={styles.howToMakeFlyerDesignParent}>
          <div className={styles.howToMake}>{data.title}</div>
          <div className={styles.loremIpsumDolor}>{data.description}</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.chipParent}>
              {data.technologies.slice(0, 4).map((tech, index) => (
                <div key={index} className={styles[`chip${index + 1}`]}>
                  <div className={styles[`reactjs${index}`]}>{tech}</div>
                </div>
              ))}
            </div>
            <div className={styles.chipGroup}>
              {data.technologies.slice(2, 4).map((tech, index) => (
                <div key={index + 2} className={styles[`chip${index + 2}`]}>
                  <div className={styles[`reactjs${index + 2}`]}>{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Project1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
  data: PropTypes.object.isRequired,
};

export default Project1;
