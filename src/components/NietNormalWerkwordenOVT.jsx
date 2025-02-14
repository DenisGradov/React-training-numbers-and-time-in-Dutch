import { useState } from "react";
import styles from "../styles/app.module.scss";
import logo from "../../public/logo.jpg";
import { Link } from "react-router-dom";

// Список слов (OVT) с украинским переводом
const words = [
  { infinitive: "aandoen", pastSingular: "deed aan", pastPlural: "deden aan", translation: "делать" },
  { infinitive: "aankomen", pastSingular: "kwam aan", pastPlural: "kwamen aan", translation: "прийти" },
  { infinitive: "afwassen", pastSingular: "waste af", pastPlural: "wasten af", translation: "мыть посуду" },
  { infinitive: "bakken", pastSingular: "bakte", pastPlural: "bakten", translation: "печь" },
  { infinitive: "beginnen", pastSingular: "begon", pastPlural: "begonnen", translation: "начинать" },
  { infinitive: "bezoeken", pastSingular: "bezocht", pastPlural: "bezochten", translation: "посещать" },
  { infinitive: "blijven", pastSingular: "bleef", pastPlural: "bleven", translation: "оставаться" },
  { infinitive: "breken", pastSingular: "brak", pastPlural: "braken", translation: "ломать" },
  { infinitive: "brengen", pastSingular: "bracht", pastPlural: "brachten", translation: "приносить" },
  { infinitive: "denken", pastSingular: "dacht", pastPlural: "dachten", translation: "думать" },
  { infinitive: "doen", pastSingular: "deed", pastPlural: "deden", translation: "делать" },
  { infinitive: "dragen", pastSingular: "droeg", pastPlural: "droegen", translation: "носить" },
  { infinitive: "drinken", pastSingular: "dronk", pastPlural: "dronken", translation: "пить" },
  { infinitive: "eten", pastSingular: "at", pastPlural: "aten", translation: "есть" },
  { infinitive: "gaan", pastSingular: "ging", pastPlural: "gingen", translation: "идти" },
  { infinitive: "geven", pastSingular: "gaf", pastPlural: "gaven", translation: "давать" },
  { infinitive: "hangen", pastSingular: "hing", pastPlural: "hingen", translation: "висеть" },
  { infinitive: "hebben", pastSingular: "had", pastPlural: "hadden", translation: "иметь" },
  { infinitive: "helpen", pastSingular: "hielp", pastPlural: "hielpen", translation: "помогать" },
  { infinitive: "innemen", pastSingular: "nam in", pastPlural: "namen in", translation: "принимать (лекарство)" },
  { infinitive: "kiezen", pastSingular: "koos", pastPlural: "kozen", translation: "выбирать" },
  { infinitive: "kijken", pastSingular: "keek", pastPlural: "keken", translation: "смотреть" },
  { infinitive: "komen", pastSingular: "kwam", pastPlural: "kwamen", translation: "приходить" },
  { infinitive: "kopen", pastSingular: "kocht", pastPlural: "kochten", translation: "покупать" },
  { infinitive: "krijgen", pastSingular: "kreeg", pastPlural: "kregen", translation: "получать" },
  { infinitive: "kunnen", pastSingular: "kon", pastPlural: "konden", translation: "мочь" },
  { infinitive: "lachen", pastSingular: "lachte", pastPlural: "lachten", translation: "смеяться" },
  { infinitive: "lezen", pastSingular: "las", pastPlural: "lazen", translation: "читать" },
  { infinitive: "liggen", pastSingular: "lag", pastPlural: "lagen", translation: "лежать" },
  { infinitive: "lopen", pastSingular: "liep", pastPlural: "liepen", translation: "бежать" },
  { infinitive: "rijden", pastSingular: "reed", pastPlural: "reden", translation: "ехать" },
  { infinitive: "roepen", pastSingular: "riep", pastPlural: "riepen", translation: "звать" },
  { infinitive: "schrijven", pastSingular: "schreef", pastPlural: "schreven", translation: "писать" },
  { infinitive: "slapen", pastSingular: "sliep", pastPlural: "sliepen", translation: "спать" },
  { infinitive: "sluiten", pastSingular: "sloot", pastPlural: "sloten", translation: "закрывать" },
  { infinitive: "spreken", pastSingular: "sprak", pastPlural: "spraken", translation: "говорить" },
  { infinitive: "staan", pastSingular: "stond", pastPlural: "stonden", translation: "стоять" },
  { infinitive: "trekken", pastSingular: "trok", pastPlural: "trokken", translation: "тянуть" },
  { infinitive: "vallen", pastSingular: "viel", pastPlural: "vielen", translation: "падать" },
  { infinitive: "verliezen", pastSingular: "verloor", pastPlural: "verloren", translation: "терять" },
  { infinitive: "vinden", pastSingular: "vond", pastPlural: "vonden", translation: "находить" },
  { infinitive: "vliegen", pastSingular: "vloog", pastPlural: "vlogen", translation: "летать" },
  { infinitive: "weten", pastSingular: "wist", pastPlural: "wisten", translation: "знать" },
  { infinitive: "wijzen", pastSingular: "wees", pastPlural: "wezen", translation: "указывать" },
  { infinitive: "winnen", pastSingular: "won", pastPlural: "wonnen", translation: "выигрывать" },
  { infinitive: "worden", pastSingular: "werd", pastPlural: "werden", translation: "становиться" },
  { infinitive: "zeggen", pastSingular: "zei", pastPlural: "zeiden", translation: "говорить" },
  { infinitive: "zien", pastSingular: "zag", pastPlural: "zagen", translation: "видеть" },
  { infinitive: "zijn", pastSingular: "was", pastPlural: "waren", translation: "быть" },
  { infinitive: "zingen", pastSingular: "zong", pastPlural: "zongen", translation: "петь" },
  { infinitive: "zitten", pastSingular: "zat", pastPlural: "zaten", translation: "сидеть" },
  { infinitive: "zoeken", pastSingular: "zocht", pastPlural: "zochten", translation: "искать" },
  { infinitive: "zwemmen", pastSingular: "zwom", pastPlural: "zwommen", translation: "плавать" },
];


