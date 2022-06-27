import React from "react";
import styled from "styled-components";
import searchBackgroundImage from "../../../assets/search-bar-background.jpeg";
import WorkerForm from "../../components/WorkerForm";

const RegisterPage = () => {
	return (
		<>
			<StyledWrapper>
				<WorkerForm />
			</StyledWrapper>
		</>
	);
};

export default RegisterPage;

export const StyledWrapper = styled.div`
	padding: 5rem;
	background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
		url(${searchBackgroundImage});
	background-repeat: no-repeat;
	background-size: cover;
`;
