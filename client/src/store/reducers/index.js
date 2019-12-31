import { combineReducers } from 'redux';
import propertyReducer from './property.reducers';
import projectReducer from './project.reducers';

export default combineReducers({
  properties: propertyReducer,
  projects: projectReducer
});
