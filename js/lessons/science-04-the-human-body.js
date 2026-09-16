/* ============================================================
   LESSON: The human body  (Science)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "The human body",
  intro: "Your body is amazing! Let's learn what's inside.",
  explain: [
    "Inside your body are <b>organs</b>, each with a special job.",
    "Your <b>heart</b> pumps blood around your body — about 100,000 beats a day! Your <b>lungs</b> fill with air when you breathe. Your <b>brain</b> controls everything you think and do.",
    "Your <b>skeleton</b> holds you up. An adult has <b>206 bones</b>."
  ],
  questions: [
    {
      q: "Which organ pumps blood around your body?",
      options: ["Brain", "Heart", "Lungs", "Stomach"],
      answer: 1,
      tip: "Your heart beats about 100,000 times a day!"
    },
    {
      q: "What do you use to breathe?",
      options: ["Lungs", "Liver", "Bones", "Skin"],
      answer: 0,
      tip: "Your lungs fill with air every time you breathe in."
    },
    {
      q: "How many bones does an adult have?",
      options: ["About 50", "About 100", "About 206", "About 1000"],
      answer: 2,
      tip: "Adults have 206 bones. Babies have even more, which join together as they grow!"
    },
    {
      q: "Which organ controls your whole body?",
      options: ["Heart", "Brain", "Stomach", "Kidney"],
      answer: 1,
      tip: "Your brain sends messages to every part of your body."
    }
  ]
});
