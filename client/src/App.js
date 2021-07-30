import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/Signin";
import SignUp from "./Components/SignUp/SignUp";
import Hotel from "./Components/HotelList/Hotel";
// import Restaurant from "./Components/RestaurantList/Restaurant";
// import Shopping from "./Components/Shopping/Shopping";
// import Detail from "./Components/DetailPage/Detail";

// import Navmenu from "./Components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/Connexion" render={() => <SignIn />} />
          <Route path="/Inscription" render={() => <SignUp />} />
          <Route path="/Hôtels-et-séjours" render={() => <Hotel />} />
          {/* <Route
            path="/Restaurants-et-Évènements"
            render={() => <Restaurant />}
          />
          <Route path="/Maison-et-shopping" render={() => <Shopping />} />
          <Route path="/Detail/:id" render={() => <Detail />} />
          <Route path="/Detail/:id" render={() => <Detail />} />
          <Route path="/Detail/:id" render={() => <Detail />} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;