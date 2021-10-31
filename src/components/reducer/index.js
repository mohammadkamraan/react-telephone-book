import { combineReducers } from "redux";

import { Audience } from "./Audience";
import { telephone } from "./phoneNums";
import { Id } from "./ID";

export default combineReducers({
    Audience,
    telephone,
    Id
})