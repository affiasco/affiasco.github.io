let bookValues = {};
const myLibrary = [];
const myLibraryOnPage = document.querySelector(".mylibrary");
const modalContainer = document.querySelector(".modal-container");
const form = document.querySelector(".modal-form");

class Book {
  constructor(bookValues) {
    (this.author = bookValues.author),
      (this.title = bookValues.title),
      (this.pages = bookValues.pages),
      (this.read = bookValues.read);
  }

  info() {
    return `<p>${this.title}</p> <p>${this.author} </p> <p> ${
      this.pages
    } pages </p> <button> ${this.read ? "read" : "not read"}</button>`;
  }
}

function init() {
  showBooksFromLibrary(myLibrary);
  openNewBookModal();
  closeBookModal();
  getAddBookData();
}

function addBookToLibrary(bookObj) {
  myLibrary.push(bookObj);
}

function showBooksFromLibrary(myLibrary) {
  // this needs a check for if the item is already displayed on the page

  myLibrary.forEach((book) => {
    createBookInfo(book);
  });
}

function createBookInfo(book) {
  const newBook = document.createElement("div");
  const bookInfo = document.createElement("div");
  const bookDetails = document.createElement("p");
  newBook.classList.add("book-card");
  bookInfo.classList.add("book-info");
  bookDetails.classList.add("book-details");
  myLibraryOnPage.appendChild(newBook);
  newBook.appendChild(bookInfo);
  bookInfo.innerHTML = book.info();
}

function openNewBookModal() {
  document
    .querySelector(".add-book")
    .addEventListener("click", () => (modalContainer.style.display = "block"));
}

function closeBookModal() {
  document
    .querySelector(".close-modal")
    .addEventListener("click", () => (modalContainer.style.display = "none"));
}

function getAddBookData() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    getFormData();
    addBookToLibrary(bookValues);
  });
}

function getFormData() {
  const formData = new FormData(form);
  bookValues = {};
  for (item of formData) {
    bookValues[item[0]] = item[1];
  }
}

let fakeagain = new Book(bookValues);

init();
