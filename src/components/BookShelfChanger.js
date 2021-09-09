import React  from "react";

function BookShelfChanger (props){
    
console.log(props)
      const{changeShaelf,book}=props
        return (
            <div className="book-shelf-changer">
                  <select value={book.shelf}
              onChange={e =>changeShaelf(book, e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
        )
}
export default BookShelfChanger