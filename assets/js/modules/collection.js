import Book from './book.js';

const titleId = document.getElementById('title');
const authorId = document.getElementById('author');
const bookContainer = document.getElementById('book_container');
const formBook = document.getElementById('book_form');

const displayBook = (library) => {
  const data = library.map(
    (book) => `
        <tr class="d-flex w-100 justify-content-between">
            <td class="align-items-center w-100 d-flex justify-content-between">
            <span><span class="fw-bold">${book.title}</span> by <span class="fst-italic">${book.author}</span>
            </span> <button id="${book.id}" onclick="col.removeElement(this)" class="btn btn-danger">Remove</button></td> 
        </tr>`,
  );
  bookContainer.innerHTML = data.join('');
};

export default class Collection {
  constructor() {
    this.library = [];
  }

  /* Add Book */
  addBook = () => {
    const id = Math.floor(Math.random() * 10000);
    const newBook = new Book(id, titleId.value, authorId.value);
    this.library.push(newBook);
    Collection.addStorage(this.library);
    displayBook(this.library);
  }

  /* Remove Storage */
  removeElement = (element) => {
    this.library = this.library.filter((i) => Number(i.id) !== Number(element.id));
    Collection.addStorage(this.library);
    displayBook(this.library);
  }

  /* Add Storage */
  static addStorage = (library) => {
    localStorage.setItem('newBook', JSON.stringify(library));
  }
}

const col = new Collection();
window.col = col;

formBook.addEventListener('submit', (e) => {
  e.preventDefault();
  col.addBook();
  titleId.value = '';
  authorId.value = '';
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('newBook')) {
    displayBook(JSON.parse(localStorage.newBook));
  }
});

export { displayBook };