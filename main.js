const libraryTable = document.getElementById("library");
const dialog = document.querySelector("dialog");
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

var count = 0;

function renderLibrary() {
    count = 0;
    while (libraryTable.rows.length > 1) {
        libraryTable.deleteRow(1);
    }

    for (const book of myLibrary) {
        count = count + 1;
        const curr = count;
        const newRow = document.createElement("tr");
        const order = document.createElement("td");
        const newTitle = document.createElement("td");
        const newAuthor = document.createElement("td");
        const newPages = document.createElement("td");
        const newReadBorder = document.createElement("td");
        const newRead = document.createElement("button");
        newRead.addEventListener("click", () => {
            myLibrary.at(curr - 1).read = !myLibrary.at(curr - 1).read;
            newRead.textContent = myLibrary.at(curr - 1).read;
        });
        const newRemoveBorder = document.createElement("td");
        const newRemove = document.createElement("button");
        newRemove.addEventListener("click", () => {
            myLibrary.splice(curr - 1, 1);
            renderLibrary();
        });

        order.textContent = count;
        newTitle.textContent = book.title;
        newAuthor.textContent = book.author;
        newPages.textContent = book.pages;
        newRead.textContent = book.read;
        newRemove.textContent = "Remove";
        newRemove.classList.add("remove-btn");

        newRow.appendChild(order);
        newRow.appendChild(newTitle);
        newRow.appendChild(newAuthor);
        newRow.appendChild(newPages);
        newRow.appendChild(newReadBorder);
        newReadBorder.appendChild(newRead);
        newRemoveBorder.appendChild(newRemove);
        newRow.appendChild(newRemoveBorder);

        libraryTable.appendChild(newRow);
    }
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
renderLibrary();

const newEntryTitle = document.getElementById("title");
const newEntryAuthor = document.getElementById("author");
const newEntryLength = document.getElementById("pages");
const newEntryStatus = document.getElementById("j");

document.getElementById("add-entry-btn").addEventListener("click", () => {
    dialog.showModal();
});

document.getElementById("save-entry-btn").addEventListener("click", (event) => {
    const form = document.getElementById("new-entry");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    event.preventDefault();
    const readType = document.querySelector(
        'input[name="read-type"]:checked'
    ).value;
    const newBook = new Book(
        newEntryTitle.value,
        newEntryAuthor.value,
        newEntryLength.value,
        readType
    );
    addBookToLibrary(newBook);
    renderLibrary();
    dialog.close();
    form.reset();
});

document.getElementById("cancel-add-btn").addEventListener("click", () => {
    dialog.close();
});
