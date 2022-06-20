import React from "react";
import styled from "styled-components";
import cleaner from "../../assets/cleaner1.jpeg";
import flooring from "../../assets/flooring.jpeg";
import cleanerLady from "../../assets/cleaner2.jpeg";

function DescriptionSection() {
  return (
    <StyledContainer>
      <div className="descriptionSection">
        <div className="imageContainer">
          <div className="columnImages">
            <img src={flooring} alt="" />
            <img src={cleanerLady} alt="" />
          </div>
          <img id="cleanWindow" src={cleaner} alt="" />
        </div>
        <div className="description">
          <h2>About Our Company</h2>
          <p>
            We ensure the best quality clean at the best price based on your
            budget. We do not stop until you are 100% satisfied with the results
            of our services. Worrying about cleaning is at the bottom of your
            priority list, but the top of ours. Our cleaners are trained to help
            provide the best version of your space by focusing on the little
            details..
          </p>
        </div>
      </div>
    </StyledContainer>
  );
}

export default DescriptionSection;
export const StyledContainer = styled.div`
	background-color: #ebf1e9;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		text-align: center;
		color: #1976d2;
	}
	.descriptionSection {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
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
      align-items: center;
      width: 50%;
    }
    #cleanWindow {
      height: 16.5rem;
    }
    p {
      text-align: center;
    }
  }
  @media (max-width: 600px) {
    .descriptionSection {
      display: block;
    }
    .description {
      width: 100% !important;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }
  }
`;
