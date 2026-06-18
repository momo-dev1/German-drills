const pronouns = ["ich", "du", "er/es/sie", "wir", "sie/Sie", "ihr"];
const dots = "••••";

const verbs = [
  {
    chapter: "Kapitel 1",
    mode: "Present tense",
    verb: "sein",
    meaning: "to be",
    forms: ["bin", "bist", "ist", "sind", "sind", "seid"],
  },
  {
    chapter: "Kapitel 1",
    mode: "Present tense",
    verb: "heißen",
    meaning: "to be called",
    forms: ["heiße", "heißt", "heißt", "heißen", "heißen", "heißt"],
  },
  {
    chapter: "Kapitel 1",
    mode: "Present tense",
    verb: "kommen",
    meaning: "to come",
    forms: ["komme", "kommst", "kommt", "kommen", "kommen", "kommt"],
  },
  {
    chapter: "Kapitel 1",
    mode: "Present tense",
    verb: "wohnen",
    meaning: "to live",
    forms: ["wohne", "wohnst", "wohnt", "wohnen", "wohnen", "wohnt"],
  },
  {
    chapter: "Kapitel 2",
    mode: "Present tense",
    verb: "kochen",
    meaning: "to cook",
    forms: ["koche", "kochst", "kocht", "kochen", "kochen", "kocht"],
  },
  {
    chapter: "Kapitel 2",
    mode: "Present tense",
    verb: "arbeiten",
    meaning: "to work",
    forms: ["arbeite", "arbeitest", "arbeitet", "arbeiten", "arbeiten", "arbeitet"],
  },
  {
    chapter: "Kapitel 2",
    mode: "Present tense",
    verb: "lesen",
    meaning: "to read",
    forms: ["lese", "liest", "liest", "lesen", "lesen", "lest"],
  },
  {
    chapter: "Kapitel 2",
    mode: "Present tense",
    verb: "sprechen",
    meaning: "to speak",
    forms: ["spreche", "sprichst", "spricht", "sprechen", "sprechen", "sprecht"],
  },
  {
    chapter: "Kapitel 2",
    mode: "Present tense",
    verb: "haben",
    meaning: "to have",
    forms: ["habe", "hast", "hat", "haben", "haben", "habt"],
  },
  {
    chapter: "Kapitel 4",
    mode: "Present tense",
    verb: "essen",
    meaning: "to eat",
    forms: ["esse", "isst", "isst", "essen", "essen", "esst"],
  },
  {
    chapter: "Kapitel 4",
    mode: "Present tense",
    verb: "mögen",
    meaning: "to like",
    forms: ["mag", "magst", "mag", "mögen", "mögen", "mögt"],
  },
  {
    chapter: "Kapitel 4",
    mode: "Present tense",
    verb: "möchten",
    meaning: "would like",
    forms: ["möchte", "möchtest", "möchte", "möchten", "möchten", "möchtet"],
  },
  {
    chapter: "Kapitel 4 Akkusativ",
    mode: "Present tense",
    verb: "brauchen",
    meaning: "to need",
    forms: ["brauche", "brauchst", "braucht", "brauchen", "brauchen", "braucht"],
  },
  {
    chapter: "Kapitel 4 Akkusativ",
    mode: "Present tense",
    verb: "machen",
    meaning: "to do / make",
    forms: ["mache", "machst", "macht", "machen", "machen", "macht"],
  },
  {
    chapter: "Kapitel 4 Akkusativ",
    mode: "Present tense",
    verb: "kaufen",
    meaning: "to buy",
    forms: ["kaufe", "kaufst", "kauft", "kaufen", "kaufen", "kauft"],
  },
  {
    chapter: "Kapitel 4 Akkusativ",
    mode: "Present tense",
    verb: "nehmen",
    meaning: "to take",
    forms: ["nehme", "nimmst", "nimmt", "nehmen", "nehmen", "nehmt"],
  },
  {
    chapter: "Kapitel 5",
    mode: "Modal verb",
    verb: "müssen",
    meaning: "must / have to",
    forms: ["muss", "musst", "muss", "müssen", "müssen", "müsst"],
  },
  {
    chapter: "Kapitel 5",
    mode: "Modal verb",
    verb: "können",
    meaning: "can / be able to",
    forms: ["kann", "kannst", "kann", "können", "können", "könnt"],
  },
  {
    chapter: "Kapitel 5",
    mode: "Modal verb",
    verb: "wollen",
    meaning: "to want",
    forms: ["will", "willst", "will", "wollen", "wollen", "wollt"],
  },
];

const TOTAL = pronouns.length; // forms per verb
const MODES = ["table", "type", "choice", "fill"];

// ---- Possessivartikel (own tab, own structure) ------------------------------
// 8 possessors across the columns, Kasus × Genus down the rows (64 cells).
const possessors = ["ich", "du", "er", "sie (she)", "es", "wir", "ihr", "sie/Sie"];
const possRows = [
  { kasus: "Nominativ", genus: "m / n", forms: ["mein", "dein", "sein", "ihr", "sein", "unser", "euer", "ihr"] },
  { kasus: "Nominativ", genus: "f / pl", forms: ["meine", "deine", "seine", "ihre", "seine", "unsere", "eure", "ihre"] },
  { kasus: "Dativ", genus: "m / n", forms: ["meinem", "deinem", "seinem", "ihrem", "seinem", "unserem", "eurem", "ihrem"] },
  { kasus: "Dativ", genus: "f", forms: ["meiner", "deiner", "seiner", "ihrer", "seiner", "unserer", "eurer", "ihrer"] },
  { kasus: "Dativ", genus: "pl", forms: ["meinen", "deinen", "seinen", "ihren", "seinen", "unseren", "euren", "ihren"] },
  { kasus: "Akkusativ", genus: "m", forms: ["meinen", "deinen", "seinen", "ihren", "seinen", "unseren", "euren", "ihren"] },
  { kasus: "Akkusativ", genus: "n", forms: ["mein", "dein", "sein", "ihr", "sein", "unser", "euer", "ihr"] },
  { kasus: "Akkusativ", genus: "f / pl", forms: ["meine", "deine", "seine", "ihre", "seine", "unsere", "eure", "ihre"] },
];
const CASES = ["Nominativ", "Dativ", "Akkusativ"];

