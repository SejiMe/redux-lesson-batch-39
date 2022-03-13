import { combineReducers } from "redux";

import auth from "./auth";
import cms from "./cms";

const rootReducer = combineReducers({ auth, cms });

export default rootReducer;
