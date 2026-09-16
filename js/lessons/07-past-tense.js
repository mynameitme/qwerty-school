/* ============================================================
   LESSON: Past tense
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Past tense",
  intro: "Past tense tells us something already happened.",
  explain: [
    "The <b>past tense</b> tells us something has <b>already happened</b>.",
    "For most verbs, we add <b>-ed</b>: walk → walk<b>ed</b>, jump → jump<b>ed</b>, finish → finish<b>ed</b>.",
    "Some verbs are <b>irregular</b> and change completely: go → <b>went</b>, make → <b>made</b>, eat → <b>ate</b>. You just have to learn those ones!"
  ],
  questions: [
    {
      q: "Yesterday I ___ to the park.",
      options: ["walk", "walked", "walking", "walks"],
      answer: 1,
      tip: "Add -ed to make most verbs past tense: walk → walked."
    },
    {
      q: "She ___ a big cake last week.",
      options: ["make", "makes", "made", "making"],
      answer: 2,
      tip: "Make is irregular — the past tense is made."
    },
    {
      q: "We ___ to the beach on Sunday.",
      options: ["go", "goed", "went", "gone"],
      answer: 2,
      tip: "Go is irregular — the past tense is went."
    },
    {
      q: "The boy ___ his homework.",
      options: ["finished", "finishing", "finish", "finishes"],
      answer: 0,
      tip: "Finish → finished."
    }
  ]
});
