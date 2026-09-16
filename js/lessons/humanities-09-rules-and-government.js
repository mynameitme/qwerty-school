/* ============================================================
   LESSON: Rules and government  (Humanities)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Rules and government",
  intro: "Why we have rules, and who makes the big decisions.",
  explain: [
    "<b>Rules</b> keep people safe and make things fair — at home, at school and in games.",
    "A country's rules are called <b>laws</b>, and everyone must follow them. The <b>government</b> makes the laws and runs the country.",
    "In many countries, people choose their leaders by <b>voting</b> in an <b>election</b>. At school, the <b>head teacher</b> is in charge."
  ],
  questions: [
    {
      q: "Why do we have rules?",
      options: ["To keep people safe and fair", "To make life boring", "For no reason", "Only for grown-ups"],
      answer: 0,
      tip: "Rules help everyone get along and stay safe."
    },
    {
      q: "What do we call choosing leaders by voting?",
      options: ["A race", "An election", "A party", "A lesson"],
      answer: 1,
      tip: "In an election, people vote for the person they want to lead."
    },
    {
      q: "What is a law?",
      options: ["A rule for the whole country", "A type of food", "A game", "A song"],
      answer: 0,
      tip: "Laws are rules that everyone in the country must follow."
    },
    {
      q: "Who is in charge of a school?",
      options: ["The head teacher (principal)", "The bus driver", "The students", "The cook"],
      answer: 0,
      tip: "The head teacher makes the big decisions at school."
    }
  ]
});
