/* ============================================================
   LESSON: Money  (Mathematics)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Money",
  intro: "Let's add up coins and work out change.",
  explain: [
    "Money comes in <b>coins</b> and <b>notes</b>. Coins are worth different amounts, so we add them up to find the total.",
    "There are <b>100 cents</b> in 1 dollar. Two 25¢ coins make 50¢. Four 25¢ coins make $1.",
    "<b>Change</b> is the money you get back. If a toy costs $3 and you pay $5, your change is 5 − 3 = <b>$2</b>."
  ],
  questions: [
    {
      q: "How many cents are in one dollar?",
      options: ["10", "50", "100", "1000"],
      answer: 2,
      tip: "1 dollar = 100 cents."
    },
    {
      q: "You have two 25¢ coins. How much money is that?",
      options: ["25¢", "50¢", "75¢", "$1"],
      answer: 1,
      tip: "25 + 25 = 50 cents."
    },
    {
      q: "A toy costs $3. You pay with $5. How much change do you get?",
      options: ["$1", "$2", "$3", "$8"],
      answer: 1,
      tip: "5 − 3 = 2 dollars back."
    },
    {
      q: "Which is worth the most?",
      options: ["Three 10¢ coins", "One 25¢ coin", "Six 5¢ coins", "Twenty 1¢ coins"],
      answer: 0,
      tip: "Three 10¢ coins = 30¢, the biggest amount here."
    }
  ]
});
