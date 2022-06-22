import React, { useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";
import styled from "styled-components";
import TitleCheckBox from "../../components/TitleCheckBox";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../../components/Map/Map";
import WorkerInfoCard from "../../components/WorkerInfoCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const libraries = ["places"];
function SearchPage() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });
  const { workerList, isLoading, getTitles, getWorkers, titles } =
    useContext(AppContext);

  const [currentPage, setCurrentPage] = React.useState(1);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getTitles("/occupations");
    getWorkers("/filter");
  }, []);

  const workersPerPage = 3;
  const indexOfLastWorker = currentPage * workersPerPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
  const currentWorkers = workerList?.slice(
    indexOfFirstWorker,
    indexOfLastWorker
  );

  return (
    <StyledWrapper>
      <div className="flex-row first-section">
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

      <div className="flex-row cards">
        {isLoading ? (
          <h3>Loading...</h3>
        ) : currentWorkers?.length === 0 ? (
          <h3>There is no worker that fits your criteria.</h3>
        ) : (
          currentWorkers?.map((worker) => (
            <WorkerInfoCard key={worker._id} worker={worker} titles={titles} />
          ))
        )}
      </div>
      {workerList?.length > 0 && (
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(workerList?.length / workersPerPage)}
            currentPage={currentPage}
            onChange={handleChange}
          />
        </Stack>
      )}
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
  .first-section {
    height: 70vh;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
    min-width: 95vw;
  }
  .cards {
    justify-content: space-around;
  }
  .map {
    height: 70vh;
    background-color: #1976d2;
    width: 68%;
  }
  .pagination {
    justify-content: center;
  }
  @media (max-width: 600px) {
    .map {
      width: 70vw;
    }
  }
`;
