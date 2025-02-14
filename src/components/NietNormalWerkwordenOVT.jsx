import { useState } from "react";
import styles from "../styles/app.module.scss";
import logo from "../../public/logo.jpg";
import { Link } from "react-router-dom";

// Список слов (OVT) с украинским переводом
const words = [
  { infinitive: "aandoen", pastSingular: "deed aan", pastPlural: "deden aan", translation: "надягати / вмикати" },
  { infinitive: "aankomen", pastSingular: "kwam aan", pastPlural: "kwamen aan", translation: "приїжджати / прибувати" },
  { infinitive: "bakken", pastSingular: "bakte", pastPlural: "bakten", translation: "пекти / смажити" },
  { infinitive: "beginnen", pastSingular: "begon", pastPlural: "begonnen", translation: "починати" },
  { infinitive: "begrijpen", pastSingular: "begreep", pastPlural: "begrepen", translation: "розуміти" },
  { infinitive: "bekijken", pastSingular: "bekeek", pastPlural: "bekeken", translation: "розглядати" },
  { infinitive: "beschrijven", pastSingular: "beschreef", pastPlural: "beschreven", translation: "описувати" },
  { infinitive: "besluiten", pastSingular: "besloot", pastPlural: "besloten", translation: "вирішувати" },
  { infinitive: "bezoeken", pastSingular: "bezocht", pastPlural: "bezochten", translation: "відвідувати" },
  { infinitive: "bidden", pastSingular: "bad", pastPlural: "baden", translation: "молитися" },
  { infinitive: "bijten", pastSingular: "beet", pastPlural: "beten", translation: "кусати" },
  { infinitive: "binnenkomen", pastSingular: "kwam binnen", pastPlural: "kwamen binnen", translation: "заходити" },
  { infinitive: "blijven", pastSingular: "bleef", pastPlural: "bleven", translation: "залишатися" },
  { infinitive: "breken", pastSingular: "brak", pastPlural: "braken", translation: "ламати" },
  { infinitive: "brengen", pastSingular: "bracht", pastPlural: "brachten", translation: "приносити" },
  { infinitive: "buigen", pastSingular: "boog", pastPlural: "bogen", translation: "гнути / нахилятися" },
  { infinitive: "denken", pastSingular: "dacht", pastPlural: "dachten", translation: "думати" },
  { infinitive: "doen", pastSingular: "deed", pastPlural: "deden", translation: "робити" },
  { infinitive: "dragen", pastSingular: "droeg", pastPlural: "droegen", translation: "носити" },
  { infinitive: "drinken", pastSingular: "dronk", pastPlural: "dronken", translation: "пити" },
  { infinitive: "duiken", pastSingular: "dook", pastPlural: "doken", translation: "пірнати" },
  { infinitive: "dwingen", pastSingular: "dwong", pastPlural: "dwongen", translation: "примушувати" },
  { infinitive: "eten", pastSingular: "at", pastPlural: "aten", translation: "їсти" },
  { infinitive: "fluiten", pastSingular: "floot", pastPlural: "floten", translation: "свистіти" },
  { infinitive: "gaan", pastSingular: "ging", pastPlural: "gingen", translation: "йти" },
  { infinitive: "gelden", pastSingular: "gold", pastPlural: "golden", translation: "діяти / бути дійсним" },
  { infinitive: "genezen", pastSingular: "genas", pastPlural: "genazen", translation: "одужувати / лікувати" },
  { infinitive: "genieten", pastSingular: "genoot", pastPlural: "genoten", translation: "насолоджуватися" },
  { infinitive: "geven", pastSingular: "gaf", pastPlural: "gaven", translation: "давати" },
  { infinitive: "gieten", pastSingular: "goot", pastPlural: "goten", translation: "лити / наливати" },
  { infinitive: "glijden", pastSingular: "gleed", pastPlural: "gleden", translation: "ковзати" },
  { infinitive: "graven", pastSingular: "groef", pastPlural: "groeven", translation: "копати" },
  { infinitive: "grijpen", pastSingular: "greep", pastPlural: "grepen", translation: "хапати / схоплювати" },
  { infinitive: "hangen", pastSingular: "hing", pastPlural: "hingen", translation: "висіти" },
  { infinitive: "hebben", pastSingular: "had", pastPlural: "hadden", translation: "мати" },
  { infinitive: "helpen", pastSingular: "hielp", pastPlural: "hielpen", translation: "допомагати" },
  { infinitive: "heten", pastSingular: "heette", pastPlural: "heetten", translation: "називатися" },
  { infinitive: "houden", pastSingular: "hield", pastPlural: "hielden", translation: "тримати / любити" },
  { infinitive: "kiezen", pastSingular: "koos", pastPlural: "kozen", translation: "вибирати" },
  { infinitive: "kijken", pastSingular: "keek", pastPlural: "keken", translation: "дивитися" },
  { infinitive: "klimmen", pastSingular: "klom", pastPlural: "klommen", translation: "лізти / підійматися" },
  { infinitive: "klinken", pastSingular: "klonk", pastPlural: "klonken", translation: "звучати" },
  { infinitive: "komen", pastSingular: "kwam", pastPlural: "kwamen", translation: "приходити" },
  { infinitive: "kopen", pastSingular: "kocht", pastPlural: "kochten", translation: "купувати" },
  { infinitive: "krijgen", pastSingular: "kreeg", pastPlural: "kregen", translation: "отримувати" },
  { infinitive: "kunnen", pastSingular: "kon", pastPlural: "konden", translation: "могти" },
  { infinitive: "lachen", pastSingular: "lachte", pastPlural: "lachten", translation: "сміятися" },
  { infinitive: "laten", pastSingular: "liet", pastPlural: "lieten", translation: "дозволяти / залишати" },
  { infinitive: "lezen", pastSingular: "las", pastPlural: "lazen", translation: "читати" },
  { infinitive: "liegen", pastSingular: "loog", pastPlural: "logen", translation: "брехати" },
  { infinitive: "liggen", pastSingular: "lag", pastPlural: "lagen", translation: "лежати" },
  { infinitive: "lijden", pastSingular: "leed", pastPlural: "leden", translation: "страждати" },
  { infinitive: "lijken", pastSingular: "leek", pastPlural: "leken", translation: "здаватися" },
  { infinitive: "lopen", pastSingular: "liep", pastPlural: "liepen", translation: "ходити" },
  { infinitive: "moeten", pastSingular: "moest", pastPlural: "moesten", translation: "повинен / мусити" },
  { infinitive: "mogen", pastSingular: "mocht", pastPlural: "mochten", translation: "могти (дозвіл)" },
  { infinitive: "nemen", pastSingular: "nam", pastPlural: "namen", translation: "брати" },
  { infinitive: "onderzoeken", pastSingular: "onderzocht", pastPlural: "onderzochten", translation: "досліджувати" },
  { infinitive: "ontbijten", pastSingular: "ontbeet", pastPlural: "ontbeten", translation: "снідати" },
  { infinitive: "ontbreken", pastSingular: "ontbrak", pastPlural: "ontbraken", translation: "бракувати / не вистачати" },
  { infinitive: "onthouden", pastSingular: "onthield", pastPlural: "onthielden", translation: "запам'ятовувати" },
  { infinitive: "ontslaan", pastSingular: "ontsloeg", pastPlural: "ontsloegen", translation: "звільняти (з роботи)" },
  { infinitive: "ontstaan", pastSingular: "ontstond", pastPlural: "ontstonden", translation: "виникати" },
  { infinitive: "ontvangen", pastSingular: "ontving", pastPlural: "ontvingen", translation: "отримувати / приймати" },
  { infinitive: "opstaan", pastSingular: "stond op", pastPlural: "stonden op", translation: "вставати" },
  { infinitive: "rijden", pastSingular: "reed", pastPlural: "reden", translation: "їхати" },
  { infinitive: "roepen", pastSingular: "riep", pastPlural: "riepen", translation: "кликати / гукати" },
  { infinitive: "ruiken", pastSingular: "rook", pastPlural: "roken", translation: "нюхати / пахнути" },
  { infinitive: "scheiden", pastSingular: "scheidde", pastPlural: "scheidden", translation: "розлучатися / розділятися" },
  { infinitive: "schenken", pastSingular: "schonk", pastPlural: "schonken", translation: "дарувати / наливати" },
  { infinitive: "schieten", pastSingular: "schoot", pastPlural: "schoten", translation: "стріляти" },
  { infinitive: "schijnen", pastSingular: "scheen", pastPlural: "schenen", translation: "світити / здаватися" },
  { infinitive: "schrijven", pastSingular: "schreef", pastPlural: "schreven", translation: "писати" },
  { infinitive: "schrikken", pastSingular: "schrok", pastPlural: "schrokken", translation: "лякатися" },
  { infinitive: "schuiven", pastSingular: "schoof", pastPlural: "schoven", translation: "посувати / зсувати" },
  { infinitive: "slaan", pastSingular: "sloeg", pastPlural: "sloegen", translation: "бити / вдаряти" },
  { infinitive: "slapen", pastSingular: "sliep", pastPlural: "sliepen", translation: "спати" },
  { infinitive: "sluiten", pastSingular: "sloot", pastPlural: "sloten", translation: "закривати" },
  { infinitive: "snijden", pastSingular: "sneed", pastPlural: "sneden", translation: "різати" },
  { infinitive: "spijten", pastSingular: "speet", pastPlural: "", translation: "шкодувати" }, // безличный глагол
  { infinitive: "spreken", pastSingular: "sprak", pastPlural: "spraken", translation: "говорити" },
  { infinitive: "springen", pastSingular: "sprong", pastPlural: "sprongen", translation: "стрибати" },
  { infinitive: "staan", pastSingular: "stond", pastPlural: "stonden", translation: "стояти" },
  { infinitive: "steken", pastSingular: "stak", pastPlural: "staken", translation: "колоти / вколювати" },
  { infinitive: "stelen", pastSingular: "stal", pastPlural: "stalen", translation: "красти" },
  { infinitive: "sterven", pastSingular: "stierf", pastPlural: "stierven", translation: "вмирати" },
  { infinitive: "stijgen", pastSingular: "steeg", pastPlural: "stegen", translation: "підніматися / зростати" },
  { infinitive: "strijken", pastSingular: "streek", pastPlural: "streken", translation: "прасувати" },
  { infinitive: "trekken", pastSingular: "trok", pastPlural: "trokken", translation: "тягнути" },
  { infinitive: "uitdoen", pastSingular: "deed uit", pastPlural: "deden uit", translation: "вимикати / знімати (одяг)" },
  { infinitive: "uitgaan", pastSingular: "ging uit", pastPlural: "gingen uit", translation: "виходити (гуляти)" },
  { infinitive: "uittrekken", pastSingular: "trok uit", pastPlural: "trokken uit", translation: "знімати (одяг) / виділяти" },
  { infinitive: "vallen", pastSingular: "viel", pastPlural: "vielen", translation: "падати" },
  { infinitive: "vangen", pastSingular: "ving", pastPlural: "vingen", translation: "ловити" },
  { infinitive: "varen", pastSingular: "voer", pastPlural: "voeren", translation: "плисти (на човні)" },
  { infinitive: "vechten", pastSingular: "vocht", pastPlural: "vochten", translation: "битися / боротися" },
  { infinitive: "verbieden", pastSingular: "verbood", pastPlural: "verboden", translation: "забороняти" },
  { infinitive: "verdwijnen", pastSingular: "verdween", pastPlural: "verdwenen", translation: "зникати" },
  { infinitive: "vergelijken", pastSingular: "vergeleek", pastPlural: "vergeleken", translation: "порівнювати" },
  { infinitive: "vergeten", pastSingular: "vergat", pastPlural: "vergaten", translation: "забувати" },
  { infinitive: "verkopen", pastSingular: "verkocht", pastPlural: "verkochten", translation: "продавати" },
  { infinitive: "verliezen", pastSingular: "verloor", pastPlural: "verloren", translation: "втрачати / програвати" },
  { infinitive: "vermijden", pastSingular: "vermeed", pastPlural: "vermeden", translation: "уникати" },
  { infinitive: "vertrekken", pastSingular: "vertrok", pastPlural: "vertrokken", translation: "відправлятися / вирушати" },
  { infinitive: "vervangen", pastSingular: "verving", pastPlural: "vervingen", translation: "замінювати" },
  { infinitive: "vinden", pastSingular: "vond", pastPlural: "vonden", translation: "знаходити" },
  { infinitive: "vliegen", pastSingular: "vloog", pastPlural: "vlogen", translation: "літати" },
  { infinitive: "vragen", pastSingular: "vroeg", pastPlural: "vroegen", translation: "запитувати / просити" },
  { infinitive: "vriezen", pastSingular: "vroor", pastPlural: "vroren", translation: "замерзати / морозити" },
  { infinitive: "wassen", pastSingular: "waste", pastPlural: "wasten", translation: "мити / прати" },
  { infinitive: "wegen", pastSingular: "woog", pastPlural: "wogen", translation: "важити" },
  { infinitive: "weten", pastSingular: "wist", pastPlural: "wisten", translation: "знати" },
  { infinitive: "wijzen", pastSingular: "wees", pastPlural: "wezen", translation: "вказувати" },
  { infinitive: "willen", pastSingular: "wou/wilde", pastPlural: "wilden", translation: "хотіти" },
  { infinitive: "winnen", pastSingular: "won", pastPlural: "wonnen", translation: "вигравати" },
  { infinitive: "worden", pastSingular: "werd", pastPlural: "werden", translation: "ставати" },
  { infinitive: "zeggen", pastSingular: "zei", pastPlural: "zeiden", translation: "казати" },
  { infinitive: "zien", pastSingular: "zag", pastPlural: "zagen", translation: "бачити" },
  { infinitive: "zijn", pastSingular: "was", pastPlural: "waren", translation: "бути" },
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

  // Дополнительные состояния для ввода начального и конечного индексов
  const [startIndex, setStartIndex] = useState("1");
  const [endIndex, setEndIndex] = useState("15");

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
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