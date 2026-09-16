/* ============================================================
   LESSON: Light and sound  (Science)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Light and sound",
  intro: "How do we see and hear the world around us?",
  explain: [
    "<b>Light</b> lets us see. Some things make their own light, like the <b>Sun</b> and lamps. Others, like the Moon and mirrors, only <b>reflect</b> light.",
    "When something blocks light, it makes a <b>shadow</b> behind it.",
    "<b>Sound</b> is made when things <b>vibrate</b> (shake very fast). Put your hand on your throat and hum — feel it wobble! Big vibrations make loud sounds, like thunder."
  ],
  questions: [
    {
      q: "Which of these gives off its own light?",
      options: ["The Moon", "A mirror", "The Sun", "A window"],
      answer: 2,
      tip: "The Sun makes its own light. The Moon only reflects sunlight."
    },
    {
      q: "What is a shadow?",
      options: ["A dark shape where light is blocked", "A type of cloud", "A reflection", "A kind of paint"],
      answer: 0,
      tip: "When something blocks light, it makes a shadow behind it."
    },
    {
      q: "Sound is made by things that…",
      options: ["Vibrate", "Melt", "Freeze", "Glow"],
      answer: 0,
      tip: "Sound comes from vibrations — try touching your throat while you hum!"
    },
    {
      q: "Which sound is the loudest?",
      options: ["A whisper", "A clock ticking", "A thunderclap", "A pencil writing"],
      answer: 2,
      tip: "Thunder can be heard from many miles away."
    }
  ]
});
