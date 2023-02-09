import Navbar from "./Navbar.js";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Home from "./Home";
import ModalNav from "./ModalNav";
import { useState, useEffect } from "react";

const Layout = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className={styles.container}>
      <Navbar modal={modal} toggle={toggleModal} />
      <main>
        {modal === false && <Home />}
        {!modal === false && <ModalNav />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
