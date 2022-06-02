import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
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
	height: 100vh;
	background-color: red;
`;
