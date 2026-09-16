/* ============================================================
   LESSON: Countries and capitals  (Humanities)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Countries and capitals",
  intro: "A capital is the main city where a country's government sits.",
  explain: [
    "A <b>country</b> is an area of land with its own government and flag. A <b>capital</b> is the main city, where the government works.",
    "<b>Paris</b> is the capital of France. <b>Tokyo</b> is the capital of Japan. <b>Cairo</b> is the capital of Egypt.",
    "The capital isn't always the biggest city — the capital of the USA is <b>Washington, D.C.</b>, not New York!"
  ],
  questions: [
    {
      q: "What is the capital of France?",
      options: ["Berlin", "Paris", "Rome", "Madrid"],
      answer: 1,
      tip: "Paris — home of the Eiffel Tower."
    },
    {
      q: "What is the capital of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      answer: 2,
      tip: "Tokyo is one of the biggest cities in the world."
    },
    {
      q: "What is the capital of the United States?",
      options: ["New York", "Los Angeles", "Washington, D.C.", "Chicago"],
      answer: 2,
      tip: "Washington, D.C. is where the President lives, in the White House."
    },
    {
      q: "Which country is Cairo the capital of?",
      options: ["Egypt", "Kenya", "Brazil", "India"],
      answer: 0,
      tip: "Cairo is in Egypt, near the famous pyramids."
    }
  ]
});
