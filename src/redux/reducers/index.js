import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import postReducer from "./postReducer";

export const reducer = combineReducers({
    data: dataReducer,
    post: postReducer,
    
})