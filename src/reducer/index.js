import { combineReducers } from "redux";

import { contacts } from "./Contacts";
import { telephone } from "./telephone";


export default combineReducers({
    contacts,
    telephone
})