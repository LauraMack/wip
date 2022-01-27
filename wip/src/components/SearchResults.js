import React from "react";
import styled from "styled-components";

const SearchResults = ({ movie, poster }) => {
  return (
    <Wrapper>
      <Poster src={poster} />
      <Title>{movie.Title}</Title>
    </Wrapper>
  );
};
export default SearchResults;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Poster = styled.img`
  height: 250px;
  margin: 10px;
`;

const Title = styled.p`
  color: #faf9f0;
  font-size: 12px;
  width: 160px;
  text-align: center;
  margin-top: 5px;
`;
