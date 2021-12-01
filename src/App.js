import React from 'react'
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About"
import Body from './Body';

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Body />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/login">
          <Navbar text={"Login is in development"} />
        </Route>
      </Switch>
    </>
  );
}

export default App;