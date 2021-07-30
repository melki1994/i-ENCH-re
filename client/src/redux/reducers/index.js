import { combineReducers } from "redux";
import auctionReducer from "./auctionReducer";

const rootReducer = combineReducers({ auctionReducer });

export default rootReducer;
