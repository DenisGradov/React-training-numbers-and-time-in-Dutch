const irregularVerbs = [
  { ua: "пекти", nl: "bakken", nlvtt: "bakten", uavtt: "пік" },
  { ua: "починати", nl: "beginnen", nlvtt: "begonnen", uavtt: "почав" },
  { ua: "розуміти", nl: "begrijpen", nlvtt: "begrepen", uavtt: "зрозумів" },
  { ua: "відвідувати", nl: "bezoeken", nlvtt: "bezocht", uavtt: "відвідав" },
  { ua: "кусати", nl: "bijten", nlvtt: "gebeten", uavtt: "кусав" },
  { ua: "залишатися", nl: "blijven", nlvtt: "gebleven", uavtt: "залишився" },
  { ua: "ламати", nl: "breken", nlvtt: "gebroken", uavtt: "зламав" },
  { ua: "приносити", nl: "brengen", nlvtt: "gebracht", uavtt: "приніс" },
  { ua: "думати", nl: "denken", nlvtt: "gedacht", uavtt: "думав" },
  { ua: "робити", nl: "doen", nlvtt: "gedaan", uavtt: "робив" },
  { ua: "нести", nl: "dragen", nlvtt: "gedragen", uavtt: "нёс" },
  { ua: "пити", nl: "drinken", nlvtt: "gedronken", uavtt: "пив" },
  { ua: "їсти", nl: "eten", nlvtt: "gegeten", uavtt: "їв" },
  { ua: "йти", nl: "gaan", nlvtt: "gegaan", uavtt: "йшов" },
  { ua: "одужувати", nl: "genezen", nlvtt: "genezen", uavtt: "одужав" },
  {
    ua: "насолоджуватися",
    nl: "genieten",
    nlvtt: "genoten",
    uavtt: "насолоджувався",
  },
  { ua: "давати", nl: "geven", nlvtt: "gegeven", uavtt: "давав" },
  { ua: "висіти", nl: "hangen", nlvtt: "gehangen", uavtt: "висів" },
  { ua: "мати", nl: "hebben", nlvtt: "gehad", uavtt: "мав" },
  { ua: "допомагати", nl: "helpen", nlvtt: "geholpen", uavtt: "допомагав" },
  { ua: "вибирати", nl: "kiezen", nlvtt: "gekozen", uavtt: "вибрав" },
  { ua: "дивитися", nl: "kijken", nlvtt: "gekeken", uavtt: "дивився" },
  { ua: "приходити", nl: "komen", nlvtt: "gekomen", uavtt: "прийшов" },
  { ua: "купувати", nl: "kopen", nlvtt: "gekocht", uavtt: "купував" },
  { ua: "отримувати", nl: "krijgen", nlvtt: "gekregen", uavtt: "отримав" },
  { ua: "сміятися", nl: "lachen", nlvtt: "gelachen", uavtt: "сміявся" },
  { ua: "читати", nl: "lezen", nlvtt: "gelezen", uavtt: "читав" },
  { ua: "лежати", nl: "liggen", nlvtt: "gelegen", uavtt: "лежав" },
  { ua: "бігати", nl: "lopen", nlvtt: "gelopen", uavtt: "бігав" },
  { ua: "брати", nl: "nemen", nlvtt: "genomen", uavtt: "брав" },
  { ua: "їздити", nl: "rijden", nlvtt: "gereden", uavtt: "їхав" },
  { ua: "кричати", nl: "roepen", nlvtt: "geroepen", uavtt: "кричав" },
  { ua: "писати", nl: "schrijven", nlvtt: "geschreven", uavtt: "писав" },
  { ua: "спати", nl: "slapen", nlvtt: "geslapen", uavtt: "спав" },
  { ua: "закривати", nl: "sluiten", nlvtt: "gesloten", uavtt: "закрив" },
  { ua: "різати", nl: "snijden", nlvtt: "gesneden", uavtt: "різав" },
  { ua: "говорити", nl: "spreken", nlvtt: "gesproken", uavtt: "говорив" },
  { ua: "красти", nl: "stelen", nlvtt: "gestolen", uavtt: "крав" },
  { ua: "вмирати", nl: "sterven", nlvtt: "gestorven", uavtt: "помер" },
  { ua: "тягнути", nl: "trekken", nlvtt: "getrokken", uavtt: "тягнув" },
  { ua: "падати", nl: "vallen", nlvtt: "gevallen", uavtt: "падав" },
  { ua: "битися", nl: "vechten", nlvtt: "gevochten", uavtt: "бився" },
  { ua: "забороняти", nl: "verbieden", nlvtt: "verboden", uavtt: "заборонив" },
  { ua: "зникати", nl: "verdwijnen", nlvtt: "verdwenen", uavtt: "зник" },
  { ua: "забувати", nl: "vergeten", nlvtt: "vergeten", uavtt: "забув" },
  { ua: "продавати", nl: "verkopen", nlvtt: "verkocht", uavtt: "продав" },
  { ua: "програвати", nl: "verliezen", nlvtt: "verloren", uavtt: "програв" },
  {
    ua: "від'їжджати",
    nl: "vertrekken",
    nlvtt: "vertrokken",
    uavtt: "від'їхав",
  },
  { ua: "знаходити", nl: "vinden", nlvtt: "gevonden", uavtt: "знайшов" },
  { ua: "замерзати", nl: "vriezen", nlvtt: "gevroren", uavtt: "замерз" },
  { ua: "мити", nl: "wassen", nlvtt: "gewassen", uavtt: "мив" },
  { ua: "вигравати", nl: "winnen", nlvtt: "gewonnen", uavtt: "виграв" },
  { ua: "ставати", nl: "worden", nlvtt: "geworden", uavtt: "став" },
  { ua: "бачити", nl: "zien", nlvtt: "gezien", uavtt: "бачив" },
  { ua: "бути", nl: "zijn", nlvtt: "geweest", uavtt: "був" },
  { ua: "сидіти", nl: "zitten", nlvtt: "gezeten", uavtt: "сидів" },
  { ua: "шукати", nl: "zoeken", nlvtt: "gezocht", uavtt: "шукав" },
  { ua: "плавати", nl: "zwemmen", nlvtt: "gezwommen", uavtt: "плавав" },
  { ua: "мовчати", nl: "zwijgen", nlvtt: "gezwegen", uavtt: "мовчав" },
];
export default irregularVerbs;
