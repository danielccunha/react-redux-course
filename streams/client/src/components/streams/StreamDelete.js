import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  }

  renderActions() {
    const id = this.props.match.params.id;
    return (
      <>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    const { stream } = this.props;
    if (!stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete the stream "${stream.title}"?`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = ({ streams }, { match }) => {
  const id = match.params.id;
  return { stream: streams[id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
