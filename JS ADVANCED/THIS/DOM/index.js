function solve() {
   const rows = Array.from(document.getElementsByTagName('tr')).slice(1);
   rows.forEach(element => {
      element.addEventListener('click', function () {
         if (element.hasAttribute('style')) {
            element.removeAttribute('style');

         } else {
            const anotherEl = rows.find(e => e.hasAttribute('style'));
            if (anotherEl) {
               anotherEl.removeAttribute('style');
            }
            element.style.backgroundColor = "#413f5e";
         }
      })
   })
}
