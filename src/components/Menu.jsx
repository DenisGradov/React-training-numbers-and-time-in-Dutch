import styles from "../styles/app.module.scss";
import logo from "../../public/logo.jpg";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="overflow-y-scroll max-h-[100vh]">
      <img className={`${styles.logo} m-auto mt-[20px] `} src={logo} />
      <div className={`${styles.buttonsBlock} mt-[100px]max-h-[500px]`}>
        <Link to="/nummer" className={`${styles.buttonsBlockBox} mt-30px]`}>
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
        <Link to="/NietNormalWerkwordenVTT" className={styles.buttonsBlockBox}>
          <h2 className={styles.buttonsBlockBoxText}>Niet normal werkworden VTT</h2>
        </Link>
        <Link to="/NietNormalWerkwordenOVT" className={styles.buttonsBlockBox}>
          <h2 className={styles.buttonsBlockBoxText}>Niet normal werkworden OVT</h2>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
