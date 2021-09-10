import React from "react";
import Book from './Book'

const BookShelf = props => {
 
    const { books, changeShelf, err, title, count, loding } = props;
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ title }</h2>
            <div className="bookshelf-books">
                { !loding ? (<p>Lodding .... </p>) :
                    <ol className="books-grid">
                        { books.map(book => {
                            return (
                                <Book
                                    changeShelf={ changeShelf }
                                    key={ book.id }
                                    book={ book }
                                    err={ err }
                                />
                            )
                        })
                        }
                    </ol> }
                
                { loding && !count   ? (<p>Ther is no books on this shelf ...</p>): ""}
            </div>
        </div>
        
    )
    
}

export default BookShelf 