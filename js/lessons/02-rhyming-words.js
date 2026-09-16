/* ============================================================
   LESSON: Rhyming words
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Rhyming words",
  intro: "Words that end with the same sound rhyme — like cat and hat.",
  explain: [
    "Words <b>rhyme</b> when they end with the same sound. <b>Cat</b>, <b>hat</b> and <b>bat</b> all rhyme because they end in <b>-at</b>.",
    "To check if two words rhyme, say them out loud and listen to the ending. <b>Star</b> and <b>car</b>? Yes! <b>Star</b> and <b>moon</b>? No.",
    "Rhymes are everywhere — in songs, poems and nursery rhymes."
  ],
  questions: [
    {
      q: "Which word rhymes with 'cat'?",
      options: ["dog", "hat", "cup", "sun"],
      answer: 1,
      tip: "cat, hat, bat, mat — they all end in -at."
    },
    {
      q: "Which word rhymes with 'star'?",
      options: ["car", "moon", "sky", "big"],
      answer: 0,
      tip: "star and car both end in -ar."
    },
    {
      q: "Which word does NOT rhyme with 'pen'?",
      options: ["hen", "ten", "men", "pig"],
      answer: 3,
      tip: "pig ends in -ig, the others end in -en."
    }
  ]
});
