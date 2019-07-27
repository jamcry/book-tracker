import React from 'react';
import "./NewBookForm.css";

export default class NewBookForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      pages: 0,
      coverUrl: '',
      currentPages: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    this.props.addNewBook({...this.state});
    e.preventDefault();
  }

  render() {
    return(
      <form className="form" onSubmit={this.handleSubmit}>
        New Book
        <label>
          Title
          <input type="text" name="title" onChange={this.handleChange} />
        </label>
        <label>
          Author
          <input type="text" name="author" onChange={this.handleChange} />
        </label>
        <label>
          Pages
          <input type="number" name="pages" onChange={this.handleChange} />
        </label>
        <label>
          Current Pages
          <input type="number" name="currentPages" onChange={this.handleChange} />
        </label>
        <button className="btn">Add</button>
      </form>
    );
  }
}