// NummerPage.js
import styles from "../styles/app.module.scss";
import logo from "../../public/logo.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import aanbiedingen from "../data/aanbiedingen";

const Tijden = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const [arrayWithBiedingen, setArrayWithBiedingen] = useState(aanbiedingen);
  const [tijdensType, setTijdensType] = useState("alle");
  const [text, setText] = useState(["", ""]);

  const handleChange = (event) => {
    setTijdensType(event.target.value);
  };
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };
  function getRandomData() {
    setText(
      arrayWithBiedingen[getRandomInt(arrayWithBiedingen.length)][
        getRandomInt(
          arrayWithBiedingen[getRandomInt(arrayWithBiedingen.length)].length
        )
      ]
    );
  }
  useEffect(() => {
    if (tijdensType == "vroeger") {
      setArrayWithBiedingen([aanbiedingen[2]]);
    } else if (tijdensType == "nu") {
      setArrayWithBiedingen([aanbiedingen[0], aanbiedingen[1]]);
    } else if (tijdensType == "later") {
      setArrayWithBiedingen([aanbiedingen[3]]);
    } else {
      setArrayWithBiedingen(aanbiedingen);
    }
    getRandomData();
  }, [tijdensType]);

  return (
    <div className={styles.body}>
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
      <div className={styles.clockType}>
        <form className={styles.clockTypeinputForm}>
          <label className={styles.clockTypeinput}>
            <input
              type="radio"
              name="tijdensType"
              value="vroeger"
              checked={tijdensType === "vroeger"}
              onChange={handleChange}
              className={styles.clockTypeinput}
            />
            Vroeger
          </label>
          <label className={styles.clockTypeinput}>
            <input
              type="radio"
              name="tijdensType"
              value="nu"
              checked={tijdensType === "nu"}
              onChange={handleChange}
              className={styles.clockTypeinput}
            />
            Nu
          </label>
          <label className={styles.clockTypeinput}>
            <input
              type="radio"
              name="tijdensType"
              value="later"
              checked={tijdensType === "later"}
              onChange={handleChange}
              className={styles.clockTypeinput}
            />
            Later
          </label>
          <label className={styles.clockTypeinput}>
            <input
              type="radio"
              name="tijdensType"
              value="alle"
              checked={tijdensType === "alle"}
              onChange={handleChange}
              className={styles.clockTypeinput}
            />
            Alle
          </label>
        </form>
      </div>
      <div className={styles.genererenBlock}>
        <button
          onClick={() => {
            setIsFlipped(false);
            setTimeout(() => {
              getRandomData();
            }, 300);
          }}
          className={styles.genereren}
        >
          genereren
        </button>
      </div>

      <div className={styles.numberCard} onClick={flipCard}>
        <div
          className={`${styles.numberCardInner} ${
            isFlipped ? styles.isFlipped : ""
          }`}
        >
          {/* Передняя сторона */}
          <div className={`${styles.numberCardFront} ${styles.numberCardFlex}`}>
            <h2 className={styles.digital}>{text.ua}</h2>
          </div>
          {/* Задняя сторона */}
          <div
            className={`${styles.numberCardBack} ${styles.numberCardBackClock}`}
          >
            <h2 className={styles.digital}>{text.nl}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tijden;
