import React  from "react";
import BookShelfChanger from './BookShelfChanger';

const Book = ({ changeShaelf, book }) => {
  console.log(book)
  let img = book.imageLinks.smallThumbnail;
      return(
            <li>
            <div className="book">
              <div className="book-top">
              <div className="book-cover" style={ {
                width: 128, height: 193,
                backgroundImage:  `url(${img})`
              } }>
                
              </div>
              
                <BookShelfChanger changeShaelf={changeShaelf} book={book} />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors"> {book.authors}</div>
            </div>
        </li>
      )
}


export default Book