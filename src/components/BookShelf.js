import React from "react";
import Book from './Book'

const BookShelf = props => {
    const { shelf, books, changeBook } = props;
    const bookOnShlef = books.filter(book => book.shelf === shelf.key);
    // console.log('booksOnThisShelf', booksOnThisShelf);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ books.name }</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        bookOnShlef.map(book => (
                            <Book
                    changeBook={changeBook}
                    key={book.id}
                    book={book}
                  />
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default BookShelf 