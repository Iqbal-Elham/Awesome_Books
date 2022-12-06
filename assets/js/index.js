/* eslint-disable-next-line no-unused-vars */
import { displayBook } from './modules/collection.js';
import { DateTime } from './modules/luxon.js';

const displayPage = (section) => {
  const bookList = document.getElementById('book_list');
  const bookForm = document.getElementById('add_book_form');
  const contact = document.getElementById('contact');
  const mainH1 = document.getElementById('main_h1');

  if (section === 'list') {
    bookList.style.display = 'block';
    bookForm.style.display = 'none';
    contact.style.display = 'none';
    mainH1.innerHTML = 'Awesome Book App';
  } else if (section === 'form') {
    bookForm.style.display = 'block';
    bookList.style.display = 'none';
    contact.style.display = 'none';

    mainH1.innerHTML = 'Add New Book';
  } else if (section === 'contact') {
    contact.style.display = 'block';
    bookList.style.display = 'none';
    bookForm.style.display = 'none';
    mainH1.innerHTML = 'Contact';
  }
};

window.displayPage = displayPage;
document.getElementById('time').innerHTML = DateTime.now().toFormat('LLL dd yyyy, t');
