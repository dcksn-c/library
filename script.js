/*
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.readToggle = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].readToggle();
    addBookCard();
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  addBookCard();
}

let newBookBtn = document.querySelector(".new-book-btn");
newBookBtn.addEventListener("click", function() {
    let bookForm = document.querySelector("#book-form");
    bookForm.classList.remove("hide");
})

document.querySelector("#book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
});

function addBookCard() {
    let bookForm = document.querySelector("#book-form");
    let library = document.querySelector(".library");
    library.textContent = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let bookCard = document.createElement("div");
        let book = myLibrary[i];
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.pages} pages</p>
        <div class="read-status">${book.read ? "Read" : "Not Read Yet"}</div>
        <button class="toggle-btn" onclick="toggleRead(${i})">Read Status</button>
        <button class="remove-btn" onclick="removeBook(${i})">Remove Book</button>
        `;
        library.appendChild(bookCard);
        // or change to <div class="read-status ${book.read ? "read" : "unread"}">
        let readStatus = bookCard.querySelector(".read-status");
        if (book.read) {
            readStatus.classList.add("read");
        }
        else {
            readStatus.classList.add("unread")
        }

    }

    bookForm.classList.add("hide");    
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    addBookCard();
}
*/

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    myLibrary = [];

    readToggle() {
        this.read = !this.read;
    }

    toggleRead(index) {
        this.myLibrary[index].readToggle();
        this.addBookCard();
    }

    addBookToLibrary() {
        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let pages = document.querySelector("#pages").value;
        let read = document.querySelector("#read").checked;
        let newBook = new Book(title, author, pages, read);
        this.myLibrary.push(newBook);
        this.addBookCard();
    }

    removeBook(index) {
        this.myLibrary.splice(index, 1);
        this.addBookCard();
    }

    addBookCard() {
        let bookForm = document.querySelector("#book-form");
        let library = document.querySelector(".library");
        library.textContent = "";
        for (let i = 0; i < this.myLibrary.length; i++) {
            let bookCard = document.createElement("div");
            let book = this.myLibrary[i];
            bookCard.classList.add("book-card");
            bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.pages.length > 1 ? `${book.pages} pages` : `${book.pages} page`}</p>
            <div class="read-status">${book.read ? "Read" : "Not Read Yet"}</div>
            <button class="toggle-btn" onclick="newBook.toggleRead(${i})">Read Status</button>
            <button class="remove-btn" onclick="newBook.removeBook(${i})">Remove Book</button>
            `;
            library.appendChild(bookCard);
            // or change to <div class="read-status ${book.read ? "read" : "unread"}">
            let readStatus = bookCard.querySelector(".read-status");
            if (book.read) {
                readStatus.classList.add("read");
            }
            else {
                readStatus.classList.add("unread")
            }
        }
        bookForm.classList.add("hide");    
    }
}

const newBook = new Book();

document.querySelector(".new-book-btn").addEventListener("click", function() {
    let bookForm = document.querySelector("#book-form");
    bookForm.classList.remove("hide");
})

document.querySelector("#book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    newBook.addBookToLibrary();
});

const constraint = new RegExp("^([^0-9]*)$", "");
const authorField = document.querySelector("#author");

authorField.addEventListener("input", () => {
    if (constraint.test(authorField.value)) {
        console.log("hi")
        authorField.setCustomValidity("");
    }
    else {
        authorField.setCustomValidity("Numbers are not allowed in names")
    }
})

