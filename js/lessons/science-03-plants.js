/* ============================================================
   LESSON: Plants  (Science)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Plants",
  intro: "Plants make their own food using sunlight. Let's see how they work!",
  explain: [
    "Plants are living things that make their own food using <b>sunlight</b>. This is called <b>photosynthesis</b>.",
    "Each part has a job. <b>Roots</b> drink water from the soil. The <b>stem</b> holds the plant up. <b>Leaves</b> catch sunlight. <b>Flowers</b> make seeds.",
    "Plants give out <b>oxygen</b> — the gas we breathe. That's why trees are so important!"
  ],
  questions: [
    {
      q: "Which part of a plant takes in water from the soil?",
      options: ["Leaves", "Flower", "Roots", "Stem"],
      answer: 2,
      tip: "Roots grow underground and drink up water."
    },
    {
      q: "What do plants need to make their food?",
      options: ["Sunlight", "Darkness", "Candy", "Ice"],
      answer: 0,
      tip: "Leaves catch sunlight to make food. This is called photosynthesis."
    },
    {
      q: "Which part of the plant makes seeds?",
      options: ["Roots", "Flower", "Stem", "Leaf"],
      answer: 1,
      tip: "Flowers turn into fruits and seeds."
    },
    {
      q: "What gas do plants give out that we breathe?",
      options: ["Oxygen", "Smoke", "Helium", "Steam"],
      answer: 0,
      tip: "Plants give off oxygen — that's why trees are so important!"
    }
  ]
});
