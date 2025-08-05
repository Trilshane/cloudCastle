import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.png";
import styles from "../scss/header.module.scss";
import { Link } from "react-scroll";

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [sticky, setSticky] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > headerRef.current.scrollHeight) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={sticky ? `${styles.header} ${styles.sticky}` : styles.header}
    >
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} alt="logo" />
      </div>
      {showMobileMenu && (
        <div
          onClick={() => setShowMobileMenu(false)}
          className={styles.showMobileMenuWrapper}
        ></div>
      )}
      <nav
        className={
          showMobileMenu
            ? `${styles.navigation} ${styles.showMenu}`
            : styles.navigation
        }
      >
        <Link
          onClick={() => showMobileMenu && setShowMobileMenu(false)}
          to="whatAwait"
          smooth={true}
          duration={500}
          className={styles.navElem}
        >
          Что ждёт
        </Link>
        <Link
          onClick={() => showMobileMenu && setShowMobileMenu(false)}
          to="routeContent"
          smooth={true}
          duration={500}
          className={styles.navElem}
        >
          Маршрут
        </Link>
        <Link
          onClick={() => showMobileMenu && setShowMobileMenu(false)}
          to="bingo"
          smooth={true}
          duration={500}
          className={styles.navElem}
        >
          Бинго
        </Link>
        <Link
          onClick={() => showMobileMenu && setShowMobileMenu(false)}
          to="faq"
          smooth={true}
          duration={500}
          className={styles.navElem}
        >
          FAQs
        </Link>
      </nav>
      <div
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className={
          showMobileMenu
            ? `${styles.burgerMenu} ${styles.opened}`
            : styles.burgerMenu
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
