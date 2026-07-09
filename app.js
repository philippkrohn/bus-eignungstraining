const $ = (id) => document.getElementById(id);

const sections = {
  deutsch: "Deutschverständnis",
  konzentration: "Konzentration",
  aufmerksamkeit: "Aufmerksamkeit",
  orientierung: "Orientierung",
  logik: "Logik / Arbeitsgedächtnis",
  belastbarkeit: "Belastbarkeit",
  reaktion: "Reaktion"
};

const tasks = [
  {
    type: "choice",
    section: "deutsch",
    title: "Anweisung genau lesen",
    instruction: "Lies die Anweisung und wähle die richtige Aussage.",
    ar: "اقرأ التعليمات واختر العبارة الصحيحة. إذا فتحت المساعدة العربية، لا تحصل هذه المهمة على نقاط.",
    question: "Sie sehen ein rotes Licht. Sie dürfen erst drücken, wenn das Licht grün wird. Was ist richtig?",
    questionAr: "ترى ضوءاً أحمر. لا يجوز الضغط إلا عندما يصبح الضوء أخضر. ما الصحيح؟",
    options: [
      { de: "Ich drücke sofort bei Rot.", ar: "أضغط فوراً عند اللون الأحمر." },
      { de: "Ich warte auf Grün und drücke dann.", ar: "أنتظر اللون الأخضر ثم أضغط." },
      { de: "Ich drücke, wenn ich unsicher bin.", ar: "أضغط عندما أكون غير متأكد." },
      { de: "Ich drücke gar nicht.", ar: "لا أضغط أبداً." }
    ],
    correct: 1,
    weight: 1
  },
  {
    type: "choice",
    section: "deutsch",
    title: "Ruhig bleiben",
    instruction: "Wähle die Antwort, die zu einem sicheren Busfahrer passt.",
    ar: "اختر الإجابة التي تناسب سائق حافلة آمن.",
    question: "Ein Fahrgast fragt unfreundlich nach dem Weg. Was ist die beste Reaktion?",
    questionAr: "راكب يسأل بطريقة غير لطيفة عن الطريق. ما أفضل رد؟",
    options: [
      { de: "Ich antworte ruhig und kurz.", ar: "أجيب بهدوء وباختصار." },
      { de: "Ich werde laut, damit er aufhört.", ar: "أرفع صوتي حتى يتوقف." },
      { de: "Ich ignoriere ihn immer.", ar: "أتجاهله دائماً." },
      { de: "Ich verlasse den Bus sofort.", ar: "أغادر الحافلة فوراً." }
    ],
    correct: 0,
    weight: 1
  },
  {
    type: "choice",
    section: "deutsch",
    title: "Termin und Vorbereitung",
    instruction: "Wähle die sicherste Vorbereitung.",
    ar: "اختر أفضل طريقة للاستعداد الآمن.",
    question: "Am Prüfungstag sollst du ausgeruht und rechtzeitig erscheinen. Was machst du?",
    questionAr: "في يوم الفحص يجب أن تكون مرتاحاً وأن تصل في الوقت المناسب. ماذا تفعل؟",
    options: [
      { de: "Ich komme knapp und ohne Frühstück.", ar: "أصل في آخر لحظة وبدون فطور." },
      { de: "Ich schlafe wenig, damit ich früher wach bin.", ar: "أنام قليلاً حتى أستيقظ مبكراً." },
      { de: "Ich plane die Fahrt vorher und komme rechtzeitig.", ar: "أخطط للطريق مسبقاً وأصل في الوقت المناسب." },
      { de: "Ich übe nur Arabisch, Deutsch ist nicht wichtig.", ar: "أتدرب بالعربية فقط، الألمانية ليست مهمة." }
    ],
    correct: 2,
    weight: 1
  },
  {
    type: "symbols",
    section: "konzentration",
    title: "d2-ähnliche Konzentration",
    instruction: "Klicke nur auf jedes d mit genau zwei Strichen. Nicht auf p und nicht auf d mit einem, drei oder vier Strichen.",
    ar: "اضغط فقط على حرف d الذي له خطّان بالضبط. لا تضغط على p ولا على d الذي له خط واحد أو ثلاثة أو أربعة خطوط.",
    target: "d''",
    symbols: ["d'", "p''", "d''", "d'''", "p'", "d''", "p'''", "d''''", "d''", "p''", "d'", "d''", "p''''", "d'''", "p'", "d''", "d'", "p''", "d''", "d''''", "p'", "d''", "p'''", "d'", "d''", "p''", "d'''"],
    correctIndexes: [2,5,8,11,15,18,21,24],
    weight: 2
  },
  {
    type: "symbols",
    section: "konzentration",
    title: "Konzentration unter Ablenkung",
    instruction: "Klicke nur auf jedes P mit Punkt rechts: P•. Achte genau auf die Richtung.",
    ar: "اضغط فقط على P مع النقطة في اليمين: P•. انتبه جيداً للاتجاه.",
    target: "P•",
    symbols: ["P•", "•P", "B•", "P•", "P:", "•P", "P•", "B•", "P•", ":P", "P•", "•B", "P•", "B:", "•P", "P•", "P•", "B•"],
    correctIndexes: [0,3,6,8,10,12,15,16],
    weight: 2
  },
  {
    type: "matrix",
    section: "aufmerksamkeit",
    title: "Visuelle Suche",
    instruction: "Finde alle Felder mit dem Zeichen ⚑. Es sind mehrere richtig.",
    ar: "ابحث عن كل الخانات التي تحتوي على الرمز ⚑. هناك أكثر من إجابة صحيحة.",
    items: ["◇", "△", "⚐", "○", "⚑", "□", "△", "◇", "⚑", "○", "□", "⚐", "⚑", "◇", "△", "□", "○", "⚑", "⚐", "□", "◇", "△", "⚑", "○", "□", "⚐", "◇", "⚑", "△", "○", "◇", "□", "⚐", "△", "⚑", "○"],
    correctIndexes: [4,8,12,17,22,27,34],
    weight: 2
  },
  {
    type: "matrix",
    section: "orientierung",
    title: "Orientierung im Raster",
    instruction: "Start ist A1. Gehe: zwei Felder nach rechts, ein Feld nach unten, ein Feld nach links. Wo bist du?",
    ar: "البداية A1. تحرك: خانتان إلى اليمين، خانة إلى الأسفل، خانة إلى اليسار. أين تصل؟",
    items: ["A1", "B1", "C1", "D1", "A2", "B2", "C2", "D2", "A3", "B3", "C3", "D3", "A4", "B4", "C4", "D4"],
    correctIndexes: [5],
    single: true,
    weight: 1
  },
  {
    type: "choice",
    section: "orientierung",
    title: "Linien verfolgen",
    instruction: "Folge gedanklich der Linie und wähle das richtige Ende.",
    ar: "اتبع الخط ذهنياً واختر النهاية الصحيحة.",
    question: "Linie 3 geht von Start S über Kreis, Quadrat, Dreieck zum Ziel. Welches Ziel gehört zu Linie 3?",
    questionAr: "الخط 3 يبدأ من S ويمر بالدائرة ثم المربع ثم المثلث. أي هدف ينتمي إلى الخط 3؟",
    options: [
      { de: "Ziel A", ar: "الهدف A" },
      { de: "Ziel B", ar: "الهدف B" },
      { de: "Ziel C", ar: "الهدف C" },
      { de: "Ziel D", ar: "الهدف D" }
    ],
    correct: 2,
    weight: 1
  },
  {
    type: "choice",
    section: "logik",
    title: "Zahlenreihe",
    instruction: "Setze die Reihe fort.",
    ar: "أكمل السلسلة.",
    question: "2 – 4 – 8 – 16 – ?",
    questionAr: "2 – 4 – 8 – 16 – ؟",
    options: [
      { de: "20", ar: "20" },
      { de: "24", ar: "24" },
      { de: "30", ar: "30" },
      { de: "32", ar: "32" }
    ],
    correct: 3,
    weight: 1
  },
  {
    type: "choice",
    section: "logik",
    title: "Arbeitsgedächtnis",
    instruction: "Merke dir die Reihenfolge und wähle die richtige Wiederholung.",
    ar: "تذكر الترتيب واختر التكرار الصحيح.",
    question: "Merke: Rot – Blau – Gelb – Blau. Welche Reihenfolge ist richtig?",
    questionAr: "تذكر: أحمر – أزرق – أصفر – أزرق. أي ترتيب صحيح؟",
    options: [
      { de: "Rot – Blau – Gelb – Blau", ar: "أحمر – أزرق – أصفر – أزرق" },
      { de: "Rot – Gelb – Blau – Blau", ar: "أحمر – أصفر – أزرق – أزرق" },
      { de: "Blau – Rot – Gelb – Blau", ar: "أزرق – أحمر – أصفر – أزرق" },
      { de: "Rot – Blau – Blau – Gelb", ar: "أحمر – أزرق – أزرق – أصفر" }
    ],
    correct: 0,
    weight: 1
  },
  {
    type: "choice",
    section: "belastbarkeit",
    title: "Mehrere Regeln gleichzeitig",
    instruction: "Regel: Bei Kreis wähle JA. Bei Quadrat wähle NEIN. Bei Dreieck wähle nur JA, wenn es groß geschrieben ist: DREIECK.",
    ar: "القاعدة: عند دائرة اختر نعم. عند مربع اختر لا. عند مثلث اختر نعم فقط إذا كانت الكلمة مكتوبة بحروف كبيرة: DREIECK.",
    question: "Was wählst du bei: DREIECK?",
    questionAr: "ماذا تختار عند: DREIECK؟",
    options: [
      { de: "JA", ar: "نعم" },
      { de: "NEIN", ar: "لا" },
      { de: "Ich warte", ar: "أنتظر" },
      { de: "Ich überspringe", ar: "أتجاوز" }
    ],
    correct: 0,
    weight: 1
  },
  {
    type: "choice",
    section: "belastbarkeit",
    title: "Fehlerkontrolle",
    instruction: "Bei Belastung ist wichtig: lieber ruhig und genau als hektisch falsch.",
    ar: "عند الضغط من المهم: الهدوء والدقة أفضل من التسرع والخطأ.",
    question: "Du merkst, dass du einen Fehler gemacht hast. Was ist sinnvoll?",
    questionAr: "لاحظت أنك ارتكبت خطأ. ما التصرف المناسب؟",
    options: [
      { de: "Ich werde hektisch und klicke schneller.", ar: "أصبح متوتراً وأنقر أسرع." },
      { de: "Ich bleibe ruhig und mache mit der nächsten Aufgabe weiter.", ar: "أبقى هادئاً وأتابع المهمة التالية." },
      { de: "Ich breche alles ab.", ar: "أوقف كل شيء." },
      { de: "Ich öffne sofort Arabisch, damit es Punkte gibt.", ar: "أفتح العربية فوراً حتى أحصل على نقاط." }
    ],
    correct: 1,
    weight: 1
  }
];

