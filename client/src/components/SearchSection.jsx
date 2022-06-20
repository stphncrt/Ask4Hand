import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import searchBackgroundImage from "../../assets/search-bar-background.jpeg";
const SearchSection = () => {
  return (
    <StyledContainer>
      <SearchBar />
    </StyledContainer>
  );
};

export default SearchSection;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${searchBackgroundImage});
  background-repeat: no-repeat;
`;
