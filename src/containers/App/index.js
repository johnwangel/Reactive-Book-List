import React, { Component } from 'react';
import Header from '../../components/Header';
import BookList from '../../components/BookList';
import NewBookForm from '../NewBookForm';
import SearchField from '../../components/BookFilterInput';
import { getBooksFromFakeXHR, addBookToFakeXHR } from '../../lib/books.db';
import './styles.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'React Book List',
      books: [],
      searchFilter: ''
    };

    this.parentAddBook = this.parentAddBook.bind(this);
    this.setSearchFilter = this.setSearchFilter.bind(this);
  }

  setSearchFilter(event) {
    const searchFilter = event.target.value;
    this.setState({ searchFilter });
  }

  parentAddBook(newBook) {
    const books = this.state.books;
    console.log(books);
    books.push(newBook);
    this.setState({
      books: books
    });
  }

  componentDidMount() {
    getBooksFromFakeXHR().then(bookList => {
      this.setState({
        books: bookList
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">This is a list of books.</p>
        <SearchField setSearchFilter={this.setSearchFilter} />
        <BookList
          books={this.state.books}
          searchFilter={this.state.searchFilter}
        />
        <NewBookForm childAddBook={this.parentAddBook} />
      </div>
    );
  }
}

export default App;
