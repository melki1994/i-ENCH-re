import React, { useEffect, Fragment } from "react";
import Navmenu from "../NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAuctions } from "../../redux/actions/auctionsAction";
import AuctionCard from "../AuctionCard/AuctionCard";

function Hotel({ auction }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuctions());
    // eslint-disable-next-line
  }, []);

  const auctions = useSelector((state) => state.auctionReducer.auctions);
  console.log(auctions);
  return (
    <Fragment>
      <Navmenu />
      <div className="home">
        <h1> This is the home page1</h1>
        <div className="auctionsArea">
          {auctions.map((auction) => (
            <AuctionCard key={auction._id} auction={auction} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Hotel;
