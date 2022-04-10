import Navbars from "./components/Navbars";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Data from "./data";

import React, { useState } from "react";

import "./App.css";

import { Link, Route, Switch } from "react-router-dom";

export let 재고context = React.createContext();

function App() {
  let [shoes, setShoes] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbars></Navbars>
      <Switch>
        <Route exact path="/">
          <Jumbotron></Jumbotron>
          <재고context.Provider value={재고}>
            <Container shoes={shoes}></Container>
          </재고context.Provider>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때 보이는 페이지</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
