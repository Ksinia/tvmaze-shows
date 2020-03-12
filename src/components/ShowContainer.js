import React, { Component } from "react";
import { connect } from "react-redux";
import { loadShow, clearShow } from "../actions";
import Show from "./Show";

class ShowContainer extends Component {
  showId = this.props.match.params.showId;

  componentDidMount() {
    this.props.dispatch(loadShow(this.showId));
  }
  componentWillUnmount() {
    this.props.dispatch(clearShow());
  }

  render() {
    return <Show show={this.props.show} />;
  }
}

function mapStateToProps(state) {
  return { show: state.show };
}

export default connect(mapStateToProps)(ShowContainer);
