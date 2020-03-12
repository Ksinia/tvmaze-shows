import React, { Component } from "react";
import { connect } from "react-redux";
import EpisodesList from "./EpisodesList";

class EpisodesListContainer extends Component {
  render() {
    return <EpisodesList show={this.props.show} />;
  }
}
function mapStateToProps(state) {
  return { show: state.show };
}
export default connect(mapStateToProps)(EpisodesListContainer);
