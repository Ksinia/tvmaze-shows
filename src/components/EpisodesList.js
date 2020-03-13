import React from "react";
import { Link } from "react-router-dom";

function EpisodesList(props) {
  return props.show ? (
    <div className="shows">
      <h3>List of episodes</h3>
      <ul>
        {props.show._embedded.episodes.map(episode => {
          const episodeStyle = episode.image && {
            backgroundImage: "url(" + episode.image.original + ")"
          };
          return (
            <li key={episode.id}>
              <Link to={`/episode/${episode.id}`}>
                <div className="episode" style={episodeStyle}></div>
                <div className="show-details">
                  <p>Season {episode.season}</p>
                  <p>Episode {episode.number}</p>
                  <p>{episode.name}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    "Loading..."
  );
}

export default EpisodesList;
