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
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read"
    }`;
  }
}

function addBookToLibrary(bookObj) {
  myLibrary.push(bookObj);
}

function showBooksFromLibrary(myLibrary) {
  myLibrary.forEach((book) => {
    const newBook = document.createElement("div");
    myLibraryOnPage.appendChild(newBook);
    newBook.innerText = book.info();
  });
}

// --- this section will go soon ---
faket = new Book("fakeT", "FakeA", 36, true);
faket2 = new Book("fakeT2", "FakeA2", 100, false);
faket3 = new Book("fakeT3", "FakeA3", 36, true);

addBookToLibrary(faket);
addBookToLibrary(faket2);
addBookToLibrary(faket3);
// --- end ---

showBooksFromLibrary(myLibrary);
