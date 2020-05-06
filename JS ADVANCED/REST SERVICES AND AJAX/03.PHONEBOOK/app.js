function attachEvents() {
    const phonebookUl = document.getElementById('phonebook');
    const loadPhonebook = document.getElementById('btnLoad');
    const createContact = document.getElementById('btnCreate');

    createContact.addEventListener('click', () => {
        const person = document.getElementById('person');
        const phone = document.getElementById('phone');

        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ person: person.value, phone: phone.value })
        })
        person.value = '';
        phone.value = '';
    })


    loadPhonebook.addEventListener('click', loadContacts);


    function loadContacts() {
        phonebookUl.innerHTML = '';

        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`)
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(([id, personData]) => {

                    const contactLi = document.createElement('li');
                    contactLi.textContent = `${personData.person}: ${personData.phone}`;
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';

                    deleteBtn.addEventListener('click', () => {
                        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`, {
                            method: 'DELETE',
                            headers: { 'Content-type': 'application/json' },
                        })
                        phonebookUl.removeChild(contactLi);
                    })

                    contactLi.appendChild(deleteBtn);
                    phonebookUl.appendChild(contactLi);
                });
            }).catch(errorHandling)
    }
    function errorHandling() {
        console.log('Unknown Error');
    }
}

attachEvents();