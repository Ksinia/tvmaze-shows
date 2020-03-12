import React from "react";

function Episode(props) {
  // Episode title
  // Episode Summary
  // Episode cover image
  return props.episode ? (
    <div>
      <p>{props.episode.name}</p>
      <div dangerouslySetInnerHTML={{ __html: props.episode.summary }} />
      <img alt={props.episode.name} src={props.episode.image.medium} />
    </div>
  ) : (
    "Loading..."
  );
}

export default Episode;