// ---- Personalpronomen (own tab) ---------------------------------------------
// Nominativ is the prompt; the learner declines it into Akkusativ / Dativ.
const personalPronouns = [
  { label: "ich", Akkusativ: "mich", Dativ: "mir" },
  { label: "du", Akkusativ: "dich", Dativ: "dir" },
  { label: "er", Akkusativ: "ihn", Dativ: "ihm" },
  { label: "es", Akkusativ: "es", Dativ: "ihm" },
  { label: "sie (she)", Akkusativ: "sie", Dativ: "ihr" },
  { label: "wir", Akkusativ: "uns", Dativ: "uns" },
  { label: "ihr", Akkusativ: "euch", Dativ: "euch" },
  { label: "sie (they)", Akkusativ: "sie", Dativ: "ihnen" },
  { label: "Sie (formal)", Akkusativ: "Sie", Dativ: "Ihnen" },
];
const PP_CASES = ["Akkusativ", "Dativ"];

const state = {
  selected: new Set([0]), // global verb indices in the test set
  chapter: "All",
  search: "",
  activeMode: "table",
  drills: { table: null, type: null, choice: null, fill: null },
  trainer: "verbs", // "verbs" | "possessiv" | "personal"
  poss: {
    case: "Nominativ",
    drills: { Nominativ: null, Dativ: null, Akkusativ: null },
  },
  personal: {
    case: "Akkusativ",
    drills: { Akkusativ: null, Dativ: null },
  },
};

const el = (id) => document.getElementById(id);
const normalize = (value) => value.trim().toLowerCase();

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ---- Gamification: confetti -------------------------------------------------

function fireConfetti(card) {
  card.classList.add("celebrate");
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 26; i += 1) {
    const bit = document.createElement("span");
    bit.className = "confetti";
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.background = i % 2 ? "var(--accent)" : "var(--ink)";
    bit.style.animationDelay = `${Math.random() * 0.4}s`;
    bit.style.transform = `rotate(${Math.random() * 360}deg)`;
    frag.appendChild(bit);
  }
  card.appendChild(frag);
}

// ---- Selection / cells ------------------------------------------------------

function filteredVerbs() {
  let list =
    state.chapter === "All"
      ? verbs
      : verbs.filter((item) => item.chapter === state.chapter);
  const query = state.search.trim().toLowerCase();
  if (query) {
    list = list.filter(
      (item) =>
        item.verb.toLowerCase().includes(query) ||
        item.meaning.toLowerCase().includes(query),
    );
  }
  return list;
}

// Verbs currently in the test set (global order). Falls back to none = empty.
function testVerbs() {
  return [...state.selected]
    .sort((a, b) => a - b)
    .map((i) => verbs[i])
    .filter(Boolean);
}

// One cell per (verb, pronoun): the atomic unit every drill is built from.
function buildCells() {
  const cells = [];
  testVerbs().forEach((verb) => {
    pronouns.forEach((_, p) => {
      cells.push({ verb, p, answer: verb.forms[p] });
    });
  });
  return cells;
}

// ---- Drill state ------------------------------------------------------------

function newDrill() {
  const cells = buildCells();
  const order = shuffle([...cells.keys()]); // shuffled cell indices
  return {
    cells,
    order, // shuffled display order (table / fill)
    queue: [...order], // remaining cards (type / choice)
    current: null,
    firstTry: new Set(),
    failed: new Set(),
    cleared: new Set(),
    done: false,
    pace: null, // "normal" | "speed"
  };
}

function startDrill(mode) {
  state.drills[mode] = newDrill();
}

function resetDrills() {
  MODES.forEach((mode) => startDrill(mode));
}

// ---- Timer (speed mode) -----------------------------------------------------

const PER_CARD_SECONDS = 10; // type / choice
const WHOLE_DRILL_SECONDS = 60; // match / fill

let timerHandle = null;
let timerLowHandle = null;

function stopTimer() {
  if (timerHandle) clearTimeout(timerHandle);
  if (timerLowHandle) clearTimeout(timerLowHandle);
  timerHandle = null;
  timerLowHandle = null;
  const fill = el("timerFill");
  fill.style.transition = "none";
  fill.style.width = "100%";
  fill.classList.remove("low");
  el("timerWrap").hidden = true;
}

function startTimer(seconds, onExpire) {
  stopTimer();
  const wrap = el("timerWrap");
  const fill = el("timerFill");
  wrap.hidden = false;
  fill.style.transition = "none";
  fill.style.width = "100%";
  fill.classList.remove("low");
  void fill.offsetWidth; // reflow so the next change animates
  requestAnimationFrame(() => {
    fill.style.transition = `width ${seconds}s linear`;
    fill.style.width = "0%";
  });
  if (seconds > 5) {
    timerLowHandle = setTimeout(
      () => fill.classList.add("low"),
      (seconds - 5) * 1000,
    );
  } else {
    fill.classList.add("low");
  }
  timerHandle = setTimeout(() => {
    timerHandle = null;
    onExpire();
  }, seconds * 1000);
}

// ---- Pace gate (Normal / Speed) ---------------------------------------------

const MODE_NAMES = {
  table: "Drag to Match",
  type: "Type the form",
  choice: "Multiple choice",
  fill: "Fill the table",
};

function showPaceGate(mode) {
  stopTimer();
  el("setNote").hidden = true;
  document
    .querySelectorAll(".mode-view")
    .forEach((view) => view.classList.remove("active"));
  const cardCount = state.drills[mode].cells.length;
  el("paceSub").textContent = `${MODE_NAMES[mode]} · ${cardCount} cards`;
  const perCard = mode === "type" || mode === "choice";
  el("paceSpeedDesc").textContent = perCard
    ? `${PER_CARD_SECONDS}s per question — miss it, it's wrong.`
    : `${WHOLE_DRILL_SECONDS}s for the whole set.`;
  el("paceGate").hidden = false;
}

