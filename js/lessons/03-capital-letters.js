/* ============================================================
   LESSON: Capital letters
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Capital letters",
  intro: "Big letters go at the start of a sentence and in names.",
  explain: [
    "A <b>capital letter</b> is a big letter, like <b>A</b> instead of <b>a</b>.",
    "We use a capital letter at the <b>start of every sentence</b>: <i>The dog runs.</i>",
    "We also use capitals for <b>names</b> of people and places — <b>Emma</b>, <b>London</b>, <b>Monday</b> — and for the word <b>I</b>."
  ],
  questions: [
    {
      q: "Which sentence is written correctly?",
      options: ["the dog runs.", "The dog runs.", "the Dog runs.", "THE dog runs."],
      answer: 1,
      tip: "A sentence starts with a capital letter and ends with a full stop."
    },
    {
      q: "Which word should start with a capital letter?",
      options: ["apple", "london", "happy", "jump"],
      answer: 1,
      tip: "Names of places, like London, always get a capital letter."
    },
    {
      q: "Which one is a name and needs a capital?",
      options: ["ball", "emma", "tree", "blue"],
      answer: 1,
      tip: "People's names, like Emma, always start with a capital letter."
    }
  ]
});
