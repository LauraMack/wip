import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./Searchbar";
import SearchResults from "./SearchResults";

const Homepage = () => {
  const key = process.env.REACT_APP_CLIENT_ID;
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleInputSearch = (ev) => {
    setSearch(ev.target.value);
  };

  const handleSearch = (ev) => {
    if (ev.key === "Enter") {
      fetch(`http://www.omdbapi.com/?s=${search}&apikey=${key}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchResult(data.Search);
        });
    }
  };

  console.log(searchResult);
  return (
    <Wrapper>
      <Title>Homepage</Title>
      <SearchBar
        handleInputSearch={handleInputSearch}
        handleSearch={handleSearch}
      />
      <Div>
        {searchResult &&
          searchResult.map((movie) => {
            const poster = movie.Poster;
            return (
              <Link to={`/movie-details/${movie.imdbID}`}>
                <SearchResults
                  key={movie.imdbID}
                  movie={movie}
                  poster={poster}
                />
              </Link>
            );
          })}
      </Div>
    </Wrapper>
  );
};

export default Homepage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  color: #faf9f0;
`;

const Div = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  flex-flow: row wrap;
`;
