import React, { useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";
import styled from "styled-components";
import TitleCheckBox from "../../components/TitleCheckBox";

function SearchPage() {
  const { workerList, getWorkerByOccupation, isLoading, occupationIds } =
    useContext(AppContext);

  useEffect(() => {
    getWorkerByOccupation("/search", occupationIds);
  }, []);

  return (
    <StyledWrapper>
      {location.occupationId}
      <TitleCheckBox />
      <div className="container">
        <div className="map">Map</div>
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
  .container {
    display: flex;
    flex-direction: column;
  }
  .map {
    height: 60vh;
    background-color: brown;
    width: 100vh;
  }
`;
