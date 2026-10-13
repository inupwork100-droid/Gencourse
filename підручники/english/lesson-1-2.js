// Урок 1.2 «Understanding Key Parts of Speech» — сторінки 4–16 книжки «English» (презентація, 13 слайдів).
// Кожна сторінка PDF (слайд) = одна сторінка книжки. Кожне речення — [англійською, українською].
// *слово* — жирне ключове слово.
(window.ENG = window.ENG || { lessons: [], dict: {} }).lessons.push({
  id: "1.2",
  unit: "1 Word Classes",
  color: "#2f7fd0",
  title: ["1.2 Understanding Key Parts of Speech", "1.2 Основні частини мови"],
  pages: "4–16",
  blocks: [
    // ---- Сторінка 4: титульний слайд ----
    { type: "h2", page: 4, s: [["Understanding Key Parts of Speech Usage", "Як уживати основні частини мови"]] },

    // ---- Сторінка 5 ----
    { type: "h2", page: 5, s: [["Introduction to Parts of Speech", "Знайомство з частинами мови"]] },
    { type: "p", s: [
      ["*Parts of speech* are the building blocks of sentences", "*Частини мови* — це цеглинки, з яких складаються речення"],
      ["They help us understand how words work together", "Вони допомагають нам зрозуміти, як слова працюють разом"],
      ["Today, we will learn about *verbs*, *nouns*, *pronouns*, *adverbs*, *adjectives*, *prepositions*, and *conjunctions*", "Сьогодні ми дізнаємося про *дієслова*, *іменники*, *займенники*, *прислівники*, *прикметники*, *прийменники* і *сполучники*"]
    ]},

    // ---- Сторінка 6 ----
    { type: "h2", page: 6, s: [["What Are Verbs?", "Що таке дієслова?"]] },
    { type: "p", s: [
      ["*Verbs* show action or state of being", "*Дієслова* показують дію або стан (те, яким щось є)"],
      ["Examples: *run*, *jump*, *is*, *are*", "Приклади: бігти, стрибати, є (він/вона), є (ми/вони)"],
      ["Verbs tell us what the *subject* does or is", "Дієслова кажуть нам, що *підмет* робить або яким він є"]
    ]},

    // ---- Сторінка 7 ----
    { type: "h2", page: 7, s: [["Understanding Nouns", "Що таке іменники"]] },
    { type: "p", s: [
      ["*Nouns* name people, places, things, or ideas", "*Іменники* називають людей, місця, речі або ідеї"],
      ["Examples: *teacher*, *city*, *dog*, *happiness*", "Приклади: учитель, місто, собака, щастя"],
      ["Nouns can be *common* or *proper*", "Іменники бувають *загальні* або *власні назви*"]
    ]},
    { type: "img", src: "e12-nouns", alt: "Плакат: конкретні й абстрактні іменники з прикладами", s: [
      ["Concrete Nouns and Abstract Nouns: a concrete noun is a noun you can experience or detect with your five senses; an abstract noun is something you cannot detect with your five senses.", "Конкретні та абстрактні іменники: конкретний іменник — це те, що можна відчути п'ятьма чуттями; абстрактний іменник — те, чого п'ятьма чуттями не відчуєш."]
    ]},

    // ---- Сторінка 8 ----
    { type: "h2", page: 8, s: [["Pronouns and Their Use", "Займенники та як їх уживати"]] },
    { type: "p", s: [
      ["*Pronouns* replace nouns to avoid repetition", "*Займенники* замінюють іменники, щоб не повторюватися"],
      ["Examples: *he*, *she*, *it*, *they*", "Приклади: він, вона, воно, вони"],
      ["Using pronouns helps sentences sound smoother", "Із займенниками речення звучать плавніше"]
    ]},
    { type: "img", src: "e12-pronouns", alt: "Кругова діаграма з парами займенників", s: [
      ["Pronoun pairs such as she/her, he/him and they/them.", "Пари займенників, наприклад she/her (вона/її), he/him (він/його) і they/them (вони/їх)."]
    ]},

    // ---- Сторінка 9 ----
    { type: "h2", page: 9, s: [["Classroom Protocol: Partner Discussion", "Правило класу: обговорення з партнером"]] },
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1", q: ["Examples of verbs and nouns", "Приклади дієслів та іменників"],
          a: ["VERBS\nrun, swim, read, sing, eat\nNOUNS\ncat, school, Kyiv, apple, friendship",
             "ДІЄСЛОВА\nбігти, плавати, читати, співати, їсти\nІМЕННИКИ\nкіт, школа, Київ, яблуко, дружба"] },
        { n: "2", q: ["Why do these words fit their parts of speech?", "Чому ці слова належать до своїх частин мови?"],
          a: ["Run, swim and read are verbs because they show an action – something you do.\nCat, school and apple are nouns because they name a thing, an animal or a place.\nKyiv is a proper noun because it is the name of one special place.",
             "Run, swim і read — дієслова, бо вони показують дію, те, що ти робиш.\nCat, school і apple — іменники, бо вони називають річ, тварину або місце.\nKyiv — власна назва, бо це ім'я одного особливого місця."] },
        { n: "3", q: ["Listen carefully to your partner's examples", "Уважно послухай приклади партнера"],
          a: ["At home, ask someone to say five words.\nSay \"verb\" or \"noun\" after each word.\nFor example: dance – verb, garden – noun.",
             "Удома попроси когось назвати п'ять слів.\nПісля кожного слова скажи «verb» (дієслово) чи «noun» (іменник).\nНаприклад: dance — дієслово, garden — іменник."] }
      ],
      items: [
        { n: "1", s: [["Turn to a partner and share examples of verbs and nouns you know", "Повернися до партнера й поділися прикладами дієслів та іменників, які ти знаєш"]] },
        { n: "2", s: [["Discuss why these words fit their parts of speech", "Обговоріть, чому ці слова належать до своїх частин мови"]] },
        { n: "3", s: [["Listen carefully to your partner's examples", "Уважно послухай приклади свого партнера"]] }
      ]
    },

    // ---- Сторінка 10 ----
    { type: "h2", page: 10, s: [["Exploring Adverbs", "Досліджуємо прислівники"]] },
    { type: "p", s: [
      ["*Adverbs* describe verbs, adjectives, or other adverbs", "*Прислівники* описують дієслова, прикметники або інші прислівники"],
      ["They often answer how, when, where, or to what extent", "Вони часто відповідають на питання як, коли, де або наскільки"],
      ["Examples: *quickly*, *very*, *yesterday*", "Приклади: швидко, дуже, учора"]
    ]},
    { type: "img", src: "e12-adverbs", alt: "Кольорове колесо з реченнями для гри з прислівниками", s: [
      ["Make a sentence adding an adverb of degree.", "Склади речення, додавши прислівник міри (наприклад, very — дуже)."]
    ]},

    // ---- Сторінка 11 ----
    { type: "h2", page: 11, s: [["What Are Adjectives?", "Що таке прикметники?"]] },
    { type: "p", s: [
      ["*Adjectives* describe nouns or pronouns", "*Прикметники* описують іменники або займенники"],
      ["They tell us more about size, color, shape, and more", "Вони розповідають більше про розмір, колір, форму та інше"],
      ["Examples: *blue*, *tall*, *happy*", "Приклади: синій, високий, щасливий"]
    ]},
    { type: "img", src: "e12-adjectives", alt: "Список прикметників у три колонки", s: [
      ["Adjectives List | 500 Adjectives", "Список прикметників | 500 прикметників"]
    ]},

    // ---- Сторінка 12 ----
    { type: "h2", page: 12, s: [["Understanding Prepositions", "Що таке прийменники"]] },
    { type: "p", s: [
      ["*Prepositions* show relationships between words", "*Прийменники* показують зв'язки між словами"],
      ["They often tell us about location, time, or direction", "Вони часто розповідають про місце, час або напрямок"],
      ["Examples: *in*, *on*, *before*, *under*", "Приклади: у, на, перед (до), під"]
    ]},

    // ---- Сторінка 13 ----
    { type: "h2", page: 13, s: [["Classroom Protocol: Group Sharing", "Правило класу: ділимося в групі"]] },
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1", q: ["Your favorite adjective and preposition", "Твій улюблений прикметник і прийменник"],
          a: ["My favorite adjective is \"sparkly\".\nMy favorite preposition is \"under\".",
             "Мій улюблений прикметник — «sparkly» (блискучий, іскристий).\nМій улюблений прийменник — «under» (під)."] },
        { n: "2", q: ["Why did you choose them?", "Чому ти їх обрала?"],
          a: ["I like \"sparkly\" because it makes me think of stars and glitter.\nI like \"under\" because I can use it in fun sentences: The cat is hiding under the bed.",
             "Мені подобається «sparkly», бо воно нагадує мені про зірки й блискітки.\nМені подобається «under», бо з ним можна скласти веселі речення: Кіт ховається під ліжком."] },
        { n: "3", q: ["Questions about other people's choices", "Питання про вибір інших"],
          a: ["Why do you like that word?\nCan you use it in a sentence?\nIs it an adjective or a preposition?",
             "Чому тобі подобається це слово?\nМожеш ужити його в реченні?\nЦе прикметник чи прийменник?"] }
      ],
      items: [
        { n: "1", s: [["Share your favorite adjective and preposition with your group", "Поділися з групою своїм улюбленим прикметником і прийменником"]] },
        { n: "2", s: [["Explain why you chose them", "Поясни, чому ти обрала саме їх"]] },
        { n: "3", s: [["Ask questions to learn more about your classmates' choices", "Постав запитання, щоб більше дізнатися про вибір однокласників"]] }
      ]
    },
    { type: "img", src: "e12-group", alt: "Діти разом виконують завдання за столом", s: [
      ["Children sharing ideas in a group.", "Діти діляться ідеями в групі."]
    ]},

    // ---- Сторінка 14 ----
    { type: "h2", page: 14, s: [["Conjunctions Connect Ideas", "Сполучники з'єднують думки"]] },
    { type: "p", s: [
      ["*Conjunctions* join words, phrases, or sentences", "*Сполучники* з'єднують слова, словосполучення або речення"],
      ["Examples: *and*, *but*, *or*, *because*", "Приклади: і, але, або, тому що"],
      ["They help sentences flow smoothly", "Вони допомагають реченням звучати плавно"]
    ]},
    { type: "img", src: "e12-conjunctions", alt: "Плакат «Парні сполучники» з прикладами речень", s: [
      ["Correlative Conjunctions: pairs like both … and, either … or and neither … nor.", "Парні сполучники: пари на зразок both … and (і … і), either … or (або … або) та neither … nor (ні … ні)."]
    ]},

    // ---- Сторінка 15 ----
    { type: "h2", page: 15, s: [["Putting It All Together", "Збираємо все разом"]] },
    { type: "p", s: [
      ["Sentences use many parts of speech working together", "У реченнях багато частин мови працюють разом"]
    ]},
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1", q: ["Find the parts of speech in a sentence", "Знайди частини мови в реченні"],
          a: ["The happy dog runs quickly under the table and barks.\nhappy – adjective\ndog, table – nouns\nruns, barks – verbs\nquickly – adverb\nunder – preposition\nand – conjunction",
             "Щасливий пес швидко біжить під стіл і гавкає.\nhappy — прикметник\ndog, table — іменники\nruns, barks — дієслова\nquickly — прислівник\nunder — прийменник\nand — сполучник"] },
        { n: "2", q: ["Write your own sentences", "Напиши власні речення"],
          a: ["She quietly reads a funny book in the garden.\nMy brother and I happily swim in the cold river because it is very hot.",
             "Вона тихенько читає смішну книжку в саду.\nМи з братом радісно плаваємо в холодній річці, бо дуже спекотно."] }
      ],
      items: [
        { n: "1", s: [["Practice identifying parts of speech in sentences", "Потренуйся знаходити частини мови в реченнях"]] },
        { n: "2", s: [["Try writing your own sentences using different parts of speech", "Спробуй написати власні речення з різними частинами мови"]] }
      ]
    },

    // ---- Сторінка 16 ----
    { type: "h2", page: 16, s: [["Reflection and Review", "Роздуми й повторення"]] },
    { type: "box", kind: "activities", title: ["Activities", "Завдання"],
      answers: [
        { n: "1", q: ["The easiest part of speech", "Найлегша частина мови"],
          a: ["I find nouns the easiest to use.\nThey are names of things I can see, like book, cat and school.",
             "Мені найлегше вживати іменники.\nЦе назви речей, які я бачу, наприклад книжка, кіт і школа."] },
        { n: "2", q: ["A part of speech to practice more", "Частина мови, яку варто потренувати"],
          a: ["I want to practice prepositions more.\nIt is easy to mix up in, on and at.",
             "Я хочу більше тренувати прийменники.\nЛегко переплутати in, on і at."] },
        { n: "3", q: ["How do parts of speech help you write better?", "Як частини мови допомагають краще писати?"],
          a: ["I can choose strong verbs and interesting adjectives.\nI can use conjunctions to join my ideas.\nMy sentences become clearer and more exciting.",
             "Я можу обирати влучні дієслова й цікаві прикметники.\nЯ можу вживати сполучники, щоб з'єднувати свої думки.\nМої речення стають зрозумілішими й цікавішими."] }
      ],
      items: [
        { n: "1", s: [["What part of speech do you find easiest to use?", "Яку частину мови тобі найлегше вживати?"]] },
        { n: "2", s: [["Which part do you want to practice more?", "Яку частину ти хочеш більше потренувати?"]] },
        { n: "3", s: [["How can knowing parts of speech help you become a better writer?", "Як знання частин мови може допомогти тобі краще писати?"]] }
      ]
    },
    { type: "img", src: "e12-thinking", alt: "Дівчинка з ручкою замислилася над зошитом", s: [
      ["Think about what you have learned.", "Подумай, що ти дізналася."]
    ]},

    // ---- Перевір себе ----
    { type: "box", kind: "review", title: ["Check yourself", "Перевір себе"],
      answers: [
        { n: "1", q: ["What do verbs show?", "Що показують дієслова?"], a: ["b: action or state of being.", "b: дію або стан."] },
        { n: "2", q: ["Why do we use pronouns?", "Навіщо ми вживаємо займенники?"], a: ["a: to replace nouns and avoid repetition.", "a: щоб замінювати іменники й не повторюватися."] },
        { n: "3", q: ["Which word is an adverb?", "Яке слово — прислівник?"], a: ["c: quickly.", "c: quickly (швидко)."] },
        { n: "4", q: ["What do prepositions often tell us about?", "Про що часто розповідають прийменники?"], a: ["b: location, time, or direction.", "b: про місце, час або напрямок."] },
        { n: "5", q: ["Which of these are conjunctions?", "Які з цих слів — сполучники?"], a: ["a: and, but, or, because.", "a: and, but, or, because (і, але, або, тому що)."] }
      ],
      items: [
        { n: "1", s: [["What do verbs show?", "Що показують дієслова?"]] },
        { n: "a", sub: true, s: [["the names of people and places", "назви людей і місць"]] },
        { n: "b", sub: true, ok: true, s: [["action or state of being", "дію або стан"]] },
        { n: "c", sub: true, s: [["size, color and shape", "розмір, колір і форму"]] },
        { n: "2", s: [["Why do we use pronouns?", "Навіщо ми вживаємо займенники?"]] },
        { n: "a", sub: true, ok: true, s: [["to replace nouns and avoid repetition", "щоб замінювати іменники й не повторюватися"]] },
        { n: "b", sub: true, s: [["to join two sentences", "щоб з'єднати два речення"]] },
        { n: "c", sub: true, s: [["to describe verbs", "щоб описувати дієслова"]] },
        { n: "3", s: [["Which word is an adverb?", "Яке слово — прислівник?"]] },
        { n: "a", sub: true, s: [["teacher", "учитель"]] },
        { n: "b", sub: true, s: [["blue", "синій"]] },
        { n: "c", sub: true, ok: true, s: [["quickly", "швидко"]] },
        { n: "4", s: [["Prepositions show relationships between words.", "Прийменники показують зв'язки між словами."], ["They often tell us about:", "Вони часто розповідають про:"]] },
        { n: "a", sub: true, s: [["colors and feelings", "кольори й почуття"]] },
        { n: "b", sub: true, ok: true, s: [["location, time, or direction", "місце, час або напрямок"]] },
        { n: "c", sub: true, s: [["people and ideas", "людей та ідеї"]] },
        { n: "5", s: [["Which of these are conjunctions?", "Які з цих слів — сполучники?"]] },
        { n: "a", sub: true, ok: true, s: [["and, but, or, because", "і, але, або, тому що"]] },
        { n: "b", sub: true, s: [["he, she, it, they", "він, вона, воно, вони"]] },
        { n: "c", sub: true, s: [["in, on, before, under", "у, на, перед, під"]] }
      ]
    }
  ],
  phrases: [
    ["parts of speech", "частини мови"],
    ["building blocks", "цеглинки, будівельні блоки"],
    ["work together", "працювати разом"],
    ["learn about", "дізнаватися про"],
    ["state of being", "стан, буття (яким щось є)"],
    ["what the subject does", "що робить підмет"],
    ["people, places, things, or ideas", "люди, місця, речі або ідеї"],
    ["common or proper", "загальні або власні"],
    ["concrete nouns", "конкретні іменники"],
    ["abstract nouns", "абстрактні іменники"],
    ["five senses", "п'ять чуттів"],
    ["avoid repetition", "уникати повторів"],
    ["sound smoother", "звучати плавніше"],
    ["classroom protocol", "правило (порядок роботи) в класі"],
    ["turn to a partner", "повернися до партнера"],
    ["share examples", "ділитися прикладами"],
    ["listen carefully", "уважно слухати"],
    ["other adverbs", "інші прислівники"],
    ["to what extent", "наскільки, якою мірою"],
    ["adverb of degree", "прислівник міри"],
    ["tell us more about", "розповідають нам більше про"],
    ["size, color, shape", "розмір, колір, форма"],
    ["show relationships between", "показувати зв'язки між"],
    ["location, time, or direction", "місце, час або напрямок"],
    ["group sharing", "обмін думками в групі"],
    ["explain why", "пояснити чому"],
    ["ask questions", "ставити запитання"],
    ["learn more about", "дізнатися більше про"],
    ["connect ideas", "з'єднувати думки"],
    ["flow smoothly", "звучати (текти) плавно"],
    ["correlative conjunctions", "парні сполучники"],
    ["putting it all together", "збираємо все разом"],
    ["try writing", "спробуй написати"],
    ["your own sentences", "власні речення"],
    ["practice more", "тренуватися більше"],
    ["a better writer", "кращий автор (той, хто краще пише)"],
    ["mix up", "плутати"]
  ]
});
