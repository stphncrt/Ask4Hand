import React from "react";
import styled from "styled-components";
import BoxComponent from "./CategoryBox";

function Categories() {
	const top100Films = [
		{ title: "Electrician", year: 1994 },
		{ title: "Painter", year: 1972 },
		{ title: "Floor Layer", year: 1974 },
		{ title: "Plumber", year: 2008 },
		{ title: "Carpenter", year: 2008 },
		{ title: "Repairer", year: 2008 },
	];
	return (
		<>
			<h3>Categories</h3>
			<StyledContainer>
				{top100Films.map((item) => {
					return <BoxComponent category={item.title} />;
				})}
			</StyledContainer>
		</>
	);
}

export default Categories;
export const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	height: 30vh;
`;
