// NummerPage.js
import styles from "../styles/app.module.scss";
import logo from "../../public/logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nummer = () => {
  const [minMax, setMinMax] = useState({ Min: 0, Max: 100 });
  const [value, setValue] = useState(24);
  const [isFlipped, setIsFlipped] = useState(false);
  const HandleChangeMinMax = (minOrMax, inputValue) => {
    let value = parseInt(inputValue, 10);

    // Если значение не является числом, прерываем выполнение функции
    if (isNaN(value)) return;

    // Создаем копию текущего состояния minMax
    let newMinMax = { ...minMax };

    // Применяем логику коррекции для минимального и максимального значения
    if (minOrMax === "Min") {
      // Корректируем минимальное значение, если оно меньше 0
      newMinMax.Min = Math.max(0, value);

      // Убедимся, что максимальное значение не меньше минимального
      if (newMinMax.Max !== "" && parseInt(newMinMax.Max, 10) < newMinMax.Min) {
        newMinMax.Max = newMinMax.Min;
      }
    } else if (minOrMax === "Max") {
      // Ограничиваем максимальное значение сверху значением 999
      newMinMax.Max = Math.min(999, value);

      // Убедимся, что минимальное значение не больше максимального
      if (newMinMax.Min !== "" && parseInt(newMinMax.Min, 10) > newMinMax.Max) {
        newMinMax.Min = newMinMax.Max;
      }
    }

    // Обновляем состояние minMax новыми значениями
    setMinMax(newMinMax);
  };

  const GenerateValue = () => {
    const min = Number(minMax.Min);
    const max = Number(minMax.Max);
    setValue(Math.floor(Math.random() * (max - min + 1)) + min);
  };
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  function NumberToDutch(number) {
    if (number < 0 || number > 999) {
      return <div>Buiten bereik</div>; // Вне диапазона
    }

    const units = [
      "nul",
      "één",
      "twee",
      "drie",
      "vier",
      "vijf",
      "zes",
      "zeven",
      "acht",
      "negen",
    ];
    const teens = [
      "tien",
      "elf",
      "twaalf",
      "dertien",
      "veertien",
      "vijftien",
      "zestien",
      "zeventien",
      "achttien",
      "negentien",
    ];
    const tens = [
      "",
      "tien",
      "twintig",
      "dertig",
      "veertig",
      "vijftig",
      "zestig",
      "zeventig",
      "tachtig",
      "negentig",
    ];

    let parts = []; // Массив для хранения частей числительного

    if (number < 10) {
      parts.push(units[number]);
    } else if (number < 20) {
      parts.push(teens[number - 10]);
    } else if (number < 100) {
      const ten = Math.floor(number / 10);
      const unit = number % 10;
      if (unit > 0) {
        parts.push(units[unit], "en");
      }
      parts.push(tens[ten]);
    } else {
      const hundred = Math.floor(number / 100);
      const remainder = number % 100;
      if (hundred > 1) {
        parts.push(units[hundred]);
      }
      parts.push("honderd");

      if (remainder > 0) {
        if (remainder < 10) {
          parts.push(units[remainder]);
        } else if (remainder < 20) {
          parts.push(teens[remainder - 10]);
        } else {
          const ten = Math.floor(remainder / 10);
          const unit = remainder % 10;
          if (unit > 0) {
            parts.push(units[unit], "en");
          }
          parts.push(tens[ten]);
        }
      }
    }

    return (
      <div>
        {parts.map((part, index) => (
          <div key={index}>{part}</div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.numerTop}>
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
      <div className={styles.form}>
        <input
          type="number"
          className={styles.input}
          value={minMax.Min}
          onChange={(e) => {
            HandleChangeMinMax("Min", e.target.value);
          }}
          placeholder="Minimaal aantal"
        ></input>
        <input
          type="number"
          className={styles.input}
          value={minMax.Max}
          onChange={(e) => {
            HandleChangeMinMax("Max", e.target.value);
          }}
          placeholder="Maximaal aantal"
        ></input>
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
          <div className={styles.numberCardFront}>
            <h2 className={styles.numberCardValue}>{value}</h2>
          </div>
          {/* Задняя сторона */}
          <div className={styles.numberCardBack}>
            <div className={styles.numberCardBackBlock}>
              <h2 className={styles.numberCardValueBack}>{value}</h2>

              <h2 className={styles.numberCardValueBackk}>
                {NumberToDutch(value)}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nummer;
