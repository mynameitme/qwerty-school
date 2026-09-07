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
const robot = document.getElementById('robot');
const startBtn = document.getElementById('startBtn');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let index = 0;
let typeTimer = null;

function typeLesson(text){
  clearInterval(typeTimer);
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

function nextLesson(){
  index = (index + 1) % lessons.length;
  typeLesson(lessons[index]);
}

robot.addEventListener('click', nextLesson);
startBtn.addEventListener('click', () => {
  index = 0;
  typeLesson(lessons[0]);
  document.getElementById('robo').scrollIntoView({behavior:'smooth'});
});

// auto-advance every 9 seconds
setInterval(nextLesson, 9000);

// kick off
typeLesson(lessons[0]);
