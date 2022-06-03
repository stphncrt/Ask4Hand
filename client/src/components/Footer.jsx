import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
	return (
		<StyledWrapper>
			<StyledLinkContainer>
				<StyledTitle> COMPANY </StyledTitle>
				<StyledLink href="" className="link">
					About us
				</StyledLink>

				<StyledLink href="" className="link">
					Terms
				</StyledLink>

				<StyledLink href="" className="link">
					Help
				</StyledLink>
			</StyledLinkContainer>
			<StyledLinkContainer>
				<StyledTitle> WORK WITH US </StyledTitle>
				<StyledLink href="" className="link">
					Advertise
				</StyledLink>
			</StyledLinkContainer>
			<StyledLinkContainer>
				<StyledTitle> CONNECT </StyledTitle>
				<div className="iconContainer">
					<FacebookIcon />
					<YouTubeIcon />
					<TwitterIcon />
				</div>
			</StyledLinkContainer>
		</StyledWrapper>
	);
}

export default Footer;
export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 5rem;
	padding: 1rem 6rem;
	background-color: #1d3557;
	flex-wrap: wrap;
	.image {
		width: 8rem;
	}
	.iconContainer {
		display: flex;
		flex-direction: row;
		gap: 0.3rem;
	}
`;
export const StyledLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledLink = styled.a`
	text-decoration: none;
	color: #f1faee;
	&:hover {
		text-decoration: underline;
	}
`;
export const StyledTitle = styled.h3`
	color: #a8dadc;
	font-weight: 500;
`;
export const StyledCompanyLink = styled.div`
	margin-left: auto;
	width: 8rem;
`;
