import React from "react";
import PropTypes from "prop-types";
import styles from "./InputGroup.module.css";

const InputGroup = ({ className = "", onChangeSkill, onChangePercentage, skillValue, percentageValue }) => {
  return (
    <div className={[styles.inputGroup, className].join(" ")}>
      <input 
        type="text" 
        className={styles.inputHighlight} 
        value={skillValue}
        onChange={(e) => onChangeSkill(e.target.value)}
      />
      <input
        type="number"
        className={styles.inputGroupChild}
        value={percentageValue}
        onChange={(e) => onChangePercentage(e.target.value)}
      />
    </div>
  );
};

InputGroup.propTypes = {
  className: PropTypes.string,
  onChangeSkill: PropTypes.func.isRequired,
  onChangePercentage: PropTypes.func.isRequired,
  skillValue: PropTypes.string.isRequired,
  percentageValue: PropTypes.string.isRequired,
};

export default InputGroup;
