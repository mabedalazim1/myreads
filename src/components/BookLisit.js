import React  from "react";
import OpenSerach from "./OpenSearch";
import BookShelf from './BookShelf'
const  BookList = ({
    books,
    err,
    fetchDtat,
    serverError,
    changeBook,
  })=> {
    
    console.log(books)
    let currentReading = books.filter(
        book => book.shelf === "currentlyReading"
    );
    let wantRead = books.filter(book => book.shelf === "wantToRead");
    let readBook = books.filter(book => book.shelf === "read");
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                { books.map((shlef,key) => {
                    return (
                    
                            <BookShelf
                                key={shlef.id}
                                changeBook={changeBook}
                                books={currentReading}
                                title="Currently Reading"
                                err={err}
                        />
                    )
                })}


                <OpenSerach />
            </div>
        )
    }

export default BookList