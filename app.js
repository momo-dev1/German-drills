const pronouns = ["ich", "du", "er/es/sie", "wir", "sie/Sie", "ihr"];
const dots = "••••";

// Fixed display order for Reveal & Fill (never shuffled):
// ich, du, er/es/sie, wir, ihr, sie/Sie
const ORDER = [0, 1, 2, 3, 5, 4];

const verbs = [
  {
    chapter: "Kapitel 1",
    mode: "Present tense",
    verb: "sein",
    meaning: "to be",
    forms: ["bin", "bist", "ist", "sind", "sind", "seid"],
    accent: "#245f78",
  },
  {
    chapter: "Kapitel 1",
    mode: "Present tense",
    verb: "heißen",
    meaning: "to be called",
    forms: ["heiße", "heißt", "heißt", "heißen", "heißen", "heißt"],
    accent: "#245f78",
  },
  {
    chapter: "Kapitel 1",
    mode: "Present tense",
    verb: "kommen",
    meaning: "to come",
    forms: ["komme", "kommst", "kommt", "kommen", "kommen", "kommt"],
    accent: "#245f78",
  },
  {
    chapter: "Kapitel 1",
    mode: "Present tense",
    verb: "wohnen",
    meaning: "to live",
    forms: ["wohne", "wohnst", "wohnt", "wohnen", "wohnen", "wohnt"],
    accent: "#245f78",
  },
  {
    chapter: "Kapitel 2",
    mode: "Present tense",
    verb: "kochen",
    meaning: "to cook",
    forms: ["koche", "kochst", "kocht", "kochen", "kochen", "kocht"],
    accent: "#6d5b92",
  },
  {
    chapter: "Kapitel 2",
    mode: "Present tense",
    verb: "arbeiten",
    meaning: "to work",
    forms: [
      "arbeite",
      "arbeitest",
      "arbeitet",
      "arbeiten",
      "arbeiten",
      "arbeitet",
    ],
    accent: "#6d5b92",
  },
  {
    chapter: "Kapitel 2",
    mode: "Present tense",
    verb: "lesen",
    meaning: "to read",
    forms: ["lese", "liest", "liest", "lesen", "lesen", "lest"],
    accent: "#6d5b92",
  },
  {
    chapter: "Kapitel 2",
    mode: "Present tense",
    verb: "sprechen",
    meaning: "to speak",
    forms: [
      "spreche",
      "sprichst",
      "spricht",
      "sprechen",
      "sprechen",
      "sprecht",
    ],
    accent: "#6d5b92",
  },
  {
    chapter: "Kapitel 2",
    mode: "Present tense",
    verb: "haben",
    meaning: "to have",
    forms: ["habe", "hast", "hat", "haben", "haben", "habt"],
    accent: "#6d5b92",
  },
  {
    chapter: "Kapitel 4",
    mode: "Present tense",
    verb: "essen",
    meaning: "to eat",
    forms: ["esse", "isst", "isst", "essen", "essen", "esst"],
    accent: "#4f7d3d",
  },
  {
    chapter: "Kapitel 4",
    mode: "Present tense",
    verb: "mögen",
    meaning: "to like",
    forms: ["mag", "magst", "mag", "mögen", "mögen", "mögt"],
    accent: "#4f7d3d",
  },
  {
    chapter: "Kapitel 4",
    mode: "Present tense",
    verb: "möchten",
    meaning: "would like",
    forms: ["möchte", "möchtest", "möchte", "möchten", "möchten", "möchtet"],
    accent: "#4f7d3d",
  },
  {
    chapter: "Kapitel 4 Akkusativ",
    mode: "Present tense",
    verb: "brauchen",
    meaning: "to need",
    forms: [
      "brauche",
      "brauchst",
      "braucht",
      "brauchen",
      "brauchen",
      "braucht",
    ],
    accent: "#9d4f60",
  },
  {
    chapter: "Kapitel 4 Akkusativ",
    mode: "Present tense",
    verb: "machen",
    meaning: "to do / make",
    forms: ["mache", "machst", "macht", "machen", "machen", "macht"],
    accent: "#9d4f60",
  },
  {
    chapter: "Kapitel 4 Akkusativ",
    mode: "Present tense",
    verb: "kaufen",
    meaning: "to buy",
    forms: ["kaufe", "kaufst", "kauft", "kaufen", "kaufen", "kauft"],
    accent: "#9d4f60",
  },
  {
    chapter: "Kapitel 4 Akkusativ",
    mode: "Present tense",
    verb: "nehmen",
    meaning: "to take",
    forms: ["nehme", "nimmst", "nimmt", "nehmen", "nehmen", "nehmt"],
    accent: "#9d4f60",
  },
  {
    chapter: "Kapitel 5",
    mode: "Modal verb",
    verb: "müssen",
    meaning: "must / have to",
    forms: ["muss", "musst", "muss", "müssen", "müssen", "müsst"],
    accent: "#4c5fb6",
  },
  {
    chapter: "Kapitel 5",
    mode: "Modal verb",
    verb: "können",
    meaning: "can / be able to",
    forms: ["kann", "kannst", "kann", "können", "können", "könnt"],
    accent: "#4c5fb6",
  },
  {
    chapter: "Kapitel 5",
    mode: "Modal verb",
    verb: "wollen",
    meaning: "to want",
    forms: ["will", "willst", "will", "wollen", "wollen", "wollt"],
    accent: "#4c5fb6",
  },
];

