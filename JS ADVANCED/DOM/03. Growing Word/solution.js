let clicks = 0;
let startPixels = 0;
function growingWord() {


  function solve() {

    const colours = ['blue', 'green', 'red'];

    const paragraph = document.getElementsByTagName('p')[2];
    paragraph.style.color = colours[clicks];
    clicks++;

    if (clicks === colours.length) {
      clicks = 0;
    }
    if (startPixels === 0) {
      startPixels = 2;
    } else {
      startPixels = Number.parseInt(paragraph.style.fontSize) * 2;
    }
    paragraph.style.fontSize = startPixels + 'px';
    console.log('Called');
  }
  solve()
}