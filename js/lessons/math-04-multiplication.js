/* ============================================================
   LESSON: Multiplication  (Mathematics)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Multiplication",
  intro: "Multiplying is adding the same number again and again.",
  explain: [
    "<b>Multiplying</b> is a quick way of adding the same number again and again. The sign is <b>×</b> (times).",
    "<b>2 × 3</b> means <i>2, three times</i>: 2 + 2 + 2 = <b>6</b>.",
    "Learning your <b>times tables</b> makes this fast: 5 × 4 = 20, 7 × 6 = 42, 9 × 9 = 81."
  ],
  questions: [
    {
      q: "2 × 3 = ?",
      options: ["5", "6", "8", "23"],
      answer: 1,
      tip: "2 × 3 means 2 + 2 + 2 = 6."
    },
    {
      q: "5 × 4 = ?",
      options: ["9", "15", "20", "25"],
      answer: 2,
      tip: "5, 10, 15, 20 — count in fives four times."
    },
    {
      q: "7 × 6 = ?",
      options: ["36", "42", "48", "13"],
      answer: 1,
      tip: "7 × 6 = 42. (7 × 5 = 35, plus one more 7.)"
    },
    {
      q: "9 × 9 = ?",
      options: ["72", "81", "90", "99"],
      answer: 1,
      tip: "9 × 9 = 81."
    }
  ]
});
