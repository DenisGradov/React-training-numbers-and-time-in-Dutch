/*
Ik neem een bad
Ik lees de krant
Ik poets mijn schoenen
Ik studeer Nederlands
Ik speel tennis
Ik repereert mijn auto
Ik doe de strijk
ik speel voetbal
ik schrijft een brief
ik doe een durtje
ik neem een douche
ik luister naar de radio
ik lees een brief
ikj poets de ramen
ik doe boodschappen
ik doe de was
ik wandel met de hond
ik telefoneer
ik kook
ik fiets
ik eet een appel
ik lees de boek
ik werk in de tuin
ik kijk tv
ik stofzuig
ik eet een boterham
ik surf op internet
ik koop nieuwe kleren
ik schilder de living
ik poets mijn huis
ik zit in de cinema
ik werk
ij doe de afwas
ik slaap
ik poets mijn tanden */
const sentenceExamples1 = [
  // Принимаю ванну
  { ua: "Я приймаю ванну", nl: "Ik neem een bad" },
  { ua: "Ти приймаєш ванну", nl: "Jij neemt een bad" },
  { ua: "Він приймає ванну", nl: "Hij neemt een bad" },
  { ua: "Вона приймає ванну", nl: "Zij neemt een bad" },
  { ua: "Ми приймаємо ванну", nl: "Wij nemen een bad" },
  { ua: "Ви приймаєте ванну", nl: "Jullie nemen een bad" },
  { ua: "Вони приймають ванну", nl: "Zij nemen een bad" },

  // Читаю газету
  { ua: "Я читаю газету", nl: "Ik lees de krant" },
  { ua: "Ти читаєш газету", nl: "Jij leest de krant" },
  { ua: "Він читає газету", nl: "Hij leest de krant" },
  { ua: "Вона читає газету", nl: "Zij leest de krant" },
  { ua: "Ми читаємо газету", nl: "Wij lezen de krant" },
  { ua: "Ви читаєте газету", nl: "Jullie lezen de krant" },
  { ua: "Вони читають газету", nl: "Zij lezen de krant" },

  // Чищу обувь
  { ua: "Я чищу взуття", nl: "Ik poets mijn schoenen" },
  { ua: "Ти чистиш взуття", nl: "Jij poetst je schoenen" },
  { ua: "Він чистить взуття", nl: "Hij poetst zijn schoenen" },
  { ua: "Вона чистить взуття", nl: "Zij poetst haar schoenen" },
  { ua: "Ми чистимо взуття", nl: "Wij poetsen onze schoenen" },
  { ua: "Ви чистите взуття", nl: "Jullie poetsen jullie schoenen" },
  { ua: "Вони чистять взуття", nl: "Zij poetsen hun schoenen" },

  // Изучаю нидерландский
  { ua: "Я вивчаю нідерландську", nl: "Ik studeer Nederlands" },
  { ua: "Ти вивчаєш нідерландську", nl: "Jij studeert Nederlands" },
  { ua: "Він вивчає нідерландську", nl: "Hij studeert Nederlands" },
  { ua: "Вона вивчає нідерландську", nl: "Zij studeert Nederlands" },
  { ua: "Ми вивчаємо нідерландську", nl: "Wij studeren Nederlands" },
  { ua: "Ви вивчаєте нідерландську", nl: "Jullie studeren Nederlands" },
  { ua: "Вони вивчають нідерландську", nl: "Zij studeren Nederlands" },

  // Играю в теннис
  { ua: "Я граю в теніс", nl: "Ik speel tennis" },
  { ua: "Ти граєш в теніс", nl: "Jij speelt tennis" },
  { ua: "Він грає в теніс", nl: "Hij speelt tennis" },
  { ua: "Вона грає в теніс", nl: "Zij speelt tennis" },
  { ua: "Ми граємо в теніс", nl: "Wij spelen tennis" },
  { ua: "Ви граєте в теніс", nl: "Jullie spelen tennis" },
  { ua: "Вони грають в теніс", nl: "Zij spelen tennis" },

  // Ремонтирую свою машину
  { ua: "Я ремонтую свою машину", nl: "Ik repareer mijn auto" },
  { ua: "Ти ремонтуєш свою машину", nl: "Jij repareert je auto" },
  { ua: "Він ремонтує свою машину", nl: "Hij repareert zijn auto" },
  { ua: "Вона ремонтує свою машину", nl: "Zij repareert haar auto" },
  { ua: "Ми ремонтуємо наші машини", nl: "Wij repareren onze auto's" },
  { ua: "Ви ремонтуєте ваші машини", nl: "Jullie repareren jullie auto's" },
  { ua: "Вони ремонтують свої машини", nl: "Zij repareren hun auto's" },

  // Глажу одежду
  { ua: "Я прасую одяг", nl: "Ik doe de strijk" },
  { ua: "Ти прасуєш одяг", nl: "Jij doet de strijk" },
  { ua: "Він прасує одяг", nl: "Hij doet de strijk" },
  { ua: "Вона прасує одяг", nl: "Zij doet de strijk" },
  { ua: "Ми прасуємо одяг", nl: "Wij doen de strijk" },
  { ua: "Ви прасуєте одяг", nl: "Jullie doen de strijk" },
  { ua: "Вони прасують одяг", nl: "Zij doen de strijk" },

  // Играю в футбол
  { ua: "Я граю в футбол", nl: "Ik speel voetbal" },
  { ua: "Ти граєш в футбол", nl: "Jij speelt voetbal" },
  { ua: "Він грає в футбол", nl: "Hij speelt voetbal" },
  { ua: "Вона грає в футбол", nl: "Zij speelt voetbal" },
  { ua: "Ми граємо в футбол", nl: "Wij spelen voetbal" },
  { ua: "Ви граєте в футбол", nl: "Jullie spelen voetbal" },
  { ua: "Вони грають в футбол", nl: "Zij spelen voetbal" },
  { ua: "Я пишу лист", nl: "Ik schrijf een brief" },
  { ua: "Ти пишеш лист", nl: "Jij schrijft een brief" },
  { ua: "Він пише лист", nl: "Hij schrijft een brief" },
  { ua: "Вона пише лист", nl: "Zij schrijft een brief" },
  { ua: "Ми пишемо листи", nl: "Wij schrijven brieven" },
  { ua: "Ви пишете листи", nl: "Jullie schrijven brieven" },
  { ua: "Вони пишуть листи", nl: "Zij schrijven brieven" },

  // Слушаю радио
  { ua: "Я слухаю радіо", nl: "Ik luister naar de radio" },
  { ua: "Ти слухаєш радіо", nl: "Jij luistert naar de radio" },
  { ua: "Він слухає радіо", nl: "Hij luistert naar de radio" },
  { ua: "Вона слухає радіо", nl: "Zij luistert naar de radio" },
  { ua: "Ми слухаємо радіо", nl: "Wij luisteren naar de radio" },
  { ua: "Ви слухаєте радіо", nl: "Jullie luisteren naar de radio" },
  { ua: "Вони слухають радіо", nl: "Zij luisteren naar de radio" },

  // Чищу окна
  { ua: "Я мию вікна", nl: "Ik maak de ramen schoon" },
  { ua: "Ти миєш вікна", nl: "Jij maakt de ramen schoon" },
  { ua: "Він миє вікна", nl: "Hij maakt de ramen schoon" },
  { ua: "Вона миє вікна", nl: "Zij maakt de ramen schoon" },
  { ua: "Ми миємо вікна", nl: "Wij maken de ramen schoon" },
  { ua: "Ви миєте вікна", nl: "Jullie maken de ramen schoon" },
  { ua: "Вони миють вікна", nl: "Zij maken de ramen schoon" },

  // Делаю покупки
  { ua: "Я роблю покупки", nl: "Ik doe boodschappen" },
  { ua: "Ти робиш покупки", nl: "Jij doet boodschappen" },
  { ua: "Він робить покупки", nl: "Hij doet boodschappen" },
  { ua: "Вона робить покупки", nl: "Zij doet boodschappen" },
  { ua: "Ми робимо покупки", nl: "Wij doen boodschappen" },
  { ua: "Ви робите покупки", nl: "Jullie doen boodschappen" },
  { ua: "Вони роблять покупки", nl: "Zij doen boodschappen" },

  // Стираю бельё
  { ua: "Я праю білизну", nl: "Ik doe de was" },
  { ua: "Ти праєш білизну", nl: "Jij doet de was" },
  { ua: "Він прає білизну", nl: "Hij doet de was" },
  { ua: "Вона прає білизну", nl: "Zij doet de was" },
  { ua: "Ми праємо білизну", nl: "Wij doen de was" },
  { ua: "Ви праєте білизну", nl: "Jullie doen de was" },
  { ua: "Вони прають білизну", nl: "Zij doen de was" },
  // Гуляю с собакой
  { ua: "Я гуляю з собакою", nl: "Ik wandel met de hond" },
  { ua: "Ти гуляєш з собакою", nl: "Jij wandelt met de hond" },
  { ua: "Він гуляє з собакою", nl: "Hij wandelt met de hond" },
  { ua: "Вона гуляє з собакою", nl: "Zij wandelt met de hond" },
  { ua: "Ми гуляємо з собакою", nl: "Wij wandelen met de hond" },
  { ua: "Ви гуляєте з собакою", nl: "Jullie wandelen met de hond" },
  { ua: "Вони гуляють з собакою", nl: "Zij wandelen met de hond" },

  // Разговариваю по телефону
  { ua: "Я телефоную", nl: "Ik telefoneer" },
  { ua: "Ти телефонуєш", nl: "Jij telefoneert" },
  { ua: "Він телефонує", nl: "Hij telefoneert" },
  { ua: "Вона телефонує", nl: "Zij telefoneert" },
  { ua: "Ми телефонуємо", nl: "Wij telefoneren" },
  { ua: "Ви телефонуєте", nl: "Jullie telefoneren" },
  { ua: "Вони телефонують", nl: "Zij telefoneren" },

  // Готовлю
  { ua: "Я готую", nl: "Ik kook" },
  { ua: "Ти готуєш", nl: "Jij kookt" },
  { ua: "Він готує", nl: "Hij kookt" },
  { ua: "Вона готує", nl: "Zij kookt" },
  { ua: "Ми готуємо", nl: "Wij koken" },
  { ua: "Ви готуєте", nl: "Jullie koken" },
  { ua: "Вони готують", nl: "Zij koken" },

  // Еду на велосипеде
  { ua: "Я їжджу на велосипеді", nl: "Ik fiets" },
  { ua: "Ти їздиш на велосипеді", nl: "Jij fietst" },
  { ua: "Він їздить на велосипеді", nl: "Hij fietst" },
  { ua: "Вона їздить на велосипеді", nl: "Zij fietst" },
  { ua: "Ми їздимо на велосипеді", nl: "Wij fietsen" },
  { ua: "Ви їздите на велосипеді", nl: "Jullie fietsen" },
  { ua: "Вони їздять на велосипеді", nl: "Zij fietsen" },

  // Читаю книгу
  { ua: "Я читаю книгу", nl: "Ik lees een boek" },
  { ua: "Ти читаєш книгу", nl: "Jij leest een boek" },
  { ua: "Він читає книгу", nl: "Hij leest een boek" },
  { ua: "Вона читає книгу", nl: "Zij leest een boek" },
  { ua: "Ми читаємо книгу", nl: "Wij lezen een boek" },
  { ua: "Ви читаєте книгу", nl: "Jullie lezen een boek" },
  { ua: "Вони читають книгу", nl: "Zij lezen een boek" },
  // Смотрю телевизор
  { ua: "Я дивлюсь телевізор", nl: "Ik kijk tv" },
  { ua: "Ти дивишся телевізор", nl: "Jij kijkt tv" },
  { ua: "Він дивиться телевізор", nl: "Hij kijkt tv" },
  { ua: "Вона дивиться телевізор", nl: "Zij kijkt tv" },
  { ua: "Ми дивимося телевізор", nl: "Wij kijken tv" },
  { ua: "Ви дивитеся телевізор", nl: "Jullie kijken tv" },
  { ua: "Вони дивляться телевізор", nl: "Zij kijken tv" },

  // Пылесошу
  { ua: "Я прибираю пилососом", nl: "Ik stofzuig" },
  { ua: "Ти прибираєш пилососом", nl: "Jij stofzuigt" },
  { ua: "Він прибирає пилососом", nl: "Hij stofzuigt" },
  { ua: "Вона прибирає пилососом", nl: "Zij stofzuigt" },
  { ua: "Ми прибираємо пилососом", nl: "Wij stofzuigen" },
  { ua: "Ви прибираєте пилососом", nl: "Jullie stofzuigen" },
  { ua: "Вони прибирають пилососом", nl: "Zij stofzuigen" },

  // Ем бутерброд
  { ua: "Я їм бутерброд", nl: "Ik eet een boterham" },
  { ua: "Ти їси бутерброд", nl: "Jij eet een boterham" },
  { ua: "Він їсть бутерброд", nl: "Hij eet een boterham" },
  { ua: "Вона їсть бутерброд", nl: "Zij eet een boterham" },
  { ua: "Ми їмо бутерброди", nl: "Wij eten boterhammen" },
  { ua: "Ви їсте бутерброди", nl: "Jullie eten boterhammen" },
  { ua: "Вони їдять бутерброди", nl: "Zij eten boterhammen" },

  // Серфинг в интернете
  { ua: "Я серфлю в інтернеті", nl: "Ik surf op internet" },
  { ua: "Ти серфуєш в інтернеті", nl: "Jij surft op internet" },
  { ua: "Він серфує в інтернеті", nl: "Hij surft op internet" },
  { ua: "Вона серфує в інтернеті", nl: "Zij surft op internet" },
  { ua: "Ми серфуємо в інтернеті", nl: "Wij surfen op internet" },
  { ua: "Ви серфуєте в інтернеті", nl: "Jullie surfen op internet" },
  { ua: "Вони серфують в інтернеті", nl: "Zij surfen op internet" },

  // Покупаю новую одежду
  { ua: "Я купую новий одяг", nl: "Ik koop nieuwe kleren" },
  { ua: "Ти купуєш новий одяг", nl: "Jij koopt nieuwe kleren" },
  { ua: "Він купує новий одяг", nl: "Hij koopt nieuwe kleren" },
  { ua: "Вона купує новий одяг", nl: "Zij koopt nieuwe kleren" },
  { ua: "Ми купуємо новий одяг", nl: "Wij kopen nieuwe kleren" },
  { ua: "Ви купуєте новий одяг", nl: "Jullie kopen nieuwe kleren" },
  { ua: "Вони купують новий одяг", nl: "Zij kopen nieuwe kleren" },

  // Работаю в саду
  { ua: "Я працюю в саду", nl: "Ik werk in de tuin" },
  { ua: "Ти працюєш в саду", nl: "Jij werkt in de tuin" },
  { ua: "Він працює в саду", nl: "Hij werkt in de tuin" },
  { ua: "Вона працює в саду", nl: "Zij werkt in de tuin" },
  { ua: "Ми працюємо в саду", nl: "Wij werken in de tuin" },
  { ua: "Ви працюєте в саду", nl: "Jullie werken in de tuin" },
  { ua: "Вони працюють в саду", nl: "Zij werken in de tuin" },
  // Крашу гостиную
  { ua: "Я фарбую вітальню", nl: "Ik schilder de living" },
  { ua: "Ти фарбуєш вітальню", nl: "Jij schildert de living" },
  { ua: "Він фарбує вітальню", nl: "Hij schildert de living" },
  { ua: "Вона фарбує вітальню", nl: "Zij schildert de living" },
  { ua: "Ми фарбуємо вітальню", nl: "Wij schilderen de living" },
  { ua: "Ви фарбуєте вітальню", nl: "Jullie schilderen de living" },
  { ua: "Вони фарбують вітальню", nl: "Zij schilderen de living" },

  // Чищу дом
  { ua: "Я прибираю дім", nl: "Ik poets mijn huis" },
  { ua: "Ти прибираєш дім", nl: "Jij poetst je huis" },
  { ua: "Він прибирає дім", nl: "Hij poetst zijn huis" },
  { ua: "Вона прибирає дім", nl: "Zij poetst haar huis" },
  { ua: "Ми прибираємо дім", nl: "Wij poetsen ons huis" },
  { ua: "Ви прибираєте дім", nl: "Jullie poetsen jullie huis" },
  { ua: "Вони прибирають дім", nl: "Zij poetsen hun huis" },

  // Нахожусь в кинотеатре
  { ua: "Я в кінотеатрі", nl: "Ik zit in de cinema" },
  { ua: "Ти в кінотеатрі", nl: "Jij zit in de cinema" },
  { ua: "Він в кінотеатрі", nl: "Hij zit in de cinema" },
  { ua: "Вона в кінотеатрі", nl: "Zij zit in de cinema" },
  { ua: "Ми в кінотеатрі", nl: "Wij zitten in de cinema" },
  { ua: "Ви в кінотеатрі", nl: "Jullie zitten in de cinema" },
  { ua: "Вони в кінотеатрі", nl: "Zij zitten in de cinema" },

  // Работаю
  { ua: "Я працюю", nl: "Ik werk" },
  { ua: "Ти працюєш", nl: "Jij werkt" },
  { ua: "Він працює", nl: "Hij werkt" },
  { ua: "Вона працює", nl: "Zij werkt" },
  { ua: "Ми працюємо", nl: "Wij werken" },
  { ua: "Ви працюєте", nl: "Jullie werken" },
  { ua: "Вони працюють", nl: "Zij werken" },

  // Мою посуду
  { ua: "Я мию посуд", nl: "Ik doe de afwas" },
  { ua: "Ти миєш посуд", nl: "Jij doet de afwas" },
  { ua: "Він миє посуд", nl: "Hij doet de afwas" },
  { ua: "Вона миє посуд", nl: "Zij doet de afwas" },
  { ua: "Ми миємо посуд", nl: "Wij doen de afwas" },
  { ua: "Ви миєте посуд", nl: "Jullie doen de afwas" },
  { ua: "Вони миють посуд", nl: "Zij doen de afwas" },

  // Сплю
  { ua: "Я сплю", nl: "Ik slaap" },
  { ua: "Ти спиш", nl: "Jij slaapt" },
  { ua: "Він спить", nl: "Hij slaapt" },
  { ua: "Вона спить", nl: "Zij slaapt" },
  { ua: "Ми спимо", nl: "Wij slapen" },
  { ua: "Ви спите", nl: "Jullie slapen" },
  { ua: "Вони сплять", nl: "Zij slapen" },

  // Чищу зубы
  { ua: "Я чищу зуби", nl: "Ik poets mijn tanden" },
  { ua: "Ти чистиш зуби", nl: "Jij poetst je tanden" },
  { ua: "Він чистить зуби", nl: "Hij poetst zijn tanden" },
  { ua: "Вона чистить зуби", nl: "Zij poetst haar tanden" },
  { ua: "Ми чистимо зуби", nl: "Wij poetsen onze tanden" },
  { ua: "Ви чистите зуби", nl: "Jullie poetsen jullie tanden" },
  { ua: "Вони чистять зуби", nl: "Zij poetsen hun tanden" },
];

const sentenceExamples2 = [
  // Принимаю ванну
  { ua: "Я зараз приймаю ванну", nl: "Ik ben aan het een bad nemen" },
  { ua: "Ти зараз приймаєш ванну", nl: "Jij bent aan het een bad nemen" },
  { ua: "Він зараз приймає ванну", nl: "Hij is aan het een bad nemen" },
  { ua: "Вона зараз приймає ванну", nl: "Zij is aan het een bad nemen" },
  { ua: "Ми зараз приймаємо ванну", nl: "Wij zijn aan het een bad nemen" },
  { ua: "Ви зараз приймаєте ванну", nl: "Jullie zijn aan het een bad nemen" },
  { ua: "Вони зараз приймають ванну", nl: "Zij zijn aan het een bad nemen" },

  // Читаю газету
  { ua: "Я зараз читаю газету", nl: "Ik ben aan het de krant lezen" },
  { ua: "Ти зараз читаєш газету", nl: "Jij bent aan het de krant lezen" },
  { ua: "Він зараз читає газету", nl: "Hij is aan het de krant lezen" },
  { ua: "Вона зараз читає газету", nl: "Zij is aan het de krant lezen" },
  { ua: "Ми зараз читаємо газету", nl: "Wij zijn aan het de krant lezen" },
  { ua: "Ви зараз читаєте газету", nl: "Jullie zijn aan het de krant lezen" },
  { ua: "Вони зараз читають газету", nl: "Zij zijn aan het de krant lezen" },

  // Чищу обувь
  { ua: "Я зараз чищу взуття", nl: "Ik ben aan het mijn schoenen poetsen" },
  { ua: "Ти зараз чистиш взуття", nl: "Jij bent aan het je schoenen poetsen" },
  {
    ua: "Він зараз чистить взуття",
    nl: "Hij is aan het zijn schoenen poetsen",
  },
  {
    ua: "Вона зараз чистить взуття",
    nl: "Zij is aan het haar schoenen poetsen",
  },
  {
    ua: "Ми зараз чистимо взуття",
    nl: "Wij zijn aan het onze schoenen poetsen",
  },
  {
    ua: "Ви зараз чистите взуття",
    nl: "Jullie zijn aan het jullie schoenen poetsen",
  },
  {
    ua: "Вони зараз чистять взуття",
    nl: "Zij zijn aan het hun schoenen poetsen",
  },

  // Изучаю нидерландский
  {
    ua: "Я зараз вивчаю нідерландську",
    nl: "Ik ben aan het Nederlands studeren",
  },
  {
    ua: "Ти зараз вивчаєш нідерландську",
    nl: "Jij bent aan het Nederlands studeren",
  },
  {
    ua: "Він зараз вивчає нідерландську",
    nl: "Hij is aan het Nederlands studeren",
  },
  {
    ua: "Вона зараз вивчає нідерландську",
    nl: "Zij is aan het Nederlands studeren",
  },
  {
    ua: "Ми зараз вивчаємо нідерландську",
    nl: "Wij zijn aan het Nederlands studeren",
  },
  {
    ua: "Ви зараз вивчаєте нідерландську",
    nl: "Jullie zijn aan het Nederlands studeren",
  },
  {
    ua: "Вони зараз вивчають нідерландську",
    nl: "Zij zijn aan het Nederlands studeren",
  },

  // Играю в теннис
  { ua: "Я зараз граю в теніс", nl: "Ik ben aan het tennis spelen" },
  { ua: "Ти зараз граєш в теніс", nl: "Jij bent aan het tennis spelen" },
  { ua: "Він зараз грає в теніс", nl: "Hij is aan het tennis spelen" },
  { ua: "Вона зараз грає в теніс", nl: "Zij is aan het tennis spelen" },
  { ua: "Ми зараз граємо в теніс", nl: "Wij zijn aan het tennis spelen" },
  { ua: "Ви зараз граєте в теніс", nl: "Jullie zijn aan het tennis spelen" },
  { ua: "Вони зараз грають в теніс", nl: "Zij zijn aan het tennis spelen" },
  {
    ua: "Я зараз ремонтую автомобіль",
    nl: "Ik ben aan het mijn auto repareren",
  },
  {
    ua: "Ти зараз ремонтуєш автомобіль",
    nl: "Jij bent aan het je auto repareren",
  },
  {
    ua: "Він зараз ремонтує автомобіль",
    nl: "Hij is aan het zijn auto repareren",
  },
  {
    ua: "Вона зараз ремонтує автомобіль",
    nl: "Zij is aan het haar auto repareren",
  },
  {
    ua: "Ми зараз ремонтуємо автомобілі",
    nl: "Wij zijn aan het onze auto's repareren",
  },
  {
    ua: "Ви зараз ремонтуєте автомобілі",
    nl: "Jullie zijn aan het jullie auto's repareren",
  },
  {
    ua: "Вони зараз ремонтують автомобілі",
    nl: "Zij zijn aan het hun auto's repareren",
  },

  // Глажу одежду
  { ua: "Я зараз прасую одяг", nl: "Ik ben aan het de strijk doen" },
  { ua: "Ти зараз прасуєш одяг", nl: "Jij bent aan het de strijk doen" },
  { ua: "Він зараз прасує одяг", nl: "Hij is aan het de strijk doen" },
  { ua: "Вона зараз прасує одяг", nl: "Zij is aan het de strijk doen" },
  { ua: "Ми зараз прасуємо одяг", nl: "Wij zijn aan het de strijk doen" },
  { ua: "Ви зараз прасуєте одяг", nl: "Jullie zijn aan het de strijk doen" },
  { ua: "Вони зараз прасують одяг", nl: "Zij zijn aan het de strijk doen" },

  // Играю в футбол
  { ua: "Я зараз граю в футбол", nl: "Ik ben aan het voetbal spelen" },
  { ua: "Ти зараз граєш в футбол", nl: "Jij bent aan het voetbal spelen" },
  { ua: "Він зараз грає в футбол", nl: "Hij is aan het voetbal spelen" },
  { ua: "Вона зараз грає в футбол", nl: "Zij is aan het voetbal spelen" },
  { ua: "Ми зараз граємо в футбол", nl: "Wij zijn aan het voetbal spelen" },
  { ua: "Ви зараз граєте в футбол", nl: "Jullie zijn aan het voetbal spelen" },
  { ua: "Вони зараз грають в футбол", nl: "Zij zijn aan het voetbal spelen" },

  // Пишу письмо
  { ua: "Я зараз пишу лист", nl: "Ik ben aan het een brief schrijven" },
  { ua: "Ти зараз пишеш лист", nl: "Jij bent aan het een brief schrijven" },
  { ua: "Він зараз пише лист", nl: "Hij is aan het een brief schrijven" },
  { ua: "Вона зараз пише лист", nl: "Zij is aan het een brief schrijven" },
  { ua: "Ми зараз пишемо листи", nl: "Wij zijn aan het brieven schrijven" },
  { ua: "Ви зараз пишете листи", nl: "Jullie zijn aan het brieven schrijven" },
  { ua: "Вони зараз пишуть листи", nl: "Zij zijn aan het brieven schrijven" },
  // Принимаю душ
  { ua: "Я зараз приймаю душ", nl: "Ik ben aan het een douche nemen" },
  { ua: "Ти зараз приймаєш душ", nl: "Jij bent aan het een douche nemen" },
  { ua: "Він зараз приймає душ", nl: "Hij is aan het een douche nemen" },
  { ua: "Вона зараз приймає душ", nl: "Zij is aan het een douche nemen" },
  { ua: "Ми зараз приймаємо душ", nl: "Wij zijn aan het douches nemen" },
  { ua: "Ви зараз приймаєте душ", nl: "Jullie zijn aan het douches nemen" },
  { ua: "Вони зараз приймають душ", nl: "Zij zijn aan het douches nemen" },

  // Слушаю радио
  { ua: "Я зараз слухаю радіо", nl: "Ik ben aan het naar de radio luisteren" },
  {
    ua: "Ти зараз слухаєш радіо",
    nl: "Jij bent aan het naar de radio luisteren",
  },
  {
    ua: "Він зараз слухає радіо",
    nl: "Hij is aan het naar de radio luisteren",
  },
  {
    ua: "Вона зараз слухає радіо",
    nl: "Zij is aan het naar de radio luisteren",
  },
  {
    ua: "Ми зараз слухаємо радіо",
    nl: "Wij zijn aan het naar de radio luisteren",
  },
  {
    ua: "Ви зараз слухаєте радіо",
    nl: "Jullie zijn aan het naar de radio luisteren",
  },
  {
    ua: "Вони зараз слухають радіо",
    nl: "Zij zijn aan het naar de radio luisteren",
  },

  // Читаю письмо
  { ua: "Я зараз читаю лист", nl: "Ik ben aan het een brief lezen" },
  { ua: "Ти зараз читаєш лист", nl: "Jij bent aan het een brief lezen" },
  { ua: "Він зараз читає лист", nl: "Hij is aan het een brief lezen" },
  { ua: "Вона зараз читає лист", nl: "Zij is aan het een brief lezen" },
  { ua: "Ми зараз читаємо листи", nl: "Wij zijn aan het brieven lezen" },
  { ua: "Ви зараз читаєте листи", nl: "Jullie zijn aan het brieven lezen" },
  { ua: "Вони зараз читають листи", nl: "Zij zijn aan het brieven lezen" },

  // Делаю покупки
  { ua: "Я зараз роблю покупки", nl: "Ik ben aan het boodschappen doen" },
  { ua: "Ти зараз робиш покупки", nl: "Jij bent aan het boodschappen doen" },
  { ua: "Він зараз робить покупки", nl: "Hij is aan het boodschappen doen" },
  { ua: "Вона зараз робить покупки", nl: "Zij is aan het boodschappen doen" },
  { ua: "Ми зараз робимо покупки", nl: "Wij zijn aan het boodschappen doen" },
  {
    ua: "Ви зараз робите покупки",
    nl: "Jullie zijn aan het boodschappen doen",
  },
  {
    ua: "Вони зараз роблять покупки",
    nl: "Zij zijn aan het boodschappen doen",
  },

  // Стираю бельё
  { ua: "Я зараз праю білизну", nl: "Ik ben aan het de was doen" },
  { ua: "Ти зараз праєш білизну", nl: "Jij bent aan het de was doen" },
  { ua: "Він зараз прає білизну", nl: "Hij is aan het de was doen" },
  { ua: "Вона зараз прає білизну", nl: "Zij is aan het de was doen" },
  { ua: "Ми зараз праємо білизну", nl: "Wij zijn aan het de was doen" },
  { ua: "Ви зараз праєте білизну", nl: "Jullie zijn aan het de was doen" },
  { ua: "Вони зараз прають білизну", nl: "Zij zijn aan het de was doen" },

  // Гуляю с собакой
  { ua: "Я зараз гуляю з собакою", nl: "Ik ben aan het met de hond wandelen" },
  {
    ua: "Ти зараз гуляєш з собакою",
    nl: "Jij bent aan het met de hond wandelen",
  },
  {
    ua: "Він зараз гуляє з собакою",
    nl: "Hij is aan het met de hond wandelen",
  },
  {
    ua: "Вона зараз гуляє з собакою",
    nl: "Zij is aan het met de hond wandelen",
  },
  {
    ua: "Ми зараз гуляємо з собакою",
    nl: "Wij zijn aan het met de hond wandelen",
  },
  {
    ua: "Ви зараз гуляєте з собакою",
    nl: "Jullie zijn aan het met de hond wandelen",
  },
  {
    ua: "Вони зараз гуляють з собакою",
    nl: "Zij zijn aan het met de hond wandelen",
  },

  // Разговариваю по телефону
  { ua: "Я зараз телефоную", nl: "Ik ben aan het telefoneren" },
  { ua: "Ти зараз телефонуєш", nl: "Jij bent aan het telefoneren" },
  { ua: "Він зараз телефонує", nl: "Hij is aan het telefoneren" },
  { ua: "Вона зараз телефонує", nl: "Zij is aan het telefoneren" },
  { ua: "Ми зараз телефонуємо", nl: "Wij zijn aan het telefoneren" },
  { ua: "Ви зараз телефонуєте", nl: "Jullie zijn aan het telefoneren" },
  { ua: "Вони зараз телефонують", nl: "Zij zijn aan het telefoneren" },

  // Готовлю
  { ua: "Я зараз готую", nl: "Ik ben aan het koken" },
  { ua: "Ти зараз готуєш", nl: "Jij bent aan het koken" },
  { ua: "Він зараз готує", nl: "Hij is aan het koken" },
  { ua: "Вона зараз готує", nl: "Zij is aan het koken" },
  { ua: "Ми зараз готуємо", nl: "Wij zijn aan het koken" },
  { ua: "Ви зараз готуєте", nl: "Jullie zijn aan het koken" },
  { ua: "Вони зараз готують", nl: "Zij zijn aan het koken" },

  // Еду на велосипеде
  { ua: "Я зараз їжджу на велосипеді", nl: "Ik ben aan het fietsen" },
  { ua: "Ти зараз їздиш на велосипеді", nl: "Jij bent aan het fietsen" },
  { ua: "Він зараз їздить на велосипеді", nl: "Hij is aan het fietsen" },
  { ua: "Вона зараз їздить на велосипеді", nl: "Zij is aan het fietsen" },
  { ua: "Ми зараз їздимо на велосипеді", nl: "Wij zijn aan het fietsen" },
  { ua: "Ви зараз їздите на велосипеді", nl: "Jullie zijn aan het fietsen" },
  { ua: "Вони зараз їздять на велосипеді", nl: "Zij zijn aan het fietsen" },
  // Ем яблоко
  { ua: "Я зараз їм яблуко", nl: "Ik ben aan het een appel eten" },
  { ua: "Ти зараз їси яблуко", nl: "Jij bent aan het een appel eten" },
  { ua: "Він зараз їсть яблуко", nl: "Hij is aan het een appel eten" },
  { ua: "Вона зараз їсть яблуко", nl: "Zij is aan het een appel eten" },
  { ua: "Ми зараз їмо яблука", nl: "Wij zijn aan het appels eten" },
  { ua: "Ви зараз їсте яблука", nl: "Jullie zijn aan het appels eten" },
  { ua: "Вони зараз їдять яблука", nl: "Zij zijn aan het appels eten" },

  // Читаю книгу
  { ua: "Я зараз читаю книгу", nl: "Ik ben aan het een boek lezen" },
  { ua: "Ти зараз читаєш книгу", nl: "Jij bent aan het een boek lezen" },
  { ua: "Він зараз читає книгу", nl: "Hij is aan het een boek lezen" },
  { ua: "Вона зараз читає книгу", nl: "Zij is aan het een boek lezen" },
  { ua: "Ми зараз читаємо книги", nl: "Wij zijn aan het boeken lezen" },
  { ua: "Ви зараз читаєте книги", nl: "Jullie zijn aan het boeken lezen" },
  { ua: "Вони зараз читають книги", nl: "Zij zijn aan het boeken lezen" },

  // Работаю в саду
  { ua: "Я зараз працюю в саду", nl: "Ik ben aan het in de tuin werken" },
  { ua: "Ти зараз працюєш в саду", nl: "Jij bent aan het in de tuin werken" },
  { ua: "Він зараз працює в саду", nl: "Hij is aan het in de tuin werken" },
  { ua: "Вона зараз працює в саду", nl: "Zij is aan het in de tuin werken" },
  { ua: "Ми зараз працюємо в саду", nl: "Wij zijn aan het in de tuin werken" },
  {
    ua: "Ви зараз працюєте в саду",
    nl: "Jullie zijn aan het in de tuin werken",
  },
  {
    ua: "Вони зараз працюють в саду",
    nl: "Zij zijn aan het in de tuin werken",
  },

  // Смотрю телевизор
  { ua: "Я зараз дивлюсь телевізор", nl: "Ik ben aan het tv kijken" },
  { ua: "Ти зараз дивишся телевізор", nl: "Jij bent aan het tv kijken" },
  { ua: "Він зараз дивиться телевізор", nl: "Hij is aan het tv kijken" },
  { ua: "Вона зараз дивиться телевізор", nl: "Zij is aan het tv kijken" },
  { ua: "Ми зараз дивимося телевізор", nl: "Wij zijn aan het tv kijken" },
  { ua: "Ви зараз дивитеся телевізор", nl: "Jullie zijn aan het tv kijken" },
  { ua: "Вони зараз дивляться телевізор", nl: "Zij zijn aan het tv kijken" },

  // Пылесошу
  { ua: "Я зараз прибираю пилососом", nl: "Ik ben aan het stofzuigen" },
  { ua: "Ти зараз прибираєш пилососом", nl: "Jij bent aan het stofzuigen" },
  { ua: "Він зараз прибирає пилососом", nl: "Hij is aan het stofzuigen" },
  { ua: "Вона зараз прибирає пилососом", nl: "Zij is aan het stofzuigen" },
  { ua: "Ми зараз прибираємо пилососом", nl: "Wij zijn aan het stofzuigen" },
  { ua: "Ви зараз прибираєте пилососом", nl: "Jullie zijn aan het stofzuigen" },
  { ua: "Вони зараз прибирають пилососом", nl: "Zij zijn aan het stofzuigen" },

  // Ем бутерброд
  { ua: "Я зараз їм бутерброд", nl: "Ik ben aan het een boterham eten" },
  { ua: "Ти зараз їси бутерброд", nl: "Jij bent aan het een boterham eten" },
  { ua: "Він зараз їсть бутерброд", nl: "Hij is aan het een boterham eten" },
  { ua: "Вона зараз їсть бутерброд", nl: "Zij is aan het een boterham eten" },
  { ua: "Ми зараз їмо бутерброди", nl: "Wij zijn aan het boterhammen eten" },
  {
    ua: "Ви зараз їсте бутерброди",
    nl: "Jullie zijn aan het boterhammen eten",
  },
  {
    ua: "Вони зараз їдять бутерброди",
    nl: "Zij zijn aan het boterhammen eten",
  },

  // Серфлю в интернете
  { ua: "Я зараз серфлю в інтернеті", nl: "Ik ben aan het op internet surfen" },
  {
    ua: "Ти зараз серфуєш в інтернеті",
    nl: "Jij bent aan het op internet surfen",
  },
  {
    ua: "Він зараз серфує в інтернеті",
    nl: "Hij is aan het op internet surfen",
  },
  {
    ua: "Вона зараз серфує в інтернеті",
    nl: "Zij is aan het op internet surfen",
  },
  {
    ua: "Ми зараз серфуємо в інтернеті",
    nl: "Wij zijn aan het op internet surfen",
  },
  {
    ua: "Ви зараз серфуєте в інтернеті",
    nl: "Jullie zijn aan het op internet surfen",
  },
  {
    ua: "Вони зараз серфують в інтернеті",
    nl: "Zij zijn aan het op internet surfen",
  },
  // Покупаю новую одежду
  { ua: "Я зараз купую новий одяг", nl: "Ik ben aan het nieuwe kleren kopen" },
  {
    ua: "Ти зараз купуєш новий одяг",
    nl: "Jij bent aan het nieuwe kleren kopen",
  },
  {
    ua: "Він зараз купує новий одяг",
    nl: "Hij is aan het nieuwe kleren kopen",
  },
  {
    ua: "Вона зараз купує новий одяг",
    nl: "Zij is aan het nieuwe kleren kopen",
  },
  {
    ua: "Ми зараз купуємо новий одяг",
    nl: "Wij zijn aan het nieuwe kleren kopen",
  },
  {
    ua: "Ви зараз купуєте новий одяг",
    nl: "Jullie zijn aan het nieuwe kleren kopen",
  },
  {
    ua: "Вони зараз купують новий одяг",
    nl: "Zij zijn aan het nieuwe kleren kopen",
  },

  // Крашу гостиную
  { ua: "Я зараз фарбую вітальню", nl: "Ik ben aan het de living schilderen" },
  {
    ua: "Ти зараз фарбуєш вітальню",
    nl: "Jij bent aan het de living schilderen",
  },
  {
    ua: "Він зараз фарбує вітальню",
    nl: "Hij is aan het de living schilderen",
  },
  {
    ua: "Вона зараз фарбує вітальню",
    nl: "Zij is aan het de living schilderen",
  },
  {
    ua: "Ми зараз фарбуємо вітальню",
    nl: "Wij zijn aan het de living schilderen",
  },
  {
    ua: "Ви зараз фарбуєте вітальню",
    nl: "Jullie zijn aan het de living schilderen",
  },
  {
    ua: "Вони зараз фарбують вітальню",
    nl: "Zij zijn aan het de living schilderen",
  },

  // Чищу дом
  { ua: "Я зараз чищу дім", nl: "Ik ben aan het mijn huis poetsen" },
  { ua: "Ти зараз чистиш дім", nl: "Jij bent aan het je huis poetsen" },
  { ua: "Він зараз чистить дім", nl: "Hij is aan het zijn huis poetsen" },
  { ua: "Вона зараз чистить дім", nl: "Zij is aan het haar huis poetsen" },
  { ua: "Ми зараз чистимо дім", nl: "Wij zijn aan het ons huis poetsen" },
  { ua: "Ви зараз чистите дім", nl: "Jullie zijn aan het jullie huis poetsen" },
  { ua: "Вони зараз чистять дім", nl: "Zij zijn aan het hun huis poetsen" },

  // Нахожусь в кинотеатре
  { ua: "Я зараз в кінотеатрі", nl: "Ik ben aan het in de cinema zitten" },
  { ua: "Ти зараз в кінотеатрі", nl: "Jij bent aan het in de cinema zitten" },
  { ua: "Він зараз в кінотеатрі", nl: "Hij is aan het in de cinema zitten" },
  { ua: "Вона зараз в кінотеатрі", nl: "Zij is aan het in de cinema zitten" },
  { ua: "Ми зараз в кінотеатрі", nl: "Wij zijn aan het in de cinema zitten" },
  {
    ua: "Ви зараз в кінотеатрі",
    nl: "Jullie zijn aan het in de cinema zitten",
  },
  { ua: "Вони зараз в кінотеатрі", nl: "Zij zijn aan het in de cinema zitten" },

  // Работаю
  { ua: "Я зараз працюю", nl: "Ik ben aan het werken" },
  { ua: "Ти зараз працюєш", nl: "Jij bent aan het werken" },
  { ua: "Він зараз працює", nl: "Hij is aan het werken" },
  { ua: "Вона зараз працює", nl: "Zij is aan het werken" },
  { ua: "Ми зараз працюємо", nl: "Wij zijn aan het werken" },
  { ua: "Ви зараз працюєте", nl: "Jullie zijn aan het werken" },
  { ua: "Вони зараз працюють", nl: "Zij zijn aan het werken" },

  // Мою посуду
  { ua: "Я зараз мию посуд", nl: "Ik ben aan het de afwas doen" },
  { ua: "Ти зараз миєш посуд", nl: "Jij bent aan het de afwas doen" },
  { ua: "Він зараз миє посуд", nl: "Hij is aan het de afwas doen" },
  { ua: "Вона зараз миє посуд", nl: "Zij is aan het de afwas doen" },
  { ua: "Ми зараз миємо посуд", nl: "Wij zijn aan het de afwas doen" },
  { ua: "Ви зараз миєте посуд", nl: "Jullie zijn aan het de afwas doen" },
  { ua: "Вони зараз миють посуд", nl: "Zij zijn aan het de afwas doen" },

  // Сплю
  { ua: "Я зараз сплю", nl: "Ik ben aan het slapen" },
  { ua: "Ти зараз спиш", nl: "Jij bent aan het slapen" },
  { ua: "Він зараз спить", nl: "Hij is aan het slapen" },
  { ua: "Вона зараз спить", nl: "Zij is aan het slapen" },
  { ua: "Ми зараз спимо", nl: "Wij zijn aan het slapen" },
  { ua: "Ви зараз спите", nl: "Jullie zijn aan het slapen" },
  { ua: "Вони зараз сплять", nl: "Zij zijn aan het slapen" },

  // Чищу зубы
  { ua: "Я зараз чищу зуби", nl: "Ik ben aan het mijn tanden poetsen" },
  { ua: "Ти зараз чистиш зуби", nl: "Jij bent aan het je tanden poetsen" },
  { ua: "Він зараз чистить зуби", nl: "Hij is aan het zijn tanden poetsen" },
  { ua: "Вона зараз чистить зуби", nl: "Zij is aan het haar tanden poetsen" },
  { ua: "Ми зараз чистимо зуби", nl: "Wij zijn aan het onze tanden poetsen" },
  {
    ua: "Ви зараз чистите зуби",
    nl: "Jullie zijn aan het jullie tanden poetsen",
  },
  { ua: "Вони зараз чистять зуби", nl: "Zij zijn aan het hun tanden poetsen" },
];
const sentenceExamples3 = [
  // Принимал ванну
  { ua: "Я прийняв ванну", nl: "Ik heb een bad genomen" },
  { ua: "Ти прийняв ванну", nl: "Jij hebt een bad genomen" },
  { ua: "Він прийняв ванну", nl: "Hij heeft een bad genomen" },
  { ua: "Вона прийняла ванну", nl: "Zij heeft een bad genomen" },
  { ua: "Ми прийняли ванну", nl: "Wij hebben een bad genomen" },
  { ua: "Ви прийняли ванну", nl: "Jullie hebben een bad genomen" },
  { ua: "Вони прийняли ванну", nl: "Zij hebben een bad genomen" },

  // Читал газету
  { ua: "Я прочитав газету", nl: "Ik heb de krant gelezen" },
  { ua: "Ти прочитав газету", nl: "Jij hebt de krant gelezen" },
  { ua: "Він прочитав газету", nl: "Hij heeft de krant gelezen" },
  { ua: "Вона прочитала газету", nl: "Zij heeft de krant gelezen" },
  { ua: "Ми прочитали газету", nl: "Wij hebben de krant gelezen" },
  { ua: "Ви прочитали газету", nl: "Jullie hebben de krant gelezen" },
  { ua: "Вони прочитали газету", nl: "Zij hebben de krant gelezen" },

  // Почистил обувь
  { ua: "Я почистив взуття", nl: "Ik heb mijn schoenen gepoetst" },
  { ua: "Ти почистив взуття", nl: "Jij hebt je schoenen gepoetst" },
  { ua: "Він почистив взуття", nl: "Hij heeft zijn schoenen gepoetst" },
  { ua: "Вона почистила взуття", nl: "Zij heeft haar schoenen gepoetst" },
  { ua: "Ми почистили взуття", nl: "Wij hebben onze schoenen gepoetst" },
  { ua: "Ви почистили взуття", nl: "Jullie hebben jullie schoenen gepoetst" },
  { ua: "Вони почистили взуття", nl: "Zij hebben hun schoenen gepoetst" },

  // Изучал нидерландский
  { ua: "Я вивчав нідерландську", nl: "Ik heb Nederlands gestudeerd" },
  { ua: "Ти вивчав нідерландську", nl: "Jij hebt Nederlands gestudeerd" },
  { ua: "Він вивчав нідерландську", nl: "Hij heeft Nederlands gestudeerd" },
  { ua: "Вона вивчала нідерландську", nl: "Zij heeft Nederlands gestudeerd" },
  { ua: "Ми вивчали нідерландську", nl: "Wij hebben Nederlands gestudeerd" },
  { ua: "Ви вивчали нідерландську", nl: "Jullie hebben Nederlands gestudeerd" },
  { ua: "Вони вивчали нідерландську", nl: "Zij hebben Nederlands gestudeerd" },

  // Играл в теннис
  { ua: "Я грав у теніс", nl: "Ik heb tennis gespeeld" },
  { ua: "Ти грав у теніс", nl: "Jij hebt tennis gespeeld" },
  { ua: "Він грав у теніс", nl: "Hij heeft tennis gespeeld" },
  { ua: "Вона грала у теніс", nl: "Zij heeft tennis gespeeld" },
  { ua: "Ми грали у теніс", nl: "Wij hebben tennis gespeeld" },
  { ua: "Ви грали у теніс", nl: "Jullie hebben tennis gespeeld" },
  { ua: "Вони грали у теніс", nl: "Zij hebben tennis gespeeld" },
  // Починил автомобиль
  { ua: "Я відремонтував автомобіль", nl: "Ik heb mijn auto gerepareerd" },
  { ua: "Ти відремонтував автомобіль", nl: "Jij hebt je auto gerepareerd" },
  { ua: "Він відремонтував автомобіль", nl: "Hij heeft zijn auto gerepareerd" },
  {
    ua: "Вона відремонтувала автомобіль",
    nl: "Zij heeft haar auto gerepareerd",
  },
  {
    ua: "Ми відремонтували автомобілі",
    nl: "Wij hebben onze auto's gerepareerd",
  },
  {
    ua: "Ви відремонтували автомобілі",
    nl: "Jullie hebben jullie auto's gerepareerd",
  },
  {
    ua: "Вони відремонтували автомобілі",
    nl: "Zij hebben hun auto's gerepareerd",
  },

  // Погладил бельё
  { ua: "Я погладив білизну", nl: "Ik heb de strijk gedaan" },
  { ua: "Ти погладив білизну", nl: "Jij hebt de strijk gedaan" },
  { ua: "Він погладив білизну", nl: "Hij heeft de strijk gedaan" },
  { ua: "Вона погладила білизну", nl: "Zij heeft de strijk gedaan" },
  { ua: "Ми погладили білизну", nl: "Wij hebben de strijk gedaan" },
  { ua: "Ви погладили білизну", nl: "Jullie hebben de strijk gedaan" },
  { ua: "Вони погладили білизну", nl: "Zij hebben de strijk gedaan" },

  // Играл в футбол
  { ua: "Я пограв у футбол", nl: "Ik heb voetbal gespeeld" },
  { ua: "Ти пограв у футбол", nl: "Jij hebt voetbal gespeeld" },
  { ua: "Він пограв у футбол", nl: "Hij heeft voetbal gespeeld" },
  { ua: "Вона пограла у футбол", nl: "Zij heeft voetbal gespeeld" },
  { ua: "Ми пограли у футбол", nl: "Wij hebben voetbal gespeeld" },
  { ua: "Ви пограли у футбол", nl: "Jullie hebben voetbal gespeeld" },
  { ua: "Вони пограли у футбол", nl: "Zij hebben voetbal gespeeld" },

  // Написал письмо
  { ua: "Я написав лист", nl: "Ik heb een brief geschreven" },
  { ua: "Ти написав лист", nl: "Jij hebt een brief geschreven" },
  { ua: "Він написав лист", nl: "Hij heeft een brief geschreven" },
  { ua: "Вона написала лист", nl: "Zij heeft een brief geschreven" },
  { ua: "Ми написали листи", nl: "Wij hebben brieven geschreven" },
  { ua: "Ви написали листи", nl: "Jullie hebben brieven geschreven" },
  { ua: "Вони написали листи", nl: "Zij hebben brieven geschreven" },

  // Взял душ
  { ua: "Я прийняв душ", nl: "Ik heb een douche genomen" },
  { ua: "Ти прийняв душ", nl: "Jij hebt een douche genomen" },
  { ua: "Він прийняв душ", nl: "Hij heeft een douche genomen" },
  { ua: "Вона прийняла душ", nl: "Zij heeft een douche genomen" },
  { ua: "Ми прийняли душ", nl: "Wij hebben een douche genomen" },
  { ua: "Ви прийняли душ", nl: "Jullie hebben een douche genomen" },
  { ua: "Вони прийняли душ", nl: "Zij hebben een douche genomen" },
  // Послушал радио
  { ua: "Я послухав радіо", nl: "Ik heb naar de radio geluisterd" },
  { ua: "Ти послухав радіо", nl: "Jij hebt naar de radio geluisterd" },
  { ua: "Він послухав радіо", nl: "Hij heeft naar de radio geluisterd" },
  { ua: "Вона послухала радіо", nl: "Zij heeft naar de radio geluisterd" },
  { ua: "Ми послухали радіо", nl: "Wij hebben naar de radio geluisterd" },
  { ua: "Ви послухали радіо", nl: "Jullie hebben naar de radio geluisterd" },
  { ua: "Вони послухали радіо", nl: "Zij hebben naar de radio geluisterd" },

  // Прочитал письмо
  { ua: "Я прочитав лист", nl: "Ik heb een brief gelezen" },
  { ua: "Ти прочитав лист", nl: "Jij hebt een brief gelezen" },
  { ua: "Він прочитав лист", nl: "Hij heeft een brief gelezen" },
  { ua: "Вона прочитала лист", nl: "Zij heeft een brief gelezen" },
  { ua: "Ми прочитали листи", nl: "Wij hebben brieven gelezen" },
  { ua: "Ви прочитали листи", nl: "Jullie hebben brieven gelezen" },
  { ua: "Вони прочитали листи", nl: "Zij hebben brieven gelezen" },

  // Почистил окна
  { ua: "Я помив вікна", nl: "Ik heb de ramen gepoetst" },
  { ua: "Ти помив вікна", nl: "Jij hebt de ramen gepoetst" },
  { ua: "Він помив вікна", nl: "Hij heeft de ramen gepoetst" },
  { ua: "Вона помила вікна", nl: "Zij heeft de ramen gepoetst" },
  { ua: "Ми помили вікна", nl: "Wij hebben de ramen gepoetst" },
  { ua: "Ви помили вікна", nl: "Jullie hebben de ramen gepoetst" },
  { ua: "Вони помили вікна", nl: "Zij hebben de ramen gepoetst" },

  // Сделал покупки
  { ua: "Я зробив покупки", nl: "Ik heb boodschappen gedaan" },
  { ua: "Ти зробив покупки", nl: "Jij hebt boodschappen gedaan" },
  { ua: "Він зробив покупки", nl: "Hij heeft boodschappen gedaan" },
  { ua: "Вона зробила покупки", nl: "Zij heeft boodschappen gedaan" },
  { ua: "Ми зробили покупки", nl: "Wij hebben boodschappen gedaan" },
  { ua: "Ви зробили покупки", nl: "Jullie hebben boodschappen gedaan" },
  { ua: "Вони зробили покупки", nl: "Zij hebben boodschappen gedaan" },

  // Постирал
  { ua: "Я поправ", nl: "Ik heb de was gedaan" },
  { ua: "Ти поправ", nl: "Jij hebt de was gedaan" },
  { ua: "Він поправ", nl: "Hij heeft de was gedaan" },
  { ua: "Вона поправ", nl: "Zij heeft de was gedaan" },
  { ua: "Ми попрали", nl: "Wij hebben de was gedaan" },
  { ua: "Ви попрали", nl: "Jullie hebben de was gedaan" },
  { ua: "Вони попрали", nl: "Zij hebben de was gedaan" },
  // Погулял с собакой
  { ua: "Я погуляв з собакою", nl: "Ik heb met de hond gewandeld" },
  { ua: "Ти погуляв з собакою", nl: "Jij hebt met de hond gewandeld" },
  { ua: "Він погуляв з собакою", nl: "Hij heeft met de hond gewandeld" },
  { ua: "Вона погуляла з собакою", nl: "Zij heeft met de hond gewandeld" },
  { ua: "Ми погуляли з собакою", nl: "Wij hebben met de hond gewandeld" },
  { ua: "Ви погуляли з собакою", nl: "Jullie hebben met de hond gewandeld" },
  { ua: "Вони погуляли з собакою", nl: "Zij hebben met de hond gewandeld" },

  // Поговорил по телефону
  { ua: "Я поговорив по телефону", nl: "Ik heb getelefoneerd" },
  { ua: "Ти поговорив по телефону", nl: "Jij hebt getelefoneerd" },
  { ua: "Він поговорив по телефону", nl: "Hij heeft getelefoneerd" },
  { ua: "Вона поговорила по телефону", nl: "Zij heeft getelefoneerd" },
  { ua: "Ми поговорили по телефону", nl: "Wij hebben getelefoneerd" },
  { ua: "Ви поговорили по телефону", nl: "Jullie hebben getelefoneerd" },
  { ua: "Вони поговорили по телефону", nl: "Zij hebben getelefoneerd" },

  // Приготовил еду
  { ua: "Я приготував їжу", nl: "Ik heb gekookt" },
  { ua: "Ти приготував їжу", nl: "Jij hebt gekookt" },
  { ua: "Він приготував їжу", nl: "Hij heeft gekookt" },
  { ua: "Вона приготувала їжу", nl: "Zij heeft gekookt" },
  { ua: "Ми приготували їжу", nl: "Wij hebben gekookt" },
  { ua: "Ви приготували їжу", nl: "Jullie hebben gekookt" },
  { ua: "Вони приготували їжу", nl: "Zij hebben gekookt" },

  // Прокатился на велосипеде
  { ua: "Я покатався на велосипеді", nl: "Ik heb gefietst" },
  { ua: "Ти покатався на велосипеді", nl: "Jij hebt gefietst" },
  { ua: "Він покатався на велосипеді", nl: "Hij heeft gefietst" },
  { ua: "Вона покаталася на велосипеді", nl: "Zij heeft gefietst" },
  { ua: "Ми покаталися на велосипедах", nl: "Wij hebben gefietst" },
  { ua: "Ви покаталися на велосипедах", nl: "Jullie hebben gefietst" },
  { ua: "Вони покаталися на велосипедах", nl: "Zij hebben gefietst" },
  // Съел яблоко
  { ua: "Я з'їв яблуко", nl: "Ik heb een appel gegeten" },
  { ua: "Ти з'їв яблуко", nl: "Jij hebt een appel gegeten" },
  { ua: "Він з'їв яблуко", nl: "Hij heeft een appel gegeten" },
  { ua: "Вона з'їла яблуко", nl: "Zij heeft een appel gegeten" },
  { ua: "Ми з'їли яблука", nl: "Wij hebben appels gegeten" },
  { ua: "Ви з'їли яблука", nl: "Jullie hebben appels gegeten" },
  { ua: "Вони з'їли яблука", nl: "Zij hebben appels gegeten" },

  // Прочитал книгу
  { ua: "Я прочитав книгу", nl: "Ik heb een boek gelezen" },
  { ua: "Ти прочитав книгу", nl: "Jij hebt een boek gelezen" },
  { ua: "Він прочитав книгу", nl: "Hij heeft een boek gelezen" },
  { ua: "Вона прочитала книгу", nl: "Zij heeft een boek gelezen" },
  { ua: "Ми прочитали книги", nl: "Wij hebben boeken gelezen" },
  { ua: "Ви прочитали книги", nl: "Jullie hebben boeken gelezen" },
  { ua: "Вони прочитали книги", nl: "Zij hebben boeken gelezen" },

  // Работал в саду
  { ua: "Я попрацював у саду", nl: "Ik heb in de tuin gewerkt" },
  { ua: "Ти попрацював у саду", nl: "Jij hebt in de tuin gewerkt" },
  { ua: "Він попрацював у саду", nl: "Hij heeft in de tuin gewerkt" },
  { ua: "Вона попрацювала у саду", nl: "Zij heeft in de tuin gewerkt" },
  { ua: "Ми попрацювали у саду", nl: "Wij hebben in de tuin gewerkt" },
  { ua: "Ви попрацювали у саду", nl: "Jullie hebben in de tuin gewerkt" },
  { ua: "Вони попрацювали у саду", nl: "Zij hebben in de tuin gewerkt" },

  // Смотрел телевизор
  { ua: "Я подивився телевізор", nl: "Ik heb tv gekeken" },
  { ua: "Ти подивився телевізор", nl: "Jij hebt tv gekeken" },
  { ua: "Він подивився телевізор", nl: "Hij heeft tv gekeken" },
  { ua: "Вона подивилася телевізор", nl: "Zij heeft tv gekeken" },
  { ua: "Ми подивилися телевізор", nl: "Wij hebben tv gekeken" },
  { ua: "Ви подивилися телевізор", nl: "Jullie hebben tv gekeken" },
  { ua: "Вони подивилися телевізор", nl: "Zij hebben tv gekeken" },

  // Пылесосил
  { ua: "Я попилососив", nl: "Ik heb gestofzuigd" },
  { ua: "Ти попилососив", nl: "Jij hebt gestofzuigd" },
  { ua: "Він попилососив", nl: "Hij heeft gestofzuigd" },
  { ua: "Вона попилососила", nl: "Zij heeft gestofzuigd" },
  { ua: "Ми попилососили", nl: "Wij hebben gestofzuigd" },
  { ua: "Ви попилососили", nl: "Jullie hebben gestofzuigd" },
  { ua: "Вони попилососили", nl: "Zij hebben gestofzuigd" },
  // Съел бутерброд
  { ua: "Я з'їв бутерброд", nl: "Ik heb een boterham gegeten" },
  { ua: "Ти з'їв бутерброд", nl: "Jij hebt een boterham gegeten" },
  { ua: "Він з'їв бутерброд", nl: "Hij heeft een boterham gegeten" },
  { ua: "Вона з'їла бутерброд", nl: "Zij heeft een boterham gegeten" },
  { ua: "Ми з'їли бутерброди", nl: "Wij hebben boterhammen gegeten" },
  { ua: "Ви з'їли бутерброди", nl: "Jullie hebben boterhammen gegeten" },
  { ua: "Вони з'їли бутерброди", nl: "Zij hebben boterhammen gegeten" },

  // Серфил в интернете
  { ua: "Я посерфив в інтернеті", nl: "Ik heb op internet gesurft" },
  { ua: "Ти посерфив в інтернеті", nl: "Jij hebt op internet gesurft" },
  { ua: "Він посерфив в інтернеті", nl: "Hij heeft op internet gesurft" },
  { ua: "Вона посерфила в інтернеті", nl: "Zij heeft op internet gesurft" },
  { ua: "Ми посерфили в інтернеті", nl: "Wij hebben op internet gesurft" },
  { ua: "Ви посерфили в інтернеті", nl: "Jullie hebben op internet gesurft" },
  { ua: "Вони посерфили в інтернеті", nl: "Zij hebben op internet gesurft" },

  // Купил новую одежду
  { ua: "Я купив новий одяг", nl: "Ik heb nieuwe kleren gekocht" },
  { ua: "Ти купив новий одяг", nl: "Jij hebt nieuwe kleren gekocht" },
  { ua: "Він купив новий одяг", nl: "Hij heeft nieuwe kleren gekocht" },
  { ua: "Вона купила новий одяг", nl: "Zij heeft nieuwe kleren gekocht" },
  { ua: "Ми купили новий одяг", nl: "Wij hebben nieuwe kleren gekocht" },
  { ua: "Ви купили новий одяг", nl: "Jullie hebben nieuwe kleren gekocht" },
  { ua: "Вони купили новий одяг", nl: "Zij hebben nieuwe kleren gekocht" },

  // Покрасил гостиную
  { ua: "Я пофарбував вітальню", nl: "Ik heb de living geschilderd" },
  { ua: "Ти пофарбував вітальню", nl: "Jij hebt de living geschilderd" },
  { ua: "Він пофарбував вітальню", nl: "Hij heeft de living geschilderd" },
  { ua: "Вона пофарбувала вітальню", nl: "Zij heeft de living geschilderd" },
  { ua: "Ми пофарбували вітальню", nl: "Wij hebben de living geschilderd" },
  { ua: "Ви пофарбували вітальню", nl: "Jullie hebben de living geschilderd" },
  { ua: "Вони пофарбували вітальню", nl: "Zij hebben de living geschilderd" },

  // Почистил дом
  { ua: "Я почистив будинок", nl: "Ik heb mijn huis gepoetst" },
  { ua: "Ти почистив будинок", nl: "Jij hebt je huis gepoetst" },
  { ua: "Він почистив будинок", nl: "Hij heeft zijn huis gepoetst" },
  { ua: "Вона почистила будинок", nl: "Zij heeft haar huis gepoetst" },
  { ua: "Ми почистили будинок", nl: "Wij hebben ons huis gepoetst" },
  { ua: "Ви почистили будинок", nl: "Jullie hebben jullie huis gepoetst" },
  { ua: "Вони почистили будинок", nl: "Zij hebben hun huis gepoetst" },
  // Был в кинотеатре
  { ua: "Я був у кінотеатрі", nl: "Ik ben in de cinema geweest" },
  { ua: "Ти був у кінотеатрі", nl: "Jij bent in de cinema geweest" },
  { ua: "Він був у кінотеатрі", nl: "Hij is in de cinema geweest" },
  { ua: "Вона була у кінотеатрі", nl: "Zij is in de cinema geweest" },
  { ua: "Ми були у кінотеатрі", nl: "Wij zijn in de cinema geweest" },
  { ua: "Ви були у кінотеатрі", nl: "Jullie zijn in de cinema geweest" },
  { ua: "Вони були у кінотеатрі", nl: "Zij zijn in de cinema geweest" },

  // Работал
  { ua: "Я працював", nl: "Ik heb gewerkt" },
  { ua: "Ти працював", nl: "Jij hebt gewerkt" },
  { ua: "Він працював", nl: "Hij heeft gewerkt" },
  { ua: "Вона працювала", nl: "Zij heeft gewerkt" },
  { ua: "Ми працювали", nl: "Wij hebben gewerkt" },
  { ua: "Ви працювали", nl: "Jullie hebben gewerkt" },
  { ua: "Вони працювали", nl: "Zij hebben gewerkt" },

  // Помыл посуду
  { ua: "Я помив посуд", nl: "Ik heb de afwas gedaan" },
  { ua: "Ти помив посуд", nl: "Jij hebt de afwas gedaan" },
  { ua: "Він помив посуд", nl: "Hij heeft de afwas gedaan" },
  { ua: "Вона помила посуд", nl: "Zij heeft de afwas gedaan" },
  { ua: "Ми помили посуд", nl: "Wij hebben de afwas gedaan" },
  { ua: "Ви помили посуд", nl: "Jullie hebben de afwas gedaan" },
  { ua: "Вони помили посуд", nl: "Zij hebben de afwas gedaan" },

  // Спал
  { ua: "Я спав", nl: "Ik heb geslapen" },
  { ua: "Ти спав", nl: "Jij hebt geslapen" },
  { ua: "Він спав", nl: "Hij heeft geslapen" },
  { ua: "Вона спала", nl: "Zij heeft geslapen" },
  { ua: "Ми спали", nl: "Wij hebben geslapen" },
  { ua: "Ви спали", nl: "Jullie hebben geslapen" },
  { ua: "Вони спали", nl: "Zij hebben geslapen" },

  // Почистил зубы
  { ua: "Я почистив зуби", nl: "Ik heb mijn tanden gepoetst" },
  { ua: "Ти почистив зуби", nl: "Jij hebt je tanden gepoetst" },
  { ua: "Він почистив зуби", nl: "Hij heeft zijn tanden gepoetst" },
  { ua: "Вона почистила зуби", nl: "Zij heeft haar tanden gepoetst" },
  { ua: "Ми почистили зуби", nl: "Wij hebben onze tanden gepoetst" },
  { ua: "Ви почистили зуби", nl: "Jullie hebben jullie tanden gepoetst" },
  { ua: "Вони почистили зуби", nl: "Zij hebben hun tanden gepoetst" },
];

