import { EPISODE_FETCHED, CLEAR_EPISODE } from "../actions";
const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case EPISODE_FETCHED: {
      return action.payload;
    }
    case CLEAR_EPISODE: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
