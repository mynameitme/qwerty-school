/* ============================================================
   LESSON: Space  (Science)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Space",
  intro: "Planets, stars and the Moon — let's zoom into space!",
  explain: [
    "We live on planet <b>Earth</b>. Earth travels around the <b>Sun</b>, which is a giant, very hot <b>star</b>.",
    "One full trip around the Sun takes <b>one year</b>. The <b>Moon</b> travels around Earth.",
    "There are 8 planets. <b>Mars</b> is called the Red Planet because of its rusty red dust."
  ],
  questions: [
    {
      q: "Which planet do we live on?",
      options: ["Mars", "Earth", "Jupiter", "Venus"],
      answer: 1,
      tip: "Earth is our home — the third planet from the Sun."
    },
    {
      q: "What is the Sun?",
      options: ["A planet", "A star", "A moon", "A comet"],
      answer: 1,
      tip: "The Sun is a giant star, very close to us."
    },
    {
      q: "Which planet is known as the Red Planet?",
      options: ["Mars", "Saturn", "Neptune", "Mercury"],
      answer: 0,
      tip: "Mars looks red because of rusty dust on its surface."
    },
    {
      q: "How long does Earth take to go around the Sun once?",
      options: ["One day", "One month", "One year", "One hour"],
      answer: 2,
      tip: "One full trip around the Sun = one year = 365 days."
    }
  ]
});
