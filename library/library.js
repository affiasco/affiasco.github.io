const myLibrary = [];
const myLibraryOnPage = document.querySelector(".mylibrary");
const modalContainer = document.querySelector(".modal-container");
const form = document.querySelector(".modal-form");

class Book {
  constructor(bookValues) {
    (this.title = bookValues.title),
      (this.author = bookValues.author),
      (this.pages = bookValues.pages),
      (this.read = bookValues.read);
  }
}

function init() {
  openNewBookModal();
  closeBookModal();
  getAddBookData();
  getBooksButtons();
}

function addBookToLibrary(bookObj) {
  myLibrary.unshift(new Book(bookObj));
}

function showBooksFromLibrary(myLibrary) {
  createBookInfo(myLibrary[0]);
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
  newBook.setAttribute("data-book-card", `${myLibrary.length}`);
  setBookInfo(bookInfo, book);
}

function setBookInfo(bookInfo, book) {
  const bookTitle = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  const bookRead = document.createElement("button");
  const bookRemove = document.createElement("button");
  bookAuthor.innerText = book.author;
  bookInfo.appendChild(bookAuthor);
  bookTitle.innerText = book.title;
  bookInfo.appendChild(bookTitle);
  bookPages.innerText = book.pages;
  bookInfo.appendChild(bookPages);
  bookRead.innerText = book.read === undefined ? "Not Read" : "Read";
  bookInfo.appendChild(bookRead);
  bookRead.classList.add("book-read-btn");
  bookRead.style.background = book.read !== undefined ? "green" : "red";
  bookRemove.innerText = "Remove Book";
  bookInfo.appendChild(bookRemove);
  bookRemove.classList.add("book-remove-btn");
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
    showBooksFromLibrary(myLibrary);
  });
}

function getFormData() {
  const formData = new FormData(form);
  bookValues = {};
  for (item of formData) {
    bookValues[item[0]] = item[1];
  }
}

function getBooksButtons() {
  document.querySelector(".books-container").addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "Not Read":
        switchRead(e.target);
        break;
      case "Read":
        switchNotRead(e.target);
        break;
      case "Remove Book":
        removeBookFromPage(e.target.parentNode.parentNode);
        break;
      default:
        break;
    }
  });
}

function switchRead(eTar) {
  eTar.style.background = "green";
  eTar.innerText = "Read";
}

function switchNotRead(eTar) {
  eTar.style.background = "red";
  eTar.innerText = "Not Read";
}

function removeBookFromPage(eTarPnPn) {
  myLibraryOnPage.removeChild(eTarPnPn);
}

init();
