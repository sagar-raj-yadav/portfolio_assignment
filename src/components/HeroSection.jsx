import PropTypes from "prop-types";
import styles from "./HeroSection.module.css";

const HeroSection = ({ className = "" }) => {
  return (
    <section className={[styles.heroWrapper, className].join(" ")} id="skills">
      <div className={styles.hero} >
        <img className={styles.heroChild} alt="" src="/group-260.svg" />
        <div className={styles.heroItem} />
        <div className={styles.heroInner} />
        <img
          className={styles.polygonIcon}
          loading="lazy"
          alt=""
          src="/polygon-1.svg"
        />
        <div className={styles.frameDiv}>
          <div className={styles.frameParent}>
            <div className={styles.contentContainerParent}>
              <div className={styles.contentContainer}>
                <div className={styles.contentContainerInner}>
                  <div className={styles.frameChild} />
                </div>
                <h1 className={styles.imRayanAdlrdardContainer}>
                  <p className={styles.imRayanAdlrdard}>I’m Rayan Adlrdard</p>
                  <p className={styles.frontEndDeveloper}>
                    <span className={styles.frontEnd}>Front-end</span>
                    <span>{` Developer `}</span>
                  </p>
                </h1>
              </div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                volutpat feugiat placerat lobortis. Natoque rutrum semper sed
                suspendisse nunc lectus.
              </div>
            </div>
            <div className={styles.buttonBackgroundParent}>
              <div className={styles.buttonBackground} />
              <div className={styles.frameGroup}>
                <div className={styles.buttonhireMeParent}>
                  <div className={styles.buttonhireMe}>
                    <button className={styles.buttonhireMe1}>
                      <div className={styles.buttonhireMe2}>
                        <div className={styles.hireMeParent}>
                          <div className={styles.hireMe}>HIRE ME</div>
                          <div className={styles.frameWrapper}>
                            <img
                              className={styles.frameIcon}
                              alt=""
                              src="/frame.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className={styles.ellipseWrapper}>
                    <div className={styles.frameItem} />
                  </div>
                </div>
                <div className={styles.ellipseContainer}>
                  <div className={styles.frameInner} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;
