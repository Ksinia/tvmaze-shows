import { SHOWS_FETCHED } from "../actions";
const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOWS_FETCHED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
