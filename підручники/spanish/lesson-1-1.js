// Урок 1.1 «Somos la pandilla · Hablamos español» — сторінки 4–5 підручника Colega vuelve 3.
// Кожне речення — [іспанською, українською]. *слово* — жирне ключове слово.
(window.ESP = window.ESP || { lessons: [], dict: {} }).lessons.push({
  id: "1.1",
  unit: "1 Somos la pandilla",
  color: "#6fb43f",
  title: ["1.1 Somos la pandilla · Hablamos español", "1.1 Ми — компанія · Ми розмовляємо іспанською"],
  pages: "4–5",
  blocks: [
    { type: "h2", page: 4, s: [["Unidad 1. Somos la pandilla", "Розділ 1. Ми — компанія друзів"]] },

    { type: "h2", s: [["1. Escucha y lee.", "1. Послухай і прочитай."]] },
    { type: "p", s: [
      ["¡Hola!", "Привіт!"],
      ["¿Te acuerdas de mí?", "Ти мене пам'ятаєш?"],
      ["Yo *soy* Julia.", "Я — Хулія."]
    ]},
    { type: "p", s: [
      ["Yo *soy* Chema y ella *es* Elena.", "Я — Чема, а вона — Олена."],
      ["Él *es* Chema.", "Він — Чема."]
    ]},
    { type: "p", s: [
      ["Nosotros *somos* hermanos.", "Ми — брат і сестра."],
      ["Yo *soy* Rubén y ella *es* Ana.", "Я — Рубен, а вона — Ана."]
    ]},
    { type: "p", s: [
      ["¡Hola!", "Привіт!"],
      ["*Soy* Ana, la hermana de Rubén.", "Я — Ана, сестра Рубена."],
      ["Ellos *son* mis amigos.", "Вони — мої друзі."]
    ]},
    { type: "img", src: "s04-pandilla", alt: "П'ятеро друзів вітаються: Хулія, Рубен, Ана, Чема й Олена", s: [
      ["Julia, Rubén, Ana, Chema y Elena.", "Хулія, Рубен, Ана, Чема й Олена."]
    ]},

    { type: "h2", s: [["2. Observa y aprende.", "2. Подивися й запам'ятай."]] },
    { type: "wordtable", title: [["SER", "SER — бути"]], head: [["Persona", "Особа"], ["Forma", "Форма"]], rows: [
      { t: "(yo)", m: ["", "я"], ex: ["soy", "я є"] },
      { t: "(tú)", m: ["", "ти"], ex: ["eres", "ти є"] },
      { t: "(él/ella/usted)", m: ["", "він / вона / Ви (ввічливо)"], ex: ["es", "він є / вона є / Ви є"] },
      { t: "(nosotros/as)", m: ["", "ми"], ex: ["somos", "ми є"] },
      { t: "(vosotros/as)", m: ["", "ви"], ex: ["sois", "ви є"] },
      { t: "(ellos/ellas/ustedes)", m: ["", "вони / Ви (ввічливо, кілька людей)"], ex: ["son", "вони є / Ви є"] }
    ] },
    { type: "img", src: "s04-pronombres", alt: "Малюнки: хто такі ellos, ellas, nosotros, nosotras, vosotros, vosotras", s: [
      ["*ellos*", "вони (хлопці або змішана група)"],
      ["*ellas*", "вони (лише дівчата)"],
      ["*nosotros*", "ми (хлопці або змішана група)"],
      ["*nosotras*", "ми (лише дівчата)"],
      ["*vosotros*", "ви (хлопці або змішана група)"],
      ["*vosotras*", "ви (лише дівчата)"]
    ]},

    { type: "h2", page: 5, s: [["Lección 1. Hablamos español", "Урок 1. Ми розмовляємо іспанською"]] },

    { type: "h2", s: [["3. Lee y escucha.", "3. Прочитай і послухай."]] },
    { type: "p", s: [
      ["Yo *hablo* español.", "Я розмовляю іспанською."],
      ["Nosotros *hablamos* español.", "Ми розмовляємо іспанською."]
    ]},
    { type: "img", src: "s05-hablamos", alt: "Ана, Рубен і Олена кажуть, що розмовляють іспанською", s: [
      ["Nosotros hablamos español.", "Ми розмовляємо іспанською."]
    ]},

    { type: "h2", s: [["4. Observa el mapa. ¿Dónde hablan español?", "4. Подивися на мапу. Де розмовляють іспанською?"]] },
    { type: "img", src: "s05-mapa", alt: "Мапа Латинської Америки та Іспанії: країни, де розмовляють іспанською", s: [
      ["México, Cuba, Puerto Rico, Guatemala, Honduras, República Dominicana, El Salvador, Nicaragua, Costa Rica, Panamá.", "Мексика, Куба, Пуерто-Рико, Гватемала, Гондурас, Домініканська Республіка, Сальвадор, Нікарагуа, Коста-Рика, Панама."],
      ["Venezuela, Colombia, Ecuador, Perú, Bolivia, Paraguay, Chile, Argentina, Uruguay.", "Венесуела, Колумбія, Еквадор, Перу, Болівія, Парагвай, Чилі, Аргентина, Уругвай."],
      ["España.", "Іспанія."]
    ]},
    { type: "box", kind: "activities", title: ["Actividades", "Завдання"], items: [
      { n: "a", s: [["¿Dónde hablan español en Europa?", "Де розмовляють іспанською в Європі?"]] },
      { n: "b", s: [["¿Dónde hablan español en América?", "Де розмовляють іспанською в Америці?"]] }
    ], answers: [
      { n: "a", q: ["¿Dónde hablan español en Europa?", "Де розмовляють іспанською в Європі?"], a: ["Hablan español en España.", "Іспанською розмовляють в Іспанії."] },
      { n: "b", q: ["¿Dónde hablan español en América?", "Де розмовляють іспанською в Америці?"], a: ["Hablan español en México, Cuba, Puerto Rico, Guatemala, Honduras, República Dominicana, El Salvador, Nicaragua, Costa Rica, Panamá, Venezuela, Colombia, Ecuador, Perú, Bolivia, Paraguay, Chile, Argentina y Uruguay.", "Іспанською розмовляють у Мексиці, на Кубі, у Пуерто-Рико, Гватемалі, Гондурасі, Домініканській Республіці, Сальвадорі, Нікарагуа, Коста-Риці, Панамі, Венесуелі, Колумбії, Еквадорі, Перу, Болівії, Парагваї, Чилі, Аргентині й Уругваї."] }
    ] },

    { type: "h2", s: [["5. Escucha y canta.", "5. Послухай і заспівай."]] },
    { type: "p", s: [
      ["Buenas.", "Добридень."],
      ["Buenos días, América.", "Доброго ранку, Америко."],
      ["¿Cómo *estás*?", "Як справи?"],
      ["Muy buenas.", "Дуже добре."],
      ["(4 veces)", "(4 рази)"]
    ]},
    { type: "p", s: [
      ["Buenos días, América.", "Доброго ранку, Америко."],
      ["Buenos días, ¿cómo *está* usted?", "Доброго ранку, як Ваші справи?"]
    ]},

    { type: "h2", s: [["6. Observa y aprende.", "6. Подивися й запам'ятай."]] },
    { type: "wordtable", title: [["HABLAR", "HABLAR — розмовляти, говорити"]], head: [["Persona", "Особа"], ["Forma", "Форма"]], rows: [
      { t: "(yo)", m: ["", "я"], ex: ["hablo", "я розмовляю"] },
      { t: "(tú)", m: ["", "ти"], ex: ["hablas", "ти розмовляєш"] },
      { t: "(él/ella/usted)", m: ["", "він / вона / Ви"], ex: ["habla", "він / вона розмовляє, Ви розмовляєте"] },
      { t: "(nosotros/as)", m: ["", "ми"], ex: ["hablamos", "ми розмовляємо"] },
      { t: "(vosotros/as)", m: ["", "ви"], ex: ["habláis", "ви розмовляєте"] },
      { t: "(ellos/ellas/ustedes)", m: ["", "вони / Ви"], ex: ["hablan", "вони розмовляють, Ви розмовляєте"] }
    ] },
    { type: "wordtable", title: [["ESTAR", "ESTAR — бути, перебувати (як почуваєшся, де ти)"]], head: [["Persona", "Особа"], ["Forma", "Форма"]], rows: [
      { t: "(yo)", m: ["", "я"], ex: ["estoy", "я є, я почуваюся"] },
      { t: "(tú)", m: ["", "ти"], ex: ["estás", "ти є, ти почуваєшся"] },
      { t: "(él/ella/usted)", m: ["", "він / вона / Ви"], ex: ["está", "він / вона є, Ви є"] },
      { t: "(nosotros/as)", m: ["", "ми"], ex: ["estamos", "ми є"] },
      { t: "(vosotros/as)", m: ["", "ви"], ex: ["estáis", "ви є"] },
      { t: "(ellos/ellas/ustedes)", m: ["", "вони / Ви"], ex: ["están", "вони є, Ви є"] }
    ] },

    { type: "box", kind: "review", title: ["¡Practica más!", "Потренуйся ще!"], items: [
      { n: "1", s: [["Nosotros ____ hermanos.", "Ми — брат і сестра."]] },
      { n: "a", sub: true, ok: true, s: [["somos", "ми є"]] }, { n: "b", sub: true, s: [["sois", "ви є"]] }, { n: "c", sub: true, s: [["son", "вони є"]] },
      { n: "2", s: [["Tú ____ Julia.", "Ти — Хулія."]] },
      { n: "a", sub: true, s: [["soy", "я є"]] }, { n: "b", sub: true, s: [["es", "він / вона є"]] }, { n: "c", sub: true, ok: true, s: [["eres", "ти є"]] },
      { n: "3", s: [["Ellos ____ mis amigos.", "Вони — мої друзі."]] },
      { n: "a", sub: true, s: [["somos", "ми є"]] }, { n: "b", sub: true, ok: true, s: [["son", "вони є"]] }, { n: "c", sub: true, s: [["es", "він / вона є"]] },
      { n: "4", s: [["Vosotros ____ español.", "Ви розмовляєте іспанською."]] },
      { n: "a", sub: true, ok: true, s: [["habláis", "ви розмовляєте"]] }, { n: "b", sub: true, s: [["hablamos", "ми розмовляємо"]] }, { n: "c", sub: true, s: [["hablan", "вони розмовляють"]] },
      { n: "5", s: [["¿Cómo ____ tú?", "Як ти (почуваєшся)?"]] },
      { n: "a", sub: true, s: [["estoy", "я є"]] }, { n: "b", sub: true, ok: true, s: [["estás", "ти є"]] }, { n: "c", sub: true, s: [["están", "вони є"]] },
      { n: "6", s: [["Ana y Julia son chicas. Ellas son amigas. ¿Qué palabra es correcta para un grupo de chicas?", "Ана й Хулія — дівчата. Вони подруги. Яке слово правильне для групи дівчат?"]] },
      { n: "a", sub: true, s: [["ellos", "вони (хлопці)"]] }, { n: "b", sub: true, s: [["nosotros", "ми (хлопці)"]] }, { n: "c", sub: true, ok: true, s: [["ellas", "вони (дівчата)"]] }
    ], answers: [
      { n: "1", q: ["Nosotros ____ hermanos.", "Ми — брат і сестра."], a: ["a: Nosotros somos hermanos.", "a: Ми — брат і сестра."] },
      { n: "2", q: ["Tú ____ Julia.", "Ти — Хулія."], a: ["c: Tú eres Julia.", "c: Ти — Хулія."] },
      { n: "3", q: ["Ellos ____ mis amigos.", "Вони — мої друзі."], a: ["b: Ellos son mis amigos.", "b: Вони — мої друзі."] },
      { n: "4", q: ["Vosotros ____ español.", "Ви розмовляєте іспанською."], a: ["a: Vosotros habláis español.", "a: Ви розмовляєте іспанською."] },
      { n: "5", q: ["¿Cómo ____ tú?", "Як ти (почуваєшся)?"], a: ["b: ¿Cómo estás tú?", "b: Як ти почуваєшся?"] },
      { n: "6", q: ["¿Qué palabra es correcta para un grupo de chicas?", "Яке слово правильне для групи дівчат?"], a: ["c: ellas.", "c: ellas — вони (лише дівчата)."] }
    ] },

    { type: "box", kind: "review", title: ["Check yourself", "Перевір себе"], items: [
      { n: "1", s: [["¿Cómo se llama la hermana de Rubén?", "Як звати сестру Рубена?"]] },
      { n: "a", sub: true, s: [["Julia", "Хулія"]] }, { n: "b", sub: true, ok: true, s: [["Ana", "Ана"]] }, { n: "c", sub: true, s: [["Elena", "Олена"]] },
      { n: "2", s: [["Yo ____ Chema.", "Я — Чема."]] },
      { n: "a", sub: true, ok: true, s: [["soy", "я є"]] }, { n: "b", sub: true, s: [["es", "він / вона є"]] }, { n: "c", sub: true, s: [["son", "вони є"]] },
      { n: "3", s: [["¿Dónde hablan español en Europa?", "Де розмовляють іспанською в Європі?"]] },
      { n: "a", sub: true, s: [["en Francia", "у Франції"]] }, { n: "b", sub: true, s: [["en Italia", "в Італії"]] }, { n: "c", sub: true, ok: true, s: [["en España", "в Іспанії"]] },
      { n: "4", s: [["Ellos ____ español.", "Вони розмовляють іспанською."]] },
      { n: "a", sub: true, s: [["hablo", "я розмовляю"]] }, { n: "b", sub: true, ok: true, s: [["hablan", "вони розмовляють"]] }, { n: "c", sub: true, s: [["hablas", "ти розмовляєш"]] },
      { n: "5", s: [["Buenos días, ¿cómo ____ usted?", "Доброго ранку, як Ваші справи?"]] },
      { n: "a", sub: true, ok: true, s: [["está", "Ви є (ввічливо)"]] }, { n: "b", sub: true, s: [["estoy", "я є"]] }, { n: "c", sub: true, s: [["estamos", "ми є"]] }
    ], answers: [
      { n: "1", q: ["¿Cómo se llama la hermana de Rubén?", "Як звати сестру Рубена?"], a: ["b: Ana.", "b: Ана."] },
      { n: "2", q: ["Yo ____ Chema.", "Я — Чема."], a: ["a: Yo soy Chema.", "a: Я — Чема."] },
      { n: "3", q: ["¿Dónde hablan español en Europa?", "Де розмовляють іспанською в Європі?"], a: ["c: en España.", "c: в Іспанії."] },
      { n: "4", q: ["Ellos ____ español.", "Вони розмовляють іспанською."], a: ["b: Ellos hablan español.", "b: Вони розмовляють іспанською."] },
      { n: "5", q: ["Buenos días, ¿cómo ____ usted?", "Доброго ранку, як Ваші справи?"], a: ["a: Buenos días, ¿cómo está usted?", "a: Доброго ранку, як Ваші справи?"] }
    ] }
  ],
  phrases: [
    ["Somos la pandilla.", "Ми — компанія друзів."], ["¡Hola!", "Привіт!"], ["¿Te acuerdas de mí?", "Ти мене пам'ятаєш?"],
    ["Yo soy Julia.", "Я — Хулія."], ["Él es Chema.", "Він — Чема."], ["ella es Elena", "вона — Олена"],
    ["Nosotros somos hermanos.", "Ми — брат і сестра (брати)."], ["la hermana de Rubén", "сестра Рубена"], ["Ellos son mis amigos.", "Вони — мої друзі."],
    ["Escucha y lee.", "Послухай і прочитай."], ["Lee y escucha.", "Прочитай і послухай."], ["Observa y aprende.", "Подивися й запам'ятай."],
    ["Escucha y canta.", "Послухай і заспівай."], ["Observa el mapa.", "Подивися на мапу."], ["¿Dónde hablan español?", "Де розмовляють іспанською?"],
    ["Hablamos español.", "Ми розмовляємо іспанською."], ["Yo hablo español.", "Я розмовляю іспанською."], ["Buenas.", "Добридень."],
    ["Buenos días.", "Доброго ранку. / Добрий день."], ["¿Cómo estás?", "Як справи? (до друга)"], ["¿Cómo está usted?", "Як Ваші справи? (ввічливо)"],
    ["Muy buenas.", "Дуже добре."], ["4 veces", "4 рази"], ["el verbo ser", "дієслово ser (бути)"],
    ["el verbo hablar", "дієслово hablar (розмовляти)"], ["el verbo estar", "дієслово estar (бути, перебувати)"], ["nosotros / nosotras", "ми (хлопці / дівчата)"],
    ["vosotros / vosotras", "ви (хлопці / дівчата)"], ["ellos / ellas", "вони (хлопці / дівчата)"], ["usted / ustedes", "Ви (ввічливо: одна людина / кілька людей)"]
  ]
});
