import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

import StreamForm from "./StreamForm";
import { fetchStream, editStream } from "../../actions";

class StreamEdit extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  }

  onSubmit = values => {
    const { stream } = this.props;
    this.props.editStream(stream.id, { ...stream, ...values });
  };

  render() {
    const { stream } = this.props;
    if (!stream) {
      return null;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(stream, "title", "description")}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, { match }) => ({
  stream: streams[match.params.id]
});

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