const TOTAL = pronouns.length;
const MODES = ["table", "type", "choice", "fill"];

const state = {
  selectedVerb: 0,
  chapter: "All",
  search: "",
  activeMode: "table",
  drills: { table: null, type: null, choice: null, fill: null },
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

function filteredVerbs() {
  let list = state.chapter === "All"
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

function currentVerb() {
  const list = filteredVerbs();
  return list[state.selectedVerb] || list[0] || verbs[0];
}

// ---- Anki-style drill state -------------------------------------------------

function newDrill() {
  const order = shuffle([...Array(TOTAL).keys()]);
  return {
    order, // stable shuffled display order (table / fill)
    queue: [...order], // remaining cards for sequential modes (type / choice)
    current: null,
    firstTry: new Set(), // cleared without ever failing
    failed: new Set(), // failed at least once
    cleared: new Set(), // solved / revealed
    done: false,
  };
}

function startDrill(mode) {
  state.drills[mode] = newDrill();
}

function resetDrills() {
  MODES.forEach((mode) => startDrill(mode));
}

function updateSidebar() {
  el("verbCount").textContent = filteredVerbs().length;
  const drill = state.drills[state.activeMode];
  if (!drill) {
    el("drillScore").textContent = `0/${TOTAL}`;
    el("drillLeft").textContent = TOTAL;
    return;
  }
  const score =
    state.activeMode === "table" ? drill.cleared.size : drill.firstTry.size;
  el("drillScore").textContent = `${score}/${TOTAL}`;
  el("drillLeft").textContent = TOTAL - drill.cleared.size;
}

// ---- Sidebar / hero ---------------------------------------------------------

function renderFilters() {
  const chapters = ["All", ...new Set(verbs.map((item) => item.chapter))];
  el("chapterFilter").innerHTML = chapters
    .map((chapter) => `<option value="${chapter}">${chapter}</option>`)
    .join("");
  el("chapterFilter").value = state.chapter;
}

function renderVerbList() {
  const list = filteredVerbs();
  if (state.selectedVerb >= list.length) state.selectedVerb = 0;
  el("verbList").innerHTML = list
    .map(
      (item, index) => `
      <button class="verb-chip ${index === state.selectedVerb ? "active" : ""}" data-verb-index="${index}" style="--accent:${item.accent}" type="button">
        <span>${item.verb}</span>
        <small>${item.chapter.replace("Kapitel ", "K")}</small>
      </button>
    `,
    )
    .join("");
  if (!list.length) {
    el("verbList").innerHTML = `<p class="empty-note">No verbs match your search.</p>`;
  }
}

function renderHero() {
  const verb = currentVerb();
  el("verbHero").style.setProperty("--accent", verb.accent);
  const meta =
    verb.mode === "Present tense"
      ? verb.chapter
      : `${verb.chapter} · ${verb.mode}`;
  el("verbHero").innerHTML = `
    <div class="hero-top">
      <div>
        <div class="hero-meta">${meta}</div>
        <div class="hero-title">${verb.verb}</div>
      </div>
      <div class="meaning-pill">${verb.meaning}</div>
    </div>
  `;
}

// ---- Summary ----------------------------------------------------------------

function renderSummary(mode) {
  const drill = state.drills[mode];
  const verb = currentVerb();
  const score = mode === "table" ? drill.cleared.size : drill.firstTry.size;
  const mistakes = drill.failed.size;
  const perfect = score === TOTAL && mistakes === 0;
  const label = mode === "table" ? "forms revealed" : "right on first try";
  const missLine =
    mode === "table"
      ? ""
      : ` · ${mistakes} ${mistakes === 1 ? "miss" : "misses"}`;

  const missed = mode === "table"
    ? []
    : [...drill.failed].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b));
  const missedBlock = missed.length
    ? `
      <div class="missed-list">
        <div class="missed-head">What you missed</div>
        <ul>
          ${missed
            .map(
              (index) =>
                `<li><span class="missed-pronoun">${pronouns[index]}</span><span class="missed-answer">${verb.forms[index]}</span></li>`,
            )
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
      <div class="summary-score">${score}<span>/${TOTAL}</span></div>
      <p class="summary-sub">${verb.verb} · ${label}${missLine}</p>
      ${missedBlock}
      <button class="solid-btn restart-btn" data-mode="${mode}" type="button">Restart drill</button>
    </div>
  `;
  updateSidebar();
}

