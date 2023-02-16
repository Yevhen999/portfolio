import styles from "styles/About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.aboutTitle}>#about-me</h2>
      <div className={styles.aboutTitleWrap}>
        <p className={styles.aboutText}>
          Hello, i’m Elias! I’m a self-taught front-end developer based in Kyiv,
          Ukraine. I can develop responsive websites from scratch and raise them
          into modern user-friendly web experiences. Transforming my creativity
          and knowledge into a websites has been my passion for over a year. I
          have been helping various clients to establish their presence online.
          I always strive to learn about the newest technologies and frameworks.
        </p>
        <button type="button">Read more --</button>
      </div>
    </section>
  );
};

export default About;
