import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>FilmSpot</Title>
      <Link to={"/signin"}>
        <p>Sign in</p>
      </Link>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 100px;
  width: 100vw;
  background: #cfbaf0;
`;

const Title = styled.h2`
  margin-top: 0;
`;
