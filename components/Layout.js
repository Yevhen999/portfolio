import Navbar from "./Navbar.js";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Home from "./Home";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
