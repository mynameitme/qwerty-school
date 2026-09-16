/* ============================================================
   LESSON: Reading: The lost kitten
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Reading: The lost kitten",
  intro: "Read the short story, then answer the questions.",
  explain: [
    "In this lesson you will read a short story and answer questions about it. This is called <b>reading comprehension</b>.",
    "Here is the story:",
    "<i>Mia found a small grey kitten under a bench in the park. It was cold and hungry, so she wrapped it in her scarf and took it home. Her mum gave it warm milk and they named it Pebble.</i>",
    "Read it twice, then answer the questions. If you're not sure, come back and read it again — the answers are all in the story!"
  ],
  questions: [
    {
      q: "Story: 'Mia found a small grey kitten under a bench in the park. It was cold and hungry, so she wrapped it in her scarf and took it home. Her mum gave it warm milk and they named it Pebble.'\n\nWhere did Mia find the kitten?",
      options: ["In her garden", "Under a bench in the park", "At school", "In a shop"],
      answer: 1,
      tip: "The story says 'under a bench in the park'."
    },
    {
      q: "What colour was the kitten?",
      options: ["Black", "White", "Grey", "Orange"],
      answer: 2,
      tip: "It was a small grey kitten."
    },
    {
      q: "How did Mia keep the kitten warm?",
      options: ["With a blanket", "With her scarf", "With a hat", "With a box"],
      answer: 1,
      tip: "She wrapped it in her scarf."
    },
    {
      q: "What did they name the kitten?",
      options: ["Pebble", "Mia", "Scarf", "Milky"],
      answer: 0,
      tip: "They named it Pebble."
    }
  ]
});
