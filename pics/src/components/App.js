import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

export default class App extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    try {
      const { data } = await unsplash.get("/search/photos", {
        params: { query: term }
      });

      this.setState({ images: data.results });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}
