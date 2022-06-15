import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import MultiActionAreaCard from "./CategoryBox";
import AppContext from "../context/AppContext";
/* import homeDecoration from "../../assets/home-decoration.png";
import repairement from "../../assets/repairement.jpeg";
import lesson from "../../assets/lesson.png";
import webDesign from "../../assets/web-design.jpeg";
import wellness from "../../assets/wellness.jpeg";
import business from "../../assets/business.jpeg"; */

function Categories() {
  const { categories, getCategories, isLoading } = useContext(AppContext);

  useEffect(() => {
    getCategories("/categories");
  }, []);

  return (
    <StyledContainer>
      <h2 style={{ textAlign: "center" }}>Categories</h2>
      <div className="category">
        {isLoading ? (
          <h3>Loading..</h3>
        ) : (
          categories?.map((category) => {
            return (
              <MultiActionAreaCard key={category._id} category={category} />
            );
          })
        )}
      </div>
    </StyledContainer>
  );
}

export default Categories;
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: #f1faee;
  .category {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.4rem;
    align-items: center;
    justify-content: center;
  }
`;