const NietNormalWerkwordenOVT = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [languagePreference, setLanguagePreference] = useState("nl"); // "nl" для нидерландского, "ua" для украинского

  // Дополнительные состояния для ввода начального и конечного индексов
  const [startIndex, setStartIndex] = useState("1");
  const [endIndex, setEndIndex] = useState("15");

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const
    handleNext = () => {
    // Преобразуем значения из инпутов к числам
    let sIndex = parseInt(startIndex, 10) || 1;
    let eIndex = parseInt(endIndex, 10) || words.length;

    // Зажимаем значения в пределах 1...words.length
    if (sIndex < 1) sIndex = 1;
    if (eIndex < 1) eIndex = 1;
    if (sIndex > words.length) sIndex = words.length;
    if (eIndex > words.length) eIndex = words.length;

    // Убедимся, что from <= to
    const from = Math.min(sIndex, eIndex);
    const to = Math.max(sIndex, eIndex);

    // Генерируем случайный индекс в диапазоне [from-1, to-1]
    const randomIndex = Math.floor(Math.random() * (to - from + 1)) + (from - 1);

    setCurrentWord(words[randomIndex]);
    setIsFlipped(false); // Вернуть карточку в изначальное положение
  };

  return (
    <div className={styles.body}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo" />
      </Link>

      {/* Радиокнопки для выбора языка */}
      <h2 style={{ color: "white" }}>Одразу:</h2>
      <div className={styles.radioGroup}>
        <label className={styles.clockTypeinput}>
          <input
            type="radio"
            name="language"
            value="ua"
            checked={languagePreference === "ua"}
            onChange={() => setLanguagePreference("ua")}
            className={styles.clockTypeinput}
          />
          Українська
        </label>
        <label className={styles.clockTypeinput}>
          <input
            type="radio"
            name="language"
            value="nl"
            checked={languagePreference === "nl"}
            onChange={() => setLanguagePreference("nl")}
            className={styles.clockTypeinput}
          />
          Nederlands
        </label>
      </div>

      {/* Поля ввода диапазона */}
      <div className={styles.radioGroup} style={{ marginTop: "20px" }}>
        <label className={styles.clockTypeinput}>
          Від:
          <input
            type="number"
            min="1"
            max={words.length}
            value={startIndex}
            onChange={(e) => setStartIndex(e.target.value)}
            className={styles.clockTypeinput}
            style={{ width: "60px", marginLeft: "8px" }}
          />
        </label>

        <label className={styles.clockTypeinput} style={{ marginLeft: "16px" }}>
          До:
          <input
            type="number"
            min="1"
            max={words.length}
            value={endIndex}
            onChange={(e) => setEndIndex(e.target.value)}
            className={styles.clockTypeinput}
            style={{ width: "60px", marginLeft: "8px" }}
          />
        </label>
      </div>

      {/* Карточка */}
      <div className={styles.cardWithMove} onClick={handleFlip}>
        <div className={`${styles.numberCardInner} ${isFlipped ? styles.isFlipped : ""}`}>
          {/* Передняя сторона */}
          <div className={styles.numberCardFront}>
            <h2 className={styles.cardWithMove__text}>
              {languagePreference === "nl" ? currentWord.infinitive : currentWord.translation}
            </h2>
          </div>
          {/* Задняя сторона */}
          <div className={`${styles.numberCardBack} flex flex-col`}>
            <h2 className={`${styles.cardWithMove__text} mt-[-25px]`}>
              {currentWord.infinitive}
            </h2>
            <h2 className={styles.cardWithMove__text}>
              {currentWord.pastSingular} - {currentWord.pastPlural}
            </h2>
            <h2 className={`${styles.cardWithMove__text} mt-[25px]`}>
              {currentWord.translation}
            </h2>
          </div>
        </div>
      </div>

      {/* Кнопка Next */}
      <div className={styles.genererenBlock}>
        <button onClick={handleNext} className={styles.genereren}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NietNormalWerkwordenOVT;