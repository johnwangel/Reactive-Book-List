import React, { Component } from 'react';
import App from '../../components/Header';
import Book from '../../components/Book';
import './styles.css';

class BookList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Title"
            onChange={this.handleTitleChange}
            value={this.state.newTitle}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Author"
            onChange={this.handleAuthorChange}
            value={this.state.newAuthor}
          />
        </div>
        <div>
          <button type="submit">Add Book</button>
        </div>
      </form>
    );
  }
}

export default BookList;
