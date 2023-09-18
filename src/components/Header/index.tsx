import styles from "./header.module.css";
import logoImage from "../../assets/logo.png";
export function Header() {
  return (
    <header className={styles.header}>
      <div className="content content-flex content-flex-center content-flex-between">
        <img src={logoImage} alt="Movie Space" />
        <nav className={`${styles.nav} content-flex content-flex-center gap-4`}>
          <a href="#" className={styles.nav__link}>
            Filmes
          </a>
          <a href="#" className={styles.nav__link}>
            Favoritos
          </a>
          <a href="#" className="button-primary">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}
