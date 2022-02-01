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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
    setSearch("");
  }, []);

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
        setCurrentPage(pageNumber);
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
    pagesArray.push(
      <PageButton
        key={i}
        onClick={() => {
          handlePageChange(i);
        }}
        disabled={currentPage === i}
      >
        {i}
      </PageButton>
    );
  }

  let shortenedPages = pagesArray.slice(0, 6);

  return (
    <Wrapper>
      <SearchBar
        handleInputSearch={handleInputSearch}
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
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
          <PreviousButton
            onClick={() => {
              handlePageChange(currentPage - 1);
            }}
            disabled={currentPage === 1}
          >
            &#171;
          </PreviousButton>
          <PageButton>{shortenedPages}</PageButton>

          <NextButton
            onClick={() => {
              handlePageChange(currentPage + 1);
            }}
            disabled={currentPage === shortenedPages.length}
          >
            &#187;
          </NextButton>
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
  justify-content: center;
  align-items: center;
`;

const Buttondiv = styled.div`
  margin-top: 100px;
  width: 1200px;
  height: 100px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageButton = styled.button`
  margin: 10px;
  margin-top: 40px;
  font-size: 16px;
  border-style: none;
  background: transparent;
  color: #faf9f0;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
  }
`;

const PreviousButton = styled.button`
  margin-top: 60px;
  font-size: 16px;
  border-style: none;
  background: transparent;
  color: #faf9f0;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
  }
`;

const NextButton = styled.button`
  margin-top: 60px;
  font-size: 16px;
  border-style: none;
  background: transparent;
  color: #faf9f0;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
  }
`;
