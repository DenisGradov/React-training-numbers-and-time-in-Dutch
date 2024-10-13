import { useState } from "react";
import styles from "../styles/app.module.scss";
import logo from "../../public/logo.jpg";
import { Link } from "react-router-dom";

// Список слов в прошедшем времени с переводом
const words = [
  { infinitive: "beginnen", pastSingular: "begon", pastPlural: "begonnen", translation: "починати" },
  { infinitive: "begrijpen", pastSingular: "begreep", pastPlural: "begrepen", translation: "розуміти" },
  { infinitive: "bezoeken", pastSingular: "bezocht", pastPlural: "bezochten", translation: "відвідувати" },
  { infinitive: "bidden", pastSingular: "bad", pastPlural: "baden", translation: "молитися" },
  { infinitive: "blijven", pastSingular: "bleef", pastPlural: "bleven", translation: "залишатися" },
  { infinitive: "brengen", pastSingular: "bracht", pastPlural: "brachten", translation: "приносити" },
  { infinitive: "denken", pastSingular: "dacht", pastPlural: "dachten", translation: "думати" },
  { infinitive: "doen", pastSingular: "deed", pastPlural: "deden", translation: "робити" },
  { infinitive: "dragen", pastSingular: "droeg", pastPlural: "droegen", translation: "носити" },
  { infinitive: "drinken", pastSingular: "dronk", pastPlural: "dronken", translation: "пити" },
  { infinitive: "eten", pastSingular: "at", pastPlural: "aten", translation: "їсти" },
  { infinitive: "gaan", pastSingular: "ging", pastPlural: "gingen", translation: "йти" },
  { infinitive: "genieten", pastSingular: "genoot", pastPlural: "genoten", translation: "насолоджуватися" },
  { infinitive: "geven", pastSingular: "gaf", pastPlural: "gaven", translation: "давати" },
  { infinitive: "hangen", pastSingular: "hing", pastPlural: "hingen", translation: "висіти" },
  { infinitive: "hebben", pastSingular: "had", pastPlural: "hadden", translation: "мати" },
  { infinitive: "helpen", pastSingular: "hielp", pastPlural: "hielpen", translation: "допомагати" },
  { infinitive: "kijken", pastSingular: "keek", pastPlural: "keken", translation: "дивитися" },
  { infinitive: "komen", pastSingular: "kwam", pastPlural: "kwamen", translation: "приходити" },
  { infinitive: "kopen", pastSingular: "kocht", pastPlural: "kochten", translation: "купувати" },
  { infinitive: "kunnen", pastSingular: "kon", pastPlural: "konden", translation: "могти" },
  { infinitive: "krijgen", pastSingular: "kreeg", pastPlural: "kregen", translation: "отримувати" },
  { infinitive: "lezen", pastSingular: "las", pastPlural: "lazen", translation: "читати" },
  { infinitive: "liggen", pastSingular: "lag", pastPlural: "lagen", translation: "лежати" },
  { infinitive: "moeten", pastSingular: "moest", pastPlural: "moesten", translation: "повинен" },
  { infinitive: "mogen", pastSingular: "mocht", pastPlural: "mochten", translation: "могти (дозвіл)" },
  { infinitive: "nemen", pastSingular: "nam", pastPlural: "namen", translation: "брати" },
  { infinitive: "ontbijten", pastSingular: "ontbeet", pastPlural: "ontbeten", translation: "снідати" },
  { infinitive: "overlijden", pastSingular: "overleed", pastPlural: "overleden", translation: "помирати" },
  { infinitive: "opstaan", pastSingular: "stond op", pastPlural: "stonden op", translation: "вставати" },
  { infinitive: "rijden", pastSingular: "reed", pastPlural: "reden", translation: "їхати" },
  { infinitive: "schrijven", pastSingular: "schreef", pastPlural: "schreven", translation: "писати" },
  { infinitive: "slapen", pastSingular: "sliep", pastPlural: "sliepen", translation: "спати" },
  { infinitive: "sluiten", pastSingular: "sloot", pastPlural: "sloten", translation: "закривати" },
  { infinitive: "spreken", pastSingular: "sprak", pastPlural: "spraken", translation: "говорити" },
  { infinitive: "staan", pastSingular: "stond", pastPlural: "stonden", translation: "стояти" },
  { infinitive: "steken", pastSingular: "stak", pastPlural: "staken", translation: "колоти" },
  { infinitive: "stelen", pastSingular: "stal", pastPlural: "stalen", translation: "красти" },
  { infinitive: "sterven", pastSingular: "stierf", pastPlural: "stierven", translation: "вмирати" },
  { infinitive: "vallen", pastSingular: "viel", pastPlural: "vielen", translation: "падати" },
  { infinitive: "verkopen", pastSingular: "verkocht", pastPlural: "verkochten", translation: "продавати" },
  { infinitive: "verliezen", pastSingular: "verloor", pastPlural: "verloren", translation: "втрачати" },
  { infinitive: "vertrekken", pastSingular: "vertrok", pastPlural: "vertrokken", translation: "відправлятися" },
  { infinitive: "vinden", pastSingular: "vond", pastPlural: "vonden", translation: "знаходити" },
  { infinitive: "vragen", pastSingular: "vroeg", pastPlural: "vroegen", translation: "запитувати" },
  { infinitive: "weten", pastSingular: "wist", pastPlural: "wisten", translation: "знати" },
  { infinitive: "willen", pastSingular: "wilde", pastPlural: "wilden", translation: "хотіти" },
  { infinitive: "winnen", pastSingular: "won", pastPlural: "wonnen", translation: "вигравати" },
  { infinitive: "worden", pastSingular: "werd", pastPlural: "werden", translation: "ставати" },
  { infinitive: "zeggen", pastSingular: "zei", pastPlural: "zeiden", translation: "казати" },
  { infinitive: "zien", pastSingular: "zag", pastPlural: "zagen", translation: "бачити" },
  { infinitive: "zingen", pastSingular: "zong", pastPlural: "zongen", translation: "співати" },
  { infinitive: "zitten", pastSingular: "zat", pastPlural: "zaten", translation: "сидіти" },
  { infinitive: "zoeken", pastSingular: "zocht", pastPlural: "zochten", translation: "шукати" },
  { infinitive: "zwemmen", pastSingular: "zwom", pastPlural: "zwommen", translation: "плавати" },
  { infinitive: "zwijgen", pastSingular: "zweeg", pastPlural: "zwegen", translation: "мовчати" },
];

const NietNormalWerkwordenOVT = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [languagePreference, setLanguagePreference] = useState("nl"); // "nl" для нидерландского, "ua" для украинского

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
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
