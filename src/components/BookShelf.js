import React from "react";
import Book from './Book'

const BookShelf = props => {
 
    const { books, changeBook, err, title } = props;
  
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ title }</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
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