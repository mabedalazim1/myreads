import React  from "react";


const Book = props => {
  const { changeShelf, book } = props;
  let img = book.imageLinks ?
    book.imageLinks.thumbnail
    : './no_cover_thumb.gif';
  
      return(
        <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={ {
                  width: 128, height: 193,
                  backgroundImage: `url('${img}')`,
                  backgroundSize: 'cover',
                  overflow: 'hidden',
              } }>
                  <div className="book-shelf-changer">
                    <select value={ book.shelf }
                      onChange={ e => changeShelf(book, e.target.value) }>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                  <div className="book-title">{ book.title }</div>
                  <div className="book-authors"> { book.authors }</div>
                </div>
              </div>
            </div>
          
        </li>
      )
}


export default Book