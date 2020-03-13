import { combineReducers } from "redux";
import show from "./show";
import shows from "./shows";
import episode from "./episode";

export default combineReducers({
  shows,
  show,
  episode
});
