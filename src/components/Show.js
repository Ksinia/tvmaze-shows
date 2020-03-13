import React from "react";
import { Link } from "react-router-dom";

import EpisodesListContainer from "./EpisodesListContainer";

function Show(props) {
  // Show title
  // Show Description
  // Show cover image
  // Episode list. Every episode in the list should link to a details page
  // for that specific episode
  return props.show ? (
    <div className="show-page">
      <Link to={"/"}>Back to all shows</Link>
      <h3 className="show-name">{props.show.name}</h3>
      <div className="show-main">
        <div className="show-image">
          {props.show.image && (
            <img
              alt={props.show.name}
              src={props.show.image && props.show.image.original}
            />
          )}
        </div>
        <div className="show-main-details">
          <div dangerouslySetInnerHTML={{ __html: props.show.summary }} />
        </div>
      </div>
      <EpisodesListContainer />
    </div>
  ) : (
    "Loading..."
  );
}

export default Show;
