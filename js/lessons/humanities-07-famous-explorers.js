/* ============================================================
   LESSON: Famous explorers  (Humanities)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Famous explorers",
  intro: "Brave people who travelled to places no one had seen before.",
  explain: [
    "<b>Explorers</b> are brave people who travel to places nobody from their home has seen before.",
    "<b>Marco Polo</b> travelled from Europe to China. <b>Christopher Columbus</b> sailed across the Atlantic in 1492. <b>Amelia Earhart</b> was the first woman to fly alone across the Atlantic.",
    "In 1969, <b>Neil Armstrong</b> became the first person to walk on the <b>Moon</b>."
  ],
  questions: [
    {
      q: "Who was the first person to walk on the Moon?",
      options: ["Neil Armstrong", "Christopher Columbus", "Marco Polo", "Amelia Earhart"],
      answer: 0,
      tip: "Neil Armstrong stepped onto the Moon in 1969."
    },
    {
      q: "Christopher Columbus sailed across which ocean in 1492?",
      options: ["Pacific", "Indian", "Atlantic", "Arctic"],
      answer: 2,
      tip: "He sailed west across the Atlantic from Spain."
    },
    {
      q: "Marco Polo famously travelled from Europe to…",
      options: ["Australia", "China", "Antarctica", "Brazil"],
      answer: 1,
      tip: "Marco Polo wrote a famous book about his journey to China."
    },
    {
      q: "Amelia Earhart was famous for…",
      options: ["Climbing mountains", "Flying aeroplanes", "Sailing ships", "Riding horses"],
      answer: 1,
      tip: "She was the first woman to fly solo across the Atlantic."
    }
  ]
});