function hidePaceGate() {
  el("paceGate").hidden = true;
}

function showSetNote() {
  stopTimer();
  hidePaceGate();
  document
    .querySelectorAll(".mode-view")
    .forEach((view) => view.classList.remove("active"));
  el("setNote").hidden = false;
}

function enterMode(mode) {
  if (state.selected.size === 0) {
    showSetNote();
    return;
  }
  el("setNote").hidden = true;
  const drill = state.drills[mode];
  if (!drill.pace) {
    showPaceGate(mode);
    return;
  }
  hidePaceGate();
  el(`${mode}Mode`).classList.add("active");
  renderMode(mode);
  // whole-drill timer for match / fill (per-card modes time themselves)
  if (
    drill.pace === "speed" &&
    !drill.done &&
    (mode === "table" || mode === "fill")
  ) {
    startTimer(
      WHOLE_DRILL_SECONDS,
      mode === "table" ? tableTimeout : fillTimeout,
    );
  }
}

function choosePace(pace) {
  const mode = state.activeMode;
  state.drills[mode].pace = pace;
  enterMode(mode);
  updateSidebar();
}

// ---- Sidebar ----------------------------------------------------------------

function renderProgress(cleared, total) {
  const pct = total ? Math.round((cleared / total) * 100) : 0;
  el("progressTrack").innerHTML = `<span class="progress-fill" style="width:${pct}%"></span>`;
}

function updateSidebar() {
  el("verbCount").textContent = state.selected.size;
  if (state.trainer === "possessiv" || state.trainer === "personal") {
    const drill =
      state.trainer === "possessiv" ? activePossDrill() : activePersonalDrill();
    const total = drill.cells.length;
    el("drillScore").textContent = `${drill.firstTry.size}/${total}`;
    el("drillLeft").textContent = `${drill.cleared.size}/${total}`;
    renderProgress(drill.cleared.size, total);
    return;
  }
  const drill = state.drills[state.activeMode];
  if (!drill) {
    el("drillScore").textContent = "0/0";
    el("drillLeft").textContent = "0/0";
    renderProgress(0, 0);
    return;
  }
  const total = drill.cells.length;
  if (state.activeMode === "table") {
    const placed = drill.slots ? Object.keys(drill.slots).length : 0;
    el("drillScore").textContent = `${drill.cleared.size}/${total}`;
    el("drillLeft").textContent = `${placed}/${total}`;
    renderProgress(placed, total);
    return;
  }
  el("drillScore").textContent = `${drill.firstTry.size}/${total}`;
  el("drillLeft").textContent = `${drill.cleared.size}/${total}`;
  renderProgress(drill.cleared.size, total);
}

function renderFilters() {
  const chapters = ["All", ...new Set(verbs.map((item) => item.chapter))];
  el("chapterFilter").innerHTML = chapters
    .map((chapter) => `<option value="${chapter}">${chapter}</option>`)
    .join("");
  el("chapterFilter").value = state.chapter;
}

function renderVerbList() {
  const list = filteredVerbs();
  el("verbList").innerHTML = list.length
    ? list
        .map((item) => {
          const gi = verbs.indexOf(item);
          const on = state.selected.has(gi);
          return `
        <button class="verb-chip ${on ? "active" : ""}" data-verb-global="${gi}" type="button">
          <span class="chip-check">${on ? "✓" : ""}</span>
          <span class="chip-name">${item.verb}</span>
          <small>${item.chapter.replace("Kapitel ", "K")}</small>
        </button>`;
        })
        .join("")
    : `<p class="empty-note">No verbs match your search.</p>`;
}

function renderHero() {
  const list = testVerbs();
  const hero = el("verbHero");
  if (list.length === 1) {
    const verb = list[0];
    hero.dataset.ghost = verb.verb.charAt(0).toUpperCase();
    const meta =
      verb.mode === "Present tense"
        ? verb.chapter
        : `${verb.chapter} · ${verb.mode}`;
    hero.innerHTML = `
      <div class="hero-top">
        <div>
          <div class="hero-meta">${meta}</div>
          <div class="hero-title">${verb.verb}</div>
        </div>
        <div class="meaning-pill">${verb.meaning}</div>
      </div>`;
    return;
  }

  hero.dataset.ghost = "∑";
  if (!list.length) {
    hero.innerHTML = `
      <div class="hero-top">
        <div>
          <div class="hero-meta">No verbs</div>
          <div class="hero-title">Pick a set</div>
        </div>
      </div>`;
    return;
  }
  const names = list.map((v) => v.verb).join(" · ");
  hero.innerHTML = `
    <div class="hero-top">
      <div>
        <div class="hero-meta">Mixed set · shuffled</div>
        <div class="hero-title">${list.length} verbs</div>
      </div>
      <div class="meaning-pill">${list.length * TOTAL} cards</div>
    </div>
    <div class="hero-verbs">${names}</div>`;
}

// ---- Summary ----------------------------------------------------------------

function renderSummary(mode) {
  stopTimer();
  const drill = state.drills[mode];
  const total = drill.cells.length;
  const score = mode === "table" ? drill.cleared.size : drill.firstTry.size;
  const mistakes = drill.failed.size;
  const perfect = score === total && mistakes === 0;
  const label = mode === "table" ? "forms matched" : "right on first try";
  const missLine = ` · ${mistakes} ${mistakes === 1 ? "miss" : "misses"}`;

  const missed = [...drill.failed].sort((a, b) => a - b);
  const missedBlock = missed.length
    ? `
      <div class="missed-list">
        <div class="missed-head">What you missed</div>
        <ul>
          ${missed
            .map((ci) => {
              const cell = drill.cells[ci];
              return `<li><span class="missed-pronoun">${cell.verb.verb} · ${pronouns[cell.p]}</span><span class="missed-answer">${cell.answer}</span></li>`;
            })
            .join("")}
        </ul>
      </div>`
    : "";

  el(`${mode}Body`).hidden = true;
  const summaryEl = el(`${mode}Summary`);
  summaryEl.hidden = false;
  summaryEl.innerHTML = `
    <div class="summary-card">
      <div class="summary-emoji">${perfect ? "🏆" : "✅"}</div>
      <h3>Drill complete</h3>
      <div class="summary-score">${score}<span>/${total}</span></div>
      <p class="summary-sub">${total} cards · ${label}${missLine}</p>
      ${missedBlock}
      <button class="solid-btn restart-btn" data-mode="${mode}" type="button">Restart drill</button>
    </div>
  `;
  if (perfect) fireConfetti(summaryEl.querySelector(".summary-card"));
  updateSidebar();
}

