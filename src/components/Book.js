import React  from "react";
import BookShelfChanger from './BookShelfChanger';

const Book = ({ changeBook, book }) => {
  let image = book.imageLinks
  ? book.imageLinks.thumbnail
  : "https://books.google.com/googlebooks/images/no_cover_thumb.gif";
      return(
            <li>
            <div className="book">
              <div className="book-top">
              <div className="book-cover" style={ { width: 128, height: 193, backgroundImage: `url(${image})` } }>
                
              </div>
              
                <BookShelfChanger changeBook={changeBook} book={book} />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors"> {book.authors}</div>
            </div>
        </li>
      )
}


export default Book