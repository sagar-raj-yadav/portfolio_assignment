import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import FormSection from "../components/FormSection";
import SkillSection from "../components/SkillSection";
import Footer from "../components/Footer";
import styles from "./HomePage.module.css";
import Coursel from '../components/Coursel/Container';
import AddSkillSection from '../components/AddskillPopUp/AddSkillSection';

const HomePage = ({ data }) => {
  return (
    <div className={styles.homePage}>
      <main className={styles.page1}>
      <div style={{
  position: "fixed",
  top: "0",
  zIndex: "1000",
  width: "100%" ,
  
  boxSizing: "border-box", 
  flexGrow: 1, 
}}>
  <Navbar />
</div>

        <HeroSection />
        <ProjectSection projects={data.projects} />
        <div className={styles.page1Child} />
        <section className={styles.recommendationsContentWrapper}>
          <div className={styles.recommendationsContent}>
            <h1 className={styles.recommendations}>Recommendations</h1>
            <div className={styles.ametMinimMollit}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
            </div>
          </div>
        </section>
        <section className={styles.firstTestimonialParent}>
          <Coursel data={data.recommendations}/>
        </section>
        <FormSection />
        <SkillSection data={{ skills: data.skills }} />
        <AddSkillSection />
        <Footer />
        
      </main>
    </div>
  );
};

export default HomePage;
