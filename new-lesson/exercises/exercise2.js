class Bookshelf {
    constructor() {
        this.favoriteBooks = [];
    }
    addFavoriteBook(bookName) {

        if (!bookName.includes("Great")) {
            this.favoriteBooks.push(bookName);
        }

    }
    printFavBooks() {
        console.log(

            `Favorite books: ${ String(this.favoriteBooks.length) }`
        );
        for (let bookName of this.favoriteBooks) {
            console.log(bookName);
        }
    }
}

function loadBooks(theBookshelf) {
    fakeAjax(BOOK_API, function onBooks(bookNames) {
        for (let bookName of bookNames) {
            theBookshelf.addFavoriteBook(bookName);
        }
        theBookshelf.printFavBooks();
    });
}
var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf();
loadBooks(myBooks);

function fakeAjax(url, cb) {
    setTimeout(function fakeLoadingDelay() {
        cb([
            "A Song of Ice and Fire",
            "The Great Gatsby",
            "Crime & Punishment",
            "Great Expectations",
            "You don't know JS"
        ])
    }, 500);
}