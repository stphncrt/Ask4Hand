import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <StyledWrapper>
      <div className="container">
        <h3 className="title"> COMPANY </h3>
        <a href="" className="link">
          About us
        </a>

        <a href="" className="link">
          Terms
        </a>

        <a href="" className="link">
          Help
        </a>
      </div>
      <div className="container">
        <h3 className="title"> WORK WITH US </h3>
        <a href="" className="link">
          Advertise
        </a>
      </div>
      <div className="container">
        <h3 className="title"> CONNECT </h3>
        <div className="iconContainer">
          <FacebookIcon />
          <YouTubeIcon />
          <TwitterIcon />
        </div>
      </div>
    </StyledWrapper>
  );
}

export default Footer;
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 7rem;
  padding: 1rem 6rem;
  background-color: #1d3557;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .image {
    width: 8rem;
  }
  .title {
    color: #a8dadc;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0.4rem;
  }
  .link {
    text-decoration: none;
    text-align: center;
    color: #f1faee;
    &:hover {
      text-decoration: underline;
    }
  }
  .iconContainer {
    display: flex;
    flex-direction: row;
    gap: 0.3rem;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
