import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CharacterSheetPage } from "./pages/CharacterSheetPage";
import { theme } from "./config/theme";

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <ThemeProvider theme={theme}>
        <AppWrapper>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/character/:characterId">
              <CharacterSheetPage/>
            </Route>
            <Route path="/new-character">
              <p>teste</p>
            </Route>
            <Route path="/">
              <></>
            </Route>
          </Switch>
        </AppWrapper>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;
