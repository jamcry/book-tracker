import React from "react";
import "./NewBookForm.css";

export default class NewBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      pages: 0,
      coverUrl: "",
      currentPages: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    this.props.addNewBook({ ...this.state });
    e.target.reset();
    e.preventDefault();
  }

  render() {
    return (
      <div className="popup-form-wrapper">
      <form className="form" onSubmit={this.handleSubmit}>
        <h1>New Book</h1>
        <label>
          Title
          <input 
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
            required
          />
        </label>
        <label>
          Author
          <input 
            type="text"
            name="author"
            onChange={this.handleChange}
            value={this.state.author}
          />
        </label>
        <label>
          Pages
          <input 
            type="number"
            name="pages"
            onChange={this.handleChange}
            value={this.state.pages}
          />
        </label>
        <label>
          Current Pages
          <input
            type="number"
            name="currentPages"
            onChange={this.handleChange}
            value={this.state.currentPages}
          />
        </label>
        <button className="btn">Add</button>
      </form>
      </div>
    );
  }
}
