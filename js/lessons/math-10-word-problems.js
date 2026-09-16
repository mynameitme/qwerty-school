/* ============================================================
   LESSON: Word problems  (Mathematics)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Word problems",
  intro: "Read the story, find the numbers, and work it out!",
  explain: [
    "A <b>word problem</b> is a maths question hidden inside a little story.",
    "Read it carefully, find the <b>numbers</b>, and look for clue words. <i>Altogether</i> or <i>in total</i> means <b>add</b>. <i>Left</i> or <i>fly away</i> means <b>subtract</b>. <i>Each</i> often means <b>multiply</b>.",
    "Example: <i>Sam has 4 red apples and 3 green apples.</i> The clue is <i>has</i>, so we add: 4 + 3 = <b>7</b>."
  ],
  questions: [
    {
      q: "Sam has 4 red apples and 3 green apples. How many apples does he have?",
      options: ["6", "7", "8", "12"],
      answer: 1,
      tip: "4 + 3 = 7 apples."
    },
    {
      q: "There are 12 birds on a tree. 5 fly away. How many are left?",
      options: ["5", "6", "7", "17"],
      answer: 2,
      tip: "12 − 5 = 7 birds."
    },
    {
      q: "Each box holds 6 eggs. How many eggs are in 3 boxes?",
      options: ["9", "12", "18", "24"],
      answer: 2,
      tip: "6 × 3 = 18 eggs."
    },
    {
      q: "A bus has 40 seats. 28 people are sitting. How many seats are empty?",
      options: ["12", "18", "22", "68"],
      answer: 0,
      tip: "40 − 28 = 12 empty seats."
    }
  ]
});
