import React from "react";
import { Link } from "react-router-dom";
import "./ShowList.scss";

function ShowsList(props) {
  return props.shows ? (
    <div>
      <h3>List of shows</h3>
      <ul>
        {props.shows.shows.map(show => (
          <Link key={show.id} to={`/show/${show.id}`}>
            <li className="show-tile">
              {show.image && <img src={show.image.medium} alt={show.name} />}
              <div className="show-tile-details">
                <p className="show-name">{show.name}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <div className="pages">
        {props.shows.page > 1 && (
          <Link to={`/show?page=${props.shows.page - 1}`}>
            <button name="previous">Previous</button>
          </Link>
        )}
        <span>Page {props.shows.page}</span>
        <Link to={`/show?page=${props.shows.page + 1}`}>
          <button name="next">Next</button>
        </Link>
      </div>
    </div>
  ) : (
    "Loading..."
  );
}

export default ShowsList;
