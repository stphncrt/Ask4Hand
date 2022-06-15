import React from "react";
import styled from "styled-components";
import TitleCheckBox from "../../components/TitleCheckBox";

function SearchPage() {
	return (
		<StyledWrapper>
			<TitleCheckBox />
			<div></div>
		</StyledWrapper>
	);
}

export default SearchPage;
export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 3rem;
`;
