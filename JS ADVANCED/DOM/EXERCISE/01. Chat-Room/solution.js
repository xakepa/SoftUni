function solve() {

   const message = document.getElementById('chat_input');
   const button = document.getElementById('send');
   const divBox = document.getElementById('chat_messages');

   button.addEventListener('click', (evt) => {
      const addNewMessage = document.createElement('div');
      addNewMessage.className = "message my-message";
      addNewMessage.textContent = message.value;
      divBox.appendChild(addNewMessage);
      message.value = '';
   })
}


