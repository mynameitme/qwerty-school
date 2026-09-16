/* ============================================================
   LESSON: Community helpers  (Humanities)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Community helpers",
  intro: "Who keeps our town safe, healthy and running?",
  explain: [
    "A <b>community</b> is all the people who live and work in the same area. Many of them have jobs that help everyone.",
    "<b>Firefighters</b> put out fires. <b>Doctors</b> and <b>nurses</b> help sick people. <b>Police officers</b> keep us safe. <b>Postal workers</b> deliver letters.",
    "<b>Farmers</b> grow the food we eat, and <b>teachers</b> help us learn."
  ],
  questions: [
    {
      q: "Who puts out fires?",
      options: ["Doctors", "Firefighters", "Teachers", "Bakers"],
      answer: 1,
      tip: "Firefighters use big trucks with long ladders and hoses."
    },
    {
      q: "Who helps you when you are sick?",
      options: ["A doctor", "A pilot", "A farmer", "A builder"],
      answer: 0,
      tip: "Doctors and nurses look after people in hospitals and clinics."
    },
    {
      q: "Who delivers letters and parcels?",
      options: ["A chef", "A postal worker", "A librarian", "A dentist"],
      answer: 1,
      tip: "Postal workers deliver mail to every house."
    },
    {
      q: "Who grows the food we eat?",
      options: ["Farmers", "Police officers", "Pilots", "Actors"],
      answer: 0,
      tip: "Farmers grow crops and raise animals for our food."
    }
  ]
});
