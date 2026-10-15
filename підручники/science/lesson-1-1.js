// Урок 1.1 «Understanding Forces and Force Diagrams» — сторінки 2–10 книжки «Science» (презентація, 9 слайдів).
// Кожен блок — абзац. Кожне речення — [англійською, українською].
// *слово* — жирне ключове слово.
(window.SCI = window.SCI || { lessons: [], dict: {} }).lessons.push({
  id: "1.1",
  unit: "1 Forces",
  color: "#e2584a",
  title: ["1.1 Understanding Forces and Force Diagrams", "1.1 Що таке сили та схеми сил"],
  pages: "2–10",
  blocks: [
    // ---- Сторінка 2: титульний слайд ----
    { type: "h2", page: 2, s: [["Understanding Forces and Force Diagrams", "Що таке сили та схеми сил"]] },

    // ---- Сторінка 3 ----
    { type: "h2", page: 3, s: [["What Are Forces?", "Що таке сили?"]] },
    { type: "p", s: [
      ["*Forces* are pushes or pulls that can change how objects move.", "*Сили* — це поштовхи або тяги, які можуть змінити те, як рухаються предмети."],
      ["You use forces every day when you walk, throw a ball, or open a door.", "Ти користуєшся силами щодня, коли ходиш, кидаєш м'яч або відчиняєш двері."],
      ["Forces have both size (how strong) and direction (which way).", "Сили мають і величину (наскільки вони сильні), і напрямок (куди вони діють)."]
    ]},
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1", q: ["Three forces you used getting to school today", "Три сили, якими ти користувалася дорогою до школи"],
          a: ["For example:\nI pushed the door open when I left home.\nI pulled my backpack onto my back.\nI pushed against the ground with my feet when I walked.\nGravity pulled me down, so I stayed on the ground.",
             "Наприклад:\nЯ штовхнула двері, щоб вийти з дому.\nЯ потягла рюкзак собі на спину.\nЯ відштовхувалася ногами від землі, коли йшла.\nСила тяжіння тягла мене вниз, тож я трималася на землі."] },
        { n: "2", q: ["Share your examples with the class", "Поділися прикладами з класом"],
          a: ["You can say: \"On my way to school I used a push to open the door, a pull to carry my bag, and a push with my feet to walk.\"",
             "Можна сказати: «Дорогою до школи я штовхнула двері, щоб їх відчинити, потягла сумку, щоб її нести, і відштовхувалася ногами, щоб іти»."] }
      ],
      items: [
        { n: "1", s: [["Think-Pair-Share: With a partner, name three forces you used getting to school today.", "Подумай — обговори в парі — поділися: разом із партнером назвіть три сили, якими ви користувалися сьогодні дорогою до школи."]] },
        { n: "2", s: [["Share your examples with the class.", "Поділися своїми прикладами з класом."]] }
      ]
    },
    { type: "img", src: "s11-push-pull-sort", alt: "Картки з малюнками дій і дві колонки: Push (штовхати) і Pull (тягти)", s: [
      ["Sort the pictures: is each action a push or a pull?", "Розклади малюнки: кожна дія — це поштовх чи тяга?"]
    ]},

    // ---- Сторінка 4 ----
    { type: "h2", page: 4, s: [["Force Vocabulary", "Слова про сили"]] },
    { type: "p", s: [
      ["*Push*: A force that moves an object away from you.", "*Поштовх* (push): сила, яка рухає предмет від тебе."],
      ["*Pull*: A force that moves an object toward you.", "*Тяга* (pull): сила, яка рухає предмет до тебе."],
      ["*Gravity*: The force that pulls objects toward Earth.", "*Сила тяжіння* (gravity): сила, яка тягне предмети до Землі."],
      ["*Normal Force*: The upward push from a surface supporting an object.", "*Сила реакції опори* (normal force): поштовх угору від поверхні, яка тримає предмет."],
      ["*Applied Force*: Any force you apply to an object by pushing or pulling.", "*Прикладена сила* (applied force): будь-яка сила, з якою ти дієш на предмет, коли штовхаєш або тягнеш його."],
      ["*Friction*: The force that opposes motion between touching surfaces.", "*Тертя* (friction): сила, яка заважає рухові між поверхнями, що торкаються одна одної."]
    ]},
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1", q: ["Examples for each compass point", "Приклади для кожної сторони світу"],
          a: ["NORTH – PUSH\nopening a door, kicking a ball, pushing a shopping trolley\nSOUTH – PULL\nopening a drawer, pulling a dog's lead, pulling up your socks\nEAST – GRAVITY\nan apple falling from a tree, rain falling, you landing after a jump\nWEST – FRICTION\nyour shoes gripping the floor, a bike's brakes stopping the wheel, rubbing your hands to make them warm",
             "ПІВНІЧ – ПОШТОВХ\nвідчинити двері, вдарити м'яч ногою, штовхати візок у магазині\nПІВДЕНЬ – ТЯГА\nвисунути шухляду, тягти повідець собаки, підтягнути шкарпетки\nСХІД – СИЛА ТЯЖІННЯ\nяблуко падає з дерева, падає дощ, ти приземляєшся після стрибка\nЗАХІД – ТЕРТЯ\nвзуття не ковзає по підлозі, гальма велосипеда зупиняють колесо, ти треш долоні, щоб зігріти їх"] }
      ],
      items: [
        { n: "1", s: [["Compass Points Activity: Move to North for push examples, South for pull examples, East for gravity examples, West for friction examples.", "Гра «Сторони світу»: іди на північ для прикладів поштовху, на південь — для прикладів тяги, на схід — для прикладів сили тяжіння, на захід — для прикладів тертя."]] }
      ]
    },

    // ---- Сторінка 5 ----
    { type: "h2", page: 5, s: [["What Are Force Diagrams?", "Що таке схеми сил?"]] },
    { type: "p", s: [
      ["*Force diagrams* show all forces acting on one object.", "*Схеми сил* показують усі сили, що діють на один предмет."],
      ["We draw the object as a simple box or dot.", "Ми малюємо предмет як простий квадратик або крапку."],
      ["*Arrows* represent forces pointing in the direction they act.", "*Стрілки* позначають сили й показують напрямок, у якому ці сили діють."],
      ["Longer arrows mean stronger forces, shorter arrows mean weaker forces.", "Довші стрілки означають сильніші сили, коротші стрілки — слабші сили."],
      ["Each arrow is labeled with the force name.", "Біля кожної стрілки підписано назву сили."]
    ]},
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1", q: ["What makes a good force diagram?", "Яка схема сил — добра?"],
          a: ["A good force diagram shows the object as a simple box or dot.\nIt shows all the forces acting on that one object.\nEach arrow points in the direction the force acts.\nLonger arrows show stronger forces, shorter arrows show weaker forces.\nEvery arrow has a clear label with the force name.",
             "На добрій схемі сил предмет намальовано простим квадратиком або крапкою.\nНа ній показано всі сили, що діють на цей один предмет.\nКожна стрілка вказує в той бік, куди діє сила.\nДовші стрілки показують сильніші сили, коротші — слабші.\nБіля кожної стрілки є чіткий підпис із назвою сили."] }
      ],
      items: [
        { n: "1", s: [["Back-to-Back, Face-to-Face: Describe to your partner what makes a good force diagram.", "«Спиною до спини, обличчям до обличчя»: розкажи партнерові, що робить схему сил доброю."]] }
      ]
    },
    { type: "img", src: "s11-car-free-body", alt: "Автомобіль, на який діють сили, і поруч його схема сил (free-body diagram)", s: [
      ["A car moving at a constant speed and its free-body diagram: applied force, friction, weight and normal forces.", "Автомобіль, що їде зі сталою швидкістю, і його схема сил: прикладена сила, тертя, вага й сили реакції опори."]
    ]},

    // ---- Сторінка 6 ----
    { type: "h2", page: 6, s: [["Drawing Force Arrows", "Як малювати стрілки сил"]] },
    { type: "p", s: [
      ["Start arrows at the center or edge of your object.", "Починай стрілки в центрі або на краю свого предмета."],
      ["Point arrows in the exact direction the force acts.", "Спрямовуй стрілки точно в той бік, куди діє сила."],
      ["Make arrow length match the force strength.", "Роби довжину стрілки відповідною до сили (наскільки вона сильна)."],
      ["Label each arrow clearly with the force name.", "Чітко підпиши кожну стрілку назвою сили."],
      ["Use a ruler to draw straight, neat arrows.", "Користуйся лінійкою, щоб малювати рівні, акуратні стрілки."]
    ]},
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1", q: ["Arrows pointing up, down, left and right", "Стрілки вгору, вниз, ліворуч і праворуч"],
          a: ["Draw a small box in the middle of your paper.\nUP: draw an arrow from the top of the box upwards (like the normal force).\nDOWN: draw an arrow from the bottom of the box downwards (like gravity).\nLEFT and RIGHT: draw arrows from the sides of the box to the left and to the right (like friction and a push).\nUse a ruler and label each arrow.",
             "Намалюй маленький квадратик посередині аркуша.\nВГОРУ: намалюй стрілку від верху квадратика вгору (як сила реакції опори).\nВНИЗ: намалюй стрілку від низу квадратика вниз (як сила тяжіння).\nЛІВОРУЧ і ПРАВОРУЧ: намалюй стрілки від боків квадратика ліворуч і праворуч (як тертя й поштовх).\nКористуйся лінійкою й підпиши кожну стрілку."] }
      ],
      items: [
        { n: "1", s: [["Practice drawing arrows pointing up, down, left, and right on your paper.", "Потренуйся малювати на папері стрілки, що вказують угору, вниз, ліворуч і праворуч."]] }
      ]
    },

    // ---- Сторінка 7 ----
    { type: "h2", page: 7, s: [["Common Forces in Action", "Звичайні сили в дії"]] },
    { type: "p", s: [
      ["A book on a table has two forces: gravity pulls down, normal force pushes up.", "На книжку на столі діють дві сили: сила тяжіння тягне вниз, сила реакції опори штовхає вгору."],
      ["When you push a box, applied force pushes forward, friction pushes backward.", "Коли ти штовхаєш коробку, прикладена сила штовхає вперед, а тертя — назад."],
      ["A hanging object has gravity pulling down and *tension* pulling up.", "На предмет, що висить, діє сила тяжіння, яка тягне вниз, і *сила натягу*, яка тягне вгору."]
    ]},
    { variants: [{"label": ["A hanging lamp", "Лампа на стелі"]}, {"label": ["A book on a table", "Книжка на столі"], "answers": [{"n": "1", "q": ["Forces on an object in the room", "Сили, що діють на предмет у класі"], "a": ["For example, a book lying on a table:\nGravity pulls it down.\nThe table pushes it up. This push is called the normal force.\nThe two forces are equal, so the book stays still.", "Наприклад, книжка, що лежить на столі:\nСила тяжіння тягне її вниз.\nСтіл штовхає її вгору. Цей поштовх називається силою реакції опори.\nЦі дві сили однакові, тож книжка лежить нерухомо."]}, {"n": "2", "q": ["A quick force diagram for your object", "Швидка схема сил для твого предмета"], "a": ["Draw the book as a small box.\nDraw an arrow pointing up from the top of the box and label it \"normal force\".\nDraw an arrow of the same length pointing down from the bottom and label it \"gravity\".", "Намалюй книжку маленьким квадратиком.\nНамалюй стрілку вгору від верху квадратика й підпиши її «normal force» (сила реакції опори).\nНамалюй стрілку такої самої довжини вниз від низу квадратика й підпиши її «gravity» (сила тяжіння)."]}]}, {"label": ["A chair you push", "Стілець, який штовхаєш"], "answers": [{"n": "1", "q": ["Forces on an object in the room", "Сили, що діють на предмет у класі"], "a": ["For example, a chair I push across the floor:\nMy push moves it forward.\nFriction from the floor pulls back.\nGravity pulls it down and the floor pushes it up.", "Наприклад, стілець, який я штовхаю по підлозі:\nМій поштовх рухає його вперед.\nТертя об підлогу тягне назад.\nСила тяжіння тягне його вниз, а підлога штовхає вгору."]}, {"n": "2", "q": ["A quick force diagram for your object", "Швидка схема сил для твого предмета"], "a": ["Draw the chair as a small box.\nDraw a long arrow to the right labelled \"push\" and a shorter arrow to the left labelled \"friction\".\nAdd an arrow down for \"gravity\" and an arrow up for \"normal force\".", "Намалюй стілець маленьким квадратиком.\nНамалюй довгу стрілку праворуч з підписом «push» (поштовх) і коротшу стрілку ліворуч з підписом «friction» (тертя).\nДодай стрілку вниз — «gravity» (сила тяжіння) і стрілку вгору — «normal force» (сила реакції опори)."]}]}, {"label": ["A ball falling", "М'яч, що падає"], "answers": [{"n": "1", "q": ["Forces on an object in the room", "Сили, що діють на предмет у класі"], "a": ["For example, a ball I drop:\nGravity pulls it down.\nAir resistance pushes up a little.\nGravity is bigger, so the ball falls faster and faster.", "Наприклад, м'яч, який я впустила:\nСила тяжіння тягне його вниз.\nОпір повітря трохи штовхає вгору.\nСила тяжіння більша, тож м'яч падає дедалі швидше."]}, {"n": "2", "q": ["A quick force diagram for your object", "Швидка схема сил для твого предмета"], "a": ["Draw the ball as a small circle.\nDraw a long arrow pointing down labelled \"gravity\".\nDraw a short arrow pointing up labelled \"air resistance\".", "Намалюй м'яч маленьким кружечком.\nНамалюй довгу стрілку вниз з підписом «gravity» (сила тяжіння).\nНамалюй коротку стрілку вгору з підписом «air resistance» (опір повітря)."]}]}], type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1", q: ["Forces on an object in the room", "Сили, що діють на предмет у класі"],
          a: ["For example, a lamp hanging from the ceiling:\nGravity pulls it down.\nTension in the cord pulls it up.\nThe two forces are equal, so the lamp stays still.",
             "Наприклад, лампа, що висить на стелі:\nСила тяжіння тягне її вниз.\nСила натягу шнура тягне її вгору.\nЦі дві сили однакові, тож лампа висить нерухомо."] },
        { n: "2", q: ["A quick force diagram for your object", "Швидка схема сил для твого предмета"],
          a: ["Draw the lamp as a small box.\nDraw an arrow pointing up from the top of the box and label it \"tension\".\nDraw an arrow of the same length pointing down from the bottom and label it \"gravity\".",
             "Намалюй лампу маленьким квадратиком.\nНамалюй стрілку вгору від верху квадратика й підпиши її «tension» (сила натягу).\nНамалюй стрілку такої самої довжини вниз від низу квадратика й підпиши її «gravity» (сила тяжіння)."] }
      ],
      items: [
        { n: "1", s: [["Think-Pair-Share: Pick an object in the room and identify what forces act on it.", "Подумай — обговори в парі — поділися: вибери предмет у класі й визнач, які сили на нього діють."]] },
        { n: "2", s: [["Draw a quick force diagram for your chosen object.", "Намалюй швидку схему сил для предмета, який ти вибрала."]] }
      ]
    },
    { type: "img", src: "s11-book-on-table", alt: "Схема: брусок на столі, стрілка N угору і стрілка вниз", s: [
      ["An object on a table: the normal force (N) pushes up and its weight pulls down.", "Предмет на столі: сила реакції опори (N) штовхає вгору, а його вага тягне вниз."]
    ]},

    // ---- Сторінка 8 ----
    { type: "h2", page: 8, s: [["Balanced vs. Unbalanced Forces", "Зрівноважені й незрівноважені сили"]] },
    { type: "p", s: [
      ["*Balanced forces* are equal in size but opposite in direction.", "*Зрівноважені сили* однакові за величиною, але протилежні за напрямком."],
      ["When forces are balanced, objects don't change their motion.", "Коли сили зрівноважені, предмети не змінюють свого руху."],
      ["*Unbalanced forces* cause objects to speed up, slow down, or change direction.", "*Незрівноважені сили* змушують предмети пришвидшуватися, сповільнюватися або змінювати напрямок."],
      ["A book sitting still on a desk has balanced forces.", "На книжку, що нерухомо лежить на парті, діють зрівноважені сили."]
    ]},
    { type: "box", kind: "think", title: ["?", "Подумай"],
      answers: [
        { n: "?", q: ["How do you know if forces are balanced or unbalanced?", "Як дізнатися, зрівноважені сили чи ні?"],
          a: ["BALANCED\nThe object does not change its motion: it stays still, or keeps moving at the same speed in the same direction. The opposite forces are the same size.\nUNBALANCED\nThe object speeds up, slows down or changes direction. One force is bigger than the force opposite it.",
             "ЗРІВНОВАЖЕНІ\nПредмет не змінює свого руху: стоїть на місці або рухається далі з тією самою швидкістю в тому самому напрямку. Протилежні сили однакові.\nНЕЗРІВНОВАЖЕНІ\nПредмет пришвидшується, сповільнюється або змінює напрямок. Одна сила більша за протилежну їй."] }
      ],
      items: [
        { n: "?", s: [["Reflection Question: How do you know if forces on an object are balanced or unbalanced?", "Питання для роздумів: як дізнатися, чи сили, що діють на предмет, зрівноважені, чи незрівноважені?"]] }
      ]
    },

    // ---- Сторінка 9 ----
    { type: "h2", page: 9, s: [["Practice Drawing Force Diagrams", "Тренуємося малювати схеми сил"]] },
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1", q: ["A force diagram for a soccer ball being kicked", "Схема сил для м'яча, по якому б'ють ногою"],
          a: ["Draw the ball as a dot or a small circle.\nApplied force: a long arrow pointing forward, in the direction of the kick.\nAir resistance: a shorter arrow pointing backward.\nGravity: an arrow pointing down.\nNormal force: an arrow pointing up from the ground (while the ball is still touching the ground).",
             "Намалюй м'яч крапкою або маленьким колом.\nПрикладена сила: довга стрілка вперед, у напрямку удару.\nОпір повітря: коротша стрілка назад.\nСила тяжіння: стрілка вниз.\nСила реакції опори: стрілка вгору від землі (поки м'яч ще торкається землі)."] },
        { n: "2", q: ["Applied force and air resistance", "Прикладена сила й опір повітря"],
          a: ["The applied force from your foot points forward. Air resistance points the opposite way, backward. The kick is stronger, so its arrow is longer.",
             "Прикладена сила від твоєї ноги спрямована вперед. Опір повітря спрямований протилежно — назад. Удар сильніший, тому його стрілка довша."] },
        { n: "3", q: ["Gravity and normal force", "Сила тяжіння й сила реакції опори"],
          a: ["Gravity is an arrow pointing down. The normal force from the ground is an arrow pointing up.",
             "Сила тяжіння — це стрілка вниз. Сила реакції опори від землі — це стрілка вгору."] },
        { n: "4", q: ["Correct directions", "Правильні напрямки"],
          a: ["Forward for the kick, backward for air resistance, down for gravity, up for the normal force.",
             "Уперед — для удару, назад — для опору повітря, вниз — для сили тяжіння, вгору — для сили реакції опори."] },
        { n: "5", q: ["Labels", "Підписи"],
          a: ["Write the name next to each arrow: applied force, air resistance, gravity, normal force.",
             "Напиши назву біля кожної стрілки: applied force (прикладена сила), air resistance (опір повітря), gravity (сила тяжіння), normal force (сила реакції опори)."] },
        { n: "6", q: ["Can you identify and draw all forces acting on an object?", "Чи вмієш ти визначити й намалювати всі сили, що діють на предмет?"],
          a: ["Check yourself: Did you draw the object as a box or dot? Did you find every force? Does each arrow point the right way, with the right length and a label? If yes, you can do it!",
             "Перевір себе: чи намалювала ти предмет квадратиком або крапкою? Чи знайшла всі сили? Чи кожна стрілка показує правильний напрямок, має потрібну довжину й підпис? Якщо так — у тебе виходить!"] }
      ],
      items: [
        { n: "1", s: [["Draw a force diagram for a soccer ball being kicked.", "Намалюй схему сил для футбольного м'яча, по якому б'ють ногою."]] },
        { n: "2", s: [["Include applied force from your foot and *air resistance*.", "Покажи прикладену силу від твоєї ноги й *опір повітря*."]] },
        { n: "3", s: [["Show gravity pulling down and normal force from the ground.", "Покажи силу тяжіння, що тягне вниз, і силу реакції опори від землі."]] },
        { n: "4", s: [["Make sure your arrows point in the correct directions.", "Перевір, щоб твої стрілки вказували в правильних напрямках."]] },
        { n: "5", s: [["Label each force clearly.", "Чітко підпиши кожну силу."]] },
        { n: "6", s: [["Learning Target Check-in: Can you identify and draw all forces acting on an object?", "Перевірка мети уроку: чи можеш ти визначити й намалювати всі сили, що діють на предмет?"]] }
      ]
    },
    { type: "img", src: "s11-forces-in-action", alt: "Аркуш «Forces in Action» з малюнками: літак, гірка, парашут, м'яч на коробці", s: [
      ["Forces in Action: draw arrows on the pictures to show the forces acting in them.", "«Сили в дії»: намалюй стрілки на малюнках, щоб показати сили, які там діють."]
    ]},

    // ---- Сторінка 10 ----
    { type: "h2", page: 10, s: [["Closing Circle Reflection", "Підсумкове коло"]] },
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1", q: ["One new thing you learned about forces", "Одна нова річ, яку ти дізналася про сили"],
          a: ["For example: \"I learned that longer arrows in a force diagram mean stronger forces.\"\nOr: \"I learned that balanced forces don't change how an object moves.\"",
             "Наприклад: «Я дізналася, що довші стрілки на схемі сил означають сильніші сили».\nАбо: «Я дізналася, що зрівноважені сили не змінюють того, як рухається предмет»."] },
        { n: "2", q: ["Thank a classmate", "Подякуй однокласникові"],
          a: ["For example: \"Thank you, Sofia, for showing me how to label my arrows.\"",
             "Наприклад: «Дякую, Софіє, що показала мені, як підписувати стрілки»."] },
        { n: "3", q: ["What force concept do you want to practice more?", "Що про сили ти хочеш потренувати ще?"],
          a: ["For example: \"I want to practice drawing force diagrams with arrows of the right length.\"\nOr: \"I want to practice telling balanced and unbalanced forces apart.\"",
             "Наприклад: «Я хочу ще потренуватися малювати схеми сил зі стрілками правильної довжини».\nАбо: «Я хочу навчитися краще розрізняти зрівноважені й незрівноважені сили»."] }
      ],
      items: [
        { n: "1", s: [["Exit Ticket: Name one new thing you learned about forces today.", "«Квиток на вихід»: назви одну нову річ, яку ти сьогодні дізналася про сили."]] },
        { n: "2", s: [["Appreciations: Thank a classmate who helped you understand force diagrams.", "Подяки: подякуй однокласникові чи однокласниці, хто допоміг тобі зрозуміти схеми сил."]] },
        { n: "3", s: [["Goal Setting: What force concept do you want to practice more?", "Ставимо мету: яку тему про сили ти хочеш потренувати ще?"]] }
      ]
    },
    { type: "p", s: [
      ["Tomorrow we'll use force diagrams to predict how objects will move.", "Завтра ми будемо за допомогою схем сил передбачати, як рухатимуться предмети."],
      ["Remember: Forces are everywhere around us every day!", "Пам'ятай: сили є всюди навколо нас щодня!"]
    ]},

    // ---- Check yourself ----
    { type: "box", kind: "review", title: ["Check yourself", "Перевір себе"],
      answers: [
        { n: "1", q: ["What are forces?", "Що таке сили?"], a: ["b: pushes or pulls that can change how objects move.", "b: поштовхи або тяги, які можуть змінити рух предметів."] },
        { n: "2", q: ["Which force pulls objects toward Earth?", "Яка сила тягне предмети до Землі?"], a: ["b: gravity.", "b: сила тяжіння."] },
        { n: "3", q: ["What does a longer arrow mean?", "Що означає довша стрілка?"], a: ["b: a stronger force.", "b: сильнішу силу."] },
        { n: "4", q: ["Which forces act on a hanging object?", "Які сили діють на предмет, що висить?"], a: ["b: gravity pulling down and tension pulling up.", "b: сила тяжіння тягне вниз, а сила натягу — вгору."] },
        { n: "5", q: ["What do unbalanced forces do?", "Що роблять незрівноважені сили?"], a: ["b: they cause objects to speed up, slow down, or change direction.", "b: змушують предмети пришвидшуватися, сповільнюватися або змінювати напрямок."] }
      ],
      items: [
        { n: "1", s: [["Forces are:", "Сили — це:"]] },
        { n: "a", sub: true, s: [["colours that objects can have", "кольори, які можуть мати предмети"]] },
        { n: "b", sub: true, ok: true, s: [["pushes or pulls that can change how objects move", "поштовхи або тяги, які можуть змінити те, як рухаються предмети"]] },
        { n: "c", sub: true, s: [["the sizes of objects", "розміри предметів"]] },
        { n: "2", s: [["The force that pulls objects toward Earth is called:", "Сила, яка тягне предмети до Землі, називається:"]] },
        { n: "a", sub: true, s: [["friction", "тертя"]] },
        { n: "b", sub: true, ok: true, s: [["gravity", "сила тяжіння"]] },
        { n: "c", sub: true, s: [["normal force", "сила реакції опори"]] },
        { n: "3", s: [["In a force diagram, a longer arrow means:", "На схемі сил довша стрілка означає:"]] },
        { n: "a", sub: true, s: [["a weaker force", "слабшу силу"]] },
        { n: "b", sub: true, ok: true, s: [["a stronger force", "сильнішу силу"]] },
        { n: "c", sub: true, s: [["a bigger object", "більший предмет"]] },
        { n: "4", s: [["A hanging object has:", "На предмет, що висить, діють:"]] },
        { n: "a", sub: true, s: [["friction pulling down and gravity pulling up", "тертя, що тягне вниз, і сила тяжіння, що тягне вгору"]] },
        { n: "b", sub: true, ok: true, s: [["gravity pulling down and tension pulling up", "сила тяжіння, що тягне вниз, і сила натягу, що тягне вгору"]] },
        { n: "c", sub: true, s: [["no forces at all", "жодних сил"]] },
        { n: "5", s: [["Unbalanced forces cause objects to:", "Незрівноважені сили змушують предмети:"]] },
        { n: "a", sub: true, s: [["stay still forever", "завжди стояти нерухомо"]] },
        { n: "b", sub: true, ok: true, s: [["speed up, slow down, or change direction", "пришвидшуватися, сповільнюватися або змінювати напрямок"]] },
        { n: "c", sub: true, s: [["change colour", "змінювати колір"]] }
      ]
    }
  ],
  phrases: [
    ["pushes or pulls", "поштовхи або тяги"],
    ["change how objects move", "змінювати те, як рухаються предмети"],
    ["throw a ball", "кинути м'яч"],
    ["open a door", "відчинити двері"],
    ["how strong", "наскільки сильний"],
    ["which way", "у який бік"],
    ["with a partner", "з партнером, у парі"],
    ["getting to school", "дорогою до школи"],
    ["share your examples", "поділися своїми прикладами"],
    ["away from you", "від тебе"],
    ["toward you", "до тебе"],
    ["normal force", "сила реакції опори"],
    ["applied force", "прикладена сила"],
    ["opposes motion", "заважає рухові, протидіє руху"],
    ["touching surfaces", "поверхні, що торкаються одна одної"],
    ["force diagram", "схема сил"],
    ["free-body diagram", "схема сил, що діють на одне тіло"],
    ["acting on one object", "що діють на один предмет"],
    ["box or dot", "квадратик або крапка"],
    ["in the direction they act", "у напрямку, в якому вони діють"],
    ["labeled with", "підписаний (чим)"],
    ["back-to-back, face-to-face", "спиною до спини, обличчям до обличчя"],
    ["the center or edge", "центр або край"],
    ["match the force strength", "відповідати силі (наскільки вона сильна)"],
    ["use a ruler", "користуватися лінійкою"],
    ["up, down, left, and right", "вгору, вниз, ліворуч і праворуч"],
    ["pulls down", "тягне вниз"],
    ["pushes up", "штовхає вгору"],
    ["pushes forward", "штовхає вперед"],
    ["pushes backward", "штовхає назад"],
    ["a hanging object", "предмет, що висить"],
    ["equal in size", "однакові за величиною"],
    ["opposite in direction", "протилежні за напрямком"],
    ["speed up", "пришвидшуватися"],
    ["slow down", "сповільнюватися"],
    ["change direction", "змінювати напрямок"],
    ["sitting still", "нерухомо лежить (стоїть)"],
    ["air resistance", "опір повітря"],
    ["exit ticket", "«квиток на вихід» (коротка відповідь наприкінці уроку)"],
    ["everywhere around us", "всюди навколо нас"]
  ]
});
