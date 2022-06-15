import React, { useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import TitleCheckBox from "../../components/TitleCheckBox";

function SearchPage() {
  const location = useLocation().state;
  const { workerList, getWorkerByTitle, getWorkerByCategory, isLoading } =
    useContext(AppContext);

  useEffect(() => {
    if (location.categoryId) {
      getWorkerByCategory(`/find/${location.categoryId}`);
    }
    if (location.occupationId) {
      getWorkerByTitle(`/search/${location.occupationId}`);
    }
  }, []);

  return (
    <StyledWrapper>
      <TitleCheckBox
        occupationId={location.occupationId}
        categoryId={location.categoryId}
      />
      <div>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          workerList?.map((worker) => (
            <p key={worker._id}>{worker.firstName}</p>
          ))
        )}
      </div>
    </StyledWrapper>
  );
}

export default SearchPage;
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem;
`;
