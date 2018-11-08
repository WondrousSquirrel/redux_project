import { ADD_FRIEND } from "../actions/types";

const initialState = {
  id: [1],
  friendsById: {
    1: { id: 1, info: { name: "Alex" } }
  }
};

function friendReducer(state = initialState, { type, payload, id }) {
  switch (type) {
    case ADD_FRIEND: {
      return {
        id: [...state.id, id],
        friendsById: {
          ...state.friendsById,
          [id]: payload
        }
      };
    }
    default:
      return state;
  }
}

export default friendReducer;
