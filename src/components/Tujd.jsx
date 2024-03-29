// NummerPage.js
import styles from "../styles/app.module.scss";
import logo from "../../public/logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Tujd = () => {
  const [time, setTime] = useState({ Hour: 13, Minute: 0 });

  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };
  const [clockType, setClockType] = useState("none");
  const handleChange = (event) => {
    setClockType(event.target.value);
  };
  const GenerateValue = () => {
    const Hour = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    const Minute = Math.floor(Math.random() * (60 - 0 + 1)) + 0;
    setTime({ Hour, Minute });
  };
  function describeTimeInDutch(time) {
    let hours = time.Hour % 12; // Приводим часы к 12-часовому формату
    let minutes = time.Minute;
    let description = "";
    let timeOfDay = ""; // Для времени суток

    // Определяем время суток
    if (time.Hour < 6) {
      timeOfDay = "'s nachts";
    } else if (time.Hour < 12) {
      timeOfDay = "'s morgens";
    } else if (time.Hour < 18) {
      timeOfDay = "'s middags";
    } else {
      timeOfDay = "'s avonds";
    }

    // Специальные случаи для полуночи и полудня
    if (time.Hour === 0 && minutes === 0) {
      return "middernacht";
    } else if (time.Hour === 12 && minutes === 0) {
      return "middag";
    }

    // Обработка минут близких к 30
    if (minutes > 15 && minutes < 45 && Math.abs(minutes - 30) < 15) {
      if (minutes < 30) {
        description = `${30 - minutes} voor half ${hours + 1}`;
      } else {
        description = `${minutes - 30} over half ${hours + 1}`;
      }
    } else if (minutes === 0) {
      description = `${hours === 0 ? 12 : hours} uur`;
    } else if (minutes === 15) {
      description = `kwart over ${hours}`;
    } else if (minutes === 30) {
      description = `half ${hours + 1}`;
    } else if (minutes === 45) {
      description = `kwart voor ${hours + 1}`;
    } else if (minutes < 30) {
      description = `${minutes} over ${hours}`;
    } else {
      description = `${60 - minutes} voor ${hours + 1}`;
    }

    // Корректируем вывод для 12-часового формата
    hours = hours === 0 ? 12 : hours;

    return `${description}\n${timeOfDay}`.trim();
  }

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
              name="clockType"
              value="analog"
              checked={clockType === "analog"}
              onChange={handleChange}
              className={styles.clockTypeinput}
            />
            Analoog
          </label>
          <label className={styles.clockTypeinput}>
            <input
              type="radio"
              name="clockType"
              value="digital"
              checked={clockType === "digital"}
              onChange={handleChange}
              className={styles.clockTypeinput}
            />
            Digitaal
          </label>
          <label className={styles.clockTypeinput}>
            <input
              type="radio"
              name="clockType"
              value="none"
              checked={clockType === "none"}
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
              GenerateValue();
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
            {clockType == "analog" || clockType == "none" ? (
              <div className={styles.clock}>
                <div className={styles.clockCentr}></div>
                <div className={styles.clock1}>1</div>
                <div className={styles.clock2}>2</div>
                <div className={styles.clock3}>3</div>
                <div className={styles.clock4}>4</div>
                <div className={styles.clock5}>5</div>
                <div className={styles.clock6}>6</div>
                <div className={styles.clock7}>7</div>
                <div className={styles.clock8}>8</div>
                <div className={styles.clock9}>9</div>
                <div className={styles.clock10}>10</div>
                <div className={styles.clock11}>11</div>
                <div className={styles.clock12}>12</div>
                <div
                  className={`${styles.clockHand} ${styles.clockHour}`}
                  style={{
                    transform: `translate(-50%, 0) rotate(${
                      (time.Hour % 12) * 30 + time.Minute * 0.5
                    }deg)`,
                  }}
                ></div>
                <div
                  className={`${styles.clockHand} ${styles.clockMinute}`}
                  style={{
                    transform: `translate(-50%, 0) rotate(${
                      time.Minute * 6
                    }deg)`,
                  }}
                ></div>
              </div>
            ) : (
              ""
            )}
            {clockType == "digital" || clockType == "none" ? (
              <h2 className={styles.digital}>
                {time.Hour < 10 ? `0${time.Hour}` : time.Hour}:
                {time.Minute < 10 ? `0${time.Minute}` : time.Minute}
              </h2>
            ) : (
              ""
            )}
          </div>
          {/* Задняя сторона */}
          <div
            className={`${styles.numberCardBack} ${styles.numberCardBackClock}`}
          >
            {clockType == "analog" || clockType == "none" ? (
              <div className={styles.clock}>
                <div className={styles.clockCentr}></div>
                <div className={styles.clock1}>1</div>
                <div className={styles.clock2}>2</div>
                <div className={styles.clock3}>3</div>
                <div className={styles.clock4}>4</div>
                <div className={styles.clock5}>5</div>
                <div className={styles.clock6}>6</div>
                <div className={styles.clock7}>7</div>
                <div className={styles.clock8}>8</div>
                <div className={styles.clock9}>9</div>
                <div className={styles.clock10}>10</div>
                <div className={styles.clock11}>11</div>
                <div className={styles.clock12}>12</div>
                <div
                  className={`${styles.clockHand} ${styles.clockHour}`}
                  style={{
                    transform: `translate(-50%, 0) rotate(${
                      (time.Hour % 12) * 30 + time.Minute * 0.5
                    }deg)`,
                  }}
                ></div>
                <div
                  className={`${styles.clockHand} ${styles.clockMinute}`}
                  style={{
                    transform: `translate(-50%, 0) rotate(${
                      time.Minute * 6
                    }deg)`,
                  }}
                ></div>
              </div>
            ) : (
              ""
            )}
            {clockType == "digital" || clockType == "none" ? (
              <h2 className={styles.digital}>
                {time.Hour < 10 ? `0${time.Hour}` : time.Hour}:
                {time.Minute < 10 ? `0${time.Minute}` : time.Minute}
              </h2>
            ) : (
              ""
            )}
            <div className={styles.textTime}>{describeTimeInDutch(time)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tujd;
