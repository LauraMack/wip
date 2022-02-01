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
  width: 250px;
  height: 300px;
  text-align: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  padding: 5px;
  margin: 5px;
`;

const Poster = styled.img`
  height: 200px;
  margin: 10px;
`;

const Title = styled.p`
  color: #faf9f0;
  font-size: 12px;
  width: 160px;
  text-align: center;
  margin-top: 20px;
`;