// ---- Match (drag & drop) ----------------------------------------------------

function renderTable() {
  const drill = state.drills.table;
  if (drill.done) {
    renderSummary("table");
    return;
  }
  el("tableSummary").hidden = true;
  el("tableBody").hidden = false;

  if (!drill.bank) {
    drill.bank = shuffle(drill.cells.map((cell, id) => ({ id, value: cell.answer })));
    drill.slots = {}; // cell index -> placed chip id
    drill.selected = null;
  }

  const chipById = (id) => drill.bank.find((chip) => chip.id === id);
  const armed = drill.selected !== null && drill.selected !== undefined;

  el("conjugationTable").innerHTML = drill.order
    .map((ci) => {
      const cell = drill.cells[ci];
      const placedId = drill.slots[ci];
      const slot =
        placedId === undefined
          ? `<div class="drop-slot ${armed ? "armed" : ""}" data-slot="${ci}">drop here</div>`
          : `<div class="drop-slot filled" data-slot="${ci}" title="click to remove">${chipById(placedId).value}</div>`;
      return `
        <div class="conj-row">
          <div class="pronoun-cell">
            <span class="cell-verb">${cell.verb.verb}</span>
            <span class="cell-pron">${pronouns[cell.p]}</span>
          </div>
          <div class="answer-cell">${slot}</div>
        </div>
      `;
    })
    .join("");

  const placedIds = new Set(Object.values(drill.slots));
  const remaining = drill.bank.filter((chip) => !placedIds.has(chip.id));
  el("formBank").innerHTML = remaining.length
    ? remaining
        .map(
          (chip) =>
            `<button class="form-chip ${drill.selected === chip.id ? "picked" : ""}" draggable="true" data-chip="${chip.id}" type="button">${chip.value}</button>`,
        )
        .join("")
    : `<p class="bank-empty">All forms placed — checking…</p>`;
  updateSidebar();
}

function gradeTable() {
  const drill = state.drills.table;
  for (let ci = 0; ci < drill.cells.length; ci += 1) {
    const chip = drill.bank.find((item) => item.id === drill.slots[ci]);
    if (chip && chip.value === drill.cells[ci].answer) {
      drill.cleared.add(ci);
      drill.firstTry.add(ci);
    } else {
      drill.failed.add(ci);
    }
  }
  drill.done = true;
  renderSummary("table");
}

function tableTimeout() {
  if (state.drills.table.done) return;
  gradeTable();
}

function placeChip(chipId, slotIndex) {
  const drill = state.drills.table;
  if (drill.done) return;
  drill.slots[slotIndex] = chipId; // overwriting frees the old chip back to the bank
  drill.selected = null;
  renderTable();
  if (Object.keys(drill.slots).length === drill.cells.length) {
    setTimeout(gradeTable, 400);
  }
}

function clearSlot(slotIndex) {
  const drill = state.drills.table;
  if (drill.done) return;
  delete drill.slots[slotIndex];
  renderTable();
}

// ---- Type -------------------------------------------------------------------

function renderTypeCard() {
  const drill = state.drills.type;
  if (!drill.queue.length) {
    drill.done = true;
    renderSummary("type");
    return;
  }
  el("typeSummary").hidden = true;
  el("typeBody").hidden = false;
  const ci = drill.queue[0];
  drill.current = ci;
  const cell = drill.cells[ci];
  const total = drill.cells.length;
  el("typeMeta").textContent = `${cell.verb.verb} · ${cell.verb.meaning} · ${drill.cleared.size}/${total}`;
  el("typePrompt").textContent = `${pronouns[cell.p]} ${dots}`;
  el("typeInput").value = "";
  el("typeInput").disabled = false;
  el("typeWrap").className = "field-wrap";
  el("typeFeedback").textContent = "";
  el("typeFeedback").className = "feedback";
  el("typeInput").focus();
  updateSidebar();
  if (drill.pace === "speed") startTimer(PER_CARD_SECONDS, typeTimeout);
}

function typeTimeout() {
  const drill = state.drills.type;
  if (drill.done || drill.current === null) return;
  const cell = drill.cells[drill.current];
  el("typeInput").disabled = true;
  el("typeWrap").className = "field-wrap is-wrong";
  el("typeFeedback").textContent = `Time! Answer: ${cell.answer}`;
  el("typeFeedback").className = "feedback bad";
  drill.failed.add(drill.current);
  drill.queue.shift();
  drill.queue.push(drill.current);
  updateSidebar();
  setTimeout(renderTypeCard, 1200);
}

// ---- Choice -----------------------------------------------------------------

function renderChoiceCard() {
  const drill = state.drills.choice;
  if (!drill.queue.length) {
    drill.done = true;
    renderSummary("choice");
    return;
  }
  el("choiceSummary").hidden = true;
  el("choiceBody").hidden = false;
  const ci = drill.queue[0];
  drill.current = ci;
  const cell = drill.cells[ci];
  const total = drill.cells.length;
  const answer = cell.answer;
  const pool = [...new Set(cell.verb.forms)].filter((form) => form !== answer);
  const options = shuffle([answer, ...shuffle(pool).slice(0, 3)]);

  el("choiceMeta").textContent = `${cell.verb.verb} · ${cell.verb.meaning} · ${drill.cleared.size}/${total}`;
  el("choicePrompt").textContent = `${pronouns[cell.p]} ${dots}`;
  el("choiceFeedback").textContent = "";
  el("choiceFeedback").className = "feedback";
  el("choiceGrid").innerHTML = options
    .map(
      (option) =>
        `<button class="choice-btn" data-choice="${option}" type="button"><span>${option}</span><span class="check-badge">✓</span></button>`,
    )
    .join("");
  updateSidebar();
  if (drill.pace === "speed") startTimer(PER_CARD_SECONDS, choiceTimeout);
}

