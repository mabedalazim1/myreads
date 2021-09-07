import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BookList from './components/BookLisit'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'
// import { debounce } from 'throttle-debounce';
import './App.css'
import NotFound from './utils/NotFound'

class BooksApp extends React.Component {
  
  state = {
    books: [],
    err: "Ther Is No Books In This Shelf",
    serverError: undefined,
    fetchDtat :true,
  };
  componentDidMount = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books
        })
    })
      
    // .then(books => {
    //   if (!books.length) {
    //     this.setState({
    //       serverError: undefined,
    //       fetchDtat: false
    //   } );
    //   }
    //   else {
    //     this.setState({
    //       books: books,
    //       serverError: undefined,
    //       fetchDtat: false
    //     });
    // }
    // })
    //   .catch(err => {
    //     this.setState({
    //       serverError: "Ther Is An Error Loding Data .. Please Test Concation",
    //       fetchDtat:false
    //     })
    // })
  }

  changeBook = (book, shlef) => {
    book.shlef = shlef;
    this.setState(prevState => ({
      books: prevState.books.filter(b => b.id !== book.id).concat([book])
    }));
  }

  render() {
    console.log(this.state.books)
    const { books, err, fetchDtat, serverError } = this.state;
    const { changeBook } = this;
    return (
      <div className="app">
          <Switch>
          <Route exact path="/" render={ () => (
            <BookList
              fetchDtat={fetchDtat}
              books={books}
              err={err}
              serverError={serverError}  
            />
          ) } />
            <Route exact path="/search"  render={() => (
            <SearchBooks
              changeBook={changeBook}
              books={books}
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
