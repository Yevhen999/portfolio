import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.css";
import phonebook from "public/phonebook.png";
import filmoteka from "public/filmoteka.jpg";
import icecream from "public/icecream.jpg";
import soyummy from "public/soyummy.jpg";
import PageTitle from "../elements/PageTitle/PageTitle";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projectsTitleWrap}>
        <PageTitle title="projects" />
        {/* <Link href="/" className={styles.projectsLink}>
          View all ~~!{" "}
        </Link> */}
      </div>
      <ul className={styles.projectsList}>
        <li className={styles.projectsItem}>
          <Image className={styles.projectsBanner} src={soyummy} alt="Banner" />
          <p className={styles.projectsStack}>
            React, Redux, Node.js, Express.js, HTML, CSS, JS, Webpack,
            Styled-components, Formik
          </p>
          <h3 className={styles.projectsName}>So-yummy</h3>
          <p className={styles.projectsDescription}>
            A web application with authorization for creating, editing and
            storing own recipe list.
          </p>
          <div className={styles.projectsBtnWrap}>
            <button type="button" className={styles.projectsBtn}>
              <Link
                href="https://yevhen999.github.io/so-yummy/welcome"
                className={styles.projectsLink}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                Live ---
              </Link>
            </button>
          </div>
        </li>
        <li className={styles.projectsItem}>
          <Image
            className={styles.projectsBanner}
            src={phonebook}
            alt="Banner"
          />
          <p className={styles.projectsStack}>
            React, Redux, HTML, CSS, JS, Webpack, MUI
          </p>
          <h3 className={styles.projectsName}>Phonebook</h3>
          <p className={styles.projectsDescription}>
            A web application with authorization for creating and storing
            contact list with phone numbers.
          </p>
          <div className={styles.projectsBtnWrap}>
            <button type="button" className={styles.projectsBtn}>
              <Link
                href="https://yevhen999.github.io/phonebook/"
                className={styles.projectsLink}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                Live ---
              </Link>
            </button>
          </div>
        </li>
        <li className={styles.projectsItem}>
          <Image
            className={styles.projectsBanner}
            src={filmoteka}
            alt="Banner"
          />
          <p className={styles.projectsStack}>
            HTML, CSS, JS, SASS, REST API, Parcel
          </p>
          <h3 className={styles.projectsName}>The Movie</h3>
          <p className={styles.projectsDescription}>
            An application for movie search with personal library.
          </p>
          <div className={styles.projectsBtnWrap}>
            <button type="button" className={styles.projectsBtn}>
              <Link
                href="https://yevhen999.github.io/filmoteka-team-project-js/"
                className={styles.projectsLink}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                Live ---
              </Link>
            </button>
          </div>
        </li>
        <li className={styles.projectsItem}>
          <Image
            className={styles.projectsBanner}
            src={icecream}
            alt="Banner"
          />
          <p className={styles.projectsStack}>HTML, CSS, JS, SASS, Parcel</p>
          <h3 className={styles.projectsName}>Website creation</h3>
          <p className={styles.projectsDescription}>
            A website with a responsive layout. Landing page for a shop.
          </p>
          <div className={styles.projectsBtnWrap}>
            <button type="button" className={styles.projectsBtn}>
              <Link
                href="https://yevhen999.github.io/command-project-html-css/"
                className={styles.projectsLink}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                Live ---
              </Link>
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
