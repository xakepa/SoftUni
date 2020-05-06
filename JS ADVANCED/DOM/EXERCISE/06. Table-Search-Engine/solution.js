function solve() {
   const db = {};

   const genAlphabet = () => {
      for (let i = 65; i < 91; i += 1) {
         db[String.fromCharCode(i)] = [];
      }
   }
   genAlphabet()

   const addBtn = document.querySelector("#exercise > article > button");
   addBtn.addEventListener('click', addToDb);

   function addToDb() {

      const input = document.querySelector("#exercise > article > input[type=text]").value;
      const firstLetter = input[0].toUpperCase();
      db.firstLetter.push(input)
      console.log(db);
      console.log('clickkkkk');
   }
}