const reactionTasks = [
  {
    section: "reaktion",
    title: "Einfache Reaktion",
    instruction: "Drücke so schnell wie möglich auf das grüne Feld. Drücke nicht bei Rot oder Grau.",
    ar: "اضغط بأسرع ما يمكن على الحقل الأخضر. لا تضغط عند الأحمر أو الرمادي.",
    rounds: 8,
    type: "simple"
  },
  {
    section: "reaktion",
    title: "Aufmerksamkeit und Reaktion",
    instruction: "Drücke nur bei GRÜN + BUS. Drücke nicht bei anderen Kombinationen.",
    ar: "اضغط فقط عند أخضر + حافلة. لا تضغط عند التركيبات الأخرى.",
    rounds: 10,
    type: "goNoGo"
  }
];

let state = {
  started: false,
  current: 0,
  selected: null,
  selectedSet: new Set(),
  arabicUsed: false,
  totalPoints: 0,
  earnedPoints: 0,
  arabicPenaltyCount: 0,
  details: {},
  reactions: [],
  reactionIndex: 0,
  activeReaction: null,
  reactionRound: 0,
  waitingTimer: null,
  goTime: null,
  currentReactionIsTarget: false,
  reactionArabicUsed: false,
  answeredThisSignal: false
};

function initDetails() {
  state.details = {};
  Object.values(sections).forEach(name => {
    state.details[name] = { earned: 0, total: 0, arabic: 0 };
  });
}

