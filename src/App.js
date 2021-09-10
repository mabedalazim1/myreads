import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BookList from './components/BookLisit'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import NotFound from './utils/NotFound'

class BooksApp extends React.Component {
  
  state = {
    listBooks: [],
    fechErr: "",
    loding: false,
  };
  
  componentDidMount = () => {
    this.fetchListBooks();
  }

  fetchListBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        !books.length ?
          this.setState({
            fechErr: "Err On Server .. Please Try Agine",
            loding:true
          })
        :
        this.setState({
          listBooks: books,
          fechErr: "",
          loding: true,
        })
      })
  }
  
  changeShelf = (book, shelf) => {
    book.shelf = shelf;
    shelf === 'none' ?
    this.setState(prevState => ({
      listBooks: prevState.listBooks.filter(b => b.id !== book.id),
    }))
      :
    this.setState(prevState => ({
      listBooks: prevState.listBooks.filter(b => b.id !== book.id).concat([book])
    }));
    BooksAPI.update(book, shelf);
  };

  render() {

    const { listBooks, fechErr,loding } = this.state;
    const { changeShelf } = this;
    return (
      <div className="app">
          <Switch>
          <Route exact path="/" render={ () => (
            <BookList
              listBooks={listBooks}
              fechErr={ fechErr }
              changeShelf={ changeShelf }
              loding={loding}
            />
          ) } />
            <Route exact path="/search"  render={() => (
            <SearchBooks
              changeShelf={changeShelf}
              listBooks={listBooks}
            />
          )}
        />
            <Route component={NotFound}/>
          </Switch>
      </div>
    )
  }
}

export default BooksApp
