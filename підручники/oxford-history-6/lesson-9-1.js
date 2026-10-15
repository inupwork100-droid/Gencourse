// «Vocabulary quiz» — словникова вікторина за всіма розділами, сторінки 68–69.
(window.LESSONS = window.LESSONS || []).push({
  id: "Quiz",
  label: "Вікторина",
  unit: "Vocabulary quiz",
  color: "#c8372d",
  title: ["Vocabulary quiz", "Словникова вікторина"],
  pages: "68–69",
  blocks: [
    { type: "lead", page: 68, s: [
      ["Answer these questions in your notebook.", "Дай відповіді на ці запитання в зошиті."]
    ]},

    // ---------- 1 The Vikings ----------
    { type: "h2", s: [["1 The Vikings", "1 Вікінги"]] },
    { type: "figs", items: [
      { src: "h68-viking-boat", label: ["A boat with parts a–e", "Корабель із частинами a–e"] }
    ]},
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1", q: ["What type of boat is it? Labels a–e", "Що це за корабель? Підписи a–e"],
          a: ["It is a Viking longboat.\na – the mast\nb – the sail\nc – the carved figurehead (a dragon's head)\nd – the oars\ne – the shields", "Це довгий корабель вікінгів (драккар).\na — щогла\nb — вітрило\nc — різьблена фігура на носі (голова дракона)\nd — весла\ne — щити"] },
        { n: "2a", q: ["farming, meeting, fishing, hunting", "землеробство, збори, рибальство, полювання"],
          a: ["Meeting is the odd one out.\nFarming, fishing and hunting are all ways the Vikings got their food.", "Зайве слово — meeting (збори).\nЗемлеробство, рибальство й полювання — це способи, якими вікінги добували їжу."] },
        { n: "2b", q: ["fur, wool, timber, thrall", "хутро, вовна, деревина, трель"],
          a: ["Thrall is the odd one out.\nA thrall was a person (a slave). Fur, wool and timber are materials the Vikings used and traded.", "Зайве слово — thrall (трель).\nТрель — це людина (раб). Хутро, вовна й деревина — матеріали, якими вікінги користувалися й торгували."] },
        { n: "2c", q: ["Denmark, Norway, Russia, Sweden", "Данія, Норвегія, Росія, Швеція"],
          a: ["Russia is the odd one out.\nDenmark, Norway and Sweden are the three countries of Scandinavia, where the Vikings came from.", "Зайве слово — Russia.\nДанія, Норвегія та Швеція — три країни Скандинавії, звідки походили вікінги."] },
        { n: "3a", q: ["navigator", "штурман"],
          a: ["A navigator is a person who finds the way and decides which direction a ship should go.\nThe Viking navigator watched the Sun, the stars and the waves to find the way home.", "Штурман — людина, яка знаходить шлях і вирішує, куди має плисти корабель.\nШтурман-вікінг стежив за Сонцем, зорями й хвилями, щоб знайти дорогу додому."] },
        { n: "3b", q: ["warrior", "воїн"],
          a: ["A warrior is a brave fighter.\nThe Viking warrior jumped off the longboat with his sword and shield.", "Воїн — хоробрий боєць.\nВоїн-вікінг зістрибнув із корабля з мечем і щитом."] },
        { n: "3c", q: ["inherit", "успадкувати"],
          a: ["To inherit means to get money, land or things from a family member when they die.\nOnly the eldest son could inherit the family farm.", "Успадкувати — отримати гроші, землю чи речі від родича після його смерті.\nЛише старший син міг успадкувати родинну ферму."] },
        { n: "3d", q: ["Thing", "тінг"],
          a: ["A Thing was an open-air meeting where Vikings discussed problems, voted on laws and settled arguments.\nThe farmers went to the Thing to vote on a new law.", "Тінг — збори просто неба, де вікінги обговорювали проблеми, голосували за закони й розв'язували суперечки.\nФермери пішли на тінг, щоб проголосувати за новий закон."] },
        { n: "3e", q: ["outlaw", "вигнанець"],
          a: ["An outlaw was a person who broke the law and was sent away, so nobody had to protect them.\nAfter the fight, the Thing made Erik the Red an outlaw for three years.", "Вигнанець — людина, яка порушила закон і яку вигнали, тож ніхто не мусив її захищати.\nПісля сутички тінг оголосив Еріка Рудого вигнанцем на три роки."] },
        { n: "3f", q: ["saga", "сага"],
          a: ["A saga is a long story about Viking heroes, kings and their adventures.\nOn winter evenings the family listened to a saga about a brave explorer.", "Сага — довга оповідь про героїв-вікінгів, королів та їхні пригоди.\nЗимовими вечорами родина слухала сагу про хороброго мандрівника."] }
      ],
      items: [
        { n: "1", s: [
          ["Write what type of boat this picture shows.", "Напиши, який корабель зображено на цьому малюнку."],
          ["Then write the labels for each part of the boat a–e.", "Потім підпиши кожну частину корабля a–e."]
        ]},
        { n: "2", s: [["Which is the odd one out in each group of words? Explain your answer.", "Яке слово зайве в кожній групі? Поясни свою відповідь."]] },
        { n: "a", sub: true, s: [["farming   meeting   fishing   hunting", "землеробство, збори, рибальство, полювання"]] },
        { n: "b", sub: true, s: [["fur   wool   timber   thrall", "хутро, вовна, деревина, трель (раб)"]] },
        { n: "c", sub: true, s: [["Denmark   Norway   Russia   Sweden", "Данія, Норвегія, Росія, Швеція"]] },
        { n: "3", s: [
          ["Write a definition for each of the following words.", "Напиши визначення кожного з цих слів."],
          ["Then use each word correctly in a sentence or short paragraph.", "Потім правильно вживи кожне слово в реченні або короткому абзаці."]
        ]},
        { n: "a", sub: true, s: [["navigator", "штурман"]] },
        { n: "b", sub: true, s: [["warrior", "воїн"]] },
        { n: "c", sub: true, s: [["inherit", "успадкувати"]] },
        { n: "d", sub: true, s: [["Thing", "тінг"]] },
        { n: "e", sub: true, s: [["outlaw", "вигнанець"]] },
        { n: "f", sub: true, s: [["saga", "сага"]] }
      ]
    },

    // ---------- 2 The Age of Discovery and Exploration ----------
    { type: "h2", s: [["2 The Age of Discovery and Exploration", "2 Доба відкриттів і досліджень"]] },
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1a", q: ["Sort the words in a table", "Розподіли слова в таблицю"],
          a: ["Life at sea: caravel, scurvy, watch\nTrade goods: honey, indigo, spices\nThe Renaissance: experiments, printing press, scholars", "Життя в морі: каравела, цинга, вахта\nТовари: мед, індиго, прянощі\nВідродження: досліди, друкарський верстат, учені"] },
        { n: "1b", q: ["Add at least one new word to each group", "Додай щонайменше одне нове слово до кожної групи"],
          a: ["Life at sea: astrolabe, ship's biscuit, sailor\nTrade goods: silk, gold, pepper\nThe Renaissance: artist, invention, telescope", "Життя в морі: астролябія, корабельні сухарі, моряк\nТовари: шовк, золото, перець\nВідродження: художник, винахід, телескоп"] },
        { n: "2a", q: ["Picture a", "Малюнок a"],
          a: ["It is an astrolabe.\nSailors used it to measure how high the Sun or a star was above the horizon, so they could work out how far north or south their ship was.", "Це астролябія.\nМоряки вимірювали нею, як високо над обрієм Сонце чи зоря, і так з'ясовували, наскільки далеко на північ чи на південь їхній корабель."] },
        { n: "2b", q: ["Picture b", "Малюнок b"],
          a: ["It is an old map (a sea chart) with a compass rose.\nExplorers used maps like this to plan their voyages, and they drew new maps of the coasts and lands they discovered.", "Це стара карта (морська мапа) з розою вітрів.\nДослідники планували за такими картами подорожі й малювали нові карти берегів і земель, які відкривали."] },
        { n: "2c", q: ["Picture c", "Малюнок c"],
          a: ["It is a caravel.\nThis small, fast sailing ship was used by explorers such as Columbus and Dias. Its triangular sails let it sail even against the wind.", "Це каравела.\nНа цьому невеликому швидкому вітрильнику плавали дослідники, як-от Колумб і Діаш. Трикутні вітрила дозволяли їй плисти навіть проти вітру."] },
        { n: "3a", q: ["explorer", "дослідник"],
          a: ["An explorer is a person who travels to places that they do not know to find out about them.\nThe explorer Vasco da Gama was the first European to sail all the way to India.", "Дослідник — людина, яка подорожує до незнайомих місць, щоб дізнатися про них.\nДослідник Васко да Гама був першим європейцем, який доплив аж до Індії."] },
        { n: "3b", q: ["Middle Ages", "Середньовіччя"],
          a: ["The Middle Ages is the period in European history between the end of the Roman Empire and the Renaissance (about 500 to 1500 CE).\nIn the Middle Ages most people in Europe could not read.", "Середньовіччя — період в історії Європи між кінцем Римської імперії та Відродженням (приблизно з 500 до 1500 року н. е.).\nУ Середньовіччі більшість людей у Європі не вміла читати."] },
        { n: "3c", q: ["scholar", "учений"],
          a: ["A scholar is a person who studies a subject very carefully and knows a lot about it.\nScholars in Baghdad translated old books about science and medicine.", "Учений — людина, яка дуже уважно вивчає предмет і багато про нього знає.\nУчені в Багдаді перекладали старі книжки з науки й медицини."] },
        { n: "3d", q: ["Renaissance", "Відродження"],
          a: ["The Renaissance was a time in Europe (about 1400 to 1600 CE) of new ideas, art, science and inventions. The word means 'rebirth'.\nLeonardo da Vinci was a famous artist and inventor of the Renaissance.", "Відродження — час у Європі (приблизно 1400–1600 роки н. е.) нових ідей, мистецтва, науки й винаходів. Слово означає «відродження».\nЛеонардо да Вінчі був відомим художником і винахідником доби Відродження."] }
      ],
      items: [
        { n: "1a", s: [["Sort the words below in a table.", "Розподіли слова нижче в таблицю."]] },
        { n: "•", sub: true, s: [["Table columns: Life at sea | Trade goods | The Renaissance", "Стовпці таблиці: Життя в морі | Товари | Відродження"]] },
        { n: "•", sub: true, s: [["caravel   experiments   honey   indigo   printing press   scholars   scurvy   spices   watch", "каравела, досліди, мед, індиго, друкарський верстат, учені, цинга, прянощі, вахта"]] },
        { n: "1b", s: [["Add at least one new word to each group.", "Додай щонайменше одне нове слово до кожної групи."]] },
        { n: "2", s: [
          ["Write what each of these pictures shows.", "Напиши, що зображено на кожному з цих малюнків."],
          ["Then write a sentence or short paragraph to explain how each of these items was used during the Age of Discovery and Exploration.", "Потім напиши речення або короткий абзац і поясни, як кожну з цих речей використовували в добу відкриттів і досліджень."]
        ]},
        { n: "3", s: [
          ["Write a definition for each of these words.", "Напиши визначення кожного з цих слів."],
          ["Then use each word correctly in a sentence or short paragraph.", "Потім правильно вживи кожне слово в реченні або короткому абзаці."]
        ]},
        { n: "a", sub: true, s: [["explorer", "дослідник"]] },
        { n: "b", sub: true, s: [["Middle Ages", "Середньовіччя"]] },
        { n: "c", sub: true, s: [["scholar", "учений"]] },
        { n: "d", sub: true, s: [["Renaissance", "Відродження"]] }
      ]
    },
    { type: "figs", items: [
      { src: "h68-astrolabe", label: ["Picture a", "Малюнок a"] },
      { src: "h68-map", label: ["Picture b", "Малюнок b"] },
      { src: "h68-caravel", label: ["Picture c", "Малюнок c"] }
    ]},

    // ---------- 3 The Tudors ----------
    { type: "h2", page: 69, s: [["3 The Tudors", "3 Тюдори"]] },
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1a", q: ["a king, queen or emperor", "король, королева або імператор"], a: ["monarch", "monarch — монарх"] },
        { n: "1b", q: ["the period of time when one king or queen rules", "час, коли править один король чи королева"], a: ["reign", "reign — правління"] },
        { n: "1c", q: ["the period of English history between 1485 CE and 1603 CE", "період англійської історії між 1485 і 1603 роками н. е."], a: ["Tudor", "Tudor — доба Тюдорів"] },
        { n: "1d", q: ["an object that represents something else", "предмет, що означає щось інше"], a: ["symbol", "symbol — символ"] },
        { n: "1e", q: ["all the people living in a country", "усі люди, які живуть у країні"], a: ["society", "society — суспільство"] },
        { n: "1f", q: ["a diagram that shows how people in a family are related", "схема, що показує, як пов'язані між собою члени родини"], a: ["family tree", "family tree — родовідне дерево"] },
        { n: "2a", q: ["sewers, gentlemen, yeomen, labourers", "стічні канали, джентльмени, йомени, робітники"],
          a: ["Sewers is the odd one out.\nSewers are drains for dirty water. Gentlemen, yeomen and labourers are groups of people in Tudor society.", "Зайве слово — sewers (стічні канали).\nЦе канали для брудної води, а джентльмени, йомени й робітники — групи людей у суспільстві Тюдорів."] },
        { n: "2b", q: ["Latin, theatre, Greek, mathematics", "латина, театр, грецька, математика"],
          a: ["Theatre is the odd one out.\nLatin, Greek and mathematics were subjects that boys studied at Tudor grammar schools. The theatre was a place for fun.", "Зайве слово — theatre (театр).\nЛатину, грецьку й математику хлопці вивчали в граматичних школах Тюдорів, а театр був місцем для розваг."] },
        { n: "2c", q: ["jousting, football, hunting, museum", "лицарські поєдинки, футбол, полювання, музей"],
          a: ["Museum is the odd one out.\nJousting, football and hunting were sports and pastimes in Tudor times. There were no public museums then.", "Зайве слово — museum (музей).\nЛицарські поєдинки, футбол і полювання були розвагами й видами спорту за Тюдорів. Публічних музеїв тоді ще не було."] },
        { n: "3a", q: ["Armada", "армада"],
          a: ["An armada is a large group of warships.\nIn 1588 Queen Elizabeth I's navy defeated the Spanish Armada.", "Армада — великий флот військових кораблів.\nУ 1588 році флот королеви Єлизавети I розгромив Іспанську армаду."] },
        { n: "3b", q: ["portrait", "портрет"],
          a: ["A portrait is a painting or drawing of a person.\nQueen Elizabeth I's portraits show her in beautiful dresses and jewels.", "Портрет — картина чи малюнок, на якому зображено людину.\nНа портретах королева Єлизавета I в гарних сукнях і коштовностях."] },
        { n: "3c", q: ["tournament", "турнір"],
          a: ["A tournament is a competition with many contests. In Tudor times it was a show where knights jousted.\nHenry VIII loved to take part in tournaments when he was young.", "Турнір — змагання з багатьма поєдинками. За Тюдорів це було видовище, де лицарі змагалися на списах.\nГенріх VIII замолоду любив брати участь у турнірах."] },
        { n: "3d", q: ["hornbook", "абетка-табличка"],
          a: ["A hornbook was a wooden board with a handle and a page of letters on it, covered with a thin sheet of animal horn.\nThe little boy learned the alphabet from his hornbook.", "Абетка-табличка (hornbook) — дерев'яна дощечка з ручкою, на якій була сторінка з літерами, вкрита тонкою пластинкою рогу.\nМаленький хлопчик вивчав абетку за своєю табличкою."] },
        { n: "3e", q: ["grammar school", "граматична школа"],
          a: ["A grammar school was a Tudor school where boys learned Latin, Greek and other subjects.\nWilliam Shakespeare went to the grammar school in Stratford-upon-Avon.", "Граматична школа — школа за Тюдорів, де хлопці вчили латину, грецьку та інші предмети.\nВільям Шекспір навчався в граматичній школі у Стратфорді-на-Ейвоні."] },
        { n: "3f", q: ["quill pen", "гусяче перо"],
          a: ["A quill pen is a pen made from a large bird's feather, dipped in ink.\nThe pupil wrote his Latin words carefully with a quill pen.", "Гусяче перо — перо для письма з великої пташиної пір'їни, яке вмочали в чорнило.\nУчень старанно писав латинські слова гусячим пером."] }
      ],
      items: [
        { n: "1", s: [["Match the words with the definitions.", "Добери слова до визначень."]] },
        { n: "a", sub: true, s: [["a king, queen or emperor", "король, королева або імператор"]] },
        { n: "b", sub: true, s: [["the period of time when one king or queen rules", "час, коли править один король чи королева"]] },
        { n: "c", sub: true, s: [["the period of English history between 1485 CE and 1603 CE", "період англійської історії між 1485 і 1603 роками н. е."]] },
        { n: "d", sub: true, s: [["an object that represents something else", "предмет, що означає щось інше"]] },
        { n: "e", sub: true, s: [["all the people living in a country, with shared traditions, laws, interests and activities", "усі люди, які живуть у країні, зі спільними традиціями, законами, інтересами й заняттями"]] },
        { n: "f", sub: true, s: [["a diagram that shows how people in a family are related to each other", "схема, що показує, як члени родини пов'язані між собою"]] },
        { n: "•", sub: true, s: [["family tree   monarch   reign   society   symbol   Tudor", "родовідне дерево, монарх, правління, суспільство, символ, Тюдор"]] },
        { n: "2", s: [["Which is the odd one out in each group of words? Explain your answer.", "Яке слово зайве в кожній групі? Поясни свою відповідь."]] },
        { n: "a", sub: true, s: [["sewers   gentlemen   yeomen   labourers", "стічні канали, джентльмени, йомени, робітники"]] },
        { n: "b", sub: true, s: [["Latin   theatre   Greek   mathematics", "латина, театр, грецька, математика"]] },
        { n: "c", sub: true, s: [["jousting   football   hunting   museum", "лицарські поєдинки, футбол, полювання, музей"]] },
        { n: "3", s: [
          ["Write a definition for each of these words.", "Напиши визначення кожного з цих слів."],
          ["Then use each word correctly in a sentence or short paragraph.", "Потім правильно вживи кожне слово в реченні або короткому абзаці."]
        ]},
        { n: "a", sub: true, s: [["Armada", "армада"]] },
        { n: "b", sub: true, s: [["portrait", "портрет"]] },
        { n: "c", sub: true, s: [["tournament", "турнір"]] },
        { n: "d", sub: true, s: [["hornbook", "абетка-табличка"]] },
        { n: "e", sub: true, s: [["grammar school", "граматична школа"]] },
        { n: "f", sub: true, s: [["quill pen", "гусяче перо"]] }
      ]
    },

    // ---------- 4 The story of London ----------
    { type: "h2", s: [["4 The story of London", "4 Історія Лондона"]] },
    { type: "box", kind: "review", title: ["Choose the word that matches each definition", "Вибери слово, яке відповідає визначенню"],
      answers: [
        { n: "1a", q: ["a place where money is made", "місце, де виготовляють гроші"], a: ["mint", "mint — монетний двір"] },
        { n: "1b", q: ["a deadly disease that killed many people", "смертельна хвороба, яка вбила багато людей"], a: ["plague", "plague — чума"] },
        { n: "1c", q: ["to sell goods to other countries", "продавати товари в інші країни"], a: ["export", "export — експортувати, вивозити"] },
        { n: "1d", q: ["the group of people who make the laws in a country", "група людей, які ухвалюють закони в країні"], a: ["government", "government — уряд"] }
      ],
      items: [
        { s: [["1 Choose the word that matches each definition.", "1 Вибери слово, яке відповідає кожному визначенню."]] },
        { n: "1a", s: [["a place where money is made", "місце, де виготовляють гроші"]] },
        { n: "a", sub: true, s: [["port", "порт"]] },
        { n: "b", sub: true, ok: true, s: [["mint", "монетний двір"]] },
        { n: "c", sub: true, s: [["museum", "музей"]] },
        { n: "1b", s: [["a deadly disease that killed many people", "смертельна хвороба, яка вбила багато людей"]] },
        { n: "a", sub: true, s: [["Blitz", "Бліц"]] },
        { n: "b", sub: true, s: [["drought", "посуха"]] },
        { n: "c", sub: true, ok: true, s: [["plague", "чума"]] },
        { n: "1c", s: [["to sell goods to other countries", "продавати товари в інші країни"]] },
        { n: "a", sub: true, ok: true, s: [["export", "експортувати"]] },
        { n: "b", sub: true, s: [["import", "імпортувати"]] },
        { n: "c", sub: true, s: [["report", "доповідати, звіт"]] },
        { n: "1d", s: [["the group of people who make the laws in a country", "група людей, які ухвалюють закони в країні"]] },
        { n: "a", sub: true, ok: true, s: [["government", "уряд"]] },
        { n: "b", sub: true, s: [["empire", "імперія"]] },
        { n: "c", sub: true, s: [["society", "суспільство"]] }
      ]
    },
    { type: "figs", items: [
      { src: "h69-monument", label: ["Picture a", "Малюнок a"] },
      { src: "h69-bomber", label: ["Picture b", "Малюнок b"] },
      { src: "h69-flats", label: ["Picture c", "Малюнок c"] }
    ]},
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "2a", q: ["Picture a", "Малюнок a"],
          a: ["It is the Monument to the Great Fire of London.\nThe monument was built near Pudding Lane to remember the Great Fire of 1666.", "Це Монумент на згадку про Велику лондонську пожежу.\nМонумент збудували біля Пудінг-лейн, щоб пам'ятати про Велику пожежу 1666 року."] },
        { n: "2b", q: ["Picture b", "Малюнок b"],
          a: ["It is a German bomber plane flying over London during the Blitz.\nIn 1940 German bomber planes dropped thousands of bombs on London's docks and homes.", "Це німецький бомбардувальник, що летить над Лондоном під час Бліцу.\nУ 1940 році німецькі бомбардувальники скинули тисячі бомб на лондонські доки й будинки."] },
        { n: "2c", q: ["Picture c", "Малюнок c"],
          a: ["It is a tall block of flats (high-rise apartments) built after World War Two.\nAfter the war, many families moved into new flats because their homes had been bombed.", "Це високий багатоквартирний будинок, збудований після Другої світової війни.\nПісля війни багато родин переїхали в нові квартири, бо їхні домівки зруйнували бомби."] },
        { n: "3a", q: ["Roman London", "Римський Лондон"],
          a: ["The Romans built a bridge across the River Thames and a fort next to it. In 61 CE the Iceni tribe, led by Queen Boudicca, burned the town down. The Romans had to rebuild London, and this time they used stone.", "Римляни збудували міст через Темзу й форт поруч із ним. У 61 році н. е. плем'я іценів на чолі з королевою Боудіккою спалило місто. Римлянам довелося відбудовувати Лондон, і цього разу вони будували з каменю."] },
        { n: "3b", q: ["The Great Fire", "Велика пожежа"],
          a: ["In 1666 a baker woke up to find smoke under his door. The fire spread quickly along the narrow streets of wooden houses. Many people escaped in boats on the river. King Charles II ordered houses to be pulled down to make a fire-break.", "У 1666 році пекар прокинувся й побачив дим під дверима. Вогонь швидко поширився вузькими вулицями з дерев'яними будинками. Багато людей утекли човнами по річці. Король Карл II наказав розібрати будинки, щоб зробити протипожежний розрив."] },
        { n: "3c", q: ["The Industrial Revolution", "Промислова революція"],
          a: ["During the Industrial Revolution, industry grew very fast. New factories and businesses opened in London, and people came from the countryside to work in them. Ships from all over the British Empire unloaded goods at the busy docks.", "Під час промислової революції промисловість дуже швидко зростала. У Лондоні відкривалися нові фабрики й підприємства, і люди з села приїжджали туди працювати. Кораблі з усієї Британської імперії розвантажували товари в жвавих доках."] },
        { n: "3d", q: ["World War Two", "Друга світова війна"],
          a: ["In 1940 German planes began their raids on London. This was called the Blitz. Thousands of bombs fell on the city, so people went to a shelter, such as an Underground station, every night.", "У 1940 році німецькі літаки почали нальоти на Лондон. Це назвали Бліцом. На місто падали тисячі бомб, тож щоночі люди йшли до укриття, наприклад на станцію метро."] }
      ],
      items: [
        { n: "2", s: [
          ["Write what each of these pictures shows.", "Напиши, що зображено на кожному з цих малюнків."],
          ["Then use each word correctly in a sentence or short paragraph.", "Потім правильно вживи кожне слово в реченні або короткому абзаці."]
        ]},
        { n: "3", s: [
          ["Look at these groups of words about four different times in London's history.", "Подивись на ці групи слів про чотири різні періоди в історії Лондона."],
          ["Write a short paragraph about each of these times using all of the words in the group.", "Напиши короткий абзац про кожен із цих періодів, використавши всі слова з групи."]
        ]},
        { n: "a", sub: true, s: [["Roman London: bridge, fort, tribe, rebuild", "Римський Лондон: міст, форт, плем'я, відбудувати"]] },
        { n: "b", sub: true, s: [["The Great Fire: smoke, narrow, river, fire-break", "Велика пожежа: дим, вузький, річка, протипожежний розрив"]] },
        { n: "c", sub: true, s: [["The Industrial Revolution: industry, factories, businesses, docks", "Промислова революція: промисловість, фабрики, підприємства, доки"]] },
        { n: "d", sub: true, s: [["World War Two: raids, Blitz, bombs, shelter", "Друга світова війна: нальоти, Бліц, бомби, укриття"]] }
      ]
    }
  ],
  phrases: [
    ["in your notebook", "у зошиті"],
    ["what type of", "який тип, який саме"],
    ["each part of", "кожна частина"],
    ["the odd one out", "зайве (слово), «білу ворону»"],
    ["Explain your answer", "поясни свою відповідь"],
    ["write a definition", "напиши визначення"],
    ["use each word correctly", "правильно вживи кожне слово"],
    ["a sentence or short paragraph", "речення або короткий абзац"],
    ["Sort the words", "розподіли слова"],
    ["in a table", "у таблицю"],
    ["at least one", "щонайменше один"],
    ["Life at sea", "життя в морі"],
    ["trade goods", "товари для торгівлі"],
    ["printing press", "друкарський верстат"],
    ["how each of these items was used", "як використовували кожну з цих речей"],
    ["Match the words with the definitions", "добери слова до визначень"],
    ["king, queen or emperor", "король, королева або імператор"],
    ["the period of time", "проміжок часу"],
    ["represents something else", "означає щось інше"],
    ["shared traditions", "спільні традиції"],
    ["related to each other", "пов'язані між собою"],
    ["family tree", "родовідне дерево"],
    ["grammar school", "граматична школа"],
    ["quill pen", "гусяче перо"],
    ["matches each definition", "відповідає кожному визначенню"],
    ["a place where money is made", "місце, де виготовляють гроші"],
    ["a deadly disease", "смертельна хвороба"],
    ["to sell goods", "продавати товари"],
    ["make the laws", "ухвалюють закони"],
    ["four different times", "чотири різні періоди"],
    ["all of the words in the group", "усі слова з групи"]
  ]
});
