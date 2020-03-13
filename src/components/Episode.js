import React from "react";
import { Link } from "react-router-dom";

function Episode(props) {
  // Episode title
  // Episode Summary
  // Episode cover image
  return props.episode ? (
    <div className="show-page">
      <Link to={`/show/${props.episode._embedded.show.id}`}>
        Back to {props.episode._embedded.show.name}
      </Link>
      <p>
        Season {props.episode.season}, Episode {props.episode.number}
      </p>
      <h3 className="show-name">{props.episode.name}</h3>
      <div className="show-main">
        <div className="show-image">
          {props.episode.image && (
            <img
              alt={props.episode.name}
              src={props.episode.image && props.episode.image.original}
            />
          )}
        </div>
        <div className="show-main-details">
          <div dangerouslySetInnerHTML={{ __html: props.episode.summary }} />
        </div>
      </div>
    </div>
  ) : (
    "Loading..."
  );
}

export default Episode;
