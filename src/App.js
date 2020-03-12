import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import ShowContainer from "./components/ShowContainer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/show/:showId" component={ShowContainer} />
      </Switch>
    </div>
  );
}

export default App;
