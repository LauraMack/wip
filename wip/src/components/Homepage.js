import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./Searchbar";
import SearchResults from "./SearchResults";

const Homepage = () => {
  const key = process.env.REACT_APP_CLIENT_ID;
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [numOfPages, setNumOfPages] = useState([]);

  const handleInputSearch = (ev) => {
    setSearch(ev.target.value);
  };

  const handlePageChange = (pageNumber) => {
    fetch(
      `http://www.omdbapi.com/?s=${search}&apikey=${key}&type=movie&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(movies);
        setMovies(data.Search);
        setTotalResults(data.totalResults);
      });
  };

  const handleSearch = (ev) => {
    if (ev.key === "Enter") {
      fetch(`http://www.omdbapi.com/?s=${search}&apikey=${key}&type=movie`)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.Search);
          setTotalResults(data.totalResults);
        });
    }
  };

  let numberOfPages = Math.ceil(totalResults / 10);
  const pagesArray = [];
  for (let i = 1; i <= numberOfPages; i++) {
    let active = currentPage === i ? "active" : "";
    pagesArray.push(
      <PageButton
        key={i}
        onClick={() => {
          handlePageChange(i);
        }}
      >
        {i}
      </PageButton>
    );
  }

  const handleMorePages = () => {
    if (totalResults !== 0) {
      let currentPages = numOfPages.length;
      let newPagesNumber = currentPages + 3;
      let morePages = pagesArray.slice(0, newPagesNumber);
    }
  };

  return (
    <Wrapper>
      <Title>Homepage</Title>
      <SearchBar
        handleInputSearch={handleInputSearch}
        handleSearch={handleSearch}
      />
      <Div>
        {movies &&
          movies.map((movie) => {
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
      {movies && totalResults > 10 ? (
        <Buttondiv>
          <PageButton>{pagesArray}</PageButton>
        </Buttondiv>
      ) : (
        ""
      )}
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

const Buttondiv = styled.div`
  margin-top: 100px;
  width: 1000px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageButton = styled.button`
  margin: 10px;
  margin-top: 40px;
  border-style: none;
  background: transparent;
  color: #faf9f0;
  cursor: pointer;
`;
