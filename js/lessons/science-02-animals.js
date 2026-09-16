/* ============================================================
   LESSON: Animals  (Science)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Animals",
  intro: "Mammals, birds, fish, reptiles, insects — animals come in many kinds!",
  explain: [
    "Scientists sort animals into groups. <b>Mammals</b> have fur and feed their babies milk (dogs, elephants, humans).",
    "<b>Birds</b> have feathers and lay eggs. <b>Fish</b> live in water and breathe with gills. <b>Reptiles</b> like snakes and crocodiles have scales and are cold-blooded — they warm up in the sun.",
    "<b>Insects</b> always have <b>6 legs</b>. Spiders have 8, so they're not insects!"
  ],
  questions: [
    {
      q: "Which animal is a mammal?",
      options: ["Shark", "Elephant", "Crocodile", "Butterfly"],
      answer: 1,
      tip: "Mammals have fur or hair and feed their babies milk. Elephants do!"
    },
    {
      q: "Which animal lays eggs?",
      options: ["Cow", "Cat", "Chicken", "Horse"],
      answer: 2,
      tip: "Birds like chickens lay eggs."
    },
    {
      q: "How many legs does an insect have?",
      options: ["4", "6", "8", "10"],
      answer: 1,
      tip: "All insects have 6 legs. Spiders have 8, so they're not insects!"
    },
    {
      q: "Which animal is cold-blooded?",
      options: ["Dog", "Snake", "Rabbit", "Dolphin"],
      answer: 1,
      tip: "Reptiles like snakes warm up by lying in the sun."
    }
  ]
});
