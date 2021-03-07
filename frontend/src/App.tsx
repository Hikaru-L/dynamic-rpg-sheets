import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CharacterCreatorPage } from "./pages/CharacterCreatorPage/CharacterCreatorPage";

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
              <></>
            </Route>
          </Switch>
        </Router>
      </AppWrapper>
      </header>
    </div>
  );
};

export default App;