function resetState() {
  state = {
    started: true,
    current: 0,
    selected: null,
    selectedSet: new Set(),
    arabicUsed: false,
    totalPoints: 0,
    earnedPoints: 0,
    arabicPenaltyCount: 0,
    details: {},
    reactions: [],
    reactionIndex: 0,
    activeReaction: null,
    reactionRound: 0,
    waitingTimer: null,
    goTime: null,
    currentReactionIsTarget: false,
    reactionArabicUsed: false,
    answeredThisSignal: false
  };
  initDetails();
}

function show(id) {
  ["introCard", "questionCard", "reactionCard", "resultsCard", "historyCard"].forEach(x => $(x).classList.add("hidden"));
  $(id).classList.remove("hidden");
}

function renderTask() {
  if (state.current >= tasks.length) {
    startReactionSection();
    return;
  }
  show("questionCard");
  state.selected = null;
  state.selectedSet = new Set();
  state.arabicUsed = false;
  const task = tasks[state.current];
  $("sectionLabel").textContent = sections[task.section] || task.section;
  $("taskTitle").textContent = task.title;
  $("taskInstruction").textContent = task.instruction;
  $("stepNow").textContent = state.current + 1;
  $("stepTotal").textContent = tasks.length + reactionTasks.length;
  $("barFill").style.width = `${Math.round((state.current / (tasks.length + reactionTasks.length)) * 100)}%`;
  $("arabicBox").classList.add("hidden");
  $("arabicBox").innerHTML = "";
  $("arabicBtn").textContent = "Arabisch anzeigen – diese Aufgabe gibt dann 0 Punkte";
  $("nextBtn").disabled = true;
  $("taskBody").innerHTML = "";

  if (task.type === "choice") renderChoice(task);
  if (task.type === "symbols") renderSymbols(task);
  if (task.type === "matrix") renderMatrix(task);
}

