import styles from "../styles/app.module.scss";
import logo from "../../public/logo.jpg";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className={styles.body}>
      <img className={styles.logo} src={logo} />
      <div className={styles.buttonsBlock}>
        <Link to="/nummer" className={styles.buttonsBlockBox}>
          <h2 className={styles.buttonsBlockBoxText}>Nummers</h2>
        </Link>
        <Link to="/Tijd" className={styles.buttonsBlockBox}>
          <h2 className={styles.buttonsBlockBoxText}>Tijd</h2>
        </Link>
        <Link to="/tijden" className={styles.buttonsBlockBox}>
          <h2 className={styles.buttonsBlockBoxText}>Tijden</h2>
        </Link>
        <Link to="/NietNormalWerkworden" className={styles.buttonsBlockBox}>
          <h2 className={styles.buttonsBlockBoxText}>Niet normal werkworden</h2>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
