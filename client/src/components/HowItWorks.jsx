import React from "react";
import styled from "styled-components";
import Stepper from "./Carousel";

function HowItWorks() {
	return (
		<StyledContainer>
			<div>How It Works</div>
			<div className="stepperWrapper">
				<Stepper />
				{/* <Stepper /> */}
			</div>
		</StyledContainer>
	);
}

export default HowItWorks;
export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 3rem;
	.stepperWrapper {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
`;
