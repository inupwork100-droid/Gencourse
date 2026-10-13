// Урок 2.1 «Our Solar System: Planets, Moon and Sun in Motion» — сторінки 25–33 книжки «Science».
// Кожна сторінка PDF (слайд) = одна сторінка книжки. Кожне речення — [англійською, українською].
// *слово* — жирне ключове слово.
(window.SCI = window.SCI || { lessons: [], dict: {} }).lessons.push({
  id: "2.1",
  unit: "2 Planets and Space",
  color: "#3b5bd9",
  title: ["2.1 Our Solar System: Planets, Moon and Sun in Motion", "2.1 Наша Сонячна система: планети, Місяць і Сонце в русі"],
  pages: "25–33",
  blocks: [
    // Сторінка 11 — титульний слайд
    { type: "h2", page: 25, s: [["Our Solar System: Planets, Moon, and Sun in Motion", "Наша Сонячна система: планети, Місяць і Сонце в русі"]] },

    // Сторінка 12
    { type: "h2", page: 26, s: [["Introduction to Our Solar System", "Знайомство з нашою Сонячною системою"]] },
    { type: "p", s: [
      ["Our *Solar System* consists of the Sun, 8 *planets*, and many other objects.", "Наша Сонячна система складається із Сонця, 8 планет і багатьох інших об'єктів."],
      ["The Sun is at the center, and everything *orbits* around it.", "Сонце — у центрі, і все обертається навколо нього по орбітах."],
      ["Let's explore how these *celestial bodies* move and relate to each other.", "Давай дослідимо, як ці небесні тіла рухаються і як вони пов'язані між собою."]
    ]},
    { type: "box", kind: "think", title: ["Opening Circle", "Коло на початку"],
      answers: [
        { n: "?", q: ["Share one interesting fact you know about space.", "Розкажи один цікавий факт про космос, який ти знаєш."],
          a: ["Here are some ideas:\nThe Sun is so big that about one million Earths could fit inside it.\nThere is no air in space, so there is no sound.\nA day on Venus is longer than a year on Venus.\nJupiter is the biggest planet. It has a huge storm called the Great Red Spot.\nFootprints on the Moon can stay there for millions of years, because there is no wind.",
             "Ось кілька ідей:\nСонце таке велике, що в нього вмістилося б близько мільйона Земель.\nУ космосі немає повітря, тому там немає звуку.\nДоба на Венері довша за рік на Венері.\nЮпітер — найбільша планета. На ньому є величезна буря — Велика червона пляма.\nСліди на Місяці можуть зберігатися мільйони років, бо там немає вітру."] }
      ],
      items: [
        { s: [["Opening Circle: Share one interesting fact you know about space.", "Коло на початку: розкажи один цікавий факт про космос, який ти знаєш."]] }
      ]
    },
    { type: "img", src: "s21-solar-system", alt: "Схема Сонячної системи: Сонце в центрі й вісім планет на своїх орбітах", s: [
      ["The Solar System: the Sun in the center and the eight planets on their orbits.", "Сонячна система: Сонце в центрі та вісім планет на своїх орбітах."]
    ]},

    // Сторінка 13
    { type: "h2", page: 27, s: [["The Sun: Our Central Star", "Сонце — наша центральна зоря"]] },
    { type: "p", s: [
      ["The Sun is a massive ball of hot gas at the center of our Solar System.", "Сонце — це величезна куля з гарячого газу в центрі нашої Сонячної системи."],
      ["It's about 93 million miles away from Earth.", "Воно розташоване приблизно за 93 мільйони миль від Землі (це близько 150 мільйонів кілометрів)."],
      ["All planets orbit around the Sun due to its strong *gravitational pull*.", "Усі планети обертаються навколо Сонця завдяки його сильному гравітаційному притяганню."]
    ]},
    { type: "box", kind: "think", title: ["Think-Pair-Share", "Подумай — обговори в парі — поділися"],
      answers: [
        { n: "?", q: ["Why do you think the Sun is important for life on Earth?", "Як ти думаєш, чому Сонце важливе для життя на Землі?"],
          a: ["LIGHT\nThe Sun gives us light, so we have day.\nWARMTH\nThe Sun keeps Earth warm. Without it, Earth would be frozen.\nFOOD\nPlants use sunlight to make their food. Animals and people eat plants, so all food starts with the Sun.\nWEATHER AND WATER\nThe Sun heats water, which makes clouds and rain.\nGRAVITY\nThe Sun's gravity keeps Earth on its orbit.",
             "СВІТЛО\nСонце дає нам світло, тож у нас є день.\nТЕПЛО\nСонце зігріває Землю. Без нього Земля замерзла б.\nЇЖА\nРослини використовують сонячне світло, щоб створювати собі їжу. Тварини й люди їдять рослини, тож уся їжа починається із Сонця.\nПОГОДА І ВОДА\nСонце нагріває воду, і з неї утворюються хмари й дощ.\nГРАВІТАЦІЯ\nГравітація Сонця утримує Землю на її орбіті."] }
      ],
      items: [
        { s: [["Think-Pair-Share: Why do you think the Sun is important for life on Earth?", "Подумай — обговори в парі — поділися: як ти думаєш, чому Сонце важливе для життя на Землі?"]] }
      ]
    },
    { type: "img", src: "s21-sun", alt: "Сонце — палаюча куля гарячого газу", s: [
      ["The Sun is a massive ball of hot gas.", "Сонце — величезна куля з гарячого газу."]
    ]},

    // Сторінка 14
    { type: "h2", page: 28, s: [["Inner Planets: Mercury, Venus, Earth, and Mars", "Внутрішні планети: Меркурій, Венера, Земля і Марс"]] },
    { type: "p", s: [
      ["The four planets closest to the Sun are called the *Inner Planets*.", "Чотири планети, найближчі до Сонця, називають внутрішніми планетами."],
      ["They are smaller and made of rock and metal.", "Вони менші й складаються з каменю та металу."],
      ["Their order from the Sun: Mercury, Venus, Earth, Mars.", "Їхній порядок від Сонця: Меркурій, Венера, Земля, Марс."]
    ]},
    { type: "box", kind: "think", title: ["Compass Points", "Сторони світу"],
      answers: [
        { n: "?", q: ["Which inner planet would you like to visit?", "Яку внутрішню планету ти хотіла б відвідати?"],
          a: ["Any answer is fine. Here are some reasons:\nMERCURY (N)\nIt is the closest planet to the Sun and the smallest planet. A year there lasts only 88 days.\nVENUS (S)\nIt is the hottest planet, with thick clouds. It is the brightest planet in our night sky.\nEARTH (E)\nIt is our home and the only planet we know with life and liquid water on its surface.\nMARS (W)\nIt is the red planet. It has the biggest volcano in the Solar System, Olympus Mons.",
             "Підходить будь-яка відповідь. Ось кілька причин:\nМЕРКУРІЙ (Пн)\nЦе найближча до Сонця і найменша планета. Рік там триває лише 88 днів.\nВЕНЕРА (Пд)\nЦе найгарячіша планета з густими хмарами. Це найяскравіша планета на нашому нічному небі.\nЗЕМЛЯ (Сх)\nЦе наш дім і єдина відома нам планета з життям і рідкою водою на поверхні.\nМАРС (Зх)\nЦе червона планета. На ній найбільший вулкан Сонячної системи — гора Олімп."] }
      ],
      items: [
        { s: [["Compass Points: Move to N (Mercury), S (Venus), E (Earth), or W (Mars) based on which planet you'd like to visit.", "Сторони світу: перейди на Пн (Меркурій), Пд (Венера), Сх (Земля) або Зх (Марс) — залежно від того, яку планету ти хотіла б відвідати."]] }
      ]
    },

    // Сторінка 15
    { type: "h2", page: 29, s: [["Outer Planets: Jupiter, Saturn, Uranus, and Neptune", "Зовнішні планети: Юпітер, Сатурн, Уран і Нептун"]] },
    { type: "p", s: [
      ["The four planets farthest from the Sun are called the *Outer Planets*.", "Чотири планети, найдальші від Сонця, називають зовнішніми планетами."],
      ["They are larger and made mostly of gases.", "Вони більші й складаються переважно з газів."],
      ["Their order from the Sun: Jupiter, Saturn, Uranus, Neptune.", "Їхній порядок від Сонця: Юпітер, Сатурн, Уран, Нептун."]
    ]},
    { type: "box", kind: "think", title: ["Back-to-Back, Face-to-Face", "Спиною до спини, обличчям до обличчя"],
      answers: [
        { n: "?", q: ["How do the Outer Planets differ from the Inner Planets?", "Чим зовнішні планети відрізняються від внутрішніх?"],
          a: ["POSITION\nThe Inner Planets are close to the Sun. The Outer Planets are far from the Sun.\nSIZE\nThe Inner Planets are small. The Outer Planets are much larger.\nWHAT THEY ARE MADE OF\nThe Inner Planets are made of rock and metal. The Outer Planets are made mostly of gases.\nMORE DIFFERENCES\nThe Outer Planets have rings and many moons. They are very cold, and they take much longer to orbit the Sun.",
             "РОЗТАШУВАННЯ\nВнутрішні планети близько до Сонця. Зовнішні — далеко від Сонця.\nРОЗМІР\nВнутрішні планети маленькі. Зовнішні — набагато більші.\nЗ ЧОГО СКЛАДАЮТЬСЯ\nВнутрішні планети складаються з каменю й металу. Зовнішні — переважно з газів.\nЩЕ ВІДМІННОСТІ\nЗовнішні планети мають кільця й багато супутників. Вони дуже холодні, і їм потрібно набагато більше часу, щоб облетіти Сонце."] }
      ],
      items: [
        { s: [["Back-to-Back, Face-to-Face: Discuss with a partner how the Outer Planets differ from the Inner Planets.", "Спиною до спини, обличчям до обличчя: обговори з партнером, чим зовнішні планети відрізняються від внутрішніх."]] }
      ]
    },
    { type: "img", src: "s21-outer-planets", alt: "Зовнішні планети: Юпітер, Сатурн, Уран, Нептун і карликові планети", s: [
      ["The Outer Planets: Jupiter, Saturn, Uranus and Neptune. Dwarf planets are even farther away.", "Зовнішні планети: Юпітер, Сатурн, Уран і Нептун. Карликові планети — ще далі."]
    ]},

    // Сторінка 16
    { type: "h2", page: 30, s: [["Earth's Moon: Our Closest Neighbor", "Місяць Землі — наш найближчий сусід"]] },
    { type: "p", s: [
      ["The Moon is Earth's only natural *satellite*.", "Місяць — єдиний природний супутник Землі."],
      ["It orbits around Earth about once every 27 days.", "Він робить один оберт навколо Землі приблизно раз на 27 днів."],
      ["The Moon's *gravity* affects Earth's *tides*.", "Гравітація Місяця впливає на припливи й відпливи на Землі."]
    ]},
    { type: "box", kind: "think", title: ["Think-Pair-Share", "Подумай — обговори в парі — поділися"],
      answers: [
        { n: "?", q: ["How would life on Earth be different without the Moon?", "Як змінилося б життя на Землі без Місяця?"],
          a: ["TIDES\nThe tides would be much smaller, so life on the seashore would change.\nNIGHTS\nThe nights would be much darker, because there would be no moonlight.\nANIMALS\nMany animals use moonlight to find food or to know when to lay eggs.\nCALENDAR\nPeople used the Moon to count months, so our calendar might be different.\nTHE EARTH'S SPIN\nThe Moon helps to keep Earth steady. Without it, the weather and the seasons could change a lot.",
             "ПРИПЛИВИ\nПрипливи були б набагато меншими, тож життя на узбережжі змінилося б.\nНОЧІ\nНочі були б набагато темнішими, бо не було б місячного світла.\nТВАРИНИ\nБагато тварин за місячним світлом шукають їжу або знають, коли відкладати яйця.\nКАЛЕНДАР\nЛюди лічили місяці за Місяцем, тож наш календар міг би бути іншим.\nОБЕРТАННЯ ЗЕМЛІ\nМісяць допомагає Землі стояти стійко. Без нього погода й пори року могли б сильно змінюватися."] }
      ],
      items: [
        { s: [["Think-Pair-Share: How do you think life on Earth would be different without the Moon?", "Подумай — обговори в парі — поділися: як ти думаєш, яким би було життя на Землі без Місяця?"]] }
      ]
    },
    { type: "img", src: "s21-moon", alt: "Повний Місяць із темними й світлими плямами та кратерами", s: [
      ["The Moon is Earth's only natural satellite.", "Місяць — єдиний природний супутник Землі."]
    ]},

    // Сторінка 17
    { type: "h2", page: 31, s: [["Planetary Motion: Orbits and Rotations", "Рух планет: орбіти й обертання"]] },
    { type: "p", s: [
      ["Planets move in two ways: *orbit* and *rotation*.", "Планети рухаються двома способами: по орбіті та обертаючись навколо себе."],
      ["Orbit: The path a planet takes around the Sun.", "Орбіта — це шлях, яким планета рухається навколо Сонця."],
      ["Rotation: A planet spinning on its *axis* (like Earth's day and night).", "Обертання — це коли планета крутиться навколо своєї осі (через це на Землі бувають день і ніч)."],
      ["Each planet has different orbit and rotation *periods*.", "Кожна планета має свій час оберту навколо Сонця і свій час оберту навколо осі."]
    ]},

    // Сторінка 18
    { type: "h2", page: 32, s: [["The Solar System in Motion", "Сонячна система в русі"]] },
    { type: "p", s: [
      ["All planets orbit the Sun in the same direction.", "Усі планети обертаються навколо Сонця в одному напрямку."],
      ["Planets closer to the Sun orbit faster than those farther away.", "Планети, ближчі до Сонця, рухаються орбітою швидше, ніж ті, що далі."],
      ["While orbiting the Sun, planets also rotate on their *axes*.", "Рухаючись навколо Сонця, планети ще й обертаються навколо своїх осей."],
      ["The Moon orbits Earth while Earth orbits the Sun.", "Місяць обертається навколо Землі, а Земля тим часом — навколо Сонця."]
    ]},
    { type: "box", kind: "think", title: ["Reflection Question", "Питання для роздумів"],
      answers: [
        { n: "?", q: ["How does understanding planetary motion help us explain day, night, and seasons?", "Як знання про рух планет допомагає пояснити день, ніч і пори року?"],
          a: ["DAY AND NIGHT\nEarth rotates on its axis once every 24 hours. The side facing the Sun has day. The side facing away from the Sun has night.\nSEASONS\nEarth orbits the Sun once a year. Earth's axis is tilted, so during the year one half of Earth leans towards the Sun (summer) and then away from it (winter).\nA YEAR\nOne full orbit of the Sun takes about 365 days. That is one year.",
             "ДЕНЬ І НІЧ\nЗемля обертається навколо своєї осі раз на 24 години. На боці, поверненому до Сонця, — день. На боці, відверненому від Сонця, — ніч.\nПОРИ РОКУ\nЗемля облітає Сонце раз на рік. Вісь Землі нахилена, тож протягом року одна половина Землі то нахиляється до Сонця (літо), то від нього (зима).\nРІК\nОдин повний оберт навколо Сонця триває близько 365 днів. Це і є рік."] }
      ],
      items: [
        { s: [["Reflection Question: How does understanding planetary motion help us explain day, night, and seasons?", "Питання для роздумів: як розуміння руху планет допомагає нам пояснити день, ніч і пори року?"]] }
      ]
    },

    // Сторінка 19
    { type: "h2", page: 33, s: [["Review and Reflection", "Повторення й роздуми"]] },
    { type: "p", s: [
      ["We've explored the positions and movements of objects in our Solar System.", "Ми дослідили, де розташовані й як рухаються об'єкти нашої Сонячної системи."],
      ["The Sun is at the center, with planets orbiting around it.", "Сонце — у центрі, а планети обертаються навколо нього."],
      ["Earth's Moon orbits our planet as we orbit the Sun.", "Місяць обертається навколо нашої планети, поки ми обертаємося навколо Сонця."]
    ]},
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1", q: ["Name two things you learned about the Solar System today.", "Назви дві речі, які ти сьогодні дізналася про Сонячну систему."],
          a: ["For example:\nThe Sun is at the center of the Solar System, and all 8 planets orbit around it because of its gravity.\nThe Inner Planets (Mercury, Venus, Earth, Mars) are small and rocky. The Outer Planets (Jupiter, Saturn, Uranus, Neptune) are large and made mostly of gases.\nThe Moon orbits Earth about once every 27 days, and its gravity affects the tides.\nPlanets orbit the Sun and rotate on their axes at the same time.",
             "Наприклад:\nСонце — у центрі Сонячної системи, і всі 8 планет обертаються навколо нього завдяки його гравітації.\nВнутрішні планети (Меркурій, Венера, Земля, Марс) маленькі й кам'янисті. Зовнішні планети (Юпітер, Сатурн, Уран, Нептун) великі й складаються переважно з газів.\nМісяць облітає Землю приблизно раз на 27 днів, а його гравітація впливає на припливи.\nПланети водночас рухаються орбітою навколо Сонця й обертаються навколо своїх осей."] },
        { n: "2", q: ["Share something you appreciated about a classmate's participation.", "Розкажи, що тобі сподобалося в тому, як працював однокласник."],
          a: ["For example:\nI appreciated that my partner listened to my ideas.\nI liked the interesting space fact that my classmate shared.\nThank you for explaining the difference between orbit and rotation so clearly.",
             "Наприклад:\nМені сподобалося, що моя партнерка вислухала мої ідеї.\nМені сподобався цікавий факт про космос, яким поділився однокласник.\nДякую, що так зрозуміло пояснила різницю між орбітою й обертанням."] }
      ],
      items: [
        { n: "1", s: [["Exit Ticket: Name two things you learned about the Solar System today.", "Квиток на вихід: назви дві речі, які ти сьогодні дізналася про Сонячну систему."]] },
        { n: "2", s: [["Appreciations: Share something you appreciated about a classmate's participation.", "Подяки: розкажи, що тобі сподобалося в тому, як працював на уроці однокласник чи однокласниця."]] }
      ]
    },

    { type: "box", kind: "review", title: ["Check yourself", "Перевір себе"],
      answers: [
        { n: "1", q: ["What is at the center of our Solar System?", "Що розташоване в центрі нашої Сонячної системи?"], a: ["b: The Sun.", "b: Сонце."] },
        { n: "2", q: ["The Inner Planets are:", "Внутрішні планети:"], a: ["b: smaller and made of rock and metal.", "b: менші й складаються з каменю та металу."] },
        { n: "3", q: ["Which planet is the closest to the Sun?", "Яка планета найближча до Сонця?"], a: ["b: Mercury.", "b: Меркурій."] },
        { n: "4", q: ["How often does the Moon orbit Earth?", "Як часто Місяць обертається навколо Землі?"], a: ["b: About once every 27 days.", "b: Приблизно раз на 27 днів."] },
        { n: "5", q: ["A planet spinning on its axis is called:", "Обертання планети навколо своєї осі називається:"], a: ["b: rotation.", "b: обертання (rotation)."] }
      ],
      items: [
        { n: "1", s: [["What is at the center of our Solar System?", "Що розташоване в центрі нашої Сонячної системи?"]] },
        { n: "a", sub: true, s: [["the Earth", "Земля"]] },
        { n: "b", sub: true, ok: true, s: [["the Sun", "Сонце"]] },
        { n: "c", sub: true, s: [["the Moon", "Місяць"]] },
        { n: "2", s: [["The Inner Planets are:", "Внутрішні планети:"]] },
        { n: "a", sub: true, s: [["larger and made mostly of gases", "більші й складаються переважно з газів"]] },
        { n: "b", sub: true, ok: true, s: [["smaller and made of rock and metal", "менші й складаються з каменю та металу"]] },
        { n: "c", sub: true, s: [["made of ice and water", "складаються з льоду й води"]] },
        { n: "3", s: [["Which planet is the closest to the Sun?", "Яка планета найближча до Сонця?"]] },
        { n: "a", sub: true, s: [["Neptune", "Нептун"]] },
        { n: "b", sub: true, ok: true, s: [["Mercury", "Меркурій"]] },
        { n: "c", sub: true, s: [["Mars", "Марс"]] },
        { n: "4", s: [["How often does the Moon orbit Earth?", "Як часто Місяць обертається навколо Землі?"]] },
        { n: "a", sub: true, s: [["once every day", "раз на добу"]] },
        { n: "b", sub: true, ok: true, s: [["about once every 27 days", "приблизно раз на 27 днів"]] },
        { n: "c", sub: true, s: [["once every year", "раз на рік"]] },
        { n: "5", s: [["A planet spinning on its axis is called:", "Як називається рух, коли планета крутиться навколо своєї осі?"]] },
        { n: "a", sub: true, s: [["orbit", "орбіта"]] },
        { n: "b", sub: true, ok: true, s: [["rotation", "обертання"]] },
        { n: "c", sub: true, s: [["gravity", "гравітація"]] }
      ]
    }
  ],
  phrases: [
    ["Solar System", "Сонячна система"],
    ["consists of", "складається з"],
    ["many other objects", "багато інших об'єктів"],
    ["at the center", "у центрі"],
    ["orbits around", "обертається навколо (по орбіті)"],
    ["celestial bodies", "небесні тіла"],
    ["relate to each other", "пов'язані між собою"],
    ["interesting fact", "цікавий факт"],
    ["central star", "центральна зоря"],
    ["a massive ball of hot gas", "величезна куля з гарячого газу"],
    ["93 million miles away", "за 93 мільйони миль"],
    ["due to", "завдяки, через"],
    ["gravitational pull", "гравітаційне притягання"],
    ["life on Earth", "життя на Землі"],
    ["Inner Planets", "внутрішні планети"],
    ["Outer Planets", "зовнішні планети"],
    ["closest to the Sun", "найближчі до Сонця"],
    ["farthest from the Sun", "найдальші від Сонця"],
    ["made of rock and metal", "складаються з каменю та металу"],
    ["made mostly of gases", "складаються переважно з газів"],
    ["order from the Sun", "порядок від Сонця"],
    ["based on", "залежно від, на основі"],
    ["you'd like to visit", "ти хотіла б відвідати"],
    ["differ from", "відрізнятися від"],
    ["closest neighbor", "найближчий сусід"],
    ["natural satellite", "природний супутник"],
    ["once every 27 days", "раз на 27 днів"],
    ["Earth's tides", "припливи на Землі"],
    ["planetary motion", "рух планет"],
    ["move in two ways", "рухаються двома способами"],
    ["spinning on its axis", "обертається навколо своєї осі"],
    ["day and night", "день і ніч"],
    ["rotation periods", "періоди обертання (навколо осі)"],
    ["in the same direction", "в одному напрямку"],
    ["farther away", "далі"],
    ["rotate on their axes", "обертаються навколо своїх осей"],
    ["day, night, and seasons", "день, ніч і пори року"],
    ["positions and movements", "розташування й рухи"],
    ["Exit Ticket", "квиток на вихід (коротке завдання наприкінці уроку)"],
    ["a classmate's participation", "участь однокласника в уроці"]
  ]
});
