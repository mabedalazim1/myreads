import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as BooksAPI from "../utils/BooksAPI";
import Book from "./Book";

class SearchBooks extends Component{
  state = {
    query: "",
    err: "",
    newBooks: []
  };

  updateQuery = e => {
    const query = e.target.value;
    this.setState({
      query: query,
      err: "",
      newBooks :[]
    });
    this.searchData(query.trim());
  };

  searchData = (query => {
    if (!query) {
      this.setState({ newBooks: [] });
      return;
    }
    BooksAPI.search(query)
      .then(books => {
        if (!books || books.error) {
          this.setState({
            newBooks: [],
            err: "Your Book Is Not Found ... Can you serach again?"
          });
          return;
        }
        books = books.map(book => {
          const bookShelf = this.props.listBooks.find(b => b.id === book.id);
          book.shelf = bookShelf ? bookShelf.shelf : "none";
          return book;
        });
        this.setState({ newBooks: books });
      })
      .catch(err => {
        this.setState({
          newBooks: [],
          error:err
        });
      });
  });
  render() {
    const { query, err, newBooks } = this.state;
    const { changeShaelf } = this.props;
    const { updateQuery } = this;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={ updateQuery}
              value={query}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {newBooks.length
              ? newBooks.map(book => (
                  <Book
                    changeShaelf={changeShaelf}
                    key={book.id}
                    book={book}
                  />
                ))
              : err && query && <div className="err">{err}</div>}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBooks