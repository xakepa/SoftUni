function solve() {

  let rightAnswers = 0;
  let i = 0;

  const answers = Array.from(document.getElementsByClassName('answer-text'))
    .map(x => x.addEventListener('click', function evt(e) {
      if (e.target.textContent == 'onclick' ||
        e.target.textContent == 'JSON.stringify()' ||
        e.target.textContent == 'A programming API for HTML and XML documents') {
        rightAnswers++;
      }

      const currentQuestion = document.querySelectorAll('section')[i];
      const nextQuestion = document.querySelectorAll('section')[i + 1];
      currentQuestion.style.display = 'none';
      if (nextQuestion) {
        nextQuestion.style.display = 'block';
      } else {
        document.querySelector('#results').style.display = 'block';
      }
      i++;

      if (rightAnswers == 3) {
        document.querySelector('#results > li > h1').textContent = 'You are recognized as top JavaScript fan!';
      } else {
        document.querySelector('#results > li > h1').textContent = `You have ${rightAnswers} right answers`;
      }
    }))
}