// ---- Reveal (table) ---------------------------------------------------------

function renderTable() {
  const drill = state.drills.table;
  if (drill.done) {
    renderSummary("table");
    return;
  }
  el("tableSummary").hidden = true;
  el("tableBody").hidden = false;
  const verb = currentVerb();
  el("conjugationTable").innerHTML = ORDER
    .map((index) => {
      const pronoun = pronouns[index];
      const answer = verb.forms[index];
      const revealed = drill.cleared.has(index);
      const content = revealed
        ? `<div class="field-wrap is-correct revealed"><span class="answer-text">${answer}</span><span class="check-badge">✓</span></div>`
        : `<button class="dots-btn reveal-one" data-index="${index}" type="button">${dots}</button>`;
      return `
        <div class="conj-row">
          <div class="pronoun-cell">${pronoun}</div>
          <div class="answer-cell">${content}</div>
        </div>
      `;
    })
    .join("");
  updateSidebar();
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
  const verb = currentVerb();
  const index = drill.queue[0];
  drill.current = index;
  el("typeMeta").textContent = `${verb.chapter} · ${verb.verb} · ${drill.cleared.size}/${TOTAL}`;
  el("typePrompt").textContent = `${pronouns[index]} ${dots}`;
  el("typeInput").value = "";
  el("typeInput").disabled = false;
  el("typeWrap").className = "field-wrap";
  el("typeFeedback").textContent = "";
  el("typeFeedback").className = "feedback";
  el("typeInput").focus();
  updateSidebar();
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
  const verb = currentVerb();
  const index = drill.queue[0];
  drill.current = index;
  const answer = verb.forms[index];
  const pool = [...new Set(verb.forms)].filter((form) => form !== answer);
  const options = shuffle([answer, ...shuffle(pool).slice(0, 3)]);

  el("choiceMeta").textContent = `${verb.chapter} · ${verb.verb} · ${drill.cleared.size}/${TOTAL}`;
  el("choicePrompt").textContent = `${pronouns[index]} ${dots}`;
  el("choiceFeedback").textContent = "";
  el("choiceFeedback").className = "feedback";
  el("choiceGrid").innerHTML = options
    .map(
      (option) =>
        `<button class="choice-btn" data-choice="${option}" type="button"><span>${option}</span><span class="check-badge">✓</span></button>`,
    )
    .join("");
  updateSidebar();
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
  const verb = currentVerb();
  el("fillFeedback").textContent = "";
  el("fillFeedback").className = "feedback";
  el("fillTable").innerHTML = ORDER
    .map((index) => {
      const pronoun = pronouns[index];
      const locked = drill.cleared.has(index);
      const wrapClass = locked ? "field-wrap is-correct" : "field-wrap";
      const value = locked ? `value="${verb.forms[index]}"` : "";
      const readonly = locked ? "readonly" : "";
      return `
      <div class="fill-row">
        <div class="pronoun-cell">${pronoun}</div>
        <div class="${wrapClass}">
          <input data-index="${index}" ${value} ${readonly} aria-label="${pronoun} ${verb.verb}" autocomplete="off" spellcheck="false" />
          <span class="check-badge">✓</span>
        </div>
      </div>
    `;
    })
    .join("");
  updateSidebar();
}

