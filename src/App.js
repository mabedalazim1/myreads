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
    fechErr: ""
  };
  componentDidMount = () => {
    this.fetchListBooks();
  }

  fetchListBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        !books.length ?
          this.setState({fechErr:"Err On Server"})
        :
        this.setState({
          listBooks: books,
          fechErr :""
        })
      })
  }

  changeShaelf = (book, shelf) => {
    book.shelf = shelf;
    this.setState(prevState => ({
      books: prevState.listBooks.filter(b => b.id !== book.id).concat([book])
    }));
    BooksAPI.update(book, shelf);
  };

  render() {

    const { listBooks, fechErr } = this.state;
    const { changeShaelf } = this;
    return (
      <div className="app">
          <Switch>
          <Route exact path="/" render={ () => (
            <BookList
              listBooks={listBooks}
              fechErr={fechErr} 
            />
          ) } />
            <Route exact path="/search"  render={() => (
            <SearchBooks
            changeShaelf={changeShaelf}
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
