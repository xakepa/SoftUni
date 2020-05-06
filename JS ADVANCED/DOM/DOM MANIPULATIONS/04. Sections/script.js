function create(words) {
   const content = document.getElementById('content');

   words.forEach(str => {
      const createDiv = document.createElement('div');
      const createParagraph = document.createElement('p');
      createParagraph.style.display = 'none';
      createParagraph.textContent = str;
      createDiv.appendChild(createParagraph);
      content.appendChild(createDiv);
      createDiv.addEventListener('click', (e) => {
         createParagraph.style.display = 'block';
      })
   });
}