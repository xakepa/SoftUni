function solve() {
  let wholeText = document.querySelector('#input').innerHTML;
  const splited = wholeText.split('.');

  for (let i = 0; i < splited.length; i += 3) {
    const firstSentence = splited[i];
    const second = splited[i + 1];
    const third = splited[i + 2];

    let paragraph = '';

    if (firstSentence && second && third) {
      paragraph = [firstSentence, second, third].join('.');
    } else if (firstSentence && second) {
      paragraph = [firstSentence, second].join('.');
    } else if (firstSentence) {
      paragraph = firstSentence;
    }
    paragraph += '.';

    const p = document.createElement('p');
    const div = document.getElementById('output');
    p.textContent = paragraph;
    div.appendChild(p);
  }
}