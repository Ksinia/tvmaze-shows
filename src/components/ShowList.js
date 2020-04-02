import React from "react";
import { Link } from "react-router-dom";
import "./ShowList.scss";

function ShowsList(props) {
  return props.shows ? (
    <div className="shows">
      <h3>List of shows:</h3>
      <ul>
        {props.shows.shows.map(show => {
          const showStyle = show.image && {
            backgroundImage: "url(" + show.image.medium + ")"
          };
          return (
            <li key={show.id}>
              <Link to={`/show/${show.id}`}>
                <div className="show" style={showStyle}></div>
                <div className="show-details">
                  <p className="show-name">{show.name}</p>
                </div>
              </Link>
            </li>
          );
        })}
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
