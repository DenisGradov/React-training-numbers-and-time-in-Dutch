// NummerPage.js
import styles from "../styles/app.module.scss";
import logo from "../../public/logo.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import irregularVerbs from "../data/onregelmatigeWerkwoorden";

const NietNormalWerkworden = () => {
  function getRandomInt(min, max) {
    if (min < 1) min = 1;
    if (max > irregularVerbs.length) max = irregularVerbs.length;
    if (min > max) min = max;

    // Генерация случайного числа в пределах от min до max включительно
    return Math.floor(Math.random() * (max - min + 1)) + min - 1;
  }

  const minWerkWordIndexFromLocal = localStorage.getItem("minWerkWordIndex");
  const maxWerkWordIndexFromLocal = localStorage.getItem("maxWerkWordIndex");
  const [minWerkWordIndex, setMinWerkWordIndex] = useState(
    minWerkWordIndexFromLocal == undefined ? 0 : minWerkWordIndexFromLocal
  );
  const [maxWerkWordIndex, setMaxWerkWordIndex] = useState(
    maxWerkWordIndexFromLocal == undefined
      ? irregularVerbs.length - 1
      : maxWerkWordIndexFromLocal
  );
  const [status, setStatus] = useState("ua");
  const [text, setText] = useState(["", ""]);
  function getRandomData() {
    setStatus("ua");
    setText(
      irregularVerbs[
        getRandomInt(parseInt(minWerkWordIndex), parseInt(maxWerkWordIndex))
      ]
    );
  }
  useEffect(() => {
    getRandomData();
  }, []);
  useEffect(() => {
    localStorage.setItem("minWerkWordIndex", minWerkWordIndex);
  }, [minWerkWordIndex]);
  useEffect(() => {
    localStorage.setItem("maxWerkWordIndex", maxWerkWordIndex);
  }, [maxWerkWordIndex]);
  const statusDescription = {
    nl: "Nederlands",
    nlvtt: "Nederlands V.T.T.",
    ua: "Oekraïnse",
    uavtt: "Oekraïens V.T.T.",
  };
  function handleNextClick() {
    const choise = {
      ua: "nl",
      nl: "uavtt",
      uavtt: "nlvtt",
      nlvtt: "ua",
    };
    setStatus((prevStatus) => choise[prevStatus]);
  }
  console.log(text);
  return (
    <div className={styles.body}>
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
      <div className={styles.clockType}></div>
      <div className={styles.genererenBlock}>
        <button onClick={getRandomData} className={styles.genereren}>
          genereren
        </button>
      </div>
      <h2 className={styles.inputsBlockText}>
        Aantal werkwoorden (van 1 tot {irregularVerbs.length})
      </h2>
      <div className={styles.inputsBlock}>
        <input
          placeholder="min"
          value={minWerkWordIndex}
          onChange={(e) => setMinWerkWordIndex(e.target.value)}
        />
        <input
          placeholder="max"
          value={maxWerkWordIndex}
          onChange={(e) => setMaxWerkWordIndex(e.target.value)}
        />
      </div>
      <div className={styles.cardWithMove}>
        <h2 className={styles.cardWithMove__status}>
          {statusDescription[status]}
        </h2>
        <h2 className={styles.cardWithMove__text}>{text[status]}</h2>
      </div>

      <div className={styles.genererenBlock}>
        <button onClick={handleNextClick} className={styles.genererenNext}>
          next
        </button>
      </div>
    </div>
  );
};

export default NietNormalWerkworden;
