import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/show">Show</Route>
      </Switch>
    </div>
  );
}

export default App;
