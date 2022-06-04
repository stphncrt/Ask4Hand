import React from "react";
import styled from "styled-components";
import logoTell from "../../assets/hiw1.jpeg";
import logoReview from "../../assets/hiw2.jpeg";
import logoHire from "../../assets/hiw3.jpeg";

function HowItWorks() {
  return (
    <StyledContainer>
      <h2 className="title">How It Works</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum deserunt
        expedita assumenda nulla consectetur porro saepe est, tempora earum ea
        error eos vero distinctio a!
      </p>
      <div className="stepperWrapper">
        <div className="step">
          <img src={logoTell} />
          <h3>Tell us what you need</h3>
          <p>
            Book & pay online. We’ll match you with a trusted, experienced house
            cleaner
          </p>
        </div>
        <div className="step">
          <img src={logoReview} />
          <h3>Review service providers</h3>
          <p>
            Within seconds, you’ll receive expert service providers profile with
            their ratings. choose one among them.
          </p>
        </div>
        <div className="step">
          <img src={logoHire} />
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
  margin: 1rem 0.5rem;
  text-align: center;
  justify-content: center;
  margin-top: 2rem;
  .title {
    margin: 0;
  }
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
      margin: 0;
      text-align: center;
    }
    h3 {
      margin: 0.1rem;
    }
  }

  @media screen and (max-width: 600px) {
    .step {
      width: 100%;
    }
  }
`;
