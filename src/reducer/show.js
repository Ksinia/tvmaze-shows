import { SHOW_FETCHED, CLEAR_SHOW } from "../actions";
const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_FETCHED: {
      return action.payload;
    }
    case CLEAR_SHOW: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
