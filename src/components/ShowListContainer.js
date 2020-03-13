import React, { Component } from "react";
import { connect } from "react-redux";
import ShowList from "./ShowList";
import { loadShows } from "../actions";
import queryString from "query-string";

class ShowListContainer extends Component {
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    const page = "page" in values && values.page ? parseInt(values.page) : 1;
    this.props.dispatch(loadShows(page));
  }

  render() {
    const values = queryString.parse(this.props.location.search);
    const page = "page" in values && values.page ? parseInt(values.page) : 1;
    if (this.props.shows && page !== this.props.shows.page) {
      this.props.dispatch(loadShows(page));
    }
    return (
      <div>
        <ShowList shows={this.props.shows} history={this.props.history} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { shows: state.shows };
}
export default connect(mapStateToProps)(ShowListContainer);
