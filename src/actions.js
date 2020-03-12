import superagent from "superagent";

const baseUrl = "https://api.tvmaze.com";

export const SHOW_FETCHED = "SHOW_FETCHED";

export const loadShow = showId => async dispatch => {
  const url = `${baseUrl}/shows/${showId}`;
  try {
    const response = await superagent.get(url);
    console.log("response test:", response);
    const action = {
      type: SHOW_FETCHED,
      payload: response.body
    };
    dispatch(action);
  } catch (error) {
    console.error();
  }
};

export const EPISODES_FETCHED = "EPISODES_FETCHED";

export const loadEpisodes = () => async dispatch => {
  const url = `${baseUrl}/shows/6771/episodes`;
  try {
    const response = await superagent.get(url);
    console.log("response test:", response);
    const action = {
      type: EPISODES_FETCHED,
      payload: response.body
    };
    dispatch(action);
  } catch (error) {
    console.error();
  }
};

export const EPISODE_FETCHED = "EPISODE_FETCHED";
