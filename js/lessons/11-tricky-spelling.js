/* ============================================================
   LESSON: Tricky spelling
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Tricky spelling",
  intro: "Some words are spelled in surprising ways. Pick the right one!",
  explain: [
    "Some English words are spelled in a surprising way, and the only way to get them right is to remember them.",
    "Little tricks help: a <b>friend</b> is there to the <b>end</b>. <b>Because</b> = <b>B</b>ig <b>E</b>lephants <b>C</b>an <b>A</b>lways <b>U</b>nderstand <b>S</b>mall <b>E</b>lephants.",
    "<b>Which</b> is the question word. A <b>witch</b> rides a broomstick!"
  ],
  questions: [
    {
      q: "Which spelling is correct?",
      options: ["freind", "friend", "frend", "friende"],
      answer: 1,
      tip: "Remember: a friend is there to the END."
    },
    {
      q: "Which spelling is correct?",
      options: ["becuase", "becouse", "because", "becaus"],
      answer: 2,
      tip: "Big Elephants Can Always Understand Small Elephants!"
    },
    {
      q: "Which spelling is correct?",
      options: ["beautiful", "beutiful", "beautifull", "butiful"],
      answer: 0,
      tip: "beau-ti-ful."
    },
    {
      q: "Which spelling is correct?",
      options: ["wich", "whitch", "witch (the question word)", "which"],
      answer: 3,
      tip: "Which = the question word. Witch = the one with a broomstick!"
    }
  ]
});
