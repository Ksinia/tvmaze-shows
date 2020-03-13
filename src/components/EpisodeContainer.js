import React, { Component } from "react";
import { connect } from "react-redux";

import { loadEpisode, clearEpisode } from "../actions";
import Episode from "./Episode";

class EpisodeContainer extends Component {
  episodeId = this.props.match.params.episodeId;

  componentDidMount() {
    this.props
      .dispatch(loadEpisode(this.episodeId))
      .then(
        () =>
          (document.title = `s${this.props.episode.season}e${this.props.episode.number} ${this.props.episode._embedded.show.name} | TV Shows Browser`)
      );
  }
  componentWillUnmount() {
    this.props.dispatch(clearEpisode());
  }

  render() {
    return <Episode episode={this.props.episode} />;
  }
}
function mapStateToProps(state) {
  return {
    episode: state.episode
  };
}
export default connect(mapStateToProps)(EpisodeContainer);
