// Урок 1.2 «Types of Forces» — сторінки 11–24 книжки «Science» (презентація, 12 слайдів + два плакати).
// Кожен блок — абзац. Кожне речення — [англійською, українською].
// *слово* — жирне ключове слово.
(window.SCI = window.SCI || { lessons: [], dict: {} }).lessons.push({
  id: "1.2",
  unit: "1 Forces",
  color: "#e2584a",
  title: ["1.2 Types of Forces", "1.2 Види сил"],
  pages: "11–24",
  blocks: [
    // ---- Сторінка 11: титульний слайд ----
    { type: "h2", page: 11, s: [["Types of Forces", "Види сил"]] },
    { type: "img", src: "s12-newton-apple", alt: "Ісаак Ньютон і яблуко, що падає йому на голову", s: [
      ["Isaac Newton and the falling apple", "Ісаак Ньютон і яблуко, що падає"]
    ]},

    // ---- Сторінка 12 ----
    { type: "h2", page: 12, s: [["Forces", "Сили"]] },
    { type: "p", s: [
      ["Forces are measured in *newtons*, using a *newton meter*.", "Сили вимірюють у *ньютонах* за допомогою *динамометра* (newton meter)."],
      ["The unit of force is named after *Isaac Newton*, who first theorised about forces.", "Одиницю сили назвали на честь *Ісаака Ньютона*, який першим створив теорію про сили."],
      ["Some examples of forces are...", "Ось кілька прикладів сил..."]
    ]},
    { type: "img", src: "s12-isaac-newton", alt: "Портрет Ісаака Ньютона", s: [
      ["Isaac Newton", "Ісаак Ньютон"]
    ]},

    // ---- Сторінка 13 ----
    { type: "h2", page: 13, s: [["Contact Forces", "Контактні сили"]] },
    { type: "p", s: [
      ["Friction, air resistance, water resistance and buoyancy (upthrust) are all examples of contact forces.", "Тертя, опір повітря, опір води та виштовхувальна сила (сила Архімеда) — це все приклади контактних сил."],
      ["A *contact force* occurs when the objects are touching.", "*Контактна сила* виникає, коли предмети торкаються один одного."]
    ]},
    { type: "box", kind: "think", title: ["?", "Подумай"],
      answers: [
        { n: "?", q: ["Which pictures show contact forces?", "Які малюнки показують контактні сили?"],
          a: ["CYCLIST\nThe tyres touch the road, so there is friction.\nPARACHUTE\nThe parachute touches the air, so there is air resistance.\nSWIMMER\nThe swimmer touches the water, so there is water resistance.\nSHIP\nThe ship touches the water, so the water pushes it up (buoyancy).",
             "ВЕЛОСИПЕДИСТ\nШини торкаються дороги, тож виникає тертя.\nПАРАШУТ\nПарашут торкається повітря, тож виникає опір повітря.\nПЛАВЕЦЬ\nПлавець торкається води, тож виникає опір води.\nКОРАБЕЛЬ\nКорабель торкається води, тож вода штовхає його вгору (виштовхувальна сила)."] }
      ],
      items: [
        { n: "?", s: [["Look at the ship, the cyclist, the parachute and the swimmer. What is touching what in each picture?", "Подивися на корабель, велосипедиста, парашут і плавця. Що чого торкається на кожному малюнку?"]] }
      ]
    },

    // ---- Сторінка 14 ----
    { type: "h2", page: 14, s: [["Friction", "Тертя"]] },
    { type: "img", src: "s12-cyclist", alt: "Велосипедист їде вгору схилом", s: [
      ["A cyclist riding up a hill", "Велосипедист їде вгору схилом"]
    ]},
    { type: "box", kind: "think", title: ["?", "Подумай"],
      answers: [
        { n: "?", q: ["Where is the friction on the bike?", "Де виникає тертя на велосипеді?"],
          a: ["The tyres rub on the road. Friction grips the road, so the wheels do not slip.\nThe brakes rub on the wheels. Friction slows the bike down.",
             "Шини труться об дорогу. Тертя тримає їх на дорозі, тож колеса не ковзають.\nГальма труться об колеса. Тертя сповільнює велосипед."] }
      ],
      items: [
        { n: "?", s: [["Where do two surfaces rub together when the cyclist rides?", "Де дві поверхні труться одна об одну, коли велосипедист їде?"]] }
      ]
    },

    // ---- Сторінка 15 ----
    { type: "h2", page: 15, s: [["Air Resistance", "Опір повітря"]] },
    { type: "p", s: [
      ["*Air Resistance* is a type of friction that occurs between the air and another material.", "*Опір повітря* — це вид тертя, яке виникає між повітрям та іншим матеріалом."],
      ["It is the force that acts in parachutes so that we don't crash to the ground.", "Це сила, яка діє в парашутах, щоб ми не розбилися об землю."],
      ["*Upthrust* is not a type of friction.", "*Виштовхувальна сила* (upthrust) — це не вид тертя."],
      ["It is when the gas or liquid below something pushes up more than the gas or liquid above.", "Вона виникає, коли газ або рідина під предметом штовхає вгору сильніше, ніж газ або рідина над ним."]
    ]},
    { type: "img", src: "s12-parachute", alt: "Парашутист на парашуті", s: [
      ["Air resistance slows down a parachute.", "Опір повітря сповільнює парашут."]
    ]},

    // ---- Сторінка 16 ----
    { type: "h2", page: 16, s: [["Water Resistance", "Опір води"]] },
    { type: "p", s: [
      ["*Water resistance* is a type of friction that occurs between the water and another material.", "*Опір води* — це вид тертя, яке виникає між водою та іншим матеріалом."],
      ["Water resistance pushes against objects, making it hard for them to move through water.", "Опір води штовхає предмети назад, і їм важко рухатися крізь воду."]
    ]},
    { type: "img", src: "s12-swimmer", alt: "Плавець і дві стрілки: сила плавця і опір води", s: [
      ["Swimmers force and water resistance", "Сила плавця й опір води"]
    ]},

    // ---- Сторінка 17 ----
    { type: "h2", page: 17, s: [["Buoyancy", "Виштовхувальна сила"]] },
    { type: "p", s: [
      ["*Buoyancy* (upthrust) is the force that pushes an object upwards in a *fluid*.", "*Виштовхувальна сила* (upthrust) — це сила, яка штовхає предмет угору в *рідині або газі* (fluid)."],
      ["In the water, the weight of an object is pushing down and the upthrust is pushing up.", "У воді вага предмета тисне вниз, а виштовхувальна сила штовхає вгору."],
      ["If the weight is equal to or less than the upthrust, the object will *float*.", "Якщо вага дорівнює виштовхувальній силі або менша за неї, предмет *плаватиме* на поверхні."],
      ["If the weight of the object is greater than the upthrust, it will *sink*.", "Якщо вага предмета більша за виштовхувальну силу, він *потоне*."]
    ]},
    { type: "img", src: "s12-ship", alt: "Старовинний вітрильний корабель на воді", s: [
      ["A ship floats because of buoyancy.", "Корабель тримається на воді завдяки виштовхувальній силі."]
    ]},

    // ---- Сторінка 18 ----
    { type: "h2", page: 18, s: [["Non-Contact Forces", "Безконтактні сили"]] },
    { type: "p", s: [
      ["Gravity, magnetism and electrical forces, such as *electrostatic*, are examples of non-contact forces.", "Сила тяжіння, магнетизм та електричні сили, наприклад *електростатична*, — це приклади безконтактних сил."],
      ["A *non-contact force* occurs when the objects are not touching.", "*Безконтактна сила* виникає, коли предмети не торкаються один одного."]
    ]},
    { type: "img", src: "s12-non-contact-forces", alt: "Лампочка, магніт із цвяхами і яблуня, з якої падає яблуко", s: [
      ["A light bulb, a magnet and a falling apple", "Лампочка, магніт і яблуко, що падає"]
    ]},

    // ---- Сторінка 19 ----
    { type: "h2", page: 19, s: [["Gravity", "Сила тяжіння"]] },
    { type: "img", src: "s12-apple-tree", alt: "Яблуня, з якої падає яблуко; червона стрілка вниз", s: [
      ["Gravity pulls the apple down to the ground.", "Сила тяжіння тягне яблуко вниз, до землі."]
    ]},
    { type: "box", kind: "think", title: ["?", "Подумай"],
      answers: [
        { n: "?", q: ["Why is gravity a non-contact force?", "Чому сила тяжіння — безконтактна сила?"],
          a: ["Nothing touches the apple while it falls, but the Earth still pulls it down.\nGravity works across empty space, so it is a non-contact force.",
             "Поки яблуко падає, його ніщо не торкається, але Земля все одно тягне його вниз.\nСила тяжіння діє навіть крізь порожній простір, тож це безконтактна сила."] }
      ],
      items: [
        { n: "?", s: [["What pulls the apple down, even though nothing is touching it?", "Що тягне яблуко вниз, хоча його ніщо не торкається?"]] }
      ]
    },

    // ---- Сторінка 20 ----
    { type: "h2", page: 20, s: [["Magnetism", "Магнетизм"]] },
    { type: "img", src: "s12-magnet", alt: "Підковоподібний магніт притягує цвяхи", s: [
      ["A magnet pulls iron nails.", "Магніт притягує залізні цвяхи."]
    ]},
    { type: "box", kind: "think", title: ["?", "Подумай"],
      answers: [
        { n: "?", q: ["Can a magnet move a nail without touching it?", "Чи може магніт зрушити цвях, не торкаючись його?"],
          a: ["Yes! If you hold a magnet close to a nail, the nail jumps towards it.\nMagnetism works without touching, so it is a non-contact force.",
             "Так! Якщо піднести магніт близько до цвяха, цвях підскочить до нього.\nМагнетизм діє без дотику, тож це безконтактна сила."] }
      ],
      items: [
        { n: "?", s: [["Can a magnet pull a nail before they touch?", "Чи може магніт притягти цвях ще до того, як вони торкнуться?"]] }
      ]
    },

    // ---- Сторінка 21 ----
    { type: "h2", page: 21, s: [["Electrical Force", "Електрична сила"]] },
    { type: "img", src: "s12-light-bulb", alt: "Лампочка з тонкою спіраллю всередині", s: [
      ["A light bulb", "Лампочка"]
    ]},
    { type: "box", kind: "know", title: ["Did you know?", "А ти знала?"],
      items: [
        { s: [["If you rub a balloon on your hair, the balloon can pull your hair up without touching it.", "Якщо потерти повітряну кульку об волосся, кулька може підняти твоє волосся, навіть не торкаючись його."],
              ["This is an *electrostatic* force.", "Це *електростатична* сила."]] }
      ]
    },

    // ---- Сторінка 22: завершальний слайд ----
    { type: "box", kind: "think", page: 22, title: ["?", "Подумай"],
      answers: [
        { n: "?", q: ["Contact or non-contact?", "Контактна чи безконтактна?"],
          a: ["CONTACT FORCES\nfriction, air resistance, water resistance, buoyancy (upthrust)\nNON-CONTACT FORCES\ngravity, magnetism, electrical force",
             "КОНТАКТНІ СИЛИ\nтертя, опір повітря, опір води, виштовхувальна сила\nБЕЗКОНТАКТНІ СИЛИ\nсила тяжіння, магнетизм, електрична сила"] }
      ],
      items: [
        { n: "?", s: [["Sort the forces you learned about: which are contact forces and which are non-contact forces?", "Розклади сили, про які ти дізналася: які з них контактні, а які безконтактні?"]] }
      ]
    },

    // ---- Сторінка 23: плакат «Forces in Everyday Life» ----
    { type: "h2", page: 23, s: [["Forces in Everyday Life", "Сили в повсякденному житті"]] },
    { type: "p", s: [
      ["Forces can make objects move, stop or change direction.", "Сили можуть змусити предмети рухатися, зупинитися або змінити напрямок."]
    ]},
    { type: "p", s: [["*Push*: A force that moves an object away from you.", "*Поштовх* (push): сила, яка рухає предмет від тебе."]] },
    { type: "img", src: "s12-push", alt: "Хлопчик штовхає червону коробку від себе", s: [
      ["You push the box away from you.", "Ти штовхаєш коробку від себе."]
    ]},
    { type: "p", s: [["*Pull*: A force that moves an object toward you.", "*Тяга* (pull): сила, яка рухає предмет до тебе."]] },
    { type: "img", src: "s12-pull", alt: "Дівчинка тягне червоний візок до себе", s: [
      ["You pull the wagon toward you.", "Ти тягнеш візок до себе."]
    ]},
    { type: "p", s: [["*Gravity*: The force that pulls objects toward Earth.", "*Сила тяжіння* (gravity): сила, яка тягне предмети до Землі."]] },
    { type: "img", src: "s12-gravity", alt: "Яблуко падає до Землі", s: [
      ["The apple falls toward Earth.", "Яблуко падає до Землі."]
    ]},
    { type: "p", s: [["*Normal Force*: The upward push from a surface supporting an object.", "*Сила реакції опори* (normal force): поштовх угору від поверхні, яка тримає предмет."]] },
    { type: "img", src: "s12-normal-force", alt: "Хлопчик сидить на стільці; стрілка вгору — сила реакції опори", s: [
      ["The chair pushes up on the boy.", "Стілець штовхає хлопчика вгору."]
    ]},
    { type: "p", s: [["*Applied Force*: Any force you apply to an object by pushing or pulling.", "*Прикладена сила* (applied force): будь-яка сила, з якою ти дієш на предмет, коли штовхаєш або тягнеш його."]] },
    { type: "img", src: "s12-applied-force", alt: "Дівчинка штовхає футбольний м'яч", s: [
      ["You apply a force by pushing the ball.", "Ти прикладаєш силу, коли штовхаєш м'яч."]
    ]},
    { type: "p", s: [["*Friction*: The force that opposes motion between touching surfaces.", "*Тертя* (friction): сила, яка заважає рухові між поверхнями, що торкаються одна одної."]] },
    { type: "img", src: "s12-friction", alt: "Хлопчик їде на велосипеді; стрілка тертя спрямована назад", s: [
      ["Friction acts in the opposite direction to the bike's movement.", "Тертя діє в напрямку, протилежному рухові велосипеда."]
    ]},

    // ---- Сторінка 24: плакат «Force Diagrams» ----
    { type: "h2", page: 24, s: [["Force Diagrams", "Схеми сил"]] },
    { type: "p", s: [
      ["A *force diagram* shows the forces acting on an object.", "*Схема сил* показує сили, що діють на предмет."],
      ["It helps us see which way the forces are acting and how big they are (sometimes).", "Вона допомагає нам побачити, у який бік діють сили і (іноді) наскільки вони великі."]
    ]},
    { type: "img", src: "s12-key", alt: "Умовні позначки: червона стрілка, синя стрілка і чорна крапка", s: [
      ["Key: red arrow = push or pull (force).", "Умовні позначки: червона стрілка = поштовх або тяга (сила)."],
      ["Blue arrow = force in the opposite direction.", "Синя стрілка = сила в протилежному напрямку."],
      ["Black dot = object.", "Чорна крапка = предмет."]
    ]},
    { type: "p", s: [
      ["1. A book on a table (*balanced forces*)", "1. Книжка на столі (*зрівноважені сили*)"],
      ["The book is not moving because the forces are balanced (the same size, in opposite directions).", "Книжка не рухається, бо сили зрівноважені (однакові за величиною і протилежні за напрямком)."]
    ]},
    { type: "img", src: "s12-book-on-table", alt: "Книжка на столі: стрілка вгору — сила реакції опори, стрілка вниз — вага", s: [
      ["Normal force (table pushes up).", "Сила реакції опори (стіл штовхає вгору)."],
      ["Weight (gravity pulls down).", "Вага (сила тяжіння тягне вниз)."]
    ]},
    { type: "p", s: [
      ["2. A ball being thrown (*unbalanced forces*)", "2. М'яч, який кидають (*незрівноважені сили*)"],
      ["The ball moves forwards because the push is bigger than the weight (for a short time).", "М'яч летить уперед, бо поштовх більший за вагу (недовго)."]
    ]},
    { type: "img", src: "s12-ball-thrown", alt: "Хлопчик кидає м'яч: стрілка вперед — поштовх руки, стрілка вниз — вага", s: [
      ["Push from hand (forwards).", "Поштовх руки (уперед)."],
      ["Weight (downwards).", "Вага (вниз)."]
    ]},
    { type: "p", s: [
      ["3. A box being pulled (*horizontal* force)", "3. Ящик, який тягнуть (*горизонтальна* сила)"],
      ["The box moves forwards because the pull is bigger than the friction (for a short time).", "Ящик рухається вперед, бо тяга більша за тертя (недовго)."]
    ]},
    { type: "img", src: "s12-box-pulled", alt: "Дівчинка тягне дерев'яний ящик: стрілка вперед — тяга, стрілка назад — тертя", s: [
      ["Pull (forwards).", "Тяга (уперед)."],
      ["Friction (backwards).", "Тертя (назад)."]
    ]},
    { type: "p", s: [
      ["4. A basketball falling (*unbalanced forces*)", "4. Баскетбольний м'яч падає (*незрівноважені сили*)"],
      ["The ball falls down because the weight is bigger than the air resistance (which acts upwards, but is smaller).", "М'яч падає вниз, бо вага більша за опір повітря (він діє вгору, але він менший)."]
    ]},
    { type: "img", src: "s12-basketball-falling", alt: "Баскетбольний м'яч падає: стрілка вниз — вага, коротка стрілка вгору — опір повітря", s: [
      ["Weight (downwards).", "Вага (вниз)."],
      ["Air resistance (upwards).", "Опір повітря (вгору)."]
    ]},

    // ---- Перевір себе ----
    { type: "box", kind: "review", title: ["Check yourself", "Перевір себе"],
      answers: [
        { n: "1", q: ["Forces are measured in…", "Сили вимірюють у…"],
          a: ["b: newtons, using a newton meter.", "b: ньютонах, за допомогою динамометра."] },
        { n: "2", q: ["A contact force occurs when…", "Контактна сила виникає, коли…"],
          a: ["b: the objects are touching.", "b: предмети торкаються один одного."] },
        { n: "3", q: ["Which one is a non-contact force?", "Яка з цих сил безконтактна?"],
          a: ["b: magnetism.", "b: магнетизм."] },
        { n: "4", q: ["An object will sink if…", "Предмет потоне, якщо…"],
          a: ["b: its weight is greater than the upthrust.", "b: його вага більша за виштовхувальну силу."] },
        { n: "5", q: ["Air resistance is…", "Опір повітря — це…"],
          a: ["b: a type of friction between the air and another material.", "b: вид тертя між повітрям та іншим матеріалом."] }
      ],
      items: [
        { n: "1", s: [["Forces are measured in:", "Сили вимірюють у:"]] },
        { n: "a", sub: true, s: [["metres, using a ruler", "метрах, за допомогою лінійки"]] },
        { n: "b", sub: true, ok: true, s: [["newtons, using a newton meter", "ньютонах, за допомогою динамометра"]] },
        { n: "c", sub: true, s: [["kilograms, using scales", "кілограмах, за допомогою ваг"]] },
        { n: "2", s: [["A contact force occurs when:", "Контактна сила виникає, коли:"]] },
        { n: "a", sub: true, s: [["the objects are far apart", "предмети далеко один від одного"]] },
        { n: "b", sub: true, ok: true, s: [["the objects are touching", "предмети торкаються один одного"]] },
        { n: "c", sub: true, s: [["there is no air", "немає повітря"]] },
        { n: "3", s: [["Which one is a non-contact force?", "Яка з цих сил безконтактна?"]] },
        { n: "a", sub: true, s: [["friction", "тертя"]] },
        { n: "b", sub: true, ok: true, s: [["magnetism", "магнетизм"]] },
        { n: "c", sub: true, s: [["water resistance", "опір води"]] },
        { n: "4", s: [["An object in water will sink if:", "Предмет у воді потоне, якщо:"]] },
        { n: "a", sub: true, s: [["its weight is less than the upthrust", "його вага менша за виштовхувальну силу"]] },
        { n: "b", sub: true, ok: true, s: [["its weight is greater than the upthrust", "його вага більша за виштовхувальну силу"]] },
        { n: "c", sub: true, s: [["its weight is equal to the upthrust", "його вага дорівнює виштовхувальній силі"]] },
        { n: "5", s: [["Air resistance is:", "Опір повітря — це:"]] },
        { n: "a", sub: true, s: [["a non-contact force like gravity", "безконтактна сила, як сила тяжіння"]] },
        { n: "b", sub: true, ok: true, s: [["a type of friction between the air and another material", "вид тертя між повітрям та іншим матеріалом"]] },
        { n: "c", sub: true, s: [["the force that pulls objects toward Earth", "сила, яка тягне предмети до Землі"]] }
      ]
    }
  ],
  phrases: [
    ["types of forces", "види сил"],
    ["measured in newtons", "вимірюються в ньютонах"],
    ["newton meter", "динамометр"],
    ["named after", "названий на честь"],
    ["the unit of force", "одиниця сили"],
    ["some examples of", "кілька прикладів (чогось)"],
    ["contact force", "контактна сила"],
    ["non-contact force", "безконтактна сила"],
    ["air resistance", "опір повітря"],
    ["water resistance", "опір води"],
    ["a type of friction", "вид тертя"],
    ["crash to the ground", "розбитися об землю"],
    ["gas or liquid", "газ або рідина"],
    ["pushes up", "штовхає вгору"],
    ["pushing down", "тисне вниз"],
    ["pushes against", "тисне на, штовхає проти"],
    ["move through water", "рухатися крізь воду"],
    ["in a fluid", "у рідині або газі"],
    ["equal to or less than", "дорівнює або менше ніж"],
    ["greater than", "більше ніж"],
    ["such as", "такий як, наприклад"],
    ["away from you", "від тебе"],
    ["toward you", "до тебе"],
    ["toward Earth", "до Землі"],
    ["normal force", "сила реакції опори"],
    ["applied force", "прикладена сила"],
    ["opposes motion", "заважає рухові"],
    ["touching surfaces", "поверхні, що торкаються одна одної"],
    ["in the opposite direction", "у протилежному напрямку"],
    ["change direction", "змінювати напрямок"],
    ["force diagram", "схема сил"],
    ["which way", "у який бік"],
    ["how big", "наскільки великий"],
    ["balanced forces", "зрівноважені сили"],
    ["unbalanced forces", "незрівноважені сили"],
    ["the same size", "однакові за величиною"],
    ["for a short time", "недовго, на короткий час"],
    ["push from hand", "поштовх руки"],
    ["rub a balloon", "потерти повітряну кульку"]
  ]
});
