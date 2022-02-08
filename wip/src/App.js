import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Homepage from "./components/Homepage";
import SearchResults from "./components/SearchResults";
import GlobalStyles from "./components/GlobalStyles";
import MovieDetails from "./components/MovieDetails";
import Signin from "./components/Signin";
import backgroundImage from "./assets/background-image9.png";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <GlobalStyles />
      <Main>
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
          <Route exact path="/signin">
            <Signin />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

export default App;

const Main = styled.div`
  display: flex;
  height: 170vh;
  width: 100vw;
  margin: 0px;
  background-image: url(${backgroundImage});
  background-size: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
