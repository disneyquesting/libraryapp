let myLibrary = ["test", 2, "cat"];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        if (read) {
            return `${title}, by ${author}. ${pages} pages.`
        } else {
            return `${title}, by ${author}. ${pages} pages. Not yet read.`
        }
    }
}

let bookTitle;
const paraList = document.querySelector('p');
const addBook = document.querySelector('#addBook');
const bookList = document.querySelector(".bookList");

function addArray() {
    bookTitle = document.querySelector('#bookTitle').value;
    myLibrary.push(bookTitle);
    alert(bookTitle);
    bookList.innerText = myLibrary;
    return false;
}

function removeArray() {
    bookTitle = document.querySelector('#bookTitle').value;
    myLibrary.pop(bookTitle);
    alert(bookTitle);
    bookList.innerText = myLibrary;
    return false;
}

addBook.addEventListener('click', addArray);
removeBook.addEventListener('click', removeArray);


console.log(myLibrary);

const Hitch = new Book('Hitchikers Guide', 'Douglas Adams', 200);

paraList.innerText = Hitch.info();

