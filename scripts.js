const myLibrary = [];

function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "have been read" : "not read yet"}`;
    }

    this.toggleRead = function(){
        this.read = !this.read;
    }
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayLibrary(); 
}

function removeBookById(bookId) {
    const index = myLibrary.findIndex(book => book.id === bookId);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        displayLibrary();
    }
}

function displayLibrary(){
    const container = document.getElementById("libraryDisplay");
    container.innerHTML = "";
    
    for (const book of myLibrary){
        const card = document.createElement("div");
        card.style.border = "1px solid black";
        card.style.padding = "10px";
        card.style.margin = "10px";
        card.style.width = "200px";
        card.dataset.id = book.id;

        const info = document.createElement("p");
        info.textContent = book.info();

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            removeBookById(book.id);
        });

        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle Read";
        toggleBtn.addEventListener("click", () => {
            book.toggleRead();
            displayLibrary();
        });
        
        card.appendChild(info);
        card.appendChild(toggleBtn);
        card.appendChild(removeBtn);
        container.appendChild(card);
    }
}

const newBook = document.getElementById("newBook");
const formDialog = document.getElementById("formDialog");
const cancelBtn = document.getElementById("cancelBtn");

newBook.addEventListener("click", ()=> {
    formDialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    formDialog.close();
});

const form = document.getElementById("bookForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = bookForm.title.value;
    const author = bookForm.author.value;
    const pages = parseInt(bookForm.pages.value);
    const read = bookForm.read.checked;

    addBookToLibrary(title, author, pages, read);
    form.reset();
    formDialog.close();
});

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, true);



