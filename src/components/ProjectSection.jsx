import Project1 from "./Project1";
import PropTypes from "prop-types";
import styles from "./ProjectSection.module.css";

const ProjectSection = ({ className = "", projects }) => {
  return (
    <section className={[styles.page1Inner, className].join(" ")} >
      <div className={styles.projectsContentParent} >
        <div className={styles.projectsContent}>
          <div className={styles.projectsHeading}>
            <h1 className={styles.projects}>Projects</h1>
            <div className={styles.ametMinimMollit}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
            </div>
          </div>
        </div>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <Project1
              key={project.id}
              data={project}
              image={`/image-${project.id}@2x.png`}
              propHeight="434.4px"
              propPadding="0px 0px 176.4px"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

ProjectSection.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.array.isRequired,
};

export default ProjectSection;
