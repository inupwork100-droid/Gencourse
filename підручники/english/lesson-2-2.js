// Урок 2.2 «Prefix and Suffix Stars» — сторінки 22–24 книжки «English».
// Зірочки з плакатів: натиснеш на зірочку — з'являються кнопки зі словами. Білі таблички — точно як у Suffixes_UA.
// Кожне речення — [англійською, українською]. *слово* — жирне ключове слово.
(window.ENG = window.ENG || { lessons: [], dict: {} }).lessons.push({
  id: "2.2",
  unit: "2 Building Words",
  color: "#8a4fe0",
  title: ["2.2 Prefix and Suffix Stars", "2.2 Зірочки префіксів і суфіксів"],
  pages: "22–24",
  blocks: [
    { type: "h2", page: 22, s: [["Prefixes", "Префікси"]] },
    { type: "lead", s: [["Tap a star to see words with this *prefix*.", "Натисни на зірочку — і побачиш слова з цим *префіксом*."], ["Tap a word to hear it.", "Натисни на слово, щоб його почути."]] },
    { type: "stars", title: [["Prefixes", "Префікси"]], note: [["A prefix is added to the beginning of a word to make a new word.", "Префікс додається на початку слова, щоб утворити нове слово."]], items: [
      { t: "dis-", c: "#29a8e0", m: ["opposite of", "протилежне до"], words: [["disagree", "не погоджуватися"], ["dislike", "не любити"], ["disappear", "зникати"], ["dishonest", "нечесний"], ["disconnect", "від'єднати"]] },
      { t: "re-", c: "#e6b31e", m: ["again", "знову"], words: [["replay", "переграти"], ["rewrite", "переписати"], ["rebuild", "перебудувати"], ["return", "повернутися"], ["reread", "перечитати"]] },
      { t: "un-", c: "#1f9a4a", m: ["not", "не"], words: [["unhappy", "нещасливий"], ["unkind", "недобрий"], ["unlock", "відімкнути"], ["unfair", "несправедливий"], ["unusual", "незвичайний"]] },
      { t: "mis-", c: "#7cc242", m: ["wrongly or falsely", "неправильно або хибно"], words: [["misspell", "написати з помилкою"], ["misunderstand", "неправильно зрозуміти"], ["mislead", "ввести в оману"], ["misbehave", "погано поводитися"], ["mistake", "помилка"]] },
      { t: "in- im- il-", c: "#ee6a3a", m: ["not or in", "не або в"], words: [["incorrect", "неправильний"], ["invisible", "невидимий"], ["inside", "всередині"], ["impossible", "неможливий"], ["impatient", "нетерплячий"], ["illegal", "незаконний"], ["illogical", "нелогічний"]] },
      { t: "co-", c: "#e2459a", m: ["together", "разом"], words: [["cooperate", "співпрацювати"], ["co-author", "співавтор"], ["coexist", "співіснувати"], ["co-pilot", "другий пілот"], ["coworker", "колега"]] },
      { t: "de-", c: "#9b4fc8", m: ["reduce or remove", "зменшити або прибрати"], words: [["defrost", "розморозити"], ["decode", "розшифрувати"], ["deflate", "спустити (повітря)"], ["decrease", "зменшувати"], ["delete", "видалити"]] },
      { t: "super-", c: "#3fb8b0", m: ["better quality", "кращої якості"], words: [["superhero", "супергерой"], ["supermarket", "супермаркет"], ["superstar", "суперзірка"], ["supersonic", "надзвуковий"], ["superpower", "суперсила"]] },
      { t: "anti-", c: "#7b4fc0", m: ["against or opposite", "проти або протилежне"], words: [["antisocial", "нетовариський"], ["anticlockwise", "проти годинникової стрілки"], ["antibiotic", "антибіотик"], ["antifreeze", "антифриз"], ["antiseptic", "антисептик"]] },
      { t: "auto-", c: "#2b9ad8", m: ["self or same", "сам або той самий"], words: [["autograph", "автограф"], ["autobiography", "автобіографія"], ["automatic", "автоматичний"], ["autopilot", "автопілот"], ["automobile", "автомобіль"]] },
      { t: "over-", c: "#d8b21e", m: ["too much", "занадто"], words: [["overeat", "переїдати"], ["oversleep", "проспати"], ["overload", "перевантажити"], ["overcook", "переварити, пересмажити"], ["overflow", "переливатися через край"]] },
      { t: "inter-", c: "#1f8f4a", m: ["among or between", "серед або між"], words: [["international", "міжнародний"], ["internet", "інтернет"], ["interact", "взаємодіяти"], ["interview", "інтерв'ю"], ["intercity", "міжміський"]] }
    ] },
    { type: "wordtable", mark: "prefix", title: [["Prefixes", "Префікси"]], note: [["A prefix is added to the beginning of a word. The spelling of the root word does not change.", "Префікс додається на початку слова. Написання основи не змінюється."]],
      head: [["Prefix and meaning", "Префікс і значення"], ["How the word is formed", "Як утворюється слово"]], rows: [
      { t: "dis-", m: ["opposite of", "Протилежне значення"], ex: ["agree → disagree", "погоджуватися → не погоджуватися"] },
      { t: "re-", m: ["again", "Знову, ще раз"], ex: ["play → replay", "грати → переграти"] },
      { t: "un-", m: ["not", "Не, заперечення"], ex: ["happy → unhappy", "щасливий → нещасливий"] },
      { t: "mis-", m: ["wrongly or falsely", "Неправильно або хибно"], ex: ["spell → misspell", "писати по літерах → написати з помилкою"] },
      { t: "in- / im- / il-", m: ["not or in", "Не, або всередину"], ex: ["visible → invisible", "видимий → невидимий"] },
      { t: "co-", m: ["together", "Разом, спільно"], ex: ["operate → cooperate", "діяти → співпрацювати"] },
      { t: "de-", m: ["reduce or remove", "Зменшити або прибрати"], ex: ["frost → defrost", "мороз → розморозити"] },
      { t: "super-", m: ["better quality", "Краща якість, понад"], ex: ["hero → superhero", "герой → супергерой"] },
      { t: "anti-", m: ["against or opposite", "Проти або протилежне"], ex: ["clockwise → anticlockwise", "за годинниковою стрілкою → проти годинникової стрілки"] },
      { t: "auto-", m: ["self or same", "Сам, самостійно"], ex: ["pilot → autopilot", "пілот → автопілот"] },
      { t: "over-", m: ["too much", "Занадто, понад міру"], ex: ["sleep → oversleep", "спати → проспати"] },
      { t: "inter-", m: ["among or between", "Серед або між"], ex: ["national → international", "національний → міжнародний"] }
    ] },
    { type: "img", src: "e22-prefix-poster", alt: "Плакат «Префікси»", s: [["The Prefixes poster", "Плакат «Префікси»"]] },

    { type: "h2", page: 23, s: [["Suffixes", "Суфікси"]] },
    { type: "lead", s: [["Tap a star to see words with this *suffix*.", "Натисни на зірочку — і побачиш слова з цим *суфіксом*."], ["Tap a word to hear it.", "Натисни на слово, щоб його почути."]] },
    { type: "stars", title: [["Suffixes", "Суфікси"]], note: [["A suffix is added to the end of a word to make a new word.", "Суфікс додається в кінці слова, щоб утворити нове слово."]], items: [
      { t: "-ful", c: "#29a8e0", m: ["full of", "сповнений чогось"], words: [["careful", "обережний"], ["helpful", "корисний"], ["beautiful", "гарний"], ["hopeful", "сповнений надії"], ["colourful", "барвистий"]] },
      { t: "-less", c: "#e6b31e", m: ["without", "без"], words: [["careless", "недбалий"], ["helpless", "безпорадний"], ["fearless", "безстрашний"], ["homeless", "бездомний"], ["endless", "нескінченний"]] },
      { t: "-ment", c: "#1f8f4a", m: ["action", "дія"], words: [["enjoyment", "задоволення"], ["movement", "рух"], ["payment", "оплата"], ["agreement", "згода"], ["achievement", "досягнення"]] },
      { t: "-ness", c: "#7cc242", m: ["a state or quality", "стан або якість"], words: [["kindness", "доброта"], ["happiness", "щастя"], ["darkness", "темрява"], ["sadness", "сум"], ["fitness", "фізична форма"]] },
      { t: "-ly", c: "#ee6a3a", m: ["in a certain manner", "певним чином"], words: [["slowly", "повільно"], ["quickly", "швидко"], ["quietly", "тихо"], ["happily", "радісно"], ["carefully", "обережно"]] },
      { t: "-ation", c: "#e2459a", m: ["an action or process", "дія або процес"], words: [["information", "інформація"], ["invitation", "запрошення"], ["education", "освіта"], ["imagination", "уява"], ["celebration", "святкування"]] },
      { t: "-ous", c: "#9b4fc8", m: ["full of", "сповнений чогось"], words: [["dangerous", "небезпечний"], ["famous", "відомий"], ["nervous", "знервований"], ["adventurous", "сміливий, допитливий до пригод"], ["poisonous", "отруйний"]] },
      { t: "-ate", c: "#3fb8b0", m: ["to create a verb", "утворює дієслово"], words: [["activate", "активувати"], ["create", "створювати"], ["decorate", "прикрашати"], ["celebrate", "святкувати"], ["separate", "розділяти"]] },
      { t: "-ise", c: "#5a4fc8", m: ["to create a verb", "утворює дієслово"], words: [["modernise", "модернізувати"], ["apologise", "вибачатися"], ["realise", "усвідомлювати"], ["organise", "організовувати"], ["memorise", "запам'ятовувати"]] },
      { t: "-ify", c: "#2b9ad8", m: ["to create a verb", "утворює дієслово"], words: [["simplify", "спростити"], ["classify", "класифікувати"], ["purify", "очистити"], ["identify", "впізнати, визначити"], ["terrify", "налякати"]] }
    ] },
    { type: "wordtable", mark: "suffix", title: [["Suffixes", "Суфікси"]], note: [["A suffix is added to the end of a word. Sometimes the spelling of the root changes.", "Суфікс додається в кінці слова. Іноді написання основи змінюється."]],
      head: [["Suffix and meaning", "Суфікс і значення"], ["How the word is formed", "Як утворюється слово"]], rows: [
      { t: "-ful", m: ["full of", "Сповнений чогось, має певну рису"], ex: ["care → careful", "турбота → обережний, уважний"] },
      { t: "-less", m: ["without", "Без чогось"], ex: ["care → careless", "турбота → необережний, недбалий"] },
      { t: "-ment", m: ["action", "Утворює назву дії або її результату"], ex: ["enjoy → enjoyment", "насолоджуватися → задоволення"] },
      { t: "-ness", m: ["a state or quality", "Утворює назву стану або якості"], ex: ["kind → kindness", "добрий → доброта"] },
      { t: "-ly", m: ["in a certain manner", "Часто показує, як саме відбувається дія"], ex: ["slow → slowly", "повільний → повільно"] },
      { t: "-ation", m: ["an action or process", "Утворює назву дії або процесу"], ex: ["inform → information", "інформувати → інформація"] },
      { t: "-ous", m: ["full of", "Має певну рису, сповнений чогось"], ex: ["danger → dangerous", "небезпека → небезпечний"] },
      { t: "-ate", m: ["to create a verb", "Може утворювати дієслово"], ex: ["active → activate", "активний → активувати"] },
      { t: "-ise", m: ["to create a verb", "Може утворювати дієслово: зробити певним"], ex: ["modern → modernise", "сучасний → модернізувати"] },
      { t: "-ify", m: ["to create a verb", "Може утворювати дієслово: зробити певним"], ex: ["simple → simplify", "простий → спростити"] }
    ] },
    { type: "img", src: "e22-suffix-poster", alt: "Плакат «Суфікси»", s: [["The Suffixes poster", "Плакат «Суфікси»"]] },

    { type: "h2", page: 24, s: [["Make new words", "Утвори нові слова"]] },
    { type: "img", src: "e22-notebook", alt: "Плакат із суфіксами в зошиті", s: [["The suffix stars in my exercise book", "Зірочки суфіксів у моєму зошиті"]] },
    { type: "box", kind: "activities", title: ["Activities", "Завдання"], items: [
      { n: "1", s: [["Add a prefix to make the opposite: happy, agree, visible, lock.", "Додай префікс, щоб утворити протилежне слово: happy, agree, visible, lock."]] },
      { n: "2", s: [["Add a suffix to make a new word: hope, fear, move, dark.", "Додай суфікс, щоб утворити нове слово: hope, fear, move, dark."]] },
      { n: "3", s: [["Use both a prefix and a suffix: kind, help, care.", "Додай і префікс, і суфікс: kind, help, care."]] }
    ], answers: [
      { n: "1", q: ["Add a prefix to make the opposite.", "Додай префікс, щоб утворити протилежне слово."], a: ["*unhappy*, *disagree*, *invisible*, *unlock*.", "*unhappy* — нещасливий, *disagree* — не погоджуватися, *invisible* — невидимий, *unlock* — відімкнути."] },
      { n: "2", q: ["Add a suffix to make a new word.", "Додай суфікс, щоб утворити нове слово."], a: ["*hopeful*, *fearless*, *movement*, *darkness*.", "*hopeful* — сповнений надії, *fearless* — безстрашний, *movement* — рух, *darkness* — темрява."] },
      { n: "3", q: ["Use both a prefix and a suffix.", "Додай і префікс, і суфікс."], a: ["*unkindness*, *unhelpful*, *uncaring*.", "*unkindness* — недоброта, *unhelpful* — некорисний, *uncaring* — байдужий."] }
    ] },
    { type: "box", kind: "review", title: ["Check yourself", "Перевір себе"], items: [
      { n: "1", s: [["Which prefix means 'again'?", "Який префікс означає «знову»?"]] },
      { n: "a", sub: true, s: [["un-", "un-"]] }, { n: "b", sub: true, ok: true, s: [["re-", "re-"]] }, { n: "c", sub: true, s: [["dis-", "dis-"]] },
      { n: "2", s: [["Which suffix means 'without'?", "Який суфікс означає «без»?"]] },
      { n: "a", sub: true, ok: true, s: [["-less", "-less"]] }, { n: "b", sub: true, s: [["-ful", "-ful"]] }, { n: "c", sub: true, s: [["-ly", "-ly"]] },
      { n: "3", s: [["Which word means 'too much sleep'?", "Яке слово означає «спати занадто довго»?"]] },
      { n: "a", sub: true, s: [["misspell", "misspell"]] }, { n: "b", sub: true, s: [["superstar", "superstar"]] }, { n: "c", sub: true, ok: true, s: [["oversleep", "oversleep"]] },
      { n: "4", s: [["Which suffix makes a verb?", "Який суфікс утворює дієслово?"]] },
      { n: "a", sub: true, s: [["-ness", "-ness"]] }, { n: "b", sub: true, ok: true, s: [["-ify", "-ify"]] }, { n: "c", sub: true, s: [["-ous", "-ous"]] },
      { n: "5", s: [["What does 'international' mean?", "Що означає «international»?"]] },
      { n: "a", sub: true, ok: true, s: [["between nations", "між народами (країнами)"]] }, { n: "b", sub: true, s: [["against nations", "проти народів"]] }, { n: "c", sub: true, s: [["without nations", "без народів"]] }
    ], answers: [
      { n: "1", q: ["Which prefix means 'again'?", "Який префікс означає «знову»?"], a: ["b: re-.", "b: re-."] },
      { n: "2", q: ["Which suffix means 'without'?", "Який суфікс означає «без»?"], a: ["a: -less.", "a: -less."] },
      { n: "3", q: ["Which word means 'too much sleep'?", "Яке слово означає «спати занадто довго»?"], a: ["c: oversleep.", "c: oversleep — проспати."] },
      { n: "4", q: ["Which suffix makes a verb?", "Який суфікс утворює дієслово?"], a: ["b: -ify.", "b: -ify."] },
      { n: "5", q: ["What does 'international' mean?", "Що означає «international»?"], a: ["a: between nations.", "a: між народами (країнами)."] }
    ] }
  ],
  phrases: [
    ["make a new word", "утворити нове слово"], ["the beginning of a word", "початок слова"], ["the end of a word", "кінець слова"],
    ["root word", "корінь (основа) слова"], ["opposite of", "протилежне до"], ["full of", "сповнений чогось"],
    ["in a certain manner", "певним чином"], ["a state or quality", "стан або якість"], ["an action or process", "дія або процес"],
    ["to create a verb", "утворити дієслово"], ["wrongly or falsely", "неправильно або хибно"], ["too much", "занадто"],
    ["among or between", "серед або між"], ["self or same", "сам або той самий"], ["against or opposite", "проти або протилежне"],
    ["better quality", "краща якість"], ["reduce or remove", "зменшити або прибрати"], ["tap a star", "натисни на зірочку"],
    ["the spelling changes", "написання змінюється"], ["add a suffix", "додати суфікс"], ["add a prefix", "додати префікс"]
  ]
});