function renderChoice(task) {
  const body = $("taskBody");
  const q = document.createElement("div");
  q.className = "notice";
  q.innerHTML = `<strong>Frage:</strong> ${escapeHtml(task.question)}`;
  body.appendChild(q);
  const options = document.createElement("div");
  options.className = "options";
  task.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.textContent = opt.de;
    btn.addEventListener("click", () => {
      state.selected = idx;
      [...options.children].forEach(x => x.classList.remove("selected"));
      btn.classList.add("selected");
      $("nextBtn").disabled = false;
    });
    options.appendChild(btn);
  });
  body.appendChild(options);
}

function renderSymbols(task) {
  const body = $("taskBody");
  const info = document.createElement("div");
  info.className = "notice";
  info.innerHTML = `<strong>Zielzeichen:</strong> ${escapeHtml(task.target)} · Es sind mehrere Felder richtig.`;
  body.appendChild(info);
  const grid = document.createElement("div");
  grid.className = "symbolGrid";
  task.symbols.forEach((sym, idx) => {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "symbol";
    cell.textContent = sym;
    cell.addEventListener("click", () => {
      if (state.selectedSet.has(idx)) {
        state.selectedSet.delete(idx);
        cell.classList.remove("selected");
      } else {
        state.selectedSet.add(idx);
        cell.classList.add("selected");
      }
      $("nextBtn").disabled = state.selectedSet.size === 0;
    });
    grid.appendChild(cell);
  });
  body.appendChild(grid);
}

function renderMatrix(task) {
  const body = $("taskBody");
  const grid = document.createElement("div");
  grid.className = "matrix";
  task.items.forEach((item, idx) => {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.textContent = item;
    cell.addEventListener("click", () => {
      if (task.single) {
        state.selectedSet = new Set([idx]);
        [...grid.children].forEach(x => x.classList.remove("selected"));
        cell.classList.add("selected");
      } else if (state.selectedSet.has(idx)) {
        state.selectedSet.delete(idx);
        cell.classList.remove("selected");
      } else {
        state.selectedSet.add(idx);
        cell.classList.add("selected");
      }
      $("nextBtn").disabled = state.selectedSet.size === 0;
    });
    grid.appendChild(cell);
  });
  body.appendChild(grid);
}

function showArabicForTask() {
  const task = tasks[state.current];
  state.arabicUsed = true;
  $("arabicBox").classList.remove("hidden");
  let html = `<strong>مساعدة عربية:</strong><br>${escapeHtml(task.ar)}`;
  if (task.questionAr) html += `<br><br><strong>السؤال:</strong> ${escapeHtml(task.questionAr)}`;
  if (task.options) {
    html += "<ol>" + task.options.map(o => `<li>${escapeHtml(o.ar)}</li>`).join("") + "</ol>";
  }
  $("arabicBox").innerHTML = html;
  $("arabicBtn").textContent = "Arabisch wurde geöffnet – 0 Punkte für diese Aufgabe";
}

