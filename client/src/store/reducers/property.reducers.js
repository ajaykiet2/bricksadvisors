import { GET_PROPERTIES, SEARCH_PROPERTIES } from '../actions/types';

const initialState = {
  trendingProperties: [],
  searchResults: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROPERTIES:
      return {
        ...state,
        trendingProperties: state.trendingProperties.concat(action.payload)
      };
      case SEARCH_PROPERTIES:
        return {
          ...state,
          searchResults: action.payload
        };
    default:
      return state;
  }
}
