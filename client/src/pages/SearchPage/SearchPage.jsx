import React, { useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";
import styled from "styled-components";
import TitleCheckBox from "../../components/TitleCheckBox";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../../components/Map/Map";
import WorkerInfoCard from "../../components/WorkerInfoCard";

const libraries = ["places"];
function SearchPage() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });
  const { workerList, getWorkerByOccupation, isLoading, occupationIds } =
    useContext(AppContext);

  useEffect(() => {
    getWorkerByOccupation("/search", occupationIds);
  }, []);

  return (
    <StyledWrapper>
      <div className="flex-row">
        <TitleCheckBox />
        <div className="map">
          {loadError ? (
            "error"
          ) : !isLoaded ? (
            "loading..."
          ) : (
            <Map workerList={workerList} />
          )}
        </div>
      </div>

      <div className="flex-row">
        {isLoading ? (
          <h3>Loading...</h3>
        ) : workerList?.length === 0 ? (
          <h3>There is no worker that fits your criteria.</h3>
        ) : (
          workerList?.map((worker) => (
            <WorkerInfoCard key={worker._id} worker={worker} />
          ))
        )}
      </div>
    </StyledWrapper>
  );
}

export default SearchPage;
export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  align-items: flex-start;
  gap: 1rem;
  .container {
    display: flex;
    flex-direction: column;
    background-color: red;
    gap: 1rem;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .map {
    height: 480px;
    background-color: #1976d2;
    width: 60vw;
  }
  @media (max-width: 600px) {
    .map {
      width: 70vw;
    }
  }
`;
