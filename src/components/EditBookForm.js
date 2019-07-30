import React from 'react';

export default class EditBookForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.data.title,
      author: props.data.author,
      pages: props.data.pages,
      coverUrl: props.data.coverUrl,
      currentPages: props.data.currentPages
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleUpdate({ ...this.state});
    // Click overlay div to close the popup
    document.querySelector('.popup-overlay').click();
  }

  render() {
    return(
      <div className="popup-form-wrapper">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>Edit Book</h1>
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
          <button className="btn">Update</button>
        </form>
      </div>
    );
  }
}