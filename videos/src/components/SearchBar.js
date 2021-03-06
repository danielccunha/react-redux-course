import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    if (this.state.term.length > 0) {
      this.props.onFormSubmit(this.state.term);
    }
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
