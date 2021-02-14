import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CharacterSheetPage } from "./pages/CharacterSheetPage";
import { theme } from "./config/theme";

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: black;
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
              <CharacterSheetPage />
            </Route>
            <Route path="/new-character">
              <p>teste</p>
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
