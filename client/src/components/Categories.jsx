import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import MultiActionAreaCard from "./CategoryBox";
import AppContext from "../context/AppContext";

function Categories() {
	const { categories, getCategories, isLoading } = useContext(AppContext);

	useEffect(() => {
		getCategories("/categories");
	}, []);

	return (
		<StyledContainer>
			<h2>Categories</h2>
			<div className="category">
				{isLoading ? (
					<h3>Loading..</h3>
				) : (
					categories?.map((category) => {
						return <MultiActionAreaCard key={category._id} category={category} />;
					})
				)}
			</div>
		</StyledContainer>
	);
}

export default Categories;
export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.5rem 0rem;
	background-color: #f1faee;
	height: 60vh;

	.category {
		display: flex;
		flex-direction: row;
		gap: 1.4rem;
		align-items: center;
		justify-content: center;
	}
	h2 {
		text-align: center;
		color: #1976d2;
	}
	@media (max-width: 600px) {
		height: auto;
		.category {
			flex-wrap: wrap;
		}
	}
`;
