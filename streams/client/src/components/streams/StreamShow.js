import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";

class StreamShow extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  }

  render() {
    const { stream } = this.props;
    if (!stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = stream;

    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, { match }) => {
  const id = match.params.id;
  return { stream: streams[id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
