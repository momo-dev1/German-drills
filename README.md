<div align="center">

# 🇩🇪 German Verb Trainer

### Master German present-tense conjugations — one verb at a time

*Reveal · Type · Choose · Fill the table*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/dependencies-0-success?style=for-the-badge)

</div>

---

## ✨ Overview

**German Verb Trainer** is a lightweight, single-page web app for drilling German
present-tense verb conjugations with the six personal pronouns
(*ich, du, er/es/sie, wir, ihr, sie/Sie*). It runs entirely in the browser — no
build step, no frameworks, no install. Just open it and start practising.

> Built around **Kapitel 1** (*Verben und Personalpronomen — sein*) and extended
> through later chapters.

---

## 🎯 Practice Modes

| Mode | What it does |
| :--- | :--- |
| 👁️ **Reveal** | Study the full conjugation table; hide and reveal forms at your own pace. |
| ⌨️ **Type** | Type the correct form for a given pronoun and get instant feedback. |
| 🔘 **Choice** | Pick the right conjugation from multiple options. |
| 📝 **Fill Table** | Complete an entire conjugation table, then check it all at once. |

---

## 📚 Verb Library

**19 verbs** spanning multiple chapters, each colour-accented by chapter:

- **Kapitel 1** — `sein`, `heißen`, `kommen`, `wohnen`
- **Kapitel 2** — `kochen`, `arbeiten`, `lesen`, `sprechen`, …
- **Kapitel 4 (Akkusativ)** — `brauchen`, `machen`, `kaufen`, `nehmen`
- **Kapitel 5** — and more

Filter by chapter or search by verb / meaning from the side panel.

---

## 🚀 Getting Started

No tooling required — it's plain HTML, CSS, and JavaScript.

```bash
# 1. Clone or download this repository
git clone <repo-url>
cd "german verb"

# 2. Open it in your browser
start index.html      # Windows
# open index.html     # macOS
# xdg-open index.html # Linux
```

> 💡 **Tip:** For the smoothest experience (and to avoid any local-file quirks),
> serve it with a tiny static server:
>
> ```bash
> python -m http.server 8000
> # then visit http://localhost:8000
> ```

---

## 🗂️ Project Structure

```
german verb/
├── index.html   # App layout & markup
├── styles.css   # Theme, panels, tables, animations
├── app.js       # Verb data + all drill logic
└── README.md    # You are here
```

---

## 🛠️ Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — responsive layout, custom theming, per-chapter accent colours
- **Vanilla JavaScript** — zero dependencies, all logic self-contained

---

<div align="center">

**Viel Erfolg beim Lernen! 🎓**

</div>
