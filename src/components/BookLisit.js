import React  from "react";
import OpenSerach from "./OpenSearch";
import BookShelf from './BookShelf'
const  BookList = ({ listBooks, err, changeShelf, loding })=> {
  let currentReading = listBooks.filter(book => book.shelf === "currentlyReading");
  const countCurrentReadin = currentReading.length;
  let toRead = listBooks.filter(book => book.shelf === "wantToRead");
  const countToRead = toRead.length;
  let read = listBooks.filter(book => book.shelf === "read");
  const countRead = read.length;
    return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
        <div className="list-books-content">
          <React.Fragment>
            
              <BookShelf
                changeShelf={ changeShelf }
                books={ currentReading }
                title="Currently Reading"
                error={ err }
                count={ countCurrentReadin }
                loding={loding}
              /> 
            <BookShelf
              changeShelf={changeShelf}
              books={toRead}
              title="Want To Read"
              error={ err }
              count={ countToRead }
              loding={loding}
            />
            <BookShelf
              changeShelf={changeShelf}
              books={read}
              title="Read"
              error={ err }
              count={ countRead }
              loding={loding}
            />
          </React.Fragment>
            </div> 
                <OpenSerach />
            </div>
        )
    }

export default BookList