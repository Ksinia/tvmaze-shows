import React, { Component } from "react";
import { connect } from "react-redux";
import { loadShow } from "../actions";
import Show from "./Show";

class ShowContainer extends Component {
  showId = this.props.match.params.showId;

  componentDidMount() {
    this.props.dispatch(loadShow(this.showId));
  }

  render() {
    return <Show show={this.props.show} />;
  }
}

function mapStateToProps(state) {
  return { show: state.show };
}

export default connect(mapStateToProps)(ShowContainer);
