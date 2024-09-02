import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Gmail.module.css";

const Gmail = ({
  className = "",
  consmail,
  propWidth,
  propMargin,
  propPosition,
  propTop,
  propRight,
  propHeight,
  propFlex,
}) => {
  const gmailStyle = useMemo(() => {
    return {
      width: propWidth,
      margin: propMargin,
      position: propPosition,
      top: propTop,
      right: propRight,
      height: propHeight,
      flex: propFlex,
    };
  }, [
    propWidth,
    propMargin,
    propPosition,
    propTop,
    propRight,
    propHeight,
    propFlex,
  ]);

  return (
    <div className={[styles.gmail, className].join(" ")} style={gmailStyle}>
      <div className={styles.gmailChild} />
      <div className={styles.supportContainer}>
        <div className={styles.supportOptions}>
          <div className={styles.email}>Email:</div>
          <div className={styles.skype}>Skype:</div>
          <div className={styles.telegram}>Telegram:</div>
        </div>
      </div>
      <div className={styles.supportOptions1}>
        <div className={styles.iconBackgroundParent}>
          <div className={styles.iconBackground} />
          <img className={styles.consmailIcon} alt="" src={consmail} />
        </div>
        <div className={styles.support}>
          <div className={styles.userEmailContainer}>
            <div className={styles.youremailgmailcom}>youremail@gmail.com</div>
            <div className={styles.yourusername}>@yourusername</div>
            <div className={styles.yourusername1}>@yourusername</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Gmail.propTypes = {
  className: PropTypes.string,
  consmail: PropTypes.string,

  propWidth: PropTypes.any,
  propMargin: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propRight: PropTypes.any,
  propHeight: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Gmail;
