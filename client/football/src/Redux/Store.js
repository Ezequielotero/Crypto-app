import { applyMiddleware, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from "./Reducer";
import { save, load, clear } from "redux-localstorage-simple"

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(save(),logger,thunk))
);


export default store