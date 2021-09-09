import React  from "react";
import OpenSerach from "./OpenSearch";
import BookShelf from './BookShelf'
const  BookList = ({ listBooks,fechErr,  err,changeBook, })=> {
    
  console.log(listBooks)
    let currentReading = listBooks.filter(
        book => book.shelf === "currentlyReading"
    );
    let wantToRead = listBooks.filter(book => book.shelf === "wantToRead");
    let read = listBooks.filter(book => book.shelf === "read");
    return (
      
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
               
                 
                    
                        <React.Fragment>
            <BookShelf
              changeBook={changeBook}
              books={currentReading}
              title="Currently Reading"
              error={err}
            />
            <BookShelf
              changeBook={changeBook}
              books={wantToRead}
              title="Want To Read"
              error={err}
            />
            <BookShelf
              changeBook={changeBook}
              books={read}
              title="Read"
              error={err}
            />
          </React.Fragment>
                  


            


                <OpenSerach />
            </div>
        )
    }

export default BookList