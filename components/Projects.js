import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "components/elements/Buttons/Primary";
import styles from "styles/Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.projectsTitleWrap}>
        <h2 className={styles.projectsTitle}>#projects</h2>
        <Link href="/" className={styles.projectsLink}>
          View all ~~!{" "}
        </Link>
      </div>
      <ul className={styles.projectsList}>
        <li className={styles.projectsItem}>
          <Image
            className={styles.projectsBanner}
            src="/pexels-mateusz-dach-424299.png"
            alt="Banner"
            width={330}
            height={200}
          />
          <p className={styles.projectsStack}>
            React, Redux, HTML, CSS, JS, Webpack, MUI
          </p>
          <h3 className={styles.projectsName}>Phonebook</h3>
          <p className={styles.projectsDescription}>
            A web application with authorization for creating and storing
            contact list with phone numbers.
          </p>
          <div className={styles.projectsBtn}>
            <PrimaryBtn />
            {/* <PrimaryBtn /> */}
          </div>
        </li>
        <li className={styles.projectsItem}>
          <Image
            className={styles.projectsBanner}
            src="/public/logo.svg"
            alt="Banner"
            width={100}
            height={100}
          />
          <p className={styles.projectsStack}>
            HTML, CSS, JS, SASS, REST API, Parcel
          </p>
          <h3 className={styles.projectsName}>Website Filmoteka</h3>
          <p className={styles.projectsDescription}>
            An application for movie search with personal library.
          </p>
          <div className={styles.projectsBtn}>
            <PrimaryBtn />
            {/* <PrimaryBtn /> */}
          </div>
        </li>
        <li className={styles.projectsItem}>
          <Image
            className={styles.projectsBanner}
            src="/public/logo.svg"
            alt="Banner"
            width={100}
            height={100}
          />
          <p className={styles.projectsStack}>HTML, CSS, JS, SASS, Parcel</p>
          <h3 className={styles.projectsName}>Website creation</h3>
          <p className={styles.projectsDescription}>
            A website with a responsive layout. Landing page for a shop.
          </p>
          <div className={styles.projectsBtn}>
            <PrimaryBtn />
            {/* <PrimaryBtn /> */}
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
