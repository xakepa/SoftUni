import { get, post, put, del } from './requester.js';

const html = {
    allBooks: () => document.getElementById('allBooks'),
    getTitle: () => document.getElementById('title'),
    getAuthor: () => document.getElementById('author'),
    getIsbn: () => document.getElementById('isbn'),
    editTitle: () => document.getElementById('edit-title'),
    editAuthor: () => document.getElementById('edit-author'),
    editIsbn: () => document.getElementById('edit-isbn'),
    getEditId: () => document.getElementById('edit-id'),
    editForm: () => document.getElementById('editForm')
}

const actions = {
    'loadBooks': async function () {

        try {

            const books = await get('appdata', 'Books');
            const bookContainer = html.allBooks();
            const fragment = document.createDocumentFragment();
            bookContainer.innerHTML = '';

            books.forEach(element => {

                const tr = document.createElement('tr');
                const titleId = document.createElement('td');
                const authorTd = document.createElement('td');
                const isbnTd = document.createElement('td');
                const buttons = document.createElement('td');

                titleId.textContent = element.title;
                authorTd.textContent = element.author;
                isbnTd.textContent = element.isbn;

                const editBtn = document.createElement('button');
                const deleteBtn = document.createElement('button');
                editBtn.textContent = 'Edit';
                editBtn.setAttribute('id', element._id);
                editBtn.addEventListener('click', this['edit-book-get'])
                deleteBtn.textContent = 'Delete';
                deleteBtn.setAttribute('id', element._id);
                deleteBtn.addEventListener('click', this['delete-book']);

                buttons.append(editBtn, deleteBtn);
                tr.append(titleId, authorTd, isbnTd, buttons);
                fragment.appendChild(tr);
                bookContainer.appendChild(fragment);
            });
        } catch (error) {
            alert(error);
        }
    },
    'create-book': async function () {
        const title = html.getTitle();
        const author = html.getAuthor();
        const isbn = html.getIsbn();

        if (title.value && author.value && isbn.value) {

            const data = {
                title: title.value,
                author: author.value,
                isbn: isbn.value
            }


            try {
                await post('appdata', 'Books', data)
                title.value = '';
                author.value = '';
                isbn.value = '';
                this.loadBooks();

            } catch (error) {
                alert(error);
            }
        }

    },
    'edit-book-get': async function () {
        const id = this.id;
        try {
            const singleBook = await get('appdata', `Books/${id}`);

            const showForm = html.editForm();
            showForm.style = 'display';

            const bookId = html.getEditId();
            const title = html.editTitle();
            const author = html.editAuthor();
            const isbn = html.editIsbn();

            bookId.value = singleBook._id;
            title.value = singleBook.title;
            author.value = singleBook.author;
            isbn.value = singleBook.isbn;
            // id.value = singleBook._id;
            console.log(id);

        } catch (error) {
            alert(error)
        }
    },
    'edit-book-post': async function () {
        const id = html.getEditId();
        const title = html.editTitle();
        const author = html.editAuthor();
        const isbn = html.editIsbn();

        console.log(id);

        if (title.value && author.value && isbn.value) {

            const data = {
                title: title.value,
                author: author.value,
                isbn: isbn.value
            }


            try {
                const modifiedBook = await put('appdata', `Books/${id.value}`, data);
                actions.loadBooks();
                html.editForm().style.display = 'none'

            } catch (error) {
                alert(error)
            }
        }
    },
    'delete-book': async function () {
        if (confirm('Are you sure ?')) {
            const id = this.id;

            try {
                await del('appdata', `Books/${id}`);
                actions.loadBooks();

                (function delayedAlert() {
                    timeoutID = window.setTimeout(window.alert, 3000, 'The book has been deleted !');
                }())


            } catch (error) {

            }
        }
    },
}

function handleEvent(e) {
    if (typeof actions[e.target.id] === 'function') {
        e.preventDefault();
        actions[e.target.id]();
    }
}

(function attachEvents() {
    document.addEventListener('click', handleEvent)
}())