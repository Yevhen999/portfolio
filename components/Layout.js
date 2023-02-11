import Navbar from "./Navbar.js";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Home from "./Home";
import ModalNav from "./ModalNav";
import SocList from "./SocList";
import { useState } from "react";
import dynamic from "next/dynamic";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

const Layout = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className={styles.sidebar}>
      <MediaQuery minWidth={768}>
        <aside>
          <SocList />
        </aside>
      </MediaQuery>
      <div className={styles.container}>
        <Navbar modal={modal} toggle={toggleModal} />
        <main>
          {modal === false && <Home />}
          {!modal === false && <ModalNav />}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
