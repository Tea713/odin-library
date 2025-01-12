const libraryTable = document.getElementById("library");

const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("The Count of Monte Cristo", "Alexandre Dumas");
const book3 = new Book(
    "The Art of Doing Science and Engineering",
    "Richard Hamming"
);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

for (const book of myLibrary) {
    const newRow = document.createElement("tr");
    const newTitle = document.createElement("td");
    const newAuthor = document.createElement("td");

    newTitle.textContent = book.title;
    newAuthor.textContent = book.author;

    newRow.appendChild(newTitle);
    newRow.appendChild(newAuthor);

    libraryTable.appendChild(newRow);
}
