function solve() {
   const [filterInput, nameInput, quantityInput, priceInput] = Array.from(document.querySelectorAll('input'));
   const [filterBtn, addBtn, buyBtn] = document.querySelectorAll('button');
   const products = [];

   addBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const availableProductsUnorderedList = document.querySelector("#products > ul");
      const list = document.createElement('li');
      const spanName = document.createElement('span');
      const strongQuantity = document.createElement('strong');
      const div = document.createElement('div');
      const strongPrice = document.createElement('strong');
      const addToClientList = document.createElement('button');
      products.push(nameInput.value);


      spanName.textContent = nameInput.value;
      strongQuantity.textContent = `Available: ${quantityInput.value}`;
      strongPrice.textContent = priceInput.value;
      addToClientList.textContent = 'Add to Client\'s List';

      list.appendChild(spanName);
      list.appendChild(strongQuantity);
      list.appendChild(div);
      div.appendChild(strongPrice.toFixed(2));
      div.appendChild(addToClientList);
      availableProductsUnorderedList.appendChild(list);

   })

   addToClientList.addEventListener('click', () => {

   })

   filterBtn.addEventListener('click', function (e) {
      const searchField = filterInput.value;
      let regex = new RegExp(searchField.value, 'gim');
   })
}