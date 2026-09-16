/* ============================================================
   LESSON: Living things  (Science)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Living things",
  intro: "Living things grow, move, eat and breathe. Can you tell what's alive?",
  explain: [
    "<b>Living things</b> are alive. They <b>grow</b>, <b>move</b>, <b>eat</b> or drink, <b>breathe</b> and have babies.",
    "Animals and plants are living things. Rocks, cars and toys are <b>not</b> — they never grow or eat.",
    "All living things need <b>water</b>, <b>food</b> and <b>air</b> to stay alive. Some baby animals look very different from their parents — a baby frog is called a <b>tadpole</b>!"
  ],
  questions: [
    {
      q: "Which of these is a living thing?",
      options: ["A rock", "A tree", "A car", "A cloud"],
      answer: 1,
      tip: "A tree grows, drinks water and makes seeds — it's alive!"
    },
    {
      q: "What do all living things need to survive?",
      options: ["Water", "Toys", "Wheels", "Money"],
      answer: 0,
      tip: "Every living thing needs water, food and air."
    },
    {
      q: "Which of these is NOT alive?",
      options: ["A dog", "A flower", "A bicycle", "A bird"],
      answer: 2,
      tip: "A bicycle doesn't grow, eat or breathe."
    },
    {
      q: "Baby frogs are called…",
      options: ["Puppies", "Tadpoles", "Kittens", "Chicks"],
      answer: 1,
      tip: "Tadpoles hatch from eggs and slowly turn into frogs."
    }
  ]
});
