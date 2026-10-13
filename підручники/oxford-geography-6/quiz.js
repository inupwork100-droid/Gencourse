// «Check yourself» — завдання з вибором відповіді a/b/c наприкінці кожного уроку Geography 6.
// Відповідь підсвічується кольором (як у History), правильну можна знайти в конвертику.
// Запис: [запитання en, ua, [[a en, ua], [b en, ua], [c en, ua]], номер правильної (0–2)].
(function () {
  const G = window.GEO = window.GEO || { lessons: [], dict: {} };
  const Q = {
    "1.1": [
      ["Where is most of the world's water?", "Де зберігається найбільше води на Землі?", [["in rivers and lakes", "у річках і озерах"], ["in the oceans and seas", "в океанах і морях"], ["in the air", "у повітрі"]], 1],
      ["What drives the water cycle?", "Що рухає кругообіг води?", [["the Sun's energy", "енергія Сонця"], ["the Moon", "Місяць"], ["the rivers", "річки"]], 0],
      ["When water evaporates, it turns into…", "Коли вода випаровується, вона перетворюється на…", [["ice", "лід"], ["snow", "сніг"], ["water vapour", "водяну пару"]], 2],
      ["Water vapour cools and turns into tiny droplets. This is called…", "Водяна пара охолоджується й перетворюється на крихітні краплі. Це називається…", [["condensation", "конденсація"], ["evaporation", "випаровування"], ["precipitation", "опади"]], 0],
      ["How much rain or snow falls on the land?", "Скільки дощу чи снігу випадає на суходіл?", [["about half", "приблизно половина"], ["only 10 per cent", "лише 10 відсотків"], ["almost all of it", "майже весь"]], 1]
    ],
    "1.2": [
      ["A river's source is…", "Витік річки — це…", [["its starting point", "місце, де вона починається"], ["its end", "її кінець"], ["a big waterfall", "великий водоспад"]], 0],
      ["Water that comes out of the ground is called a…", "Вода, яка витікає з-під землі, називається…", [["glacier", "льодовик"], ["spring", "джерело"], ["valley", "долина"]], 1],
      ["Impermeable rock…", "Непроникна гірська порода…", [["lets water pass through it", "пропускає воду крізь себе"], ["does not let water pass through it", "не пропускає воду"], ["melts in the sun", "тане на сонці"]], 1],
      ["Erosion makes a river slowly form a…", "Через ерозію річка поступово утворює…", [["V-shaped valley", "V-подібну долину"], ["lake", "озеро"], ["glacier", "льодовик"]], 0],
      ["A waterfall forms where hard rock is followed by…", "Водоспад утворюється там, де за твердою породою йде…", [["more hard rock", "ще тверда порода"], ["ice", "лід"], ["soft rock", "м'яка порода"]], 2]
    ],
    "1.3": [
      ["Close to its source, a river is usually…", "Біля витоку річка зазвичай…", [["wide and slow", "широка й повільна"], ["narrow and fast", "вузька й швидка"], ["salty", "солона"]], 1],
      ["Wide S-shaped bends in a river are called…", "Широкі S-подібні вигини річки називаються…", [["meanders", "меандри"], ["deltas", "дельти"], ["estuaries", "естуарії"]], 0],
      ["An old meander cut off from the river forms an…", "Старий меандр, відрізаний від річки, утворює…", [["estuary", "естуарій"], ["oxbow lake", "старицю (озеро-старицю)"], ["island", "острів"]], 1],
      ["A smaller river that joins a larger one is a…", "Менша річка, яка впадає в більшу, — це…", [["tributary", "притока"], ["source", "витік"], ["delta", "дельта"]], 0],
      ["A triangle of mud and sand at the river's mouth is a…", "Трикутник із мулу й піску в гирлі річки — це…", [["floodplain", "заплава"], ["meander", "меандр"], ["delta", "дельта"]], 2]
    ],
    "1.4": [
      ["Why were many early towns built near rivers?", "Чому багато давніх міст будували біля річок?", [["for water, food and protection", "заради води, їжі й захисту"], ["because rivers were cold", "бо річки були холодні"], ["because there were no roads anywhere else", "бо ніде більше не було доріг"]], 0],
      ["Many cities grew where people could cross a river on foot. Such a place is called a…", "Багато міст виросло там, де річку можна було перейти пішки. Таке місце називається…", [["port", "порт"], ["ford", "брід"], ["dam", "дамба"]], 1],
      ["Dams are built in river valleys to…", "Дамби будують у річкових долинах, щоб…", [["catch and store water", "збирати й зберігати воду"], ["make the river longer", "зробити річку довшою"], ["stop ships", "зупиняти кораблі"]], 0],
      ["Floodplains are good for farming because…", "Заплави добре підходять для землеробства, бо…", [["they are high and rocky", "вони високі й кам'янисті"], ["they never get wet", "вони ніколи не намокають"], ["their soil is rich and deep", "там багатий і глибокий ґрунт"]], 2],
      ["How many US cities rely on the Mississippi River for water?", "Скільки міст у США беруть воду з річки Міссісіпі?", [["more than 50", "понад 50"], ["about 5", "близько 5"], ["only one", "лише одне"]], 0]
    ],
    "1.5": [
      ["How long is the River Nile?", "Яка довжина річки Ніл?", [["2520 kilometres", "2520 кілометрів"], ["6648 kilometres", "6648 кілометрів"], ["300 kilometres", "300 кілометрів"]], 1],
      ["The main source of the Nile is the…", "Головний витік Нілу — це…", [["White Nile", "Білий Ніл"], ["Red Sea", "Червоне море"], ["Lake Nasser", "озеро Насер"]], 0],
      ["Where does the Nile end?", "Куди впадає Ніл?", [["in the Atlantic Ocean", "в Атлантичний океан"], ["in the Mediterranean Sea", "у Середземне море"], ["in Lake Victoria", "в озеро Вікторія"]], 1],
      ["The Aswan High Dam holds back water in a reservoir called…", "Асуанська гребля стримує воду у водосховищі, яке називається…", [["Lake Victoria", "озеро Вікторія"], ["the Sudd", "Судд"], ["Lake Nasser", "озеро Насер"]], 2],
      ["Without the floods, farmers in the Nile valley now have to use…", "Без повеней фермери в долині Нілу тепер мусять використовувати…", [["chemical fertilisers", "хімічні добрива"], ["more boats", "більше човнів"], ["salt water", "солону воду"]], 0]
    ],
    "1.6": [
      ["The Amazon carries more water than any river and has the biggest…", "Амазонка несе більше води, ніж будь-яка річка, і має найбільший…", [["delta", "дельту"], ["river basin", "басейн річки"], ["waterfall", "водоспад"]], 1],
      ["Which ocean does the Amazon flow into?", "У який океан впадає Амазонка?", [["the Pacific Ocean", "Тихий океан"], ["the Indian Ocean", "Індійський океан"], ["the Atlantic Ocean", "Атлантичний океан"]], 2],
      ["Why doesn't the Amazon form a proper delta?", "Чому Амазонка не утворює справжньої дельти?", [["the current sweeps the mud far out to sea", "течія виносить мул далеко в океан"], ["the river has no mud", "у річці немає мулу"], ["the river is frozen", "річка замерзла"]], 0],
      ["Large ships can sail up the Amazon all the way to…", "Великі кораблі можуть піднятися Амазонкою аж до…", [["Lima", "Ліми"], ["Manaus", "Манауса"], ["Cairo", "Каїра"]], 1],
      ["Why are there no bridges across the Amazon?", "Чому через Амазонку немає мостів?", [["the water is too hot", "вода надто гаряча"], ["boats are not allowed", "човни заборонені"], ["most of it runs through rainforest, so they are not needed", "вона здебільшого тече крізь ліси, тож мости не потрібні"]], 2]
    ],
    "1.7": [
      ["Where does the Murray River begin?", "Де починається річка Муррей?", [["in the Australian Alps", "в Австралійських Альпах"], ["in the desert", "у пустелі"], ["at Encounter Bay", "у затоці Енкаунтер"]], 0],
      ["Which ocean does the Murray River enter?", "В який океан впадає Муррей?", [["the Atlantic Ocean", "Атлантичний океан"], ["the Indian Ocean", "Індійський океан"], ["the Arctic Ocean", "Північний Льодовитий океан"]], 1],
      ["The Snowy River scheme sends water through tunnels…", "Схема річки Сноуі спрямовує воду тунелями…", [["under the mountains into the Murray", "під горами в Муррей"], ["into the sea", "у море"], ["to Tasmania", "на Тасманію"]], 0],
      ["Because so much water is taken for irrigation, the water left in the Murray becomes…", "Через те що багато води забирають на зрошення, вода, що лишається в Мурреї, стає…", [["colder", "холоднішою"], ["sweeter", "солодшою"], ["saltier", "солонішою"]], 2],
      ["The world's largest canoe race is held on the…", "Найбільші у світі змагання з каное проходять на…", [["River Nile", "річці Ніл"], ["Murray River", "річці Муррей"], ["River Thames", "річці Темза"]], 1]
    ],
    "1.8": [
      ["Which of these pollutes rivers?", "Що з цього забруднює річки?", [["untreated sewage", "неочищені стічні води"], ["clean rainwater", "чиста дощова вода"], ["fish", "риба"]], 0],
      ["Fertiliser in a river makes tiny plants called algae…", "Добрива в річці змушують крихітні рослини — водорості —…", [["disappear", "зникати"], ["grow very fast", "дуже швидко рости"], ["turn blue", "ставати синіми"]], 1],
      ["When algae die and rot, they use up the…", "Коли водорості гинуть і гниють, вони витрачають…", [["sand", "пісок"], ["salt", "сіль"], ["oxygen in the water", "кисень у воді"]], 2],
      ["Acid rain forms when gases from burning fuels…", "Кислотний дощ утворюється, коли гази від спалювання палива…", [["dissolve in droplets of moisture in the air", "розчиняються в краплинках вологи в повітрі"], ["freeze into ice", "замерзають на лід"], ["sink into the ground", "просочуються в землю"]], 0],
      ["In the late 1950s, the River Thames was…", "Наприкінці 1950-х років річка Темза була…", [["the cleanest river in Europe", "найчистішою річкою Європи"], ["so polluted that it was black and smelled bad", "настільки забрудненою, що була чорною й погано пахла"], ["frozen all year", "замерзлою цілий рік"]], 1]
    ],
    "2.1": [
      ["Land that rises more than 300 metres above the land around it is a…", "Суходіл, що здіймається понад 300 метрів над навколишньою місцевістю, — це…", [["hill", "пагорб"], ["mountain", "гора"], ["valley", "долина"]], 1],
      ["Which maps show only how high the land is?", "Які карти показують лише висоту місцевості?", [["relief maps", "фізичні (рельєфні) карти"], ["road maps", "дорожні карти"], ["topographic maps", "топографічні карти"]], 0],
      ["Contour lines join places that are…", "Горизонталі з'єднують місця, які…", [["the same height above sea level", "на однаковій висоті над рівнем моря"], ["in the same country", "в одній країні"], ["near rivers", "біля річок"]], 0],
      ["On a steep slope, contour lines are…", "На крутому схилі горизонталі…", [["far apart", "далеко одна від одної"], ["not shown", "не показані"], ["close together", "близько одна до одної"]], 2],
      ["How high is Mount Everest?", "Яка висота гори Еверест?", [["300 metres", "300 метрів"], ["8863 metres", "8863 метри"], ["2000 metres", "2000 метрів"]], 1]
    ]
  };
  const L = "abc";
  for (const id in Q) {
    const lesson = G.lessons.find(l => l.id === id); if (!lesson) continue;
    const items = [], answers = [];
    Q[id].forEach(([qe, qu, opts, ok], i) => {
      items.push({ n: String(i + 1), s: [[qe, qu]] });
      opts.forEach((o, k) => items.push({ n: L[k], sub: true, ...(k === ok ? { ok: true } : {}), s: [o] }));
      answers.push({ n: String(i + 1), q: [qe, qu], a: [`${L[ok]}: ${opts[ok][0]}.`, `${L[ok]}: ${opts[ok][1]}.`] });
    });
    lesson.blocks.push({ type: "box", kind: "review", title: ["Check yourself", "Перевір себе"], answers, items });
  }
})();

