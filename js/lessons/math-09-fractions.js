/* ============================================================
   LESSON: Fractions  (Mathematics)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Fractions",
  intro: "A fraction is a part of a whole — like a slice of pizza!",
  explain: [
    "A <b>fraction</b> is a part of a whole. Think of a pizza cut into equal slices.",
    "<b>1/2</b> (a half) means 1 piece out of 2. <b>1/4</b> (a quarter) means 1 piece out of 4.",
    "The bottom number tells you how many pieces the whole is cut into — so the <b>bigger</b> the bottom number, the <b>smaller</b> each piece. Half of 10 is 5, and a quarter of 20 is 5."
  ],
  questions: [
    {
      q: "A pizza is cut into 4 equal slices. You eat 1. What fraction did you eat?",
      options: ["1/2", "1/3", "1/4", "4/1"],
      answer: 2,
      tip: "1 slice out of 4 = one quarter = 1/4."
    },
    {
      q: "What is half of 10?",
      options: ["2", "5", "8", "20"],
      answer: 1,
      tip: "Half means split into 2 equal parts: 10 ÷ 2 = 5."
    },
    {
      q: "Which fraction is the biggest?",
      options: ["1/2", "1/3", "1/4", "1/8"],
      answer: 0,
      tip: "The smaller the bottom number, the bigger each piece. 1/2 is the biggest."
    },
    {
      q: "What is 1/4 of 20?",
      options: ["4", "5", "10", "15"],
      answer: 1,
      tip: "20 ÷ 4 = 5."
    }
  ]
});
