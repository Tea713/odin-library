const libraryTable = document.getElementById("library");
const dialog = document.querySelector("dialog");
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book("1984", "George Orwell", 368, true);
const book2 = new Book(
    "The Count of Monte Cristo",
    "Alexandre Dumas",
    1276,
    false
);
const book3 = new Book(
    "The Art of Doing Science and Engineering",
    "Richard Hamming",
    376,
    true
);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

var count = 0;

for (const book of myLibrary) {
    count = count + 1;
    const newRow = document.createElement("tr");
    const order = document.createElement("td");
    const newTitle = document.createElement("td");
    const newAuthor = document.createElement("td");
    const newPages = document.createElement("td");
    const newRead = document.createElement("td");

    order.textContent = count;
    newTitle.textContent = book.title;
    newAuthor.textContent = book.author;
    newPages.textContent = book.pages;
    newRead.textContent = book.read;

    newRow.appendChild(order);
    newRow.appendChild(newTitle);
    newRow.appendChild(newAuthor);
    newRow.appendChild(newPages);
    newRow.appendChild(newRead);

    libraryTable.appendChild(newRow);
}

document.getElementById("add-entry").addEventListener("click", () => {
    dialog.showModal();
});

document.getElementById("cancel-add").addEventListener("click", () => {
    dialog.close();
});