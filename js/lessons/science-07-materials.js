/* ============================================================
   LESSON: Materials  (Science)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Materials",
  intro: "Wood, metal, plastic, glass — what are things made of?",
  explain: [
    "Everything is made of <b>materials</b> — wood, metal, plastic, glass, paper, wool.",
    "Materials have <b>properties</b>. Glass is <b>transparent</b> (see-through). Wool is warm. Metal is strong and hard. Cork is light, so it <b>floats</b>.",
    "<b>Magnets</b> only stick to some metals, like <b>iron</b> and steel — not to plastic, paper or wood."
  ],
  questions: [
    {
      q: "Which material is see-through?",
      options: ["Wood", "Glass", "Metal", "Stone"],
      answer: 1,
      tip: "Glass is transparent — light passes right through it."
    },
    {
      q: "Which material does a magnet stick to?",
      options: ["Paper", "Plastic", "Iron", "Wool"],
      answer: 2,
      tip: "Magnets pull on iron and steel."
    },
    {
      q: "Which material would keep you warmest?",
      options: ["Wool", "Paper", "Glass", "Metal"],
      answer: 0,
      tip: "Wool traps warm air, which is why jumpers are made from it."
    },
    {
      q: "Which of these will float on water?",
      options: ["A stone", "A coin", "A cork", "A key"],
      answer: 2,
      tip: "Cork is very light for its size, so it floats."
    }
  ]
});
