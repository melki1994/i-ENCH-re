import { GET_CONTACTS } from "../constants/auctions-types";
import axios from "axios";

export const getAuctions = () => (dispatch) => {
  axios
    .get("/api/getAuctions")
    .then((response) =>
      dispatch({ type: GET_CONTACTS, payload: response.data })
    )
    .catch((err) => console.log(err));
};
