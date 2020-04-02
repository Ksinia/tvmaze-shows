import React from "react";
import { Link } from "react-router-dom";

import EpisodesListContainer from "./EpisodesListContainer";
import "./Show.scss";

function Show(props) {
  // Show title
  // Show Description
  // Show cover image
  // Episode list. Every episode in the list should link to a details page
  // for that specific episode
  return props.show ? (
    <div className="show-page">
      <p>
        <Link to={"/"}>Back to all shows</Link>
      </p>
      <h3 className="show-title">{props.show.name}</h3>
      <div className="show-main">
        {props.show.image && (
          <div className="show-image">
            <img alt={props.show.name} src={props.show.image.original} />
          </div>
        )}
        <div
          className="show-main-details"
          dangerouslySetInnerHTML={{ __html: props.show.summary }}
        >
          {/* summary is provided from API as HTML */}
        </div>
      </div>
      <EpisodesListContainer />
    </div>
  ) : (
    "Loading..."
  );
}

export default Show;
