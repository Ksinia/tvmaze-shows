import superagent from "superagent";

const baseUrl = "https://api.tvmaze.com";

export const SHOW_FETCHED = "SHOW_FETCHED";

export const loadShow = showId => async dispatch => {
  const url = `${baseUrl}/shows/${showId}?embed=episodes`;
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

export const CLEAR_SHOW = "CLEAR_SHOW";

export const clearShow = () => {
  return { type: CLEAR_SHOW };
};

export const EPISODE_FETCHED = "EPISODE_FETCHED";

export const loadEpisode = episodeId => async dispatch => {
  const url = `${baseUrl}/episodes/${episodeId}?embed=show`;
  try {
    const response = await superagent.get(url);
    console.log("response test:", response);
    const action = {
      type: EPISODE_FETCHED,
      payload: response.body
    };
    dispatch(action);
  } catch (error) {
    console.error();
  }
};

export const CLEAR_EPISODE = "CLEAR_EPISODE";

export const clearEpisode = () => {
  return { type: CLEAR_EPISODE };
};
