import React from "react";
import styles from "./Footer.module.css";
import logo from "/public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrap}>
        <div>
          <div className={styles.footerLogoWrap}>
            <Image className={styles.footerLogo} src={logo} alt="logo" />
            <Link className={styles.footerName} href="/">
              Yevhen
            </Link>
            <Link
              className={styles.footerMail}
              href="mailto:leshchenkoyevhen@gmail.com"
            >
              leshchenkoyevhen@gmail.com
            </Link>
          </div>
          <p className={styles.footerText}>
            Front-end developer based in Canada
          </p>
        </div>
        <div className={styles.footerListWrap}>
          <h3 className={styles.footerListTitle}>Media</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerItem}>
              <Link
                href="mailto:leshchenkoyevhen@gmail.com"
                className={styles.footerLink}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <TfiEmail size={21} className={styles.footerListIcon} />
              </Link>
            </li>
            <li className={styles.footerItem}>
              <Link
                href="https://github.com/Yevhen999"
                className={styles.footerLink}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <GoMarkGithub size={21} className={styles.footerListIcon} />
              </Link>
            </li>
            <li className={styles.footerItem}>
              <Link
                href="https://www.linkedin.com/in/yevhen-leshchenko/"
                className={styles.footerLink}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <BsLinkedin size={21} className={styles.footerListIcon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.footerCopyright}>
        &#169; Copyright 2023. Made by Yevhen
      </p>
    </footer>
  );
};

export default Footer;
