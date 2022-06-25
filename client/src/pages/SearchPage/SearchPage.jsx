import React, { useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";
import styled from "styled-components";
import TitleCheckBox from "../../components/TitleCheckBox";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../../components/Map/Map";
import WorkerInfoCard from "../../components/WorkerInfoCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Grid, Typography } from "@mui/material";

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
    <Box sx={{ flexGrow: 1, padding: "30px" }}>
      <Grid container spacing={4}>
        <Grid item sm={12} md={3} lg={3}>
          <TitleCheckBox />
        </Grid>
        <Grid item sm={12} md={9} lg={9}>
          {loadError ? (
            "error"
          ) : !isLoaded ? (
            "loading..."
          ) : (
            <Map workerList={workerList} />
          )}
        </Grid>

        {isLoading ? (
          <Typography variant="h4">Loading...</Typography>
        ) : currentWorkers?.length === 0 ? (
          <Typography variant="h4" sx={{ margin: "3rem auto" }}>
            There is no worker that fits your criteria.
          </Typography>
        ) : (
          currentWorkers?.map((worker) => (
            <Grid item spacing={2} sm={12} md={6} lg={4} key={worker._id}>
              <WorkerInfoCard worker={worker} titles={titles} />
            </Grid>
          ))
        )}
        {workerList?.length > 0 && (
          <Grid item xs={12} md={12}>
            <Stack spacing={2}>
              <Pagination
                sx={{ margin: "0 auto" }}
                count={Math.ceil(workerList?.length / workersPerPage)}
                currentPage={currentPage}
                onChange={handleChange}
              />
            </Stack>
          </Grid>
        )}
      </Grid>
    </Box>
    // <StyledWrapper>
    //   <div className="flex-row first-section">
    //     <TitleCheckBox />
    //     <div className="map">
    //       {loadError ? (
    //         "error"
    //       ) : !isLoaded ? (
    //         "loading..."
    //       ) : (
    //         <Map workerList={workerList} />
    //       )}
    //     </div>
    //   </div>

    //   <div className="flex-row cards">
    //     {isLoading ? (
    //       <h3>Loading...</h3>
    //     ) : currentWorkers?.length === 0 ? (
    //       <h3>There is no worker that fits your criteria.</h3>
    //     ) : (
    //       currentWorkers?.map((worker) => (
    //         <WorkerInfoCard key={worker._id} worker={worker} titles={titles} />
    //       ))
    //     )}
    //   </div>
    //   {workerList?.length > 0 && (
    //     <Box className="pagination">
    //       <Stack spacing={2}>
    //         <Pagination
    //           count={Math.ceil(workerList?.length / workersPerPage)}
    //           currentPage={currentPage}
    //           onChange={handleChange}
    //         />
    //       </Stack>
    //     </Box>
    //   )}
    // </StyledWrapper>
  );
}

export default SearchPage;
// export const StyledWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   padding: 3rem;
//   align-items: flex-start;
//   gap: 1rem;

//   .container {
//     display: flex;
//     flex-direction: column;
//     background-color: red;
//     gap: 1rem;
//   }
//   .first-section {
//     height: 70vh;
//   }
//   .flex-row {
//     display: flex;
//     gap: 1rem;
//     flex-wrap: wrap;
//     min-width: 95vw;
//   }
//   .cards {
//     justify-content: space-around;
//   }
//   .map {
//     height: 70vh;
//     background-color: #1976d2;
//     width: 78%;
//   }
//   .pagination {
//     display: flex;
//     justify-content: center;
//     width: 100%;
//     margin: 2rem 0;
//   }
//   @media (max-width: 600px) {
//     .map {
//       width: 70vw;
//     }
//   }
// `;
