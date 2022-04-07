import Navbars from "./components/Navbars";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Detail from "./components/Detail";
import Data from "./data";
import { useState } from "react";
import "./App.css";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <Navbars></Navbars>
      <Switch>
        <Route exact path="/">
          <Jumbotron></Jumbotron>
          <Container shoes={shoes}></Container>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때 보이는 페이지</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
