const GET_FLATS = 'GET_FLATS';
const LIKE = 'LIKE';
const REMOVE_LIKE = 'REMOVE_LIKE';

const initState = {
  likes: [],
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_FLATS:
      return { ...state, flats: action.payload };
    case LIKE:
      return {
        ...state,
        likes: [...state.likes, action.payload.like],
      };
    case REMOVE_LIKE:
      return {
        ...state,
        likes: [...state.likes].filter(
          (id) => id !== action.payload.like,
        ),
      };
    default:
      return state;
  }
}