function choiceTimeout() {
  const drill = state.drills.choice;
  if (drill.done || drill.current === null) return;
  const cell = drill.cells[drill.current];
  document.querySelectorAll(".choice-btn").forEach((item) => {
    item.disabled = true;
    if (item.dataset.choice === cell.answer) item.classList.add("correct");
  });
  drill.failed.add(drill.current);
  drill.queue.shift();
  drill.queue.push(drill.current);
  el("choiceFeedback").textContent = `Time! Answer: ${cell.answer}`;
  el("choiceFeedback").className = "feedback bad";
  updateSidebar();
  setTimeout(renderChoiceCard, 1400);
}

// ---- Fill table -------------------------------------------------------------

function renderFillTable() {
  const drill = state.drills.fill;
  if (drill.done) {
    renderSummary("fill");
    return;
  }
  el("fillSummary").hidden = true;
  el("fillBody").hidden = false;
  el("fillFeedback").textContent = "";
  el("fillFeedback").className = "feedback";
  el("fillTable").innerHTML = drill.order
    .map((ci) => {
      const cell = drill.cells[ci];
      const locked = drill.cleared.has(ci);
      const wrapClass = locked ? "field-wrap is-correct" : "field-wrap";
      const value = locked ? `value="${cell.answer}"` : "";
      const readonly = locked ? "readonly" : "";
      return `
      <div class="fill-row">
        <div class="pronoun-cell">
          <span class="cell-verb">${cell.verb.verb}</span>
          <span class="cell-pron">${pronouns[cell.p]}</span>
        </div>
        <div class="${wrapClass}">
          <input data-index="${ci}" ${value} ${readonly} aria-label="${cell.verb.verb} ${pronouns[cell.p]}" autocomplete="off" spellcheck="false" />
          <span class="check-badge">✓</span>
        </div>
      </div>
    `;
    })
    .join("");
  updateSidebar();
}

function fillTimeout() {
  const drill = state.drills.fill;
  if (drill.done) return;
  document.querySelectorAll("#fillTable input").forEach((input) => {
    const ci = Number(input.dataset.index);
    if (drill.cleared.has(ci)) return;
    if (normalize(input.value) === normalize(drill.cells[ci].answer)) {
      if (!drill.failed.has(ci)) drill.firstTry.add(ci);
      drill.cleared.add(ci);
    } else {
      drill.failed.add(ci);
    }
  });
  drill.done = true;
  renderSummary("fill");
}

// ---- Possessivartikel (type one cell at a time, split by Kasus) -------------

// One cell per (row, owner) within a single Kasus.
function buildPossCells(kasus) {
  const cells = [];
  possRows
    .filter((row) => row.kasus === kasus)
    .forEach((row) => {
      possessors.forEach((owner, c) => {
        cells.push({ kasus, genus: row.genus, owner, answer: row.forms[c] });
      });
    });
  return cells;
}

function newPossDrill(kasus) {
  const cells = buildPossCells(kasus);
  return {
    cells,
    queue: shuffle([...cells.keys()]),
    current: null,
    firstTry: new Set(),
    failed: new Set(),
    cleared: new Set(),
    done: false,
  };
}

function startPossDrill(kasus) {
  state.poss.drills[kasus] = newPossDrill(kasus);
}

function activePossDrill() {
  const kasus = state.poss.case;
  if (!state.poss.drills[kasus]) startPossDrill(kasus);
  return state.poss.drills[kasus];
}

function renderPossCard() {
  const drill = activePossDrill();
  if (!drill.queue.length) {
    drill.done = true;
    renderPossSummary();
    return;
  }
  el("possSummary").hidden = true;
  el("possBody").hidden = false;
  const ci = drill.queue[0];
  drill.current = ci;
  const cell = drill.cells[ci];
  const total = drill.cells.length;
  el("possMeta").textContent = `${cell.kasus} · ${cell.genus} · ${drill.cleared.size}/${total}`;
  el("possPrompt").textContent = `${cell.owner} ${dots}`;
  el("possInput").value = "";
  el("possInput").disabled = false;
  el("possWrap").className = "field-wrap";
  el("possFeedback").textContent = "";
  el("possFeedback").className = "feedback";
  el("possInput").focus();
  updateSidebar();
}

function renderPossSummary() {
  const drill = activePossDrill();
  const total = drill.cells.length;
  const score = drill.firstTry.size;
  const mistakes = drill.failed.size;
  const perfect = score === total && mistakes === 0;

  const missed = [...drill.failed].sort((a, b) => a - b);
  const missedBlock = missed.length
    ? `
      <div class="missed-list">
        <div class="missed-head">What you missed</div>
        <ul>
          ${missed
            .map((ci) => {
              const cell = drill.cells[ci];
              return `<li><span class="missed-pronoun">${cell.owner} · ${cell.genus}</span><span class="missed-answer">${cell.answer}</span></li>`;
            })
            .join("")}
        </ul>
      </div>`
    : "";

  el("possBody").hidden = true;
  const summaryEl = el("possSummary");
  summaryEl.hidden = false;
  summaryEl.innerHTML = `
    <div class="summary-card">
      <div class="summary-emoji">${perfect ? "🏆" : "✅"}</div>
      <h3>${state.poss.case} complete</h3>
      <div class="summary-score">${score}<span>/${total}</span></div>
      <p class="summary-sub">${total} forms · right on first try · ${mistakes} ${mistakes === 1 ? "miss" : "misses"}</p>
      ${missedBlock}
      <button class="solid-btn restart-poss" type="button">Restart ${state.poss.case}</button>
    </div>`;
  if (perfect) fireConfetti(summaryEl.querySelector(".summary-card"));
  updateSidebar();
}

