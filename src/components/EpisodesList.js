import React from "react";
import { Link } from "react-router-dom";

function EpisodesList(props) {
  return props.show ? (
    <div>
      <h3>List of episodes</h3>
      <ul>
        {props.show._embedded.episodes.map(episode => (
          <Link key={episode.id} to={`/episode/${episode.id}`}>
            <li className="episode-tile">
              {episode.image && (
                <img src={episode.image.medium} alt={episode.name} />
              )}
              <div className="episode-tile-details">
                <p>Season {episode.season}</p>
              </div>
              <div className="episode-tile-details">
                <p>Episode {episode.number}</p>
              </div>
              <div className="episode-tile-details">
                <p className="episode-name">{episode.name}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  ) : (
    "Loading..."
  );
}

export default EpisodesList;
