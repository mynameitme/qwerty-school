/* ============================================================
   LESSON: Telling the time  (Mathematics)
   Edit the questions below. To add one, copy a { ... } block
   and paste it after another. Keep the commas between blocks!
     options – the answers shown
     answer  – number of the correct option (0 = first, 1 = second …)
     tip     – shown after the child answers
     explain – the short lesson text shown BEFORE the quiz (one line per paragraph)
   ============================================================ */

LESSONS.push({
  title: "Telling the time",
  intro: "The short hand shows the hour, the long hand shows the minutes.",
  explain: [
    "A clock has two hands. The <b>short hand</b> points to the <b>hour</b>. The <b>long hand</b> points to the <b>minutes</b>.",
    "When the long hand points straight up to 12, it's <b>o'clock</b>. When it points down to 6, it's <b>half past</b> (30 minutes).",
    "There are <b>60 minutes</b> in an hour and <b>24 hours</b> in a day."
  ],
  questions: [
    {
      q: "How many minutes are in one hour?",
      options: ["30", "60", "100", "24"],
      answer: 1,
      tip: "There are 60 minutes in an hour."
    },
    {
      q: "When the long hand points to 6, how many minutes past is it?",
      options: ["6", "15", "30", "45"],
      answer: 2,
      tip: "6 is halfway round the clock = 30 minutes = half past."
    },
    {
      q: "How many hours are in a day?",
      options: ["12", "24", "60", "7"],
      answer: 1,
      tip: "A full day is 24 hours."
    },
    {
      q: "It is 3:00. What time will it be in 2 hours?",
      options: ["1:00", "4:00", "5:00", "3:02"],
      answer: 2,
      tip: "3 + 2 = 5, so 5:00."
    }
  ]
});
