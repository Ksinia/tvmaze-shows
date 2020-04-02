import React from "react";
import { Link } from "react-router-dom";

function Episode(props) {
  // Episode title
  // Episode Summary
  // Episode cover image
  return props.episode ? (
    <div className="episode-page">
      <p>
        <Link to={`/show/${props.episode._embedded.show.id}`}>
          Back to {props.episode._embedded.show.name}
        </Link>
      </p>
      <p>
        Season {props.episode.season}, Episode {props.episode.number}
      </p>
      <h3 className="episode-title">{props.episode.name}</h3>
      <div className="episode-main">
        {props.episode.image && (
          <div className="episode-image">
            <img alt={props.episode.name} src={props.episode.image.original} />
          </div>
        )}
        <div
          className="episode-main-details"
          dangerouslySetInnerHTML={{ __html: props.episode.summary }}
        ></div>
      </div>
    </div>
  ) : (
    "Loading..."
  );
}

export default Episode;
