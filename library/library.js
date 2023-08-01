const myLibrary = [];
const myLibraryOnPage = document.querySelector(".mylibrary");

class Book {
  constructor(title, author, pages, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read);
  }

  info() {
    return `<p>${this.title}</p> <p>${this.author} </p> <p> ${
      this.pages
    } pages </p> <p> ${this.read ? "read" : "not read"}</p>`;
  }
}

function addBookToLibrary(bookObj) {
  myLibrary.push(bookObj);
}

function showBooksFromLibrary(myLibrary) {
  myLibrary.forEach((book) => {
    const newBook = document.createElement("div");
    const bookInfo = document.createElement("div");
    const bookDetails = document.createElement("p");
    newBook.classList.add("book-card");
    bookInfo.classList.add("book-info");
    bookDetails.classList.add("book-details");
    myLibraryOnPage.appendChild(newBook);
    newBook.appendChild(bookInfo);
    bookInfo.innerHTML = book.info();
  });
}

// --- this section will go soon ---
faket = new Book("fakeT", "FakeA", 36, true);
faket2 = new Book("fakeT2", "FakeA2", 100, false);
faket3 = new Book("fakeT3", "FakeA3", 36, true);
faket4 = new Book("fakeT4", "FakeA4", 36, true);
faket5 = new Book("fakeT5", "FakeA5", 36, true);

addBookToLibrary(faket);
addBookToLibrary(faket2);
addBookToLibrary(faket3);
addBookToLibrary(faket4);
addBookToLibrary(faket5);
// --- end ---

showBooksFromLibrary(myLibrary);
