import React from "react";
import styled from "styled-components";

function DescriptionSection() {
	return (
		<StyledContainer>
			<div>photo</div>
			<div className="description">
				<h4>Title</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequatur delectus accusamus
					maxime earum consectetur veniam.
				</p>
			</div>
		</StyledContainer>
	);
}

export default DescriptionSection;
export const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	height: 40vh;
	background-color: #ea8b37;
	.description {
		display: flex;
		flex-direction: column;
		width: 50%;
		border: 1px solid red;
	}
`;
