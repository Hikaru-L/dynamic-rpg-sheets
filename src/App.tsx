import React from "react";
import styled from "styled-components";
//TODO change hashrouter for browserrouter and find a way to deploy spa on gh-pages
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CharacterCreatorPage } from "./pages/CharacterCreatorPage/CharacterCreatorPage";
import { HomePage } from "./pages/HomePage/HomePage";

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
      <AppWrapper>
        <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/character/:characterId">
              <CharacterCreatorPage />
            </Route>
            <Route path="/create-character">
            <CharacterCreatorPage />
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </Router>
      </AppWrapper>
      </header>
    </div>
  );
};

export default App;
