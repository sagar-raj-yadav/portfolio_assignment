import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Reviewer.module.css";

const Reviewer = ({
  className = "",
  profile,
  tianaPhilips,
  photographer,
  propWidth,
}) => {
  const reviewerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.reviewer, className].join(" ")}
      style={reviewerStyle}
    >
      <img className={styles.profileIcon} loading="lazy" alt="" src={profile} />
      <div className={styles.reviewerName}>
        <div className={styles.reviewer1}>
          <div className={styles.tianaPhilips}>{tianaPhilips}</div>
          <div className={styles.occupationContainer}>
            <div className={styles.photographer}>{photographer}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Reviewer.propTypes = {
  className: PropTypes.string,
  profile: PropTypes.string,
  tianaPhilips: PropTypes.string,
  photographer: PropTypes.string,

  propWidth: PropTypes.any,
};

export default Reviewer;
