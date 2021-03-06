import React, { useState } from "react";
import styled from "styled-components";

const Searchbar = ({ handleInputSearch, handleSearch, search, setSearch }) => {
  return (
    <Wrapper>
      <Input
        onChange={handleInputSearch}
        onKeyPress={handleSearch}
        placeholder="Search for a flick"
        type="text"
        value={search}
      ></Input>
    </Wrapper>
  );
};

export default Searchbar;

const Wrapper = styled.div`
  margin-top: 50px;
`;

const Input = styled.input`
  display: block;
  width: 600px;
  padding: 15px;
  border: none;
  outline: none;
  background: none;
  background-color: #faf9f0;
  border-radius: 8px;
  color: #3d348b;
  font-size: 20px;
  font-weight: 300;
  transition: 0.4s ease-out;
  &:focus {
    box-shadow: 0px 0px 8px 3px #80b918;
  }
  text-align: center;
`;
