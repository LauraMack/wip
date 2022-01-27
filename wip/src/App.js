import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Homepage from "./components/Homepage";
import SearchResults from "./components/SearchResults";
import GlobalStyles from "./components/GlobalStyles";
import Searchbar from "./components/Searchbar";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <Router>
      <Main>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/search/:searchResult">
            <SearchResults />
          </Route>
          <Route exact path="/movie-details/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

export default App;

const Main = styled.div`
  display: flex;
  height: 200vh;
  width: 100vw;
  margin: 0px;
`;