// ---- Mode switching ---------------------------------------------------------

function renderMode(mode) {
  if (mode === "table") renderTable();
  if (mode === "type") renderTypeCard();
  if (mode === "choice") renderChoiceCard();
  if (mode === "fill") renderFillTable();
}

function setMode(mode) {
  state.activeMode = mode;
  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  document
    .querySelectorAll(".mode-view")
    .forEach((view) => view.classList.remove("active"));
  el(`${mode}Mode`).classList.add("active");
  if (!state.drills[mode]) startDrill(mode);
  renderMode(mode);
  updateSidebar();
}

function selectVerb(index) {
  state.selectedVerb = index;
  resetDrills();
  renderHero();
  renderVerbList();
  renderMode(state.activeMode);
  updateSidebar();
}

function refreshAfterFilter() {
  state.selectedVerb = 0;
  resetDrills();
  renderVerbList();
  renderHero();
  renderMode(state.activeMode);
  updateSidebar();
}

// ---- Events -----------------------------------------------------------------

el("chapterFilter").addEventListener("change", (event) => {
  state.chapter = event.target.value;
  refreshAfterFilter();
});

el("verbSearch").addEventListener("input", (event) => {
  state.search = event.target.value;
  refreshAfterFilter();
});

el("verbList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-verb-index]");
  if (!button) return;
  selectVerb(Number(button.dataset.verbIndex));
});

document.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

document.querySelectorAll(".mode-view").forEach((view) => {
  view.addEventListener("click", (event) => {
    const button = event.target.closest(".restart-btn");
    if (!button) return;
    const mode = button.dataset.mode;
    startDrill(mode);
    renderMode(mode);
    updateSidebar();
  });
});

// Reveal
el("conjugationTable").addEventListener("click", (event) => {
  const button = event.target.closest(".reveal-one");
  if (!button) return;
  const drill = state.drills.table;
  drill.cleared.add(Number(button.dataset.index));
  if (drill.cleared.size === TOTAL) {
    drill.done = true;
    renderSummary("table");
  } else {
    renderTable();
  }
});

el("revealAllBtn").addEventListener("click", () => {
  const drill = state.drills.table;
  drill.order.forEach((index) => drill.cleared.add(index));
  drill.done = true;
  renderSummary("table");
});

el("hideAllBtn").addEventListener("click", () => {
  startDrill("table");
  renderTable();
});

