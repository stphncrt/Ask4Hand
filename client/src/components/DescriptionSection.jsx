import React from "react";
import styled from "styled-components";
import cleaner from "../../assets/cleaner1.jpeg";
import flooring from "../../assets/flooring.jpeg";
import cleanerLady from "../../assets/cleaner2.jpeg";

function DescriptionSection() {
	return (
		<StyledContainer>
			<h2>Description</h2>
			<div className="descriptionSection">
				<div className="imageContainer">
					<div className="columnImages">
						<img src={flooring} alt="" />
						<img src={cleanerLady} alt="" />
					</div>
					<img id="cleanWindow" src={cleaner} alt="" />
				</div>
				<div className="description">
					<h4>Title</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequatur delectus
						accusamus maxime earum consectetur veniam.
					</p>
				</div>
			</div>
		</StyledContainer>
	);
}

export default DescriptionSection;
export const StyledContainer = styled.div`
	h2 {
		color: #457b9d;
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	.descriptionSection {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		height: auto;
		margin: 0 0.5rem;

		.imageContainer {
			display: flex;
			flex-direction: row;
			gap: 0.5rem;

			.columnImages {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				img {
					width: 10rem;
					height: 8rem;
				}
			}
		}
		.description {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 50%;
		}
		#cleanWindow {
			height: 16.5rem;
		}
	}
`;
