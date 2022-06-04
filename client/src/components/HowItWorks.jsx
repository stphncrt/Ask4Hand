import React from "react";
import styled from "styled-components";
import logoTell from "../../assets/hiw1.jpeg";
import logoReview from "../../assets/hiw2.jpeg";
import logoHire from "../../assets/hiw3.jpeg";

function HowItWorks() {
  return (
    <StyledContainer>
      <h2 className="title">How It Works</h2>
      <div className="stepperWrapper">
        <div className="step">
          <div className="imgContainer">
            <img src={logoTell} />
          </div>
          <h3>Tell us what you need</h3>
          <p>
            Book & pay online. We’ll match you with a trusted, experienced house
            cleaner
          </p>
        </div>
        <div className="step">
          <div className="imgContainer">
            <img src={logoReview} />
          </div>
          <h3>Review service providers</h3>
          <p>
            Within seconds, you’ll receive expert service providers profile with
            their ratings. choose one among them.
          </p>
        </div>
        <div className="step">
          <div className="imgContainer">
            <img src={logoHire} />
          </div>
          <h3>Hire the right pro</h3>
          <p>
            Compare prices, profiles, and reviews, then hire the pro that’s
            right for you.
          </p>
        </div>
      </div>
    </StyledContainer>
  );
}

export default HowItWorks;
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0.5rem;
  text-align: center;
  justify-content: center;
  background-color:#f1faee;

  .stepperWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 1rem;
  }
  .step {
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
    }
   
    .imgContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 110px;
      height: 110px;
      border-radius: 50%;
      background-color: #fff;
      -webkit-box-shadow: 2px 3px 30px rgb(188 207 219 / 65%);
      -moz-box-shadow: 2px 3px 30px rgba(188, 207, 219, 0.65);
      box-shadow: 2px 3px 30px rgb(188 207 219 / 65%);
      line-height: 110px;
    }
  }

  @media screen and (max-width: 600px) {
    .step {
      width: 100%;
    }
  }
`;
