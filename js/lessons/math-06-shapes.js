/* ============================================================
   LESSON: Shapes  (Mathematics)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Shapes",
  intro: "Shapes are everywhere! How many sides can you count?",
  explain: [
    "A <b>2D shape</b> is flat, like a drawing. We describe shapes by counting their <b>sides</b> and <b>corners</b>.",
    "A <b>triangle</b> has 3 sides. A <b>square</b> has 4 equal sides. A <b>rectangle</b> has 4 sides too, but two are longer. A <b>hexagon</b> has 6.",
    "A <b>circle</b> is special — it's perfectly round with no sides and no corners at all."
  ],
  questions: [
    {
      q: "How many sides does a triangle have?",
      options: ["2", "3", "4", "5"],
      answer: 1,
      tip: "Tri- means three. A triangle has 3 sides."
    },
    {
      q: "Which shape has 4 equal sides?",
      options: ["Circle", "Triangle", "Square", "Rectangle"],
      answer: 2,
      tip: "A square has 4 sides that are all the same length."
    },
    {
      q: "Which shape has NO corners?",
      options: ["Square", "Circle", "Triangle", "Hexagon"],
      answer: 1,
      tip: "A circle is perfectly round — no corners at all."
    },
    {
      q: "How many sides does a hexagon have?",
      options: ["5", "6", "7", "8"],
      answer: 1,
      tip: "Hex- means six, like a honeycomb cell."
    }
  ]
});
