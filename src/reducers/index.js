import { combineReducers } from "redux";
import appsReducer from "./apps";
import columnReducer from "./columns";
import dataReducer from "./data";

const rootReducer = combineReducers({
  columns: columnReducer,
  data: dataReducer,
  apps: appsReducer,
});

export default rootReducer;
