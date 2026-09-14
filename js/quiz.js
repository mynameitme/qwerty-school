/* Quiz engine — you don't need to edit this file.
   Questions live in js/english-lessons.js */

const $ = (id) => document.getElementById(id);

/* ---------- quizzes ---------- */
const lessonList = $('lessonList');
const quiz = $('quiz');
const result = $('quizResult');

let current = null;
let qIndex = 0;
let score = 0;

function setHeading(title, intro) {
  $('lessonTitle').textContent = title;
  $('lessonIntro').textContent = intro;
}

function showLessons() {
  setHeading('Pick a quiz', 'Robo checks your answers as you go!');
  lessonList.innerHTML = '';
  LESSONS.forEach((lesson, i) => {
    const btn = document.createElement('button');
    btn.className = 'subject-btn lesson-btn';
    btn.innerHTML = `${lesson.title} <small>${lesson.questions.length} questions</small>`;
    btn.addEventListener('click', () => startLesson(i));
    lessonList.appendChild(btn);
  });
  lessonList.hidden = false;
  quiz.hidden = true;
  result.hidden = true;
}

function startLesson(i) {
  current = LESSONS[i];
  qIndex = 0;
  score = 0;
  setHeading(current.title, current.intro);
  lessonList.hidden = true;
  result.hidden = true;
  quiz.hidden = false;
  showQuestion();
}

function showQuestion() {
  const q = current.questions[qIndex];
  const total = current.questions.length;
  $('quizBar').style.width = `${(qIndex / total) * 100}%`;
  $('quizCount').textContent = `Question ${qIndex + 1} of ${total}`;
  $('quizQuestion').textContent = q.q;
  $('quizFeedback').textContent = '';
  $('quizFeedback').className = 'quiz-feedback';
  $('quizNext').hidden = true;

  const box = $('quizOptions');
  box.innerHTML = '';
  q.options.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = text;
    btn.addEventListener('click', () => choose(i, btn));
    box.appendChild(btn);
  });
}

function choose(i, btn) {
  const q = current.questions[qIndex];
  const buttons = $('quizOptions').querySelectorAll('.quiz-option');
  buttons.forEach(b => b.disabled = true);
  const fb = $('quizFeedback');
  if (i === q.answer) {
    score++;
    btn.classList.add('correct');
    fb.textContent = '✅ Correct! ' + (q.tip || '');
    fb.classList.add('ok');
  } else {
    btn.classList.add('wrong');
    buttons[q.answer].classList.add('correct');
    fb.textContent = '❌ Not quite. ' + (q.tip || '');
    fb.classList.add('err');
  }
  const next = $('quizNext');
  next.textContent = qIndex + 1 < current.questions.length ? 'Next →' : 'See my score';
  next.hidden = false;
}

$('quizNext').addEventListener('click', () => {
  qIndex++;
  if (qIndex < current.questions.length) showQuestion();
  else showResult();
});

function showResult() {
  const total = current.questions.length;
  const pct = score / total;
  quiz.hidden = true;
  result.hidden = false;
  $('quizBar').style.width = '100%';
  let emoji = '🎉', title = 'Amazing!';
  if (pct < 0.5)    { emoji = '💪'; title = 'Good try!'; }
  else if (pct < 1) { emoji = '⭐'; title = 'Well done!'; }
  $('resultEmoji').textContent = emoji;
  $('resultTitle').textContent = title;
  $('resultText').textContent = `You got ${score} out of ${total} right.`;
}

$('retryBtn').addEventListener('click', () => startLesson(LESSONS.indexOf(current)));
$('backBtn').addEventListener('click', showLessons);

/* start */
showLessons();
