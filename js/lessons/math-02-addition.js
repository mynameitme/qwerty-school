/* ============================================================
   LESSON: Addition  (Mathematics)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Addition",
  intro: "Adding means putting numbers together to make a bigger number.",
  explain: [
    "<b>Adding</b> means putting numbers together to make a bigger number. The sign for adding is <b>+</b>.",
    "<b>3 + 4</b>: start at 3 and count on 4 more — 4, 5, 6, 7. So 3 + 4 = <b>7</b>.",
    "A handy trick for bigger numbers: make 10 first. <b>8 + 6</b> → 8 + 2 = 10, then 4 more = <b>14</b>."
  ],
  questions: [
    {
      q: "3 + 4 = ?",
      options: ["6", "7", "8", "34"],
      answer: 1,
      tip: "Start at 3 and count 4 more: 4, 5, 6, 7."
    },
    {
      q: "5 + 5 = ?",
      options: ["10", "55", "11", "9"],
      answer: 0,
      tip: "Two hands of five fingers = 10."
    },
    {
      q: "8 + 6 = ?",
      options: ["12", "13", "14", "15"],
      answer: 2,
      tip: "8 + 2 = 10, then 4 more = 14."
    },
    {
      q: "25 + 17 = ?",
      options: ["32", "42", "41", "43"],
      answer: 1,
      tip: "25 + 15 = 40, then 2 more = 42."
    }
  ]
});
