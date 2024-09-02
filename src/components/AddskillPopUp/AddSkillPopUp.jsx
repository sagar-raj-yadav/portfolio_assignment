import React, { useState } from "react";
import PropTypes from "prop-types";
import InputGroup from "./InputGroup";
import styles from "./AddSkillPopUp.module.css";
import Dialog from "@mui/material/Dialog";

const AddSkillDialog = ({ open, onClose, onSave }) => {
  const [domain, setDomain] = useState("");
  const [skills, setSkills] = useState([
    { skill: "", proficiency: "" },
    { skill: "", proficiency: "" },
    { skill: "", proficiency: "" },
    { skill: "", proficiency: "" },
    { skill: "", proficiency: "" }
  ]);

  const handleClose = () => {
    onClose();
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = skills.map((skill, i) =>
      i === index ? { ...skill, skill: value } : skill
    );
    setSkills(updatedSkills);
  };

  const handleProficiencyChange = (index, value) => {
    const updatedSkills = skills.map((skill, i) =>
      i === index ? { ...skill, proficiency: value } : skill
    );
    setSkills(updatedSkills);
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave({ domain, skills });
    resetForm();
    handleClose();
  };

  const resetForm = () => {
    setDomain("");
    setSkills([
      { skill: "", proficiency: "" },
      { skill: "", proficiency: "" },
      { skill: "", proficiency: "" },
      { skill: "", proficiency: "" },
      { skill: "", proficiency: "" }
    ]);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <form className={styles.infoDetails} onSubmit={handleSave}>
        <section className={styles.domainParent}>
        <div className={styles.popupheader}>Add Skill</div>
          <div className={styles.domain}>Domain</div>
          <input
            className={styles.domainInput}
            placeholder="front end developer"
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
        </section>
        <section className={styles.frameParent}>
          <div className={styles.skillsParent}>
            <div className={styles.skills}>Skills</div>
            <div className={styles.skillParent}>
              <div className={styles.skill}>Skill</div>
              <div className={styles.proficiency}>
                <span className={styles.proficiency1}>Proficiency</span>
                <i className={styles.i}> (%)</i>
              </div>
            </div>
          </div>
          <div className={styles.inputs}>
            {skills.map((skill, index) => (
              <InputGroup
                key={index}
                skillValue={skill.skill}
                percentageValue={skill.proficiency}
                onChangeSkill={(value) => handleSkillChange(index, value)}
                onChangePercentage={(value) => handleProficiencyChange(index, value)}
              />
            ))}
          </div>
        </section>
        <div className={styles.infoDetailsInner}>
          <div className={styles.addSkillParent}>
            <button type="submit" className={styles.addSkill1}>
              <div className={styles.addSkill2}>Add skill</div>
            </button>
            <button type="button" className={styles.cancel} onClick={handleClose}>
              <div className={styles.cancel1}>Cancel</div>
            </button>
          </div>
        </div>
      </form>
    </Dialog>
  );
};

AddSkillDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default AddSkillDialog;
