import React, { Fragment } from "react";
import Navmenu from "../NavBar/Navbar";
import "./Home.css";

function Home() {
  return (
    <Fragment>
      <Navmenu />
      <div className="home">
        <h1> This is the home page1</h1>
      </div>
    </Fragment>
  );
}

export default Home;
