import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import ShowContainer from "./components/ShowContainer";
import EpisodeContainer from "./components/EpisodeContainer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/show/:showId" component={ShowContainer} />
        <Route path="/episode/:episodeId" component={EpisodeContainer} />
      </Switch>
    </div>
  );
}

export default App;
