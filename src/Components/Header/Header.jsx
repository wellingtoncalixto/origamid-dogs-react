import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dogs from "../../Assets/dogs.svg?react";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link
          className={styles.nav_login}
          to="/login"
          aria-label="Dogs - Login"
        >
          Login / Criar
        </Link>
      </nav>
    </header>
  );
}

export default Header;
