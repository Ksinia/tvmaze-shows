import React from "react";
import { Link } from "react-router-dom";

function EpisodesList(props) {
  return props.show ? (
    <div>
      <p>List of episodes</p>
      <ul>
        {props.show._embedded.episodes.map(episode => (
          <li key={episode.id}>
            <Link to={`/episode/${episode.id}`}>
              <div>
                <p>Season {episode.season}</p>
                <p>Episode {episode.number}</p>
                <p>{episode.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    "Loading..."
  );
}

export default EpisodesList;
