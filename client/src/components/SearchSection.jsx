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
	height: 90vh;
	background-image: url(${searchBackgroundImage});
`;