function possSubmit() {
  const drill = activePossDrill();
  if (drill.done || drill.current === null) return;
  const ci = drill.current;
  const answer = drill.cells[ci].answer;
  const isCorrect = normalize(el("possInput").value) === normalize(answer);
  el("possInput").disabled = true;

  if (isCorrect) {
    el("possWrap").className = "field-wrap is-correct";
    el("possFeedback").textContent = "";
    el("possFeedback").className = "feedback good";
    if (!drill.failed.has(ci)) drill.firstTry.add(ci);
    drill.cleared.add(ci);
    drill.queue.shift();
    setTimeout(renderPossCard, 750);
  } else {
    el("possWrap").className = "field-wrap is-wrong";
    el("possFeedback").textContent = `Answer: ${answer}`;
    el("possFeedback").className = "feedback bad";
    drill.failed.add(ci);
    drill.queue.shift();
    drill.queue.push(ci);
    setTimeout(renderPossCard, 1400);
  }
  updateSidebar();
}

function possReveal() {
  const drill = activePossDrill();
  if (drill.done || drill.current === null) return;
  const ci = drill.current;
  const answer = drill.cells[ci].answer;
  el("possInput").value = answer;
  el("possInput").disabled = true;
  el("possFeedback").textContent = `Answer: ${answer}`;
  el("possFeedback").className = "feedback";
  drill.failed.add(ci);
  drill.queue.shift();
  drill.queue.push(ci);
  setTimeout(renderPossCard, 1200);
}

function possSkip() {
  const drill = activePossDrill();
  if (drill.done) return;
  if (drill.current !== null && drill.queue.length > 1) {
    drill.queue.shift();
    drill.queue.push(drill.current);
  }
  renderPossCard();
}

function setKasus(kasus) {
  state.poss.case = kasus;
  document.querySelectorAll("#kasusTabs .kasus-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.kasus === kasus);
  });
  renderPossCard();
}

function setTrainer(trainer) {
  stopTimer();
  state.trainer = trainer;
  document.querySelectorAll(".trainer-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.trainer === trainer);
  });
  el("verbsPanel").hidden = trainer !== "verbs";
  el("possessivPanel").hidden = trainer !== "possessiv";
  el("personalPanel").hidden = trainer !== "personal";
  if (trainer === "verbs") {
    enterMode(state.activeMode);
  } else if (trainer === "possessiv") {
    setKasus(state.poss.case);
  } else {
    setPersonalKasus(state.personal.case);
  }
  updateSidebar();
}

// ---- Personalpronomen (type one cell at a time, split by Kasus) -------------

// One cell per pronoun within a single Kasus (Nominativ shown as the prompt).
function buildPersonalCells(kasus) {
  return personalPronouns.map((pron) => ({
    kasus,
    label: pron.label,
    answer: pron[kasus],
  }));
}

function newPersonalDrill(kasus) {
  const cells = buildPersonalCells(kasus);
  return {
    cells,
    queue: shuffle([...cells.keys()]),
    current: null,
    firstTry: new Set(),
    failed: new Set(),
    cleared: new Set(),
    done: false,
  };
}

function startPersonalDrill(kasus) {
  state.personal.drills[kasus] = newPersonalDrill(kasus);
}

function activePersonalDrill() {
  const kasus = state.personal.case;
  if (!state.personal.drills[kasus]) startPersonalDrill(kasus);
  return state.personal.drills[kasus];
}

function renderPersonalCard() {
  const drill = activePersonalDrill();
  if (!drill.queue.length) {
    drill.done = true;
    renderPersonalSummary();
    return;
  }
  el("ppSummary").hidden = true;
  el("ppBody").hidden = false;
  const ci = drill.queue[0];
  drill.current = ci;
  const cell = drill.cells[ci];
  const total = drill.cells.length;
  el("ppMeta").textContent = `Nominativ → ${cell.kasus} · ${drill.cleared.size}/${total}`;
  el("ppPrompt").textContent = `${cell.label} ${dots}`;
  el("ppInput").value = "";
  el("ppInput").disabled = false;
  el("ppWrap").className = "field-wrap";
  el("ppFeedback").textContent = "";
  el("ppFeedback").className = "feedback";
  el("ppInput").focus();
  updateSidebar();
}

function renderPersonalSummary() {
  const drill = activePersonalDrill();
  const total = drill.cells.length;
  const score = drill.firstTry.size;
  const mistakes = drill.failed.size;
  const perfect = score === total && mistakes === 0;

  const missed = [...drill.failed].sort((a, b) => a - b);
  const missedBlock = missed.length
    ? `
      <div class="missed-list">
        <div class="missed-head">What you missed</div>
        <ul>
          ${missed
            .map((ci) => {
              const cell = drill.cells[ci];
              return `<li><span class="missed-pronoun">${cell.label} · ${cell.kasus}</span><span class="missed-answer">${cell.answer}</span></li>`;
            })
            .join("")}
        </ul>
      </div>`
    : "";

  el("ppBody").hidden = true;
  const summaryEl = el("ppSummary");
  summaryEl.hidden = false;
  summaryEl.innerHTML = `
    <div class="summary-card">
      <div class="summary-emoji">${perfect ? "🏆" : "✅"}</div>
      <h3>${state.personal.case} complete</h3>
      <div class="summary-score">${score}<span>/${total}</span></div>
      <p class="summary-sub">${total} forms · right on first try · ${mistakes} ${mistakes === 1 ? "miss" : "misses"}</p>
      ${missedBlock}
      <button class="solid-btn restart-personal" type="button">Restart ${state.personal.case}</button>
    </div>`;
  if (perfect) fireConfetti(summaryEl.querySelector(".summary-card"));
  updateSidebar();
}

