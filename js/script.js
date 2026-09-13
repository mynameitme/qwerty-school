const lessons = [
  "Hi! I'm Robo, your robot teacher. Let's learn something fun together!",
  "Math: 2 + 2 = 4. Try it with your fingers — two fingers, then two more!",
  "Math: 5 + 5 = 10. That's all the fingers on both of your hands!",
  "English: A, E, I, O, U are special letters called vowels. Every word has at least one!",
  "Science: Plants drink water with their roots and eat sunlight with their leaves!",
  "Math: 10 − 3 = 7. Imagine 10 cookies... and someone eats 3. Yum!",
  "English: 'Cat', 'hat' and 'bat' rhyme — they all end with the same sound!",
  "Science: We breathe in air called oxygen. Trees make it for us. Thank you, trees!",
  "Math: 3 × 2 means 3 two times. 3 + 3 = 6. Easy!",
  "English: A sentence starts with a BIG letter and ends with a dot, like this one.",
  "Science: The Sun is a giant star. It gives us light and keeps us warm!",
  "Great job learning! Click a card above to pick your favorite subject!"
];

const speechText = document.getElementById('speechText');
const speechLive = document.getElementById('speechLive');
const robot = document.getElementById('robot');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const AUTO_ADVANCE_MS = 9000;
let index = 0;
let typeTimer = null;
let autoTimer = null;

function typeLesson(text){
  clearInterval(typeTimer);
  // screen readers get the whole sentence at once, not letter by letter
  if (speechLive) speechLive.textContent = text;

  if (reduceMotion){
    speechText.textContent = text;
    return;
  }
  speechText.textContent = '';
  let i = 0;
  typeTimer = setInterval(() => {
    speechText.textContent += text[i++];
    if (i >= text.length) clearInterval(typeTimer);
  }, 26);
}

function startAutoAdvance(){
  clearInterval(autoTimer);
  autoTimer = setInterval(nextLesson, AUTO_ADVANCE_MS);
}

function nextLesson(){
  index = (index + 1) % lessons.length;
  typeLesson(lessons[index]);
  startAutoAdvance();   // a click restarts the 9-second countdown
}

robot.addEventListener('click', nextLesson);

// kick off
typeLesson(lessons[0]);
startAutoAdvance();