function gradeCurrent(skipped = false) {
  const task = tasks[state.current];
  const sectionName = sections[task.section] || task.section;
  const weight = task.weight || 1;
  state.totalPoints += weight;
  state.details[sectionName].total += weight;

  let correct = false;
  if (!skipped && !state.arabicUsed) {
    if (task.type === "choice") correct = state.selected === task.correct;
    if (task.type === "symbols" || task.type === "matrix") correct = sameSet(state.selectedSet, new Set(task.correctIndexes));
  }
  if (state.arabicUsed) {
    state.arabicPenaltyCount += 1;
    state.details[sectionName].arabic += 1;
  }
  if (correct) {
    state.earnedPoints += weight;
    state.details[sectionName].earned += weight;
  }
  state.current += 1;
  renderTask();
}

function sameSet(a, b) {
  if (a.size !== b.size) return false;
  for (const item of a) if (!b.has(item)) return false;
  return true;
}

function startReactionSection() {
  if (state.reactionIndex >= reactionTasks.length) {
    finishTest();
    return;
  }
  show("reactionCard");
  const task = reactionTasks[state.reactionIndex];
  state.activeReaction = task;
  state.reactionRound = 0;
  state.reactions = [];
  state.reactionArabicUsed = false;
  $("reactionSectionLabel").textContent = sections[task.section];
  $("reactionTitle").textContent = task.title;
  $("reactionInstruction").textContent = task.instruction;
  $("reactionRound").textContent = "0";
  $("reactionTotal").textContent = task.rounds;
  $("signal").textContent = "Start drücken";
  $("signal").className = "signal";
  $("reactionStats").textContent = "Bereit.";
  $("reactionStartBtn").textContent = "Start";
  $("reactionArabicBox").classList.add("hidden");
  $("reactionArabicBox").innerHTML = "";
  $("reactionArabicBtn").textContent = "Arabisch anzeigen – dieser Abschnitt gibt dann 0 Punkte";
}

function showReactionArabic() {
  state.reactionArabicUsed = true;
  $("reactionArabicBox").classList.remove("hidden");
  $("reactionArabicBox").textContent = state.activeReaction.ar;
  $("reactionArabicBtn").textContent = "Arabisch wurde geöffnet – 0 Punkte für diesen Abschnitt";
}

function beginReactionRounds() {
  $("reactionStartBtn").disabled = true;
  $("reactionStats").textContent = "Warten, bis das richtige Signal kommt.";
  nextReactionSignal();
}

function nextReactionSignal() {
  clearTimeout(state.waitingTimer);
  if (state.reactionRound >= state.activeReaction.rounds) {
    gradeReactionSection();
    return;
  }
  state.answeredThisSignal = false;
  $("signal").className = "signal";
  $("signal").textContent = "Warten…";
  const delay = 900 + Math.random() * 1600;
  state.waitingTimer = setTimeout(() => {
    state.reactionRound += 1;
    $("reactionRound").textContent = state.reactionRound;
    if (state.activeReaction.type === "simple") {
      state.currentReactionIsTarget = true;
      $("signal").className = "signal go";
      $("signal").textContent = "GRÜN\nKLICKEN";
    } else {
      const variants = [
        { text: "GRÜN\nBUS", target: true, cls: "go" },
        { text: "GRÜN\nPKW", target: false, cls: "no" },
        { text: "ROT\nBUS", target: false, cls: "no" },
        { text: "BLAU\nBUS", target: false, cls: "no" }
      ];
      const v = variants[Math.floor(Math.random() * variants.length)];
      state.currentReactionIsTarget = v.target;
      $("signal").className = `signal ${v.cls}`;
      $("signal").textContent = v.text;
    }
    state.goTime = performance.now();
    const timeout = state.currentReactionIsTarget ? 1700 : 900;
    state.waitingTimer = setTimeout(() => {
      if (!state.answeredThisSignal) {
        state.reactions.push({ target: state.currentReactionIsTarget, hit: false, falseAlarm: false, rt: null });
        updateReactionStats();
      }
      nextReactionSignal();
    }, timeout);
  }, delay);
}

function handleReactionClick() {
  if (!state.activeReaction || state.goTime === null || state.answeredThisSignal) return;
  state.answeredThisSignal = true;
  const rt = Math.round(performance.now() - state.goTime);
  const hit = state.currentReactionIsTarget;
  const falseAlarm = !state.currentReactionIsTarget;
  state.reactions.push({ target: state.currentReactionIsTarget, hit, falseAlarm, rt: hit ? rt : null });
  updateReactionStats();
  clearTimeout(state.waitingTimer);
  setTimeout(nextReactionSignal, 320);
}

