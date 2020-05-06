function solve() {
    const [titleInput, yearInput, priceInput] = Array.from(document.querySelectorAll('input'));
    const addButton = document.querySelector('button');
    const totalProfit = Array.from(document.querySelectorAll('h1'))[1];
    const [oldShelf, newShelf] = Array.from(document.getElementsByClassName('bookShelf'));
    let totalSum = 0;

    addButton.addEventListener('click', function (e) {
        e.preventDefault();
        const title = titleInput.value;
        const year = +yearInput.value;
        const price = +priceInput.value;

        if (title !== '' && year > 0 && price > 0) {
            if (year >= 2000) {
                createBook(false, title, year, price, newShelf);
            } else {
                createBook(true, title, year, price, oldShelf);
            }
        }
    });
    function createBook(isOld, title, year, price, shelf) {

        price = isOld ? price * 0.85 : price;
        const bookDiv = document.createElement('div');
        const paragraph = document.createElement('p');
        const buyBtn = document.createElement('button');

        bookDiv.classList.add('book');
        paragraph.textContent = `${title} [${year}]`;
        buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;

        buyBtn.addEventListener('click', function (e) {
            totalSum += price;
            this.parentNode.parentNode.removeChild(this.parentNode);
            totalProfit.textContent = `Total Store Profit: ${totalSum.toFixed(2)} BGN`;
        });

        bookDiv.appendChild(paragraph);
        bookDiv.appendChild(buyBtn);

        if (!isOld) {
            const moveBtn = document.createElement('button');
            moveBtn.textContent = 'Move to old section';
            bookDiv.appendChild(moveBtn);

            moveBtn.addEventListener('click', function (e) {
                this.parentNode.parentNode.removeChild(this.parentNode);
                createBook(true, title, year, price, oldShelf);
            })
        }
        shelf.appendChild(bookDiv);
    }
}