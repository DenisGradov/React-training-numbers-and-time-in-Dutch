import { useState } from "react";
import styles from "../styles/app.module.scss";
import logo from "../../public/logo.jpg";
import { Link } from "react-router-dom";

// Список слов с инфинитивом, прошедшей формой и переводом на украинский
const words = [
  { infinitive: "bakken", pastParticiple: "gebakken", translation: "пекти" },
  { infinitive: "begrijpen", pastParticiple: "begrepen", translation: "розуміти" },
  { infinitive: "bezoeken", pastParticiple: "bezocht", translation: "відвідувати" },
  { infinitive: "bidden", pastParticiple: "gebeden", translation: "молитися" },
  { infinitive: "brengen", pastParticiple: "gebracht", translation: "приносити" },
  { infinitive: "doen", pastParticiple: "gedaan", translation: "робити" },
  { infinitive: "drinken", pastParticiple: "gedronken", translation: "пити" },
  { infinitive: "eten", pastParticiple: "gegeten", translation: "їсти" },
  { infinitive: "genieten", pastParticiple: "genoten", translation: "насолоджуватися" },
  { infinitive: "geven", pastParticiple: "gegeven", translation: "давати" },
  { infinitive: "hangen", pastParticiple: "gehangen", translation: "висіти" },
  { infinitive: "hebben", pastParticiple: "gehad", translation: "мати" },
  { infinitive: "helpen", pastParticiple: "geholpen", translation: "допомагати" },
  { infinitive: "kiezen", pastParticiple: "gekozen", translation: "обирати" },
  { infinitive: "kijken", pastParticiple: "gekeken", translation: "дивитися" },
  { infinitive: "kopen", pastParticiple: "gekocht", translation: "купувати" },
  { infinitive: "krijgen", pastParticiple: "gekregen", translation: "отримувати" },
  { infinitive: "lachen", pastParticiple: "gelachen", translation: "сміятися" },
  { infinitive: "lezen", pastParticiple: "gelezen", translation: "читати" },
  { infinitive: "liegen", pastParticiple: "gelogen", translation: "брехати" },
  { infinitive: "liggen", pastParticiple: "gelegen", translation: "лежати" },
  { infinitive: "nemen", pastParticiple: "genomen", translation: "брати" },
  { infinitive: "ontbijten", pastParticiple: "ontbeten", translation: "снідати" },
  { infinitive: "roepen", pastParticiple: "geroepen", translation: "кликати" },
  { infinitive: "scheren", pastParticiple: "geschoren", translation: "голити" },
  { infinitive: "schrijven", pastParticiple: "geschreven", translation: "писати" },
  { infinitive: "slapen", pastParticiple: "geslapen", translation: "спати" },
  { infinitive: "sluiten", pastParticiple: "gesloten", translation: "закривати" },
  { infinitive: "snijden", pastParticiple: "gesneden", translation: "різати" },
  { infinitive: "spreken", pastParticiple: "gesproken", translation: "говорити" },
  { infinitive: "staan", pastParticiple: "gestaan", translation: "стояти" },
  { infinitive: "steken", pastParticiple: "gestoken", translation: "колоти" },
  { infinitive: "stelen", pastParticiple: "gestolen", translation: "красти" },
  { infinitive: "strijken", pastParticiple: "gestreken", translation: "прасувати" },
  { infinitive: "vechten", pastParticiple: "gevochten", translation: "битися" },
  { infinitive: "verkopen", pastParticiple: "verkocht", translation: "продавати" },
  { infinitive: "verliezen", pastParticiple: "verloren", translation: "губити" },
  { infinitive: "vervangen", pastParticiple: "vervangen", translation: "заміняти" },
  { infinitive: "vinden", pastParticiple: "gevonden", translation: "знаходити" },
  { infinitive: "wassen", pastParticiple: "gewassen", translation: "мити" },
  { infinitive: "winnen", pastParticiple: "gewonnen", translation: "вигравати" },
  { infinitive: "zien", pastParticiple: "gezien", translation: "бачити" },
  { infinitive: "zingen", pastParticiple: "gezongen", translation: "співати" },
  { infinitive: "zitten", pastParticiple: "gezeten", translation: "сидіти" },
  { infinitive: "zoeken", pastParticiple: "gezocht", translation: "шукати" },
  { infinitive: "zwijgen", pastParticiple: "gezwegen", translation: "мовчати" },
  { infinitive: "beginnen", pastParticiple: "begonnen", translation: "починати" },
  { infinitive: "bevallen", pastParticiple: "bevallen", translation: "народжувати" },
  { infinitive: "blijven", pastParticiple: "gebleven", translation: "залишатися" },
  { infinitive: "gaan", pastParticiple: "gegaan", translation: "йти" },
  { infinitive: "komen", pastParticiple: "gekomen", translation: "приходити" },
  { infinitive: "opstaan", pastParticiple: "opgestaan", translation: "вставати" },
  { infinitive: "overlijden", pastParticiple: "overleden", translation: "померти" },
  { infinitive: "scheiden", pastParticiple: "gescheiden", translation: "розлучатися" },
  { infinitive: "sterven", pastParticiple: "gestorven", translation: "помирати" },
  { infinitive: "vallen", pastParticiple: "gevallen", translation: "падати" },
  { infinitive: "vertrekken", pastParticiple: "vertrokken", translation: "відправлятися" },
  { infinitive: "worden", pastParticiple: "geworden", translation: "ставати" },
  { infinitive: "zijn", pastParticiple: "geweest", translation: "бути" },
];

const NietNormalWerkwordenVTT = () => {
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
              <h2 className={`${styles.cardWithMove__text} `}>
                {currentWord.pastParticiple}
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

export default NietNormalWerkwordenVTT;
