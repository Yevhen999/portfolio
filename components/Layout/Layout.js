import Navbar from "../Navbar.js";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import Home from "../Home";
import ModalNav from "../ModalNav";
import SocList from "../SocList";
import Projects from "../Projects/Projects";
import { useState } from "react";
import dynamic from "next/dynamic";
import Skills from "../Skills";
import About from "../About";
import Contacts from "../Contacts/Contacts";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

const Layout = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className={styles.sidebar}>
        <MediaQuery minWidth={768}>
          <aside>
            <SocList />
          </aside>
        </MediaQuery>
        <div className={styles.container}>
          <Navbar modal={modal} toggle={toggleModal} />
          {!modal === false ? (
            <ModalNav />
          ) : (
            <>
              <main>
                <Home />
                <Projects />
                <Skills />
                <About />
                <Contacts />
              </main>
              <Footer />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Layout;