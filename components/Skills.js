import Image from "next/image";
import styles from "/styles/Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.skillsTitle}>#skills</h2>
      <div className={styles.skillsTitleWrap}>
        <Image
          priority
          src="/skills-group.png"
          width={349}
          height={282}
          alt="skills"
        />
        <ul className={styles.skillsList}>
          <li className={styles.skillsItem}>
            <h3 className={styles.skillsName}>Languages</h3>
            <p className={styles.skillsStack}>Typescript, JavaScript</p>
          </li>
          <li className={styles.skillsItem}>
            <h3 className={styles.skillsName}>Databases</h3>
            <p className={styles.skillsStack}>Mongo</p>
          </li>
          <li className={styles.skillsItem}>
            <h3 className={styles.skillsName}>Tools</h3>
            <p className={styles.skillsStack}>Git, VSCode</p>
          </li>
          <li className={styles.skillsItem}>
            <h3 className={styles.skillsName}>Other</h3>
            <p className={styles.skillsStack}>HTML, CSS</p>
          </li>
          <li className={styles.skillsItem}>
            <h3 className={styles.skillsName}>Frameworks</h3>
            <p className={styles.skillsStack}>React</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
