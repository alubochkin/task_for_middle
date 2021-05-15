const GET_FLATS = "GET_FLATS";
const LIKE = "LIKE";
const REMOVE_LIKE = "REMOVE_LIKE";

export const getFlatsAc = (flats) => ({ type: GET_FLATS, payload: flats  });
export const addLikeAc = (like) => ({ type: LIKE, payload: { like } });
export const removeLikeAc = (like) => ({ type: REMOVE_LIKE, payload: { like } });