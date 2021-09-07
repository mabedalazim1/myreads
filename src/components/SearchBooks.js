import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as BooksAPI from "../utils/BooksAPI";
import { debounce } from "lodash";
import Book from "./Book";

class SearchBooks extends Component{
  state = {
    query: "",
    showingBooks: [],
    error: undefined
  };
  onUpdateQuery = e => {
    const query = e.target.value;
    this.setState({
      query: query,
      error: undefined
    });
    this.searchBooks(query.trim());
  };
  searchBooks = debounce(query => {
    if (!query) {
      this.setState({ showingBooks: [] });
      return;
    }
    BooksAPI.search(query)
      .then(books => {
        if (!books || books.error) {
          this.setState({
            showingBooks: [],
            error: "No books were found, please change your search term"
          });
          return;
        }
        books = books.map(book => {
          const bookOnShelf = this.props.books.find(b => b.id === book.id);
          book.shelf = bookOnShelf ? bookOnShelf.shelf : "none";
          return book;
        });
        this.setState({ showingBooks: books });
      })
      .catch(err => {
        this.setState({
          showingBooks: [],
          error:
            "There was an error searching for books, please check your connection"
        });
      });
  }, 300);
  render() {
    const { query, showingBooks, error } = this.state;
    const { changeBook } = this.props;
    const { onUpdateQuery } = this;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={onUpdateQuery}
              value={query}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.length
              ? showingBooks.map(book => (
                  <Book
                    changeBook={changeBook}
                    key={book.id}
                    book={book}
                  />
                ))
              : query && error && <p className="error">{error}</p>}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBooks