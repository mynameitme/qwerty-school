/* ============================================================
   LESSON: Solids, liquids and gases  (Science)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Solids, liquids and gases",
  intro: "Everything is a solid, a liquid or a gas — even you!",
  explain: [
    "Everything around you is a <b>solid</b>, a <b>liquid</b> or a <b>gas</b>.",
    "<b>Solids</b> keep their shape (rock, ice, wood). <b>Liquids</b> flow and take the shape of their container (water, milk). <b>Gases</b> spread out everywhere (air, steam).",
    "Water can be all three! Ice is solid. When it warms up it <b>melts</b> into liquid water. When it boils it turns into <b>steam</b>, a gas."
  ],
  questions: [
    {
      q: "Which of these is a liquid?",
      options: ["Ice", "Milk", "Wood", "Air"],
      answer: 1,
      tip: "Liquids like milk flow and take the shape of their container."
    },
    {
      q: "Which of these is a gas?",
      options: ["Rock", "Water", "Air", "Sand"],
      answer: 2,
      tip: "You can't see air, but it's all around you — it's a gas."
    },
    {
      q: "What happens to ice when it warms up?",
      options: ["It melts into water", "It gets harder", "It turns into rock", "It floats away"],
      answer: 0,
      tip: "Solid ice melts into liquid water."
    },
    {
      q: "What is boiling water turning into?",
      options: ["Ice", "Steam", "Snow", "Sand"],
      answer: 1,
      tip: "Steam is water in gas form."
    }
  ]
});