function updateReactionStats() {
  const hits = state.reactions.filter(r => r.hit).length;
  const falseAlarms = state.reactions.filter(r => r.falseAlarm).length;
  const rts = state.reactions.filter(r => r.rt).map(r => r.rt);
  const avg = rts.length ? Math.round(rts.reduce((a,b)=>a+b,0)/rts.length) : "–";
  $("reactionStats").textContent = `Treffer: ${hits} · Fehlklicks: ${falseAlarms} · Ø Reaktion: ${avg} ms`;
}

function gradeReactionSection(skipped = false) {
  clearTimeout(state.waitingTimer);
  const sectionName = sections[state.activeReaction.section];
  const weight = 2;
  state.totalPoints += weight;
  state.details[sectionName].total += weight;
  let earned = 0;
  if (!skipped && !state.reactionArabicUsed) {
    const targets = state.reactions.filter(r => r.target).length;
    const hits = state.reactions.filter(r => r.hit).length;
    const falseAlarms = state.reactions.filter(r => r.falseAlarm).length;
    const avgRt = average(state.reactions.filter(r => r.rt).map(r => r.rt));
    const accuracy = targets ? hits / targets : 1;
    if (accuracy >= 0.7 && falseAlarms === 0 && (!avgRt || avgRt <= 1100)) earned = weight;
    else if (accuracy >= 0.55 && falseAlarms <= 1) earned = weight / 2;
  }
  if (state.reactionArabicUsed) {
    state.arabicPenaltyCount += 1;
    state.details[sectionName].arabic += 1;
  }
  state.earnedPoints += earned;
  state.details[sectionName].earned += earned;
  state.reactionIndex += 1;
  $("reactionStartBtn").disabled = false;
  startReactionSection();
}

function average(arr) {
  if (!arr.length) return null;
  return arr.reduce((a,b)=>a+b,0)/arr.length;
}

function finishTest() {
  const percent = state.totalPoints ? Math.round((state.earnedPoints / state.totalPoints) * 100) : 0;
  const attempt = {
    date: new Date().toISOString(),
    earned: state.earnedPoints,
    total: state.totalPoints,
    percent,
    arabicPenaltyCount: state.arabicPenaltyCount,
    details: state.details
  };
  saveAttempt(attempt);
  renderResults(attempt);
}

function renderResults(attempt) {
  show("resultsCard");
  $("scorePercent").textContent = `${attempt.percent}%`;
  $("scoreCircle").style.background = `conic-gradient(var(--accent) 0deg, var(--accent) ${attempt.percent * 3.6}deg, #e9eef8 ${attempt.percent * 3.6}deg)`;
  let title = "Weiter üben";
  let text = "Das Ergebnis ist noch unsicher. Besonders wichtig sind ruhiges Lesen, genaues Arbeiten und Reaktion ohne Fehlklicks.";
  if (attempt.percent >= 80) {
    title = "Starkes Übungsergebnis";
    text = "Das sieht in diesem Training gut aus. Weiter regelmäßig üben, damit die deutsche Aufgabenstellung sicher bleibt.";
  } else if (attempt.percent >= 65) {
    title = "Solide Grundlage";
    text = "Das ist eine brauchbare Grundlage. Ziel sollte sein, mehrere Durchgänge über 75 bis 80 Prozent zu schaffen.";
  }
  $("scoreTitle").textContent = title;
  $("scoreText").textContent = text;
  const box = $("sectionResults");
  box.innerHTML = "";
  Object.entries(attempt.details).forEach(([name, d]) => {
    if (d.total <= 0) return;
    const p = Math.round((d.earned / d.total) * 100);
    const div = document.createElement("div");
    div.className = "resultBox";
    div.innerHTML = `<strong>${escapeHtml(name)}</strong>${p}% · ${formatPoint(d.earned)} von ${formatPoint(d.total)} Punkten${d.arabic ? `<br><span class="subtleText">Arabische Hilfe: ${d.arabic}×</span>` : ""}`;
    box.appendChild(div);
  });
  $("arabicNotice").innerHTML = attempt.arabicPenaltyCount
    ? `<strong>Arabische Hilfe genutzt:</strong> ${attempt.arabicPenaltyCount} Aufgabe(n) wurden dadurch mit 0 Punkten bewertet. Das ist zum Lernen okay, aber das Ziel ist: erst verstehen, dann ohne Arabisch lösen.`
    : `<strong>Sehr gut:</strong> Keine arabische Hilfe genutzt. Genau das trainiert die echte Situation am besten.`;
}

