
import { combineReducers } from 'redux';
import dataReducer from './dataReducer'; 
import cityReducer from './cityReducer'; 
import propertyReducer from './propertyReducer'; 

const rootReducer = combineReducers({
  dataReducer,
  cityReducer,
  propertyReducer,
});

export default rootReducer;
