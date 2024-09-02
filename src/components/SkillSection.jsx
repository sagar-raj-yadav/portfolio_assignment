import Skill1 from "./Skill1";
import Skill from "./Skill";
import PropTypes from "prop-types";
import styles from "./SkillSection.module.css";

const SkillSection = ({ className = "", data }) => {
  const frontEndSkills = data.skills.find(skill => skill.domain === "Front End Development");
  const languagesSkills = data.skills.find(skill => skill.domain === "Languages");
  const backEndSkills = data.skills.find(skill => skill.domain === "Back End Development");

  return (
    <section className={[styles.skillListWrapper, className].join(" ")}>
      <div className={styles.skillList}>
        <div className={styles.skillsSummary}>
          <h1 className={styles.skillsLangauges}>Skills & Languages</h1>
          <div className={styles.skillsDescription}>
            <div className={styles.ametMinimMollit}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
            </div>
          </div>
        </div>
        <div className={styles.skillsWrapper}>
          {frontEndSkills && (
            <Skill1
              domain={frontEndSkills.domain}
              skill1={frontEndSkills.skills[0]?.skill || "Html"}
              percentage1={frontEndSkills.skills[0]?.proficiency || "90%"}
              skill2={frontEndSkills.skills[1]?.skill || "CSS"}
              percentage2={frontEndSkills.skills[1]?.proficiency || "85%"}
              skill3={frontEndSkills.skills[2]?.skill || "JS"}
              percentage3={frontEndSkills.skills[2]?.proficiency || "80%"}
              skill4={frontEndSkills.skills[3]?.skill || "PHP"}
              percentage4={frontEndSkills.skills[3]?.proficiency || "75%"}
              skill5={frontEndSkills.skills[4]?.skill || "PHP"}
              percentage5={frontEndSkills.skills[4]?.proficiency || "75%"}
            />
          )}
          {languagesSkills && (
            <Skill
              languages={languagesSkills.domain}
              hindi={languagesSkills.skills[0]?.language || "Hindi"}
              english={languagesSkills.skills[1]?.language || "English"}
            />
          )}
          {backEndSkills && (
            <Skill
              languages={backEndSkills.domain}
              hindi={backEndSkills.skills[0]?.skill || "NodeJS"}
              english={backEndSkills.skills[1]?.skill || "SSR"}
              propMinWidth="289px"
            />
          )}
        </div>
        <div className={styles.skillCategoryContainer}>
          {frontEndSkills && (
            <Skill1
              domain={frontEndSkills.domain}
              skill1={frontEndSkills.skills[0]?.skill || "Html"}
              percentage1={frontEndSkills.skills[0]?.proficiency || "90%"}
              skill2={frontEndSkills.skills[1]?.skill || "CSS"}
              percentage2={frontEndSkills.skills[1]?.proficiency || "85%"}
              skill3={frontEndSkills.skills[2]?.skill || "JS"}
              percentage3={frontEndSkills.skills[2]?.proficiency || "80%"}
              skill4={frontEndSkills.skills[3]?.skill || "PHP"}
              percentage4={frontEndSkills.skills[3]?.proficiency || "75%"}
              skill5={frontEndSkills.skills[4]?.skill || "PHP"}
              percentage5={frontEndSkills.skills[4]?.proficiency || "75%"}
              propMinWidth="unset"
            />
          )}
          {languagesSkills && (
            <Skill
              languages={languagesSkills.domain}
              hindi={languagesSkills.skills[0]?.language || "Hindi"}
              english={languagesSkills.skills[1]?.language || "English"}
              propMinWidth="unset"
            />
          )}
          {backEndSkills && (
            <Skill
              languages={backEndSkills.domain}
              hindi={backEndSkills.skills[0]?.skill || "NodeJS"}
              english={backEndSkills.skills[1]?.skill || "SSR"}
              propMinWidth="unset"
            />
          )}
        </div>
      </div>
    </section>
  );
};

SkillSection.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        domain: PropTypes.string,
        skills: PropTypes.arrayOf(
          PropTypes.shape({
            skill: PropTypes.string,
            proficiency: PropTypes.string
          })
        )
      })
    ).isRequired
  }).isRequired
};


export default SkillSection;