function personalSubmit() {
  const drill = activePersonalDrill();
  if (drill.done || drill.current === null) return;
  const ci = drill.current;
  const answer = drill.cells[ci].answer;
  const isCorrect = normalize(el("ppInput").value) === normalize(answer);
  el("ppInput").disabled = true;

  if (isCorrect) {
    el("ppWrap").className = "field-wrap is-correct";
    el("ppFeedback").textContent = "";
    el("ppFeedback").className = "feedback good";
    if (!drill.failed.has(ci)) drill.firstTry.add(ci);
    drill.cleared.add(ci);
    drill.queue.shift();
    setTimeout(renderPersonalCard, 750);
  } else {
    el("ppWrap").className = "field-wrap is-wrong";
    el("ppFeedback").textContent = `Answer: ${answer}`;
    el("ppFeedback").className = "feedback bad";
    drill.failed.add(ci);
    drill.queue.shift();
    drill.queue.push(ci);
    setTimeout(renderPersonalCard, 1400);
  }
  updateSidebar();
}

function personalReveal() {
  const drill = activePersonalDrill();
  if (drill.done || drill.current === null) return;
  const ci = drill.current;
  const answer = drill.cells[ci].answer;
  el("ppInput").value = answer;
  el("ppInput").disabled = true;
  el("ppFeedback").textContent = `Answer: ${answer}`;
  el("ppFeedback").className = "feedback";
  drill.failed.add(ci);
  drill.queue.shift();
  drill.queue.push(ci);
  setTimeout(renderPersonalCard, 1200);
}

function personalSkip() {
  const drill = activePersonalDrill();
  if (drill.done) return;
  if (drill.current !== null && drill.queue.length > 1) {
    drill.queue.shift();
    drill.queue.push(drill.current);
  }
  renderPersonalCard();
}

function setPersonalKasus(kasus) {
  state.personal.case = kasus;
  document.querySelectorAll("#ppTabs .kasus-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.kasus === kasus);
  });
  renderPersonalCard();
}

// ---- Mode switching ---------------------------------------------------------

function renderMode(mode) {
  if (mode === "table") renderTable();
  if (mode === "type") renderTypeCard();
  if (mode === "choice") renderChoiceCard();
  if (mode === "fill") renderFillTable();
}

function setMode(mode) {
  stopTimer();
  state.activeMode = mode;
  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  document
    .querySelectorAll(".mode-view")
    .forEach((view) => view.classList.remove("active"));
  if (!state.drills[mode]) startDrill(mode);
  enterMode(mode);
  updateSidebar();
}

// Rebuild every drill after the test set changes, then re-enter (pace gate).
function rebuildForSelection() {
  stopTimer();
  resetDrills();
  renderHero();
  renderVerbList();
  enterMode(state.activeMode);
  updateSidebar();
}

// ---- Events -----------------------------------------------------------------

el("chapterFilter").addEventListener("change", (event) => {
  state.chapter = event.target.value;
  renderVerbList();
});

el("verbSearch").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderVerbList();
});

el("verbList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-verb-global]");
  if (!button) return;
  const gi = Number(button.dataset.verbGlobal);
  if (state.selected.has(gi)) state.selected.delete(gi);
  else state.selected.add(gi);
  rebuildForSelection();
});

el("selectAllBtn").addEventListener("click", () => {
  filteredVerbs().forEach((item) => state.selected.add(verbs.indexOf(item)));
  rebuildForSelection();
});

el("clearSelBtn").addEventListener("click", () => {
  state.selected.clear();
  rebuildForSelection();
});

document.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

document.querySelectorAll(".mode-view").forEach((view) => {
  view.addEventListener("click", (event) => {
    const button = event.target.closest(".restart-btn");
    if (!button) return;
    const mode = button.dataset.mode;
    stopTimer();
    startDrill(mode);
    enterMode(mode);
    updateSidebar();
  });
});

el("paceGate").addEventListener("click", (event) => {
  const button = event.target.closest("[data-pace]");
  if (!button) return;
  choosePace(button.dataset.pace);
});

// Match (drag & drop)
el("formBank").addEventListener("dragstart", (event) => {
  const chip = event.target.closest(".form-chip");
  if (!chip) return;
  event.dataTransfer.setData("text/plain", chip.dataset.chip);
  event.dataTransfer.effectAllowed = "move";
  chip.classList.add("dragging");
});

el("formBank").addEventListener("dragend", (event) => {
  const chip = event.target.closest(".form-chip");
  if (chip) chip.classList.remove("dragging");
});

el("conjugationTable").addEventListener("dragover", (event) => {
  const slot = event.target.closest(".drop-slot");
  if (!slot) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  slot.classList.add("over");
});

el("conjugationTable").addEventListener("dragleave", (event) => {
  const slot = event.target.closest(".drop-slot");
  if (slot) slot.classList.remove("over");
});

el("conjugationTable").addEventListener("drop", (event) => {
  const slot = event.target.closest(".drop-slot");
  if (!slot) return;
  event.preventDefault();
  slot.classList.remove("over");
  placeChip(
    Number(event.dataTransfer.getData("text/plain")),
    Number(slot.dataset.slot),
  );
});

// Tap-to-place fallback (touch / accessibility)
el("formBank").addEventListener("click", (event) => {
  const chip = event.target.closest(".form-chip");
  if (!chip) return;
  const drill = state.drills.table;
  const id = Number(chip.dataset.chip);
  drill.selected = drill.selected === id ? null : id;
  renderTable();
});

el("conjugationTable").addEventListener("click", (event) => {
  const slot = event.target.closest(".drop-slot");
  if (!slot) return;
  const drill = state.drills.table;
  if (drill.done) return;
  const index = Number(slot.dataset.slot);
  if (slot.classList.contains("filled")) {
    clearSlot(index);
    return;
  }
  if (drill.selected !== null && drill.selected !== undefined) {
    placeChip(drill.selected, index);
  }
});

el("tableResetBtn").addEventListener("click", () => {
  stopTimer();
  startDrill("table");
  enterMode("table");
});

