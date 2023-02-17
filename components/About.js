import Image from "next/image";
import styles from "styles/About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.aboutTitle}>#about-me</h2>
      <div className={styles.aboutWrap}>
        <div className={styles.aboutTextWrap}>
          <p className={styles.aboutText}>
            Hello, i’m Yevhen! I’m a front-end developer based in Toronto,
            Canada. I can develop responsive websites from scratch and raise
            them into modern user-friendly web experiences. Transforming my
            creativity and knowledge into a websites has been my passion for
            over a year. I have been helping various clients to establish their
            presence online. I always strive to learn about the newest
            technologies and frameworks.
          </p>
          <button type="button" className={styles.aboutButton}>
            Read more --
          </button>
        </div>
        <div className={styles.abotImageWrap}>
          <Image
            src="/about-group.png"
            alt="about-photo"
            width={343}
            height={508}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
