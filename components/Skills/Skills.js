import Image from "next/image";
import styles from "./Skills.module.css";
import PageTitle from "../elements/PageTitle/PageTitle";
import dynamic from "next/dynamic";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

const Skills = () => {
  return (
    <section className={styles.skills}>
      <PageTitle title="skills" />
      <div className={styles.skillsTitleWrap}>
        <MediaQuery minWidth={1024}>
          <Image
            priority
            src="/skills-group.png"
            width={349}
            height={282}
            alt="skills"
          />
        </MediaQuery>
        <ul className={styles.skillsList}>
          <li className={styles.skillsItem}>
            <h3 className={styles.skillsName}>Languages</h3>
            <p className={styles.skillsStack}>Typescript JavaScript</p>
          </li>
          <li className={styles.skillsItem}>
            <h3 className={styles.skillsName}>Frameworks</h3>
            <p className={styles.skillsStack}>React Next.js Express.js</p>
          </li>
          <li className={styles.skillsItem}>
            <h3 className={styles.skillsName}>Tools</h3>
            <p className={styles.skillsStack}>Git VSCode Postman</p>
          </li>
          <li className={styles.skillsItem}>
            <h3 className={styles.skillsName}>Other</h3>
            <p className={styles.skillsStack}>
              HTML CSS SASS Rest AJAX Redux RTK GCP Bash Webpack NPM BEM Trello
            </p>
          </li>
          <li className={styles.skillsItem}>
            <h3 className={styles.skillsName}>Libraries</h3>
            <p className={styles.skillsStack}>
              Material UI Bootstrap Emotion Styled-Components Axios Formik Yup
            </p>
          </li>
          <li className={styles.skillsItem}>
            <h3 className={styles.skillsName}>Databases</h3>
            <p className={styles.skillsStack}>MongoDB</p>
          </li>
          <li className={styles.skillsItem}>
            <h3 className={styles.skillsName}>Methodology</h3>
            <p className={styles.skillsStack}>Agile/Scrum</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
