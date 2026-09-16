/* ============================================================
   LESSON: One or many?
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "One or many?",
  intro: "Plurals mean more than one. Usually we just add an S!",
  explain: [
    "When there is only one thing, we say <b>one dog</b>. When there are more, we say <b>two dogs</b>. That extra <b>-s</b> makes the word <b>plural</b>, which means <i>more than one</i>.",
    "Most words just add <b>-s</b>: cat → cats. Words that end in <b>x, s, sh or ch</b> add <b>-es</b>: box → boxes.",
    "A few words are special and change completely: one <b>child</b>, many <b>children</b>; one <b>mouse</b>, many <b>mice</b>."
  ],
  questions: [
    {
      q: "What is the plural of 'dog'?",
      options: ["dogs", "doges", "dogies", "dog"],
      answer: 0,
      tip: "One dog, two dogs — just add S."
    },
    {
      q: "What is the plural of 'box'?",
      options: ["boxs", "boxes", "boxies", "boxen"],
      answer: 1,
      tip: "Words ending in X add -ES: box → boxes."
    },
    {
      q: "What is the plural of 'child'?",
      options: ["childs", "childes", "children", "childrens"],
      answer: 2,
      tip: "Some words are special! One child, many children."
    }
  ]
});
