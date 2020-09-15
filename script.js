let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.Read = function () {
    if (this.read === undefined) {
        this.read = "yes";
    }
    else {
        this.read = undefined;
    }
}

let bookTitle = document.querySelector('#bookTitle').value;
let booklistArray = [];

const paraList = document.querySelector('p');
const addBook = document.querySelector('#addBook');
const bookList = document.querySelector(".bookList");
const bookCard = document.querySelector("#mainCards");
const libraryBook = document.querySelector("#libraryBook");
const formBook = document.querySelector("#formBook");

function addArray() {
    let bookAuthor = document.querySelector('#bookAuthor').value;
    let bookPages = document.querySelector("#bookPages").value;
    bookTitle = document.querySelector('#bookTitle').value;
    let newBook = new Book(bookTitle, bookAuthor, bookPages);

    if (!bookTitle) {
        alert("Please enter a Title");
    } else {
        myLibrary.push(newBook);
    }
    
    booklistArray = [];
    bookCardUpdater(myLibrary);

    formBook.style.display = "none";

    return false;
}

function removeArray(id, bookToRemove) {
    myLibrary.splice(id, bookToRemove);
   
    booklistArray = [];
    bookCardUpdater(myLibrary);
    return false;
}


function bookCardUpdater(myLibrary) {
    for (var i = 0; i < myLibrary.length; i++) {
        booklistArray += `<div class="bookCard" id=${myLibrary[i].title}><img class="icon" src="./icons8-book-64.png"/><br><h1>${myLibrary[i].title}</h1><p class="bookAuthor">${myLibrary[i].author}</p><p class="bookPages">Pages: ${myLibrary[i].pages}</p>
        <br><button id="deleteBook" class="buttonDelete" onclick="removeArray(${myLibrary.indexOf(myLibrary[i])},1)" type="button">Delete</button><button id="readBook${myLibrary.indexOf(myLibrary[i])}" class="readBook" onclick="readBook(${myLibrary.indexOf(myLibrary[i])})" type="button">Mark as Read</button></div>`
    }
    bookCard.innerHTML = booklistArray;
}

function readBook (book) {
    console.log(book);
    myLibrary[book].Read();
    let buttonText = document.querySelector(`#readBook${book}`);

    if (myLibrary[book].read === 'yes'){
        buttonText.innerText = "Mark as Unread";
    } else {
        buttonText.innerText = "Mark as Read";
    }
}

function formAdd () {
        formBook.style.display = "inline";
}

addBook.addEventListener('click', addArray);
libraryBook.addEventListener('click', formAdd);
bookCardUpdater(myLibrary);

console.log(myLibrary);

