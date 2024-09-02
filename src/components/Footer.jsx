import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <img className={styles.logoIcon} alt="" src="/logo-1.svg" />
      <footer className={styles.footerContent}>
        <img className={styles.logoIcon1} alt="" src="/logo@2x.png" />
        <div className={styles.footerInfo}>
          <div className={styles.logos}>
            <div className={styles.upwork}>
              <img
                className={styles.upworkImageIcon}
                alt=""
                src="/upwork-image@2x.png"
              />
              <div
                className={styles.ratingOnLorem}
              >{`4.5/5 rating on Lorem `}</div>
            </div>
            <div className={styles.dribble}>
              <img
                className={styles.dribbleChild}
                alt=""
                src="/group-270@2x.png"
              />
              <div className={styles.ratingOnIpsum}>9/10 rating on Ipsum</div>
            </div>
            <div className={styles.fiverr}>
              <img
                className={styles.fiverrImageIcon}
                alt=""
                src="/fiverr-image@2x.png"
              />
              <div className={styles.ratingOnDorel}>4.5/5 Rating on dorel</div>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.quickLinks}>
              <b className={styles.heading}>quick Links</b>
              <div className={styles.navigationLinks}>
                <div className={styles.home}>home</div>
                <div className={styles.skills}>skills</div>
                <div className={styles.education}>education</div>
                <div className={styles.projects}>projects</div>
                <div className={styles.recommendations}>recommendations</div>
              </div>
            </div>
            <div className={styles.portfolio}>
              <b className={styles.heading1}>Portfolio</b>
              <div className={styles.portfolioItems}>
                <div className={styles.frontend}>frontend Development</div>
                <div className={styles.backendDevelopment}>
                  Backend Development
                </div>
                <div className={styles.websiteDesign}>Website design</div>
                <div className={styles.machineLearning}>Machine Learning</div>
                <div
                  className={styles.problemSolving}
                >{`Problem Solving & DSA`}</div>
              </div>
            </div>
            <div className={styles.connect}>
              <b className={styles.heading2}>Connect</b>
              <div className={styles.social}>
                <img
                  className={styles.linkedinIcon}
                  alt=""
                  src="/linkedin@2x.png"
                />
                <img
                  className={styles.instagramIcon}
                  alt=""
                  src="/instagram@2x.png"
                />
                <img
                  className={styles.facebookIcon}
                  alt=""
                  src="/facebook@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.copyrightCircleParent}>
        <img
          className={styles.copyrightCircleIcon}
          alt=""
          src="/copyright-circle.svg"
        />
        <div className={styles.copyrightAllRight}>
          2024 Copyright, All right reserved
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