const sentenceExamples4 = [
  // Возьму ванну
  { ua: "Я візьму ванну", nl: "Ik ga een bad nemen" },
  { ua: "Ти візьмеш ванну", nl: "Jij gaat een bad nemen" },
  { ua: "Він візьме ванну", nl: "Hij gaat een bad nemen" },
  { ua: "Вона візьме ванну", nl: "Zij gaat een bad nemen" },
  { ua: "Ми візьмемо ванну", nl: "Wij gaan een bad nemen" },
  { ua: "Ви візьмете ванну", nl: "Jullie gaan een bad nemen" },
  { ua: "Вони візьмуть ванну", nl: "Zij gaan een bad nemen" },

  // Прочитаю газету
  { ua: "Я прочитаю газету", nl: "Ik ga de krant lezen" },
  { ua: "Ти прочитаєш газету", nl: "Jij gaat de krant lezen" },
  { ua: "Він прочитає газету", nl: "Hij gaat de krant lezen" },
  { ua: "Вона прочитає газету", nl: "Zij gaat de krant lezen" },
  { ua: "Ми прочитаємо газету", nl: "Wij gaan de krant lezen" },
  { ua: "Ви прочитаєте газету", nl: "Jullie gaan de krant lezen" },
  { ua: "Вони прочитають газету", nl: "Zij gaan de krant lezen" },

  // Почищу обувь
  { ua: "Я почищу взуття", nl: "Ik ga mijn schoenen poetsen" },
  { ua: "Ти почистиш взуття", nl: "Jij gaat je schoenen poetsen" },
  { ua: "Він почистить взуття", nl: "Hij gaat zijn schoenen poetsen" },
  { ua: "Вона почистить взуття", nl: "Zij gaat haar schoenen poetsen" },
  { ua: "Ми почистимо взуття", nl: "Wij gaan onze schoenen poetsen" },
  { ua: "Ви почистите взуття", nl: "Jullie gaan jullie schoenen poetsen" },
  { ua: "Вони почистять взуття", nl: "Zij gaan hun schoenen poetsen" },

  // Изучу нидерландский
  { ua: "Я вивчатиму нідерландську", nl: "Ik ga Nederlands studeren" },
  { ua: "Ти вивчатимеш нідерландську", nl: "Jij gaat Nederlands studeren" },
  { ua: "Він вивчатиме нідерландську", nl: "Hij gaat Nederlands studeren" },
  { ua: "Вона вивчатиме нідерландську", nl: "Zij gaat Nederlands studeren" },
  { ua: "Ми вивчатимемо нідерландську", nl: "Wij gaan Nederlands studeren" },
  { ua: "Ви вивчатимете нідерландську", nl: "Jullie gaan Nederlands studeren" },
  { ua: "Вони вивчатимуть нідерландську", nl: "Zij gaan Nederlands studeren" },

  // Сыграю в теннис
  { ua: "Я зіграю в теніс", nl: "Ik ga tennis spelen" },
  { ua: "Ти зіграєш в теніс", nl: "Jij gaat tennis spelen" },
  { ua: "Він зіграє в теніс", nl: "Hij gaat tennis spelen" },
  { ua: "Вона зіграє в теніс", nl: "Zij gaat tennis spelen" },
  { ua: "Ми зіграємо в теніс", nl: "Wij gaan tennis spelen" },
  { ua: "Ви зіграєте в теніс", nl: "Jullie gaan tennis spelen" },
  { ua: "Вони зіграють в теніс", nl: "Zij gaan tennis spelen" },
  // Отремонтирую автомобиль
  { ua: "Я відремонтую автомобіль", nl: "Ik ga mijn auto repareren" },
  { ua: "Ти відремонтуєш автомобіль", nl: "Jij gaat je auto repareren" },
  { ua: "Він відремонтує автомобіль", nl: "Hij gaat zijn auto repareren" },
  { ua: "Вона відремонтує автомобіль", nl: "Zij gaat haar auto repareren" },
  { ua: "Ми відремонтуємо автомобілі", nl: "Wij gaan onze auto's repareren" },
  {
    ua: "Ви відремонтуєте автомобілі",
    nl: "Jullie gaan jullie auto's repareren",
  },
  { ua: "Вони відремонтують автомобілі", nl: "Zij gaan hun auto's repareren" },

  // Поглажу
  { ua: "Я погладжу", nl: "Ik ga strijken" },
  { ua: "Ти погладиш", nl: "Jij gaat strijken" },
  { ua: "Він погладить", nl: "Hij gaat strijken" },
  { ua: "Вона погладить", nl: "Zij gaat strijken" },
  { ua: "Ми погладимо", nl: "Wij gaan strijken" },
  { ua: "Ви погладите", nl: "Jullie gaan strijken" },
  { ua: "Вони погладять", nl: "Zij gaan strijken" },

  // Сыграю в футбол
  { ua: "Я зіграю у футбол", nl: "Ik ga voetballen" },
  { ua: "Ти зіграєш у футбол", nl: "Jij gaat voetballen" },
  { ua: "Він зіграє у футбол", nl: "Hij gaat voetballen" },
  { ua: "Вона зіграє у футбол", nl: "Zij gaat voetballen" },
  { ua: "Ми зіграємо у футбол", nl: "Wij gaan voetballen" },
  { ua: "Ви зіграєте у футбол", nl: "Jullie gaan voetballen" },
  { ua: "Вони зіграють у футбол", nl: "Zij gaan voetballen" },

  // Напишу письмо
  { ua: "Я напишу лист", nl: "Ik ga een brief schrijven" },
  { ua: "Ти напишеш лист", nl: "Jij gaat een brief schrijven" },
  { ua: "Він напише лист", nl: "Hij gaat een brief schrijven" },
  { ua: "Вона напише лист", nl: "Zij gaat een brief schrijven" },
  { ua: "Ми напишемо листи", nl: "Wij gaan brieven schrijven" },
  { ua: "Ви напишете листи", nl: "Jullie gaan brieven schrijven" },
  { ua: "Вони напишуть листи", nl: "Zij gaan brieven schrijven" },

  // Возьму душ
  { ua: "Я прийму душ", nl: "Ik ga douchen" },
  { ua: "Ти прийме душ", nl: "Jij gaat douchen" },
  { ua: "Він прийме душ", nl: "Hij gaat douchen" },
  { ua: "Вона прийме душ", nl: "Zij gaat douchen" },
  { ua: "Ми приймем душ", nl: "Wij gaan douchen" },
  { ua: "Ви приймите душ", nl: "Jullie gaan douchen" },
  { ua: "Вони приймуть душ", nl: "Zij gaan douchen" },
  // Буду слушать радио
  { ua: "Я слухатиму радіо", nl: "Ik ga naar de radio luisteren" },
  { ua: "Ти слухатимеш радіо", nl: "Jij gaat naar de radio luisteren" },
  { ua: "Він слухатиме радіо", nl: "Hij gaat naar de radio luisteren" },
  { ua: "Вона слухатиме радіо", nl: "Zij gaat naar de radio luisteren" },
  { ua: "Ми слухатимемо радіо", nl: "Wij gaan naar de radio luisteren" },
  { ua: "Ви слухатимете радіо", nl: "Jullie gaan naar de radio luisteren" },
  { ua: "Вони слухатимуть радіо", nl: "Zij gaan naar de radio luisteren" },

  // Прочитаю письмо
  { ua: "Я прочитаю лист", nl: "Ik ga een brief lezen" },
  { ua: "Ти прочитаєш лист", nl: "Jij gaat een brief lezen" },
  { ua: "Він прочитає лист", nl: "Hij gaat een brief lezen" },
  { ua: "Вона прочитає лист", nl: "Zij gaat een brief lezen" },
  { ua: "Ми прочитаємо листи", nl: "Wij gaan brieven lezen" },
  { ua: "Ви прочитаєте листи", nl: "Jullie gaan brieven lezen" },
  { ua: "Вони прочитають листи", nl: "Zij gaan brieven lezen" },

  // Почищу окна
  { ua: "Я помию вікна", nl: "Ik ga de ramen poetsen" },
  { ua: "Ти помиєш вікна", nl: "Jij gaat de ramen poetsen" },
  { ua: "Він помиє вікна", nl: "Hij gaat de ramen poetsen" },
  { ua: "Вона помиє вікна", nl: "Zij gaat de ramen poetsen" },
  { ua: "Ми помиємо вікна", nl: "Wij gaan de ramen poetsen" },
  { ua: "Ви помиєте вікна", nl: "Jullie gaan de ramen poetsen" },
  { ua: "Вони помиють вікна", nl: "Zij gaan de ramen poetsen" },

  // Сделаю покупки
  { ua: "Я зроблю покупки", nl: "Ik ga boodschappen doen" },
  { ua: "Ти зробиш покупки", nl: "Jij gaat boodschappen doen" },
  { ua: "Він зробить покупки", nl: "Hij gaat boodschappen doen" },
  { ua: "Вона зробить покупки", nl: "Zij gaat boodschappen doen" },
  { ua: "Ми зробимо покупки", nl: "Wij gaan boodschappen doen" },
  { ua: "Ви зробите покупки", nl: "Jullie gaan boodschappen doen" },
  { ua: "Вони зроблять покупки", nl: "Zij gaan boodschappen doen" },

  // Постираю
  { ua: "Я постираю", nl: "Ik ga de was doen" },
  { ua: "Ти постираєш", nl: "Jij gaat de was doen" },
  { ua: "Він постирає", nl: "Hij gaat de was doen" },
  { ua: "Вона постирає", nl: "Zij gaat de was doen" },
  { ua: "Ми постираємо", nl: "Wij gaan de was doen" },
  { ua: "Ви постираєте", nl: "Jullie gaan de was doen" },
  { ua: "Вони постирають", nl: "Zij gaan de was doen" },
  // Погуляю с собакой
  { ua: "Я погуляю з собакою", nl: "Ik ga met de hond wandelen" },
  { ua: "Ти погуляєш з собакою", nl: "Jij gaat met de hond wandelen" },
  { ua: "Він погуляє з собакою", nl: "Hij gaat met de hond wandelen" },
  { ua: "Вона погуляє з собакою", nl: "Zij gaat met de hond wandelen" },
  { ua: "Ми погуляємо з собакою", nl: "Wij gaan met de hond wandelen" },
  { ua: "Ви погуляєте з собакою", nl: "Jullie gaan met de hond wandelen" },
  { ua: "Вони погуляють з собакою", nl: "Zij gaan met de hond wandelen" },

  // Позвоню
  { ua: "Я подзвоню", nl: "Ik ga telefoneren" },
  { ua: "Ти подзвониш", nl: "Jij gaat telefoneren" },
  { ua: "Він подзвонить", nl: "Hij gaat telefoneren" },
  { ua: "Вона подзвонить", nl: "Zij gaat telefoneren" },
  { ua: "Ми подзвонимо", nl: "Wij gaan telefoneren" },
  { ua: "Ви подзвоните", nl: "Jullie gaan telefoneren" },
  { ua: "Вони подзвонять", nl: "Zij gaan telefoneren" },

  // Приготовлю еду
  { ua: "Я приготую їжу", nl: "Ik ga koken" },
  { ua: "Ти приготуєш їжу", nl: "Jij gaat koken" },
  { ua: "Він приготує їжу", nl: "Hij gaat koken" },
  { ua: "Вона приготує їжу", nl: "Zij gaat koken" },
  { ua: "Ми приготуємо їжу", nl: "Wij gaan koken" },
  { ua: "Ви приготуєте їжу", nl: "Jullie gaan koken" },
  { ua: "Вони приготують їжу", nl: "Zij gaan koken" },

  // Покатаюсь на велосипеде
  { ua: "Я покатаюся на велосипеді", nl: "Ik ga fietsen" },
  { ua: "Ти покатаєшся на велосипеді", nl: "Jij gaat fietsen" },
  { ua: "Він покатається на велосипеді", nl: "Hij gaat fietsen" },
  { ua: "Вона покатається на велосипеді", nl: "Zij gaat fietsen" },
  { ua: "Ми покатаємося на велосипедах", nl: "Wij gaan fietsen" },
  { ua: "Ви покатаєтеся на велосипедах", nl: "Jullie gaan fietsen" },
  { ua: "Вони покатаються на велосипедах", nl: "Zij gaan fietsen" },

  // Съем яблоко
  { ua: "Я з'їм яблуко", nl: "Ik ga een appel eten" },
  { ua: "Ти з'їси яблуко", nl: "Jij gaat een appel eten" },
  { ua: "Він з'їсть яблуко", nl: "Hij gaat een appel eten" },
  { ua: "Вона з'їсть яблуко", nl: "Zij gaat een appel eten" },
  { ua: "Ми з'їмо яблука", nl: "Wij gaan appels eten" },
  { ua: "Ви з'їсте яблука", nl: "Jullie gaan appels eten" },
  { ua: "Вони з'їдять яблука", nl: "Zij gaan appels eten" },
  // Прочитаю книгу
  { ua: "Я прочитаю книгу", nl: "Ik ga een boek lezen" },
  { ua: "Ти прочитаєш книгу", nl: "Jij gaat een boek lezen" },
  { ua: "Він прочитає книгу", nl: "Hij gaat een boek lezen" },
  { ua: "Вона прочитає книгу", nl: "Zij gaat een boek lezen" },
  { ua: "Ми прочитаємо книги", nl: "Wij gaan boeken lezen" },
  { ua: "Ви прочитаєте книги", nl: "Jullie gaan boeken lezen" },
  { ua: "Вони прочитають книги", nl: "Zij gaan boeken lezen" },

  // Поработаю в саду
  { ua: "Я попрацюю в саду", nl: "Ik ga in de tuin werken" },
  { ua: "Ти попрацюєш в саду", nl: "Jij gaat in de tuin werken" },
  { ua: "Він попрацює в саду", nl: "Hij gaat in de tuin werken" },
  { ua: "Вона попрацює в саду", nl: "Zij gaat in de tuin werken" },
  { ua: "Ми попрацюємо в саду", nl: "Wij gaan in de tuin werken" },
  { ua: "Ви попрацюєте в саду", nl: "Jullie gaan in de tuin werken" },
  { ua: "Вони попрацюють в саду", nl: "Zij gaan in de tuin werken" },

  // Посмотрю телевизор
  { ua: "Я подивлюсь телевізор", nl: "Ik ga tv kijken" },
  { ua: "Ти подивишся телевізор", nl: "Jij gaat tv kijken" },
  { ua: "Він подивиться телевізор", nl: "Hij gaat tv kijken" },
  { ua: "Вона подивиться телевізор", nl: "Zij gaat tv kijken" },
  { ua: "Ми подивимося телевізор", nl: "Wij gaan tv kijken" },
  { ua: "Ви подивитеся телевізор", nl: "Jullie gaan tv kijken" },
  { ua: "Вони подивляться телевізор", nl: "Zij gaan tv kijken" },

  // Попылесошу
  { ua: "Я попилосошу", nl: "Ik ga stofzuigen" },
  { ua: "Ти попилососеш", nl: "Jij gaat stofzuigen" },
  { ua: "Він попилососить", nl: "Hij gaat stofzuigen" },
  { ua: "Вона попилососить", nl: "Zij gaat stofzuigen" },
  { ua: "Ми попилососимо", nl: "Wij gaan stofzuigen" },
  { ua: "Ви попилососите", nl: "Jullie gaan stofzuigen" },
  { ua: "Вони попилососять", nl: "Zij gaan stofzuigen" },
  // Съем бутерброд
  { ua: "Я з'їм бутерброд", nl: "Ik ga een boterham eten" },
  { ua: "Ти з'їси бутерброд", nl: "Jij gaat een boterham eten" },
  { ua: "Він з'їсть бутерброд", nl: "Hij gaat een boterham eten" },
  { ua: "Вона з'їсть бутерброд", nl: "Zij gaat een boterham eten" },
  { ua: "Ми з'їмо бутерброди", nl: "Wij gaan boterhammen eten" },
  { ua: "Ви з'їсте бутерброди", nl: "Jullie gaan boterhammen eten" },
  { ua: "Вони з'їдять бутерброди", nl: "Zij gaan boterhammen eten" },

  // Посерфлю в интернете
  { ua: "Я посерфлю в інтернеті", nl: "Ik ga op internet surfen" },
  { ua: "Ти посерфиш в інтернеті", nl: "Jij gaat op internet surfen" },
  { ua: "Він посерфить в інтернеті", nl: "Hij gaat op internet surfen" },
  { ua: "Вона посерфить в інтернеті", nl: "Zij gaat op internet surfen" },
  { ua: "Ми посерфимо в інтернеті", nl: "Wij gaan op internet surfen" },
  { ua: "Ви посерфите в інтернеті", nl: "Jullie gaan op internet surfen" },
  { ua: "Вони посерфлять в інтернеті", nl: "Zij gaan op internet surfen" },

  // Куплю новую одежду
  { ua: "Я куплю новий одяг", nl: "Ik ga nieuwe kleren kopen" },
  { ua: "Ти купиш новий одяг", nl: "Jij gaat nieuwe kleren kopen" },
  { ua: "Він купить новий одяг", nl: "Hij gaat nieuwe kleren kopen" },
  { ua: "Вона купить новий одяг", nl: "Zij gaat nieuwe kleren kopen" },
  { ua: "Ми купимо новий одяг", nl: "Wij gaan nieuwe kleren kopen" },
  { ua: "Ви купите новий одяг", nl: "Jullie gaan nieuwe kleren kopen" },
  { ua: "Вони куплять новий одяг", nl: "Zij gaan nieuwe kleren kopen" },

  // Покрашу гостиную
  { ua: "Я пофарбую вітальню", nl: "Ik ga de living schilderen" },
  { ua: "Ти пофарбуєш вітальню", nl: "Jij gaat de living schilderen" },
  { ua: "Він пофарбує вітальню", nl: "Hij gaat de living schilderen" },
  { ua: "Вона пофарбує вітальню", nl: "Zij gaat de living schilderen" },
  { ua: "Ми пофарбуємо вітальню", nl: "Wij gaan de living schilderen" },
  { ua: "Ви пофарбуєте вітальню", nl: "Jullie gaan de living schilderen" },
  { ua: "Вони пофарбують вітальню", nl: "Zij gaan de living schilderen" },

  // Почищу дом
  { ua: "Я почищу будинок", nl: "Ik ga mijn huis poetsen" },
  { ua: "Ти почистиш будинок", nl: "Jij gaat je huis poetsen" },
  { ua: "Він почистить будинок", nl: "Hij gaat zijn huis poetsen" },
  { ua: "Вона почистить будинок", nl: "Zij gaat haar huis poetsen" },
  { ua: "Ми почистимо будинок", nl: "Wij gaan ons huis poetsen" },
  { ua: "Ви почистите будинок", nl: "Jullie gaan jullie huis poetsen" },
  { ua: "Вони почистять будинок", nl: "Zij gaan hun huis poetsen" },
  // Буду сидеть в кинотеатре
  { ua: "Я сидітиму в кінотеатрі", nl: "Ik ga in de cinema zitten" },
  { ua: "Ти сидітимеш в кінотеатрі", nl: "Jij gaat in de cinema zitten" },
  { ua: "Він сидітиме в кінотеатрі", nl: "Hij gaat in de cinema zitten" },
  { ua: "Вона сидітиме в кінотеатрі", nl: "Zij gaat in de cinema zitten" },
  { ua: "Ми сидітимемо в кінотеатрі", nl: "Wij gaan in de cinema zitten" },
  { ua: "Ви сидітимете в кінотеатрі", nl: "Jullie gaan in de cinema zitten" },
  { ua: "Вони сидітимуть в кінотеатрі", nl: "Zij gaan in de cinema zitten" },

  // Буду работать
  { ua: "Я працюватиму", nl: "Ik ga werken" },
  { ua: "Ти працюватимеш", nl: "Jij gaat werken" },
  { ua: "Він працюватиме", nl: "Hij gaat werken" },
  { ua: "Вона працюватиме", nl: "Zij gaat werken" },
  { ua: "Ми працюватимемо", nl: "Wij gaan werken" },
  { ua: "Ви працюватимете", nl: "Jullie gaan werken" },
  { ua: "Вони працюватимуть", nl: "Zij gaan werken" },

  // Буду мыть посуду
  { ua: "Я митиму посуд", nl: "Ik ga de afwas doen" },
  { ua: "Ти митимеш посуд", nl: "Jij gaat de afwas doen" },
  { ua: "Він митиме посуд", nl: "Hij gaat de afwas doen" },
  { ua: "Вона митиме посуд", nl: "Zij gaat de afwas doen" },
  { ua: "Ми митимемо посуд", nl: "Wij gaan de afwas doen" },
  { ua: "Ви митимете посуд", nl: "Jullie gaan de afwas doen" },
  { ua: "Вони митимуть посуд", nl: "Zij gaan de afwas doen" },

  // Буду спать
  { ua: "Я спатиму", nl: "Ik ga slapen" },
  { ua: "Ти спатимеш", nl: "Jij gaat slapen" },
  { ua: "Він спатиме", nl: "Hij gaat slapen" },
  { ua: "Вона спатиме", nl: "Zij gaat slapen" },
  { ua: "Ми спатимемо", nl: "Wij gaan slapen" },
  { ua: "Ви спатимете", nl: "Jullie gaan slapen" },
  { ua: "Вони спатимуть", nl: "Zij gaan slapen" },

  // Буду чистить зубы
  { ua: "Я чиститиму зуби", nl: "Ik ga mijn tanden poetsen" },
  { ua: "Ти чиститимеш зуби", nl: "Jij gaat je tanden poetsen" },
  { ua: "Він чиститиме зуби", nl: "Hij gaat zijn tanden poetsen" },
  { ua: "Вона чиститиме зуби", nl: "Zij gaat haar tanden poetsen" },
  { ua: "Ми чиститимемо зуби", nl: "Wij gaan onze tanden poetsen" },
  { ua: "Ви чиститимете зуби", nl: "Jullie gaan jullie tanden poetsen" },
  { ua: "Вони чиститимуть зуби", nl: "Zij gaan hun tanden poetsen" },
];

const aanbiedingen = [
  sentenceExamples1,
  sentenceExamples2,
  sentenceExamples3,
  sentenceExamples4,
];
export default aanbiedingen;