function formatPoint(n) {
  return Number.isInteger(n) ? `${n}` : `${n.toFixed(1)}`;
}

function saveAttempt(attempt) {
  const attempts = getAttempts();
  attempts.push(attempt);
  localStorage.setItem("busEignungTrainingAttempts", JSON.stringify(attempts.slice(-30)));
}

function getAttempts() {
  try { return JSON.parse(localStorage.getItem("busEignungTrainingAttempts") || "[]"); }
  catch { return []; }
}

function renderHistory() {
  show("historyCard");
  const attempts = getAttempts();
  const body = $("historyBody");
  if (!attempts.length) {
    body.innerHTML = `<div class="notice">Noch kein gespeicherter Test. Starte einen Durchgang, dann erscheint hier der Fortschritt.</div>`;
    return;
  }
  const last = attempts.slice(-10);
  const bars = last.map((a, i) => {
    const date = new Date(a.date).toLocaleDateString("de-DE", { day:"2-digit", month:"2-digit", hour:"2-digit", minute:"2-digit" });
    return `<div class="historyBar"><span>${escapeHtml(date)}</span><div class="historyBarLine"><div class="historyBarFill" style="width:${a.percent}%"></div></div><strong>${a.percent}%</strong></div>`;
  }).join("");
  const rows = attempts.slice().reverse().map((a, i) => {
    const date = new Date(a.date).toLocaleString("de-DE", { dateStyle:"short", timeStyle:"short" });
    return `<tr><td>${escapeHtml(date)}</td><td>${a.percent}%</td><td>${formatPoint(a.earned)} / ${formatPoint(a.total)}</td><td>${a.arabicPenaltyCount}</td></tr>`;
  }).join("");
  const best = Math.max(...attempts.map(a => a.percent));
  const current = attempts[attempts.length - 1].percent;
  const first = attempts[0].percent;
  const trend = current - first;
  body.innerHTML = `
    <div class="grid two">
      <div class="resultBox"><strong>Bester Durchgang</strong>${best}%</div>
      <div class="resultBox"><strong>Entwicklung seit erstem Test</strong>${trend >= 0 ? "+" : ""}${trend} Prozentpunkte</div>
    </div>
    <h3>Letzte Durchgänge</h3>
    <div class="historyBars">${bars}</div>
    <h3>Alle gespeicherten Versuche</h3>
    <table class="historyTable"><thead><tr><th>Datum</th><th>Score</th><th>Punkte</th><th>Arabisch</th></tr></thead><tbody>${rows}</tbody></table>
  `;
}

function clearHistory() {
  localStorage.removeItem("busEignungTrainingAttempts");
  renderHistory();
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"]/g, s => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;"}[s]));
}

$("startBtn").addEventListener("click", () => { resetState(); renderTask(); });
$("historyBtn").addEventListener("click", renderHistory);
$("showHistoryBtn").addEventListener("click", renderHistory);
$("backBtn").addEventListener("click", () => show(state.started ? "resultsCard" : "introCard"));
$("retryBtn").addEventListener("click", () => { resetState(); renderTask(); });
$("clearHistoryBtn").addEventListener("click", () => { if (confirm("Verlauf wirklich löschen?")) { clearHistory(); }});
$("arabicBtn").addEventListener("click", showArabicForTask);
$("nextBtn").addEventListener("click", () => gradeCurrent(false));
$("skipBtn").addEventListener("click", () => gradeCurrent(true));
$("reactionArabicBtn").addEventListener("click", showReactionArabic);
$("reactionStartBtn").addEventListener("click", beginReactionRounds);
$("reactionStopBtn").addEventListener("click", () => gradeReactionSection(true));
$("reactionStage").addEventListener("click", handleReactionClick);

document.addEventListener("keydown", (e) => {
  if ($("reactionCard").classList.contains("hidden")) return;
  if (e.code === "Space" || e.code === "Enter") {
    e.preventDefault();
    handleReactionClick();
  }
});
