import React, { useEffect } from "react";
import Navmenu from "../NavBar/Navbar";
import axios from "axios";

function AuctionList() {
  useEffect(() => {
    axios
      .get("/api/auction/getAuctions")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Navmenu />
      <h1> This is the auction list page</h1>
    </div>
  );
}

export default AuctionList;