// Type
el("typeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const drill = state.drills.type;
  if (drill.done || drill.current === null) return;
  stopTimer();
  const ci = drill.current;
  const answer = drill.cells[ci].answer;
  const isCorrect = normalize(el("typeInput").value) === normalize(answer);
  el("typeInput").disabled = true;

  if (isCorrect) {
    el("typeWrap").className = "field-wrap is-correct";
    el("typeFeedback").textContent = "";
    el("typeFeedback").className = "feedback good";
    if (!drill.failed.has(ci)) drill.firstTry.add(ci);
    drill.cleared.add(ci);
    drill.queue.shift();
    setTimeout(renderTypeCard, 750);
  } else {
    el("typeWrap").className = "field-wrap is-wrong";
    el("typeFeedback").textContent = `Answer: ${answer}`;
    el("typeFeedback").className = "feedback bad";
    drill.failed.add(ci);
    drill.queue.shift();
    drill.queue.push(ci);
    setTimeout(renderTypeCard, 1400);
  }
  updateSidebar();
});

el("typeRevealBtn").addEventListener("click", () => {
  const drill = state.drills.type;
  if (drill.done || drill.current === null) return;
  stopTimer();
  const ci = drill.current;
  const answer = drill.cells[ci].answer;
  el("typeInput").value = answer;
  el("typeInput").disabled = true;
  el("typeFeedback").textContent = `Answer: ${answer}`;
  el("typeFeedback").className = "feedback";
  drill.failed.add(ci);
  drill.queue.shift();
  drill.queue.push(ci);
  setTimeout(renderTypeCard, 1200);
});

el("typeNextBtn").addEventListener("click", () => {
  const drill = state.drills.type;
  if (drill.done) return;
  stopTimer();
  if (drill.current !== null && drill.queue.length > 1) {
    drill.queue.shift();
    drill.queue.push(drill.current);
  }
  renderTypeCard();
});

// Choice
el("choiceGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice]");
  if (!button || button.disabled) return;
  const drill = state.drills.choice;
  if (drill.done || drill.current === null) return;
  stopTimer();
  const ci = drill.current;
  const answer = drill.cells[ci].answer;
  const isCorrect = button.dataset.choice === answer;

  document.querySelectorAll(".choice-btn").forEach((item) => {
    item.disabled = true;
    if (item.dataset.choice === answer) item.classList.add("correct");
  });

  if (isCorrect) {
    if (!drill.failed.has(ci)) drill.firstTry.add(ci);
    drill.cleared.add(ci);
    drill.queue.shift();
    el("choiceFeedback").textContent = "";
    el("choiceFeedback").className = "feedback good";
    setTimeout(renderChoiceCard, 750);
  } else {
    button.classList.add("wrong");
    drill.failed.add(ci);
    drill.queue.shift();
    drill.queue.push(ci);
    el("choiceFeedback").textContent = `Answer: ${answer}`;
    el("choiceFeedback").className = "feedback bad";
    setTimeout(renderChoiceCard, 1400);
  }
  updateSidebar();
});

el("choiceNextBtn").addEventListener("click", () => {
  const drill = state.drills.choice;
  if (drill.done) return;
  stopTimer();
  if (drill.current !== null && drill.queue.length > 1) {
    drill.queue.shift();
    drill.queue.push(drill.current);
  }
  renderChoiceCard();
});

// Fill
el("fillCheckBtn").addEventListener("click", () => {
  const drill = state.drills.fill;
  document.querySelectorAll("#fillTable input").forEach((input) => {
    const ci = Number(input.dataset.index);
    if (drill.cleared.has(ci)) return;
    const wrap = input.parentElement;
    const isCorrect = normalize(input.value) === normalize(drill.cells[ci].answer);
    if (isCorrect) {
      wrap.className = "field-wrap is-correct";
      input.readOnly = true;
      if (!drill.failed.has(ci)) drill.firstTry.add(ci);
      drill.cleared.add(ci);
    } else if (input.value.trim() !== "") {
      wrap.className = "field-wrap is-wrong";
      drill.failed.add(ci);
    } else {
      wrap.className = "field-wrap";
    }
  });

  if (drill.cleared.size === drill.cells.length) {
    drill.done = true;
    renderSummary("fill");
  } else {
    el("fillFeedback").textContent = `${drill.cleared.size}/${drill.cells.length} correct`;
    el("fillFeedback").className = "feedback";
  }
  updateSidebar();
});

el("fillResetBtn").addEventListener("click", () => {
  stopTimer();
  startDrill("fill");
  enterMode("fill");
});

// Trainer switch (Verbs / Possessivartikel)
el("trainerSwitch").addEventListener("click", (event) => {
  const button = event.target.closest("[data-trainer]");
  if (!button) return;
  setTrainer(button.dataset.trainer);
});

// Possessivartikel — Kasus sub-tabs
el("kasusTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-kasus]");
  if (!button) return;
  setKasus(button.dataset.kasus);
});

// Possessivartikel — type one cell at a time
el("possForm").addEventListener("submit", (event) => {
  event.preventDefault();
  possSubmit();
});

el("possRevealBtn").addEventListener("click", possReveal);
el("possNextBtn").addEventListener("click", possSkip);

el("possessivPanel").addEventListener("click", (event) => {
  if (!event.target.closest(".restart-poss")) return;
  startPossDrill(state.poss.case);
  renderPossCard();
});

// Personalpronomen — Kasus sub-tabs
el("ppTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-kasus]");
  if (!button) return;
  setPersonalKasus(button.dataset.kasus);
});

// Personalpronomen — type one cell at a time
el("ppForm").addEventListener("submit", (event) => {
  event.preventDefault();
  personalSubmit();
});

el("ppRevealBtn").addEventListener("click", personalReveal);
el("ppNextBtn").addEventListener("click", personalSkip);

el("personalPanel").addEventListener("click", (event) => {
  if (!event.target.closest(".restart-personal")) return;
  startPersonalDrill(state.personal.case);
  renderPersonalCard();
});

// ---- Init -------------------------------------------------------------------

function renderAll() {
  renderFilters();
  resetDrills();
  renderVerbList();
  renderHero();
  setMode("table");
  setTrainer("verbs");
}

renderAll();
