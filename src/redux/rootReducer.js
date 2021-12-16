import { combineReducers } from "redux";

import memberreducer from "./Memberreducer/memberreducer";
import loginreducer from "./Loginreducer/loginreducer";

const rootReducer = combineReducers({
  login: loginreducer,
  member: memberreducer,
});

export default rootReducer;
