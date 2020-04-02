import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import ShowContainer from "./components/ShowContainer";
import ShowListContainer from "./components/ShowListContainer";
import EpisodeContainer from "./components/EpisodeContainer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/show/:showId" component={ShowContainer} />
        <Route path="/episode/:episodeId" component={EpisodeContainer} />
        <Route path="/" component={ShowListContainer} />
      </Switch>
    </div>
  );
}

export default App;
