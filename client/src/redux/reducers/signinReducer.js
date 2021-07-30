import { CLOSE_MODAL } from "../constants/action-types";
import { OPEN_MODAL } from "../constants/action-types";

const initialState = {
  show: false,
};

const signinReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        show: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};
export default signinReducer;
