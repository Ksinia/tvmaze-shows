import React from "react";
import { Link } from "react-router-dom";

function Episode(props) {
  // Episode title
  // Episode Summary
  // Episode cover image
  return props.episode ? (
    <div>
      <Link to={`/show/${props.episode._embedded.show.id}`}>
        Back to {props.episode._embedded.show.name}
      </Link>
      <p>
        Season {props.episode.season}, Episode {props.episode.number}
      </p>
      <p>{props.episode.name}</p>
      <div dangerouslySetInnerHTML={{ __html: props.episode.summary }} />
      <img alt={props.episode.name} src={props.episode.image.medium} />
    </div>
  ) : (
    "Loading..."
  );
}

export default Episode;
