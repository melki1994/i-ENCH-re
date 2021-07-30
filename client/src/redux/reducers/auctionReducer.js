import { GET_CONTACTS } from "../constants/auctions-types";

const initialState = {
  auctions: [],
};

const auctionReducer = (state = initialState, action) => {
  // eslint-disable-next-line
  const { type, payload } = action;
  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        auctions: payload.data,
      };
    default:
      return state;
  }
};

export default auctionReducer;