// Type
el("typeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const drill = state.drills.type;
  if (drill.done || drill.current === null) return;
  const verb = currentVerb();
  const index = drill.current;
  const answer = verb.forms[index];
  const isCorrect = normalize(el("typeInput").value) === normalize(answer);
  el("typeInput").disabled = true;

  if (isCorrect) {
    el("typeWrap").className = "field-wrap is-correct";
    el("typeFeedback").textContent = "";
    el("typeFeedback").className = "feedback good";
    if (!drill.failed.has(index)) drill.firstTry.add(index);
    drill.cleared.add(index);
    drill.queue.shift();
    setTimeout(renderTypeCard, 750);
  } else {
    el("typeWrap").className = "field-wrap is-wrong";
    el("typeFeedback").textContent = `Answer: ${answer}`;
    el("typeFeedback").className = "feedback bad";
    drill.failed.add(index);
    drill.queue.shift();
    drill.queue.push(index);
    setTimeout(renderTypeCard, 1400);
  }
  updateSidebar();
});

el("typeRevealBtn").addEventListener("click", () => {
  const drill = state.drills.type;
  if (drill.done || drill.current === null) return;
  const verb = currentVerb();
  const index = drill.current;
  el("typeInput").value = verb.forms[index];
  el("typeInput").disabled = true;
  el("typeFeedback").textContent = `Answer: ${verb.forms[index]}`;
  el("typeFeedback").className = "feedback";
  drill.failed.add(index);
  drill.queue.shift();
  drill.queue.push(index);
  setTimeout(renderTypeCard, 1200);
});

el("typeNextBtn").addEventListener("click", () => {
  const drill = state.drills.type;
  if (drill.done) return;
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
  const verb = currentVerb();
  const index = drill.current;
  const answer = verb.forms[index];
  const isCorrect = button.dataset.choice === answer;

  document.querySelectorAll(".choice-btn").forEach((item) => {
    item.disabled = true;
    if (item.dataset.choice === answer) item.classList.add("correct");
  });

  if (isCorrect) {
    if (!drill.failed.has(index)) drill.firstTry.add(index);
    drill.cleared.add(index);
    drill.queue.shift();
    el("choiceFeedback").textContent = "";
    el("choiceFeedback").className = "feedback good";
    setTimeout(renderChoiceCard, 750);
  } else {
    button.classList.add("wrong");
    drill.failed.add(index);
    drill.queue.shift();
    drill.queue.push(index);
    el("choiceFeedback").textContent = `Answer: ${answer}`;
    el("choiceFeedback").className = "feedback bad";
    setTimeout(renderChoiceCard, 1400);
  }
  updateSidebar();
});

el("choiceNextBtn").addEventListener("click", () => {
  const drill = state.drills.choice;
  if (drill.done) return;
  if (drill.current !== null && drill.queue.length > 1) {
    drill.queue.shift();
    drill.queue.push(drill.current);
  }
  renderChoiceCard();
});

// Fill
el("fillCheckBtn").addEventListener("click", () => {
  const drill = state.drills.fill;
  const verb = currentVerb();
  document.querySelectorAll("#fillTable input").forEach((input) => {
    const index = Number(input.dataset.index);
    if (drill.cleared.has(index)) return;
    const wrap = input.parentElement;
    const isCorrect = normalize(input.value) === normalize(verb.forms[index]);
    if (isCorrect) {
      wrap.className = "field-wrap is-correct";
      input.readOnly = true;
      if (!drill.failed.has(index)) drill.firstTry.add(index);
      drill.cleared.add(index);
    } else if (input.value.trim() !== "") {
      wrap.className = "field-wrap is-wrong";
      drill.failed.add(index);
    } else {
      wrap.className = "field-wrap";
    }
  });

  if (drill.cleared.size === TOTAL) {
    drill.done = true;
    renderSummary("fill");
  } else {
    el("fillFeedback").textContent = `${drill.cleared.size}/${TOTAL} correct`;
    el("fillFeedback").className = "feedback";
  }
  updateSidebar();
});

el("fillResetBtn").addEventListener("click", () => {
  startDrill("fill");
  renderFillTable();
});

// ---- Init -------------------------------------------------------------------

function renderAll() {
  renderFilters();
  resetDrills();
  renderVerbList();
  renderHero();
  setMode("table");
}

renderAll();
