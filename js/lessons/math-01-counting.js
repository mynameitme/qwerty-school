/* ============================================================
   LESSON: Counting  (Mathematics)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Counting",
  intro: "Let's count! Look carefully and pick the right number.",
  explain: [
    "<b>Counting</b> means saying the numbers in order: 1, 2, 3, 4, 5… Each number is one more than the one before.",
    "When you count things, touch or point to each one so you don't miss any or count one twice.",
    "We can also count in steps. Counting in <b>2s</b>: 2, 4, 6, 8, 10. Counting in <b>10s</b>: 10, 20, 30, 40."
  ],
  questions: [
    {
      q: "How many stars? ⭐⭐⭐⭐⭐",
      options: ["4", "5", "6", "7"],
      answer: 1,
      tip: "Count them one by one: 1, 2, 3, 4, 5."
    },
    {
      q: "What number comes after 9?",
      options: ["8", "10", "11", "19"],
      answer: 1,
      tip: "…7, 8, 9, 10!"
    },
    {
      q: "What number is missing? 2, 4, 6, __, 10",
      options: ["7", "8", "9", "12"],
      answer: 1,
      tip: "We're counting in 2s: 2, 4, 6, 8, 10."
    },
    {
      q: "Which number is the biggest?",
      options: ["27", "72", "17", "71"],
      answer: 1,
      tip: "72 has 7 tens — more than any of the others."
    }
  ]
});
