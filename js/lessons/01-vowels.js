/* ============================================================
   LESSON: Vowels
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Vowels",
  intro: "Every word needs at least one vowel. Can you spot them?",
  explain: [
    "The alphabet has 26 letters. Five of them are special — they are called <b>vowels</b>: <b>A, E, I, O, U</b>.",
    "Every word needs at least one vowel. Try saying <b>cat</b>, <b>dog</b> or <b>sun</b> — the vowel is the sound in the middle that opens your mouth!",
    "All the other letters (like B, C, D, T…) are called <b>consonants</b>."
  ],
  questions: [
    {
      q: "Which of these letters is a vowel?",
      options: ["B", "E", "T", "S"],
      answer: 1,
      tip: "The vowels are A, E, I, O and U."
    },
    {
      q: "How many vowels are in the word 'cat'?",
      options: ["0", "1", "2", "3"],
      answer: 1,
      tip: "c-A-t — the A is the only vowel."
    },
    {
      q: "Which word has TWO vowels?",
      options: ["dog", "sun", "tree", "map"],
      answer: 2,
      tip: "t-r-E-E has two E's!"
    },
    {
      q: "Which of these is NOT a vowel?",
      options: ["A", "I", "O", "R"],
      answer: 3,
      tip: "R is a consonant. A, I and O are vowels."
    }
  ]
});
