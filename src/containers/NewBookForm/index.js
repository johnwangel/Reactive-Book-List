import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTitle: '',
      newAuthor: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      newTitle: event.target.value
    });
  }

  handleAuthorChange(event) {
    this.setState({
      newAuthor: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.childAddBook({
      title: this.state.newTitle,
      author: this.state.newAuthor
    });
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

export default NewBookForm;
