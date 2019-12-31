import { GET_PROJECTS, GET_PROJECT} from '../actions/types';

const initialState = {
  trendingProperties: [],
  searchResults: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECT:
      return {
        ...state,
        trendingProperties: state.trendingProperties.concat(action.payload)
      };
      case GET_PROJECTS:
        return {
          ...state,
          searchResults: action.payload
        };
    default:
      return state;
  }
}
