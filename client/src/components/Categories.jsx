import React from "react";
import styled from "styled-components";
import MultiActionAreaCard from "./CategoryBox";
import homeDecoration from "../../assets/home-decoration.png";
import repairement from "../../assets/repairement.jpeg";
import lesson from "../../assets/lesson.png";
import webDesign from "../../assets/web-design.jpeg";
import wellness from "../../assets/wellness.jpeg";
import business from "../../assets/business.jpeg";

function Categories() {
  const top100Films = [
    { name: "Home", url: homeDecoration },
    { name: "Repairement", url: repairement },
    { name: "Lesson", url: lesson },
    { name: "Web-Design", url: webDesign },
    { name: "Wellness", url: wellness },
    { name: "Business", url: business },
  ];
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Categories</h2>
      <StyledContainer>
        {top100Films.map((item) => {
          return (
            <MultiActionAreaCard
              key={item.name}
              category={item.name}
              url={item.url}
            />
          );
        })}
      </StyledContainer>
    </>
  );
}

export default Categories;
export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 30vh;
`;
