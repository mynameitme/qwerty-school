/* ============================================================
   LESSON: Forces and magnets  (Science)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Forces and magnets",
  intro: "Pushes, pulls and things that make objects move.",
  explain: [
    "A <b>force</b> is a <b>push</b> or a <b>pull</b>. Kicking a ball is a push. Opening a drawer is a pull.",
    "<b>Gravity</b> is the force that pulls everything down to the ground. <b>Friction</b> is the rubbing force that makes things slow down and stop.",
    "<b>Magnets</b> have two ends called <b>poles</b>. Opposite poles pull together (attract). Same poles push apart (repel)."
  ],
  questions: [
    {
      q: "What pulls things down towards the ground?",
      options: ["Gravity", "Wind", "Magic", "Light"],
      answer: 0,
      tip: "Gravity is the force that makes things fall."
    },
    {
      q: "Which is a PULL?",
      options: ["Kicking a ball", "Opening a drawer", "Pushing a door", "Throwing a stone"],
      answer: 1,
      tip: "You pull a drawer towards you."
    },
    {
      q: "What happens when two magnet north poles meet?",
      options: ["They stick together", "They push apart", "They melt", "Nothing"],
      answer: 1,
      tip: "Same poles push apart (repel); opposite poles pull together (attract)."
    },
    {
      q: "What makes a rolling ball slow down and stop?",
      options: ["Friction", "Sunlight", "Sound", "Colour"],
      answer: 0,
      tip: "Friction is the rubbing force between the ball and the ground."
    }
  ]
});
