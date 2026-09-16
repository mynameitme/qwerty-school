/* ============================================================
   LESSON: Maps and directions  (Humanities)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Maps and directions",
  intro: "North, south, east, west — let's learn to read a map!",
  explain: [
    "A <b>map</b> is a drawing of a place from above. A book of maps is called an <b>atlas</b>.",
    "Maps use four main <b>directions</b>: <b>North, East, South, West</b>. North is usually at the top. Remember them clockwise: <i>Never Eat Soggy Waffles</i>.",
    "A <b>compass</b> has a tiny magnet needle that always points north. If you face north, east is on your right — where the sun rises."
  ],
  questions: [
    {
      q: "On most maps, which direction is at the top?",
      options: ["South", "East", "North", "West"],
      answer: 2,
      tip: "North is usually at the top. Remember: Never Eat Soggy Waffles — N, E, S, W going clockwise!"
    },
    {
      q: "Which tool always points north?",
      options: ["A ruler", "A compass", "A clock", "A calculator"],
      answer: 1,
      tip: "A compass needle is a tiny magnet that points north."
    },
    {
      q: "What do we call a book of maps?",
      options: ["An atlas", "A diary", "A novel", "A menu"],
      answer: 0,
      tip: "An atlas has maps of the whole world."
    },
    {
      q: "If you face north, which direction is on your right?",
      options: ["South", "West", "East", "North"],
      answer: 2,
      tip: "East is on your right when you face north — the same place the sun rises."
    }
  ]
});
