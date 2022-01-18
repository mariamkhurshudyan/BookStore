import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import planetReducer from "./ducks/planets";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(planetReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store;