import React from "react";
import styled from "styled-components";
import BoxComponent from "./CategoryBox";

function Categories() {
  const top100Films = [
    { title: "Electrician" },
    { title: "Painter" },
    { title: "Floor Layer" },
    { title: "Plumber" },
    { title: "Carpenter" },
    { title: "Repairer" },
  ];
  return (
    <>
      <h3>Categories</h3>
      <StyledContainer>
        {top100Films.map((item) => {
          return <BoxComponent key={item.title} category={item.title} />;
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
