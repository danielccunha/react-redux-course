import React, { Component } from "react";
import { connect } from "react-redux";

import StreamForm from "./StreamForm";
import { createStream } from "../../actions";

class StreamCreate extends Component {
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.props.createStream} />
      </div>
    );
  }
}

export default connect(null, {
  createStream
})(StreamCreate);
