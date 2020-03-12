import React from "react";

function Show(props) {
  // Show title
  // Show Description
  // Show cover image
  // Episode list. Every episode in the list should link to a details page
  // for that specific episode
  return props.show ? (
    <div>
      <p>{props.show.name}</p>
      <div dangerouslySetInnerHTML={{ __html: props.show.summary }}></div>
      <img alt="show" src={props.show.image.medium} />
    </div>
  ) : (
    "Loading..."
  );
}

export default Show;